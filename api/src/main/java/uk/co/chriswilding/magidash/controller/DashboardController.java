package uk.co.chriswilding.magidash.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import uk.co.chriswilding.magidash.dto.Dashboard;
import uk.co.chriswilding.magidash.service.DashboardService;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @ResponseBody
    @GetMapping(value = "/dashboards", produces = APPLICATION_JSON_VALUE)
    public List<Dashboard> getDashboards() {
        return dashboardService.getAll();
    }
}
