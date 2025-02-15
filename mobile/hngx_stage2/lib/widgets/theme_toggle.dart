import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/theme_provider.dart';

class ThemeToggle extends StatelessWidget {
  const ThemeToggle({super.key});

  @override
  Widget build(BuildContext context) {
    final themeProvider = context.watch<ThemeProvider>();
    final isDarkMode = themeProvider.themeMode == ThemeMode.dark;

    return IconButton(
      icon: AnimatedSwitcher(
        duration: const Duration(milliseconds: 300),
        child: Icon(
          Icons.sunny,
          key: ValueKey<bool>(isDarkMode),
          size: 28,
          color: Theme.of(context).iconTheme.color,
        ),
      ),
      onPressed: () => themeProvider.toggleTheme(!isDarkMode),
      tooltip: 'Toggle theme',
    );
  }
}
