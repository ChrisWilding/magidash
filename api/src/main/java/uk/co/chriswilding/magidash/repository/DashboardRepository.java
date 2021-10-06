package uk.co.chriswilding.magidash.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DashboardRepository extends JpaRepository<DashboardEntity, Long> {
    List<DashboardEntity> findAll();
    Optional<DashboardEntity> findOneById(Long id);
}
