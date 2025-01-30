package com.lurldgbodex.stage0.service;

import com.lurldgbodex.stage0.dto.AppResponse;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

@Service
public class AppService {

    public AppResponse getInfo() {
        String email = "gbodisegun@gmail.com";
        String formattedDateTime = Instant.now()
                .atOffset(ZoneOffset.UTC)
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'"));
        String githubUrl = "https://github.com/lurldgbodex/hng-2025";

        return new AppResponse(email, formattedDateTime, githubUrl);
    }
}
