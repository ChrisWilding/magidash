package uk.co.chriswilding.magidash.config;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class DatabaseProperties {
    String username;
    String password;
    String jdbcUrl;
    String schema;
}
