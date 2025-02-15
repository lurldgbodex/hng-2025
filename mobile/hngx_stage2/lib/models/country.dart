class Country {
  final String name;
  final String flag;
  final String countryCode;
  final String capital;
  final int population;
  final String region;
  final String independence;
  final double area;
  // final String currency;
  // final String timeZone;
  final String drivingSide;
  // final String languages;

  Country({
    required this.name,
    required this.flag,
    required this.countryCode,
    required this.capital,
    required this.population,
    required this.region,
    required this.independence,
    required this.area,
    // required this.currency,
    // required this.timeZone,
    required this.drivingSide,
    // required this.languages,
  });

  factory Country.fromJson(Map<String, dynamic> json) {
    return Country(
      name: json['name']['common'] ?? 'unknown',
      flag: json['flags']['png'] ?? '',
      countryCode: json['cca2'] ?? '',
      capital: (json['capital'] as List?)?.first ?? 'N/A',
      // languages: (json['languages'] as List?)?.first ?? 'N/A',
      population: json['population'] ?? 'N/A',
      area: json['area'] ?? 'N/A',
      // currency: (json['currencies'] as List?)?.first?['name'] ?? 'N/a',
      independence: json['independence'] ?? 'N/A',
      region: json['region'] ?? 'N/A',
      // timeZone: json['timezones']['0'] ?? 'N/A',
      drivingSide: json['car']['side'] ?? 'N/A',
    );
  }
}
