import 'package:flutter/material.dart';

import '../models/country.dart';

class CountryDetailsScreen extends StatelessWidget {
  final Country country;
  const CountryDetailsScreen({super.key, required this.country});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(country.name),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(8),
              ),
              height: 200,
              child: Center(
                child: Image.network(
                  fit: BoxFit.cover,
                  country.flag,
                  height: 200,
                  width: double.infinity,
                ),
              ),
            ),
            const SizedBox(height: 16),
            TextBox(field: 'Population', value: '${country.population}'),
            TextBox(field: 'Region', value: country.region),
            TextBox(field: 'Capital', value: country.capital),
            const SizedBox(height: 8),
            TextBox(field: 'Independence', value: country.independence),
            TextBox(field: 'Area', value: '${country.area}'),
            const SizedBox(height: 8),
            // TextBox(field: 'Currency', value: country.currency),
            // TextBox(field: 'Time Zone', value: country.timeZone),
            TextBox(field: 'Driving side', value: country.drivingSide),
          ],
        ),
      ),
    );
  }
}

class TextBox extends StatelessWidget {
  final String field;
  final String value;

  const TextBox({
    super.key,
    required this.field,
    required this.value,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Text(
          '$field:',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
        ),
        const SizedBox(width: 16),
        Text(value),
      ],
    );
  }
}
