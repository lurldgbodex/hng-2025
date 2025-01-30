package com.lurldgbodex.stage0.controller;

import com.lurldgbodex.stage0.dto.AppResponse;
import com.lurldgbodex.stage0.service.AppService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/info")
@CrossOrigin(origins = "*")
@Tag(name = "AppController", description = "Retrieve basic info")
public class AppController {

    private final AppService appService;

    public AppController(AppService service) {
        this.appService = service;
    }

    @GetMapping
    @ApiResponse(responseCode = "200",
            description = "retrieves basic info",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = AppResponse.class)
            ))
    @Operation(summary = "Retrieves basic information")
    public ResponseEntity<AppResponse> getInfo() {
        return ResponseEntity.ok(appService.getInfo());
    }
}
