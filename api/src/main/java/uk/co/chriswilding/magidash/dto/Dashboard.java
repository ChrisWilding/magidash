package uk.co.chriswilding.magidash.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class Dashboard {
    Long id;
    LocalDate createdAt;
    LocalDate updatedAt;
    String title;
}
