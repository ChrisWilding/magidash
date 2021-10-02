package uk.co.chriswilding.magidash.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uk.co.chriswilding.magidash.dto.Dashboard;
import uk.co.chriswilding.magidash.repository.DashboardEntity;
import uk.co.chriswilding.magidash.repository.DashboardRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final DashboardRepository dashboardRepository;

    public List<Dashboard> getAll() {
        List<DashboardEntity> dashboardEntities = dashboardRepository.findAll();

        return dashboardEntities.stream().map(dashboardEntity -> Dashboard.builder()
            .id(dashboardEntity.getId())
            .createdAt(dashboardEntity.getCreatedAt())
            .updatedAt(dashboardEntity.getUpdatedAt())
            .title(dashboardEntity.getTitle())
            .build()
        ).toList();
    }
}
