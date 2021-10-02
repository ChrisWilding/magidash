package uk.co.chriswilding.magidash

import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import spock.lang.Specification

@SpringBootTest
@ActiveProfiles(["test"])
class AbstractSpecificationIT extends Specification {
}
