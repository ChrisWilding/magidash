package uk.co.chriswilding.magidash.config;

import org.springframework.boot.autoconfigure.flyway.FlywayConfigurationCustomizer;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;
import java.net.URI;
import java.net.URISyntaxException;

@Configuration
@Profile("heroku")
public class DatabaseConfig {
    private static DatabaseProperties getJdbcUrlUsernameAndPassword() throws URISyntaxException {
        URI databaseUri = new URI(System.getenv("JAWSDB_URL"));

        String username = databaseUri.getUserInfo().split(":")[0];
        String password = databaseUri.getUserInfo().split(":")[1];
        String port = String.valueOf(databaseUri.getPort());
        String schema = databaseUri.getPath().split("/")[1];
        String jdbcUrl = "jdbc:mysql://" + databaseUri.getHost() + ":" + port + databaseUri.getPath();

        return DatabaseProperties.builder()
            .username(username)
            .password(password)
            .jdbcUrl(jdbcUrl)
            .schema(schema)
            .build();
    }

    @Bean
    public DataSource dataSource() throws URISyntaxException {
        var properties = getJdbcUrlUsernameAndPassword();
        return DataSourceBuilder.create()
            .driverClassName("com.mysql.cj.jdbc.Driver")
            .url(properties.getJdbcUrl())
            .username(properties.getUsername())
            .password(properties.getPassword())
            .build();
    }

    @Bean
    private static FlywayConfigurationCustomizer getFlywayConfigurationCustomizer() throws URISyntaxException {
        var properties = getJdbcUrlUsernameAndPassword();
        return configuration -> {
            configuration
                .dataSource(properties.getJdbcUrl(), properties.getUsername(), properties.getPassword())
                .schemas(properties.getSchema())
                .defaultSchema(properties.getSchema());
        };
    }
}
