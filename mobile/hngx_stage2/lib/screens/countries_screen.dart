import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:hngx_stage2/models/country.dart';
import 'package:hngx_stage2/services/api_service.dart';
import 'package:hngx_stage2/widgets/theme_toggle.dart';
import 'package:sticky_headers/sticky_headers.dart';

import '../utils/app_theme.dart';
import '../widgets/country_list_item.dart';

class CountriesScreen extends StatefulWidget {
  const CountriesScreen({super.key});

  @override
  State<CountriesScreen> createState() => _CountriesScreenState();
}

class _CountriesScreenState extends State<CountriesScreen> {
  final ApiService _apiService = ApiService();
  late List<Country> _countries;
  late Map<String, List<Country>> _groupedCountries;
  final TextEditingController _searchController = TextEditingController();
  List<String> _sectionLetters = [];

  @override
  void initState() {
    super.initState();
    _countries = [];
    _groupedCountries = {};
    _loadCountries();
  }

  Future<void> _loadCountries() async {
    try {
      final countries = await _apiService.fetchCountries();
      setState(() {
        _countries = countries;
        _filterCountries('');
      });
    } catch (e) {
      print(e);
    }
  }

  void _filterCountries(String query) {
    final filtered = query.isEmpty
        ? _countries
        : _countries
            .where((country) =>
                country.name.toLowerCase().contains(query.toLowerCase()))
            .toList();

    filtered.sort((a, b) => a.name.compareTo(b.name));

    _groupedCountries = {};
    for (var country in filtered) {
      String firstLetter = country.name.substring(0, 1).toUpperCase();
      if (!_groupedCountries.containsKey(firstLetter)) {
        _groupedCountries[firstLetter] = [];
      }

      _groupedCountries[firstLetter]!.add(country);

      _sectionLetters = _groupedCountries.keys.toList()..sort();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Explore.',
        ),
        actions: [
          ThemeToggle(),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Column(
          children: [
            Container(
              color: AppTheme.greyColor,
              child: TextField(
                textAlign: TextAlign.center,
                controller: _searchController,
                decoration: InputDecoration(
                  prefixIcon: Icon(
                    Icons.search,
                    color: Colors.grey,
                  ),
                  hintText: 'Search country',
                  border: InputBorder.none,
                ),
                onChanged: (value) => _filterCountries(value),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  FilterWidget(
                    icon: FaIcon(
                      FontAwesomeIcons.globe,
                      size: 18,
                    ),
                    text: 'EN',
                  ),
                  FilterWidget(
                    icon: FaIcon(
                      FontAwesomeIcons.filter,
                      size: 16,
                    ),
                    text: 'Filter',
                  ),
                ],
              ),
            ),
            _countries.isEmpty
                ? const Center(
                    child: CircularProgressIndicator(),
                  )
                : Expanded(
                    child: ListView.builder(
                      itemCount: _sectionLetters.length,
                      itemBuilder: (context, sectionIndex) {
                        final letter = _sectionLetters[sectionIndex];
                        final countries = _groupedCountries[letter]!;

                        return StickyHeader(
                            header: Container(
                              height: 40,
                              width: 40,
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 16),
                              alignment: Alignment.centerLeft,
                              child: Text(
                                letter,
                                style: Theme.of(context)
                                    .textTheme
                                    .titleMedium
                                    ?.copyWith(
                                      fontWeight: FontWeight.bold,
                                    ),
                              ),
                            ),
                            content: ListView.builder(
                              physics: const NeverScrollableScrollPhysics(),
                              shrinkWrap: true,
                              itemCount: countries.length,
                              itemBuilder: (context, index) =>
                                  CountryListItem(country: countries[index]),
                            ));
                      },
                    ),
                  ),
          ],
        ),
      ),
    );
  }
}

class FilterWidget extends StatelessWidget {
  final Widget icon;
  final String text;

  const FilterWidget({
    super.key,
    required this.icon,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
          border: Border.all(
            color: Colors.black26,
          ),
          borderRadius: BorderRadius.circular(6)),
      child: Row(
        children: [
          icon,
          const SizedBox(width: 2),
          Text(
            text,
            style: TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w700,
            ),
          )
        ],
      ),
    );
  }
}
