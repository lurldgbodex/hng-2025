package com.lurldgbodex.stage0.service;

import com.lurldgbodex.stage0.dto.AppResponse;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class AppService {

    public AppResponse getInfo() {
        String email = "gbodisegun@gmail.com";
        String formattedDateTime = Instant.now().toString();
        String githubUrl = "https://github.com/lurldgbodex/hng-2025";
        return new AppResponse(email, formattedDateTime, githubUrl);
    }
}
