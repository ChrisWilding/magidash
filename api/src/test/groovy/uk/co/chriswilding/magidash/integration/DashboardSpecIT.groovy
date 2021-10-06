package uk.co.chriswilding.magidash.integration

import org.json.JSONObject
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import uk.co.chriswilding.magidash.AbstractSpecificationIT

import java.time.LocalDate

import static org.hamcrest.Matchers.hasSize
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath

class DashboardSpecIT extends AbstractSpecificationIT {

    def today = LocalDate.now().toString()

    @Autowired
    MockMvc mvc

    def setup() {
        truncateDashboards()
    }

    def "it return an empty list when there are no dashboards"() {
        given: "the database does not contain any dashboards"
        truncateDashboards()

        when: "the dashboards endpoint is called"
        def request = MockMvcRequestBuilders.get("/dashboards")
        def response = mvc.perform(request)

        then: "it returns an OK response"
        response.andExpect(MockMvcResultMatchers.status().isOk())

        and: "an empty list"
        response.andExpect(jsonPath('$', hasSize(0)))
    }

    def "it returns a list of dashboards"() {
        given: "the database has some dashboards"
        addDashboard("Example Dashboard 1")
        addDashboard("Example Dashboard 2")
        addDashboard("Example Dashboard 3")

        when: "the dashboards endpoint is called"
        def request = MockMvcRequestBuilders.get("/dashboards")
        def response = mvc.perform(request)

        then: "it returns an OK response"
        response.andExpect(MockMvcResultMatchers.status().isOk())

        and:
        response.andExpect(jsonPath('$', hasSize(3)))
        assertDashboard(response, 0, 1, today, today, "Example Dashboard 1")
        assertDashboard(response, 1, 2, today, today, "Example Dashboard 2")
        assertDashboard(response, 2, 3, today, today, "Example Dashboard 3")
    }

    def "it returns the requested dashboard"() {
        given: "an expected title"

        and: "the database has some dashboards"
        def title = "Good Dashboard 1"
        addDashboard("Bad Dashboard 1")
        addDashboard(title)
        addDashboard("Bad Dashboard 2")

        when: "the dashboards endpoint is called"
        def request = MockMvcRequestBuilders.get("/dashboards/2")
        def response = mvc.perform(request)

        then: "it returns an OK response"
        response.andExpect(MockMvcResultMatchers.status().isOk())

        and: "it returns the expected dashboard"
        response.andExpect(MockMvcResultMatchers.content().json(buildExpectedDashboard(2L, title)))
    }

    def "it returns a 404 when the dashboard is not found"() {
        given: "the database has a dashboard"
        addDashboard("Example Dashboard 1")

        when: "the dashboards endpoint is called"
        def request = MockMvcRequestBuilders.get("/dashboards/2")
        def response = mvc.perform(request)

        then: "it returns an OK response"
        response.andExpect(MockMvcResultMatchers.status().isNotFound())
    }

    void assertDashboard(response, index, id, createdAt, updatedAt, title) {
        assert response.andExpect(jsonPath('$[' + index + '].id').value(id))
        assert response.andExpect(jsonPath('$[' + index + '].createdAt').value(createdAt))
        assert response.andExpect(jsonPath('$[' + index + '].updatedAt').value(updatedAt))
        assert response.andExpect(jsonPath('$[' + index + '].title').value(title))
    }

    String buildExpectedDashboard(long id, String title) {
        return new JSONObject("""
        {
            "id": $id,
            "createdAt": "$today",
            "updatedAt": "$today",
            "title": "$title"
        }
        """).toString()
    }
}
