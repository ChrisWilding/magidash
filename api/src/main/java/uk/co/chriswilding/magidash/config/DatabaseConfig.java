package uk.co.chriswilding.magidash.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Configuration
@Profile("heroku")
public class DatabaseConfig {

    @Bean
    private static Connection getConnection() throws URISyntaxException, SQLException {
        URI databaseUri = new URI(System.getenv("JAWSDB_URL"));

        String username = databaseUri.getUserInfo().split(":")[0];
        String password = databaseUri.getUserInfo().split(":")[1];
        String port = String.valueOf(databaseUri.getPort());
        String jdbUrl = "jdbc:mysql://" + databaseUri.getHost() + ":" + port + databaseUri.getPath();

        return DriverManager.getConnection(jdbUrl, username, password);
    }
}
