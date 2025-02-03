package hng_internship.controller;

import hng_internship.dto.AppResponse;
import hng_internship.dto.ErrorResponse;
import hng_internship.service.AppService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Tag(name = "AppController", description = "An api that returns interesting mathematical properties about a number")
public class AppController {

    private final AppService appService;

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "successfully returns math properties",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = AppResponse.class))),
            @ApiResponse(responseCode = "400", description = "user do not provide int number as request param",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping(produces = "application/json", value = "/classify-number")
    public ResponseEntity<AppResponse> classifyNumber(@RequestParam String number) {
        return ResponseEntity.ok(appService.classifyNumber(number));
    }
}
