package hng_internship.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record AppResponse(
   int number,
   boolean is_prime,
   boolean is_perfect,
   List<String> properties,
   int digit_sum,
   String fun_fact
) {}
