package uk.co.chriswilding.magidash.integration

import uk.co.chriswilding.magidash.AbstractSpecificationIT

class MagidashApplicationSpecIT extends AbstractSpecificationIT{
    def "application starts"() {
        when: "the application starts"
        then: "there are no errors"
        noExceptionThrown()
    }
}
