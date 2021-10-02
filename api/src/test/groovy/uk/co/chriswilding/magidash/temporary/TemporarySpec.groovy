package uk.co.chriswilding.magidash.temporary

import uk.co.chriswilding.magidash.AbstractSpecification

class TemporarySpec extends AbstractSpecification {
    def "it add two numbers"() {
        given: "a number"
        def a = 1

        and: "another number"
        def b = 2

        when: "the numbers are added together"
        def result = a + b

        then: "the laws of the universe hold true"
        result == 3
    }
}
