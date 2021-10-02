package uk.co.chriswilding.magidash.service

import uk.co.chriswilding.magidash.AbstractSpecification
import uk.co.chriswilding.magidash.dto.Dashboard
import uk.co.chriswilding.magidash.repository.DashboardEntity
import uk.co.chriswilding.magidash.repository.DashboardRepository

import java.time.LocalDate

class DashboardServiceSpec extends AbstractSpecification {

    DashboardRepository dashboardRepository = Mock(DashboardRepository)

    DashboardService dashboardService = new DashboardService(dashboardRepository)

    def yesterday = LocalDate.now().minusDays(1)
    def today = LocalDate.now()

    def "it returns an empty list when there are no dashboard"() {
        given: "there are no dashboards"
        dashboardRepository.findAll() >> Collections.emptyList()

        when: "all dashboards are requested"
        def result = dashboardService.getAll()

        then: "it returns an empty list"
        result.size() == 0
    }

    def "it returns all the dashboards"() {
        given: "some dashboard entities"
        def dashboardA = DashboardEntity.builder()
            .id(1L)
            .createdAt(yesterday)
            .updatedAt(yesterday)
            .title("Example Dashboard 1")
            .build()
        def dashboardB = DashboardEntity.builder()
            .id(2L)
            .createdAt(today)
            .updatedAt(today)
            .title("Example Dashboard 2")
            .build()

        and: "the repository will return those entities"
        dashboardRepository.findAll() >> List.of(dashboardA, dashboardB)

        when: "all dashboards are requested"
        def result = dashboardService.getAll()

        then: "the expected dashboards"
        result.size() == 2
        assertDashboard(dashboardA, result[0])
        assertDashboard(dashboardB, result[1])
    }

    void assertDashboard(DashboardEntity dashboardEntity, Dashboard dashboard) {
        assert dashboardEntity.id == dashboard.id
        assert dashboardEntity.createdAt == dashboard.createdAt
        assert dashboardEntity.updatedAt == dashboard.updatedAt
        assert dashboardEntity.title == dashboard.title
    }
}
