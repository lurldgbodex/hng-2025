package hng_internship.service;

import hng_internship.dto.AppResponse;
import hng_internship.exception.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AppService {

    private final RestTemplate restTemplate;

    public AppResponse classifyNumber(String number) {
        try {
            int parsedNumber = Integer.parseInt(number);

            int numLength = number.length();
            List<String> properties = getProperties(parsedNumber, numLength);
            String fact = getFunFact(parsedNumber);

            return AppResponse.builder()
                    .number(parsedNumber)
                    .is_prime(isPrime(parsedNumber))
                    .is_perfect(isPerfect(parsedNumber))
                    .properties(properties)
                    .digit_sum(getDigitSum(parsedNumber))
                    .fun_fact(fact)
                    .build();
        } catch (NumberFormatException nfe) {
            throw new BadRequestException(number);
        }
    }

    private int getDigitSum(int number) {
        if (number == 0) return 0;
        return (number % 10) + getDigitSum(number / 10);
    }

    private boolean isPrime(int number) {
        if (number < 2) return false;
        if (number == 2 || number == 3) return true;
        if (number % 2 == 0 || number % 3 == 0) return false;

        for (int i = 5; i * i <= number; i+=2) {
            if (number % i == 0) return false;
        }
        return true;
    }

    private boolean isPerfect(int number) {
        if (number < 2) return false;

        int sum = 1;
        for (int i = 2; i * i <= number; i++) {
            if (number % i == 0) {
                sum += i;
                if (i != number / i) {
                    sum += number / i;
                }
            }
        }
        return sum == number;
    }

    private List<String> getProperties(int number, int length) {
        boolean isEven = number % 2 == 0;
        boolean isArmstrong = isArmstrong(number, length);

        List<String> list = new ArrayList<>();
        if (isArmstrong) {
            list.add("armstrong");
        }

        list.add(isEven ? "even" : "odd");
        return new ArrayList<>(list);
    }

    private boolean isArmstrong(int number, int numberLength) {
        int temp = number;
        int sum = 0;

        while (temp > 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, numberLength);
            temp /= 10;
        }

        return sum == number;
    }
    private String getFunFact(int number) {
        String apiUrl = "http://numbersapi.com/" + number + "/math";
        try {
            return restTemplate.getForObject(apiUrl, String.class);
        } catch (Exception e) {
            throw new BadRequestException(String.valueOf(number));
        }
    }
}
