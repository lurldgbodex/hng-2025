import 'package:flutter/material.dart';

import '../models/country.dart';
import '../screens/country_detail_screen.dart';

class CountryListItem extends StatelessWidget {
  final Country country;

  const CountryListItem({super.key, required this.country});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: country.flag.isEmpty
          ? const Icon(Icons.flag)
          : Image.network(country.flag, width: 40),
      title: Text(country.name),
      onTap: () => Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => CountryDetailsScreen(country: country),
        ),
      ),
    );
  }
}
