package uk.co.chriswilding.magidash.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import uk.co.chriswilding.magidash.service.DashboardNotFoundException;

import java.util.Map;

@ControllerAdvice
public class DashboardEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = DashboardNotFoundException.class)
    protected ResponseEntity<Object> handleDashboadNotFound(DashboardNotFoundException ex) {
        Map<String, Object> body = Map.of(
            "message", "could not find dashboard"
        );
        return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
    }
}
