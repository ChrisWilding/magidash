package uk.co.chriswilding.magidash.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uk.co.chriswilding.magidash.dto.Dashboard;
import uk.co.chriswilding.magidash.repository.DashboardEntity;
import uk.co.chriswilding.magidash.repository.DashboardRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final DashboardRepository dashboardRepository;

    public List<Dashboard> getAll() {
        List<DashboardEntity> dashboardEntities = dashboardRepository.findAll();

        return dashboardEntities.stream().map(this::mapDashboardEntityToDto).toList();
    }

    public Dashboard getDashboard(Long id) {
        Optional<DashboardEntity> dashboardEntity = dashboardRepository.findOneById(id);
        return dashboardEntity.map(this::mapDashboardEntityToDto).get();
    }

    private Dashboard mapDashboardEntityToDto(DashboardEntity  dashboardEntity) {
        return Dashboard.builder()
            .id(dashboardEntity.getId())
            .createdAt(dashboardEntity.getCreatedAt())
            .updatedAt(dashboardEntity.getUpdatedAt())
            .title(dashboardEntity.getTitle())
            .build();
    }
}
