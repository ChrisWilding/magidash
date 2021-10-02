package uk.co.chriswilding.magidash.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uk.co.chriswilding.magidash.dto.Dashboard;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {

    public List<Dashboard> getAll() {
        return List.of(
            Dashboard.builder()
                .id(1L)
                .createdAt(LocalDate.now())
                .updatedAt(LocalDate.now())
                .title("Example Dashboard 1")
                .build(),
            Dashboard.builder()
                .id(2L)
                .createdAt(LocalDate.now())
                .updatedAt(LocalDate.now())
                .title("Example Dashboard 2")
                .build(),
            Dashboard.builder()
                .id(3L)
                .createdAt(LocalDate.now())
                .updatedAt(LocalDate.now())
                .title("Example Dashboard 3")
                .build()
        );
    }
}
