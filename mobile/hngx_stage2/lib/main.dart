import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'providers/theme_provider.dart';
import 'screens/countries_screen.dart';
import 'utils/app_theme.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (_) => ThemeProvider(),
        ),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Country Explorer',
      theme: AppTheme.lightTheme(),
      darkTheme: AppTheme.dartkTheme(),
      themeMode: context.watch<ThemeProvider>().themeMode,
      debugShowCheckedModeBanner: false,
      home: CountriesScreen(),
    );
  }
}
