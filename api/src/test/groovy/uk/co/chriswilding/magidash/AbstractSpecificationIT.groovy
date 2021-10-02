package uk.co.chriswilding.magidash

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.test.context.ActiveProfiles
import spock.lang.Specification

@SpringBootTest(
    webEnvironment = SpringBootTest.WebEnvironment.MOCK,
    classes = MagidashApplication.class
)
@ActiveProfiles(["test"])
@AutoConfigureMockMvc
class AbstractSpecificationIT extends Specification {

    @Autowired
    protected JdbcTemplate jdbcTemplate

    protected def addDashboard(String title) {
        jdbcTemplate.execute("INSERT INTO dashboards (`title`) VALUES ('$title');")
    }

    protected def truncateDashboards() {
        jdbcTemplate.execute("TRUNCATE TABLE dashboards;")
    }
}
