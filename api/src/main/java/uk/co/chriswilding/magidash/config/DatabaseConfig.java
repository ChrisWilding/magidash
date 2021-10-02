package uk.co.chriswilding.magidash.config;

import org.springframework.boot.autoconfigure.flyway.FlywayConfigurationCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

@Configuration
@Profile("heroku")
public class DatabaseConfig {

    private static List<String> getJdbcUrlUsernameAndPassword() throws URISyntaxException {
        URI databaseUri = new URI(System.getenv("JAWSDB_URL"));

        String username = databaseUri.getUserInfo().split(":")[0];
        String password = databaseUri.getUserInfo().split(":")[1];
        String port = String.valueOf(databaseUri.getPort());
        String jdbcUrl = "jdbc:mysql://" + databaseUri.getHost() + ":" + port + databaseUri.getPath();

        return List.of(jdbcUrl, username, password);
    }

    @Bean
    private static Connection getConnection() throws URISyntaxException, SQLException {
        var properties = getJdbcUrlUsernameAndPassword();
        return DriverManager.getConnection(properties.get(0), properties.get(1), properties.get(2));
    }

    @Bean
    private static FlywayConfigurationCustomizer getFlywayConfigurationCustomizer() throws URISyntaxException {
        var properties = getJdbcUrlUsernameAndPassword();
        return configuration -> configuration.dataSource(properties.get(0), properties.get(1), properties.get(2));
    }
}
