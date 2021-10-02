package uk.co.chriswilding.magidash.dto;

import lombok.Builder;
import lombok.Value;

import java.time.LocalDate;

@Builder
@Value
public class Dashboard {
    Long id;
    LocalDate createdAt;
    LocalDate updatedAt;
    String title;
}
