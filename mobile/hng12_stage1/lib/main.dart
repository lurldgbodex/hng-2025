import 'package:flutter/material.dart';
import 'package:hng12_stage1/pages/decrypt_screen.dart';

import 'pages/encrypt_screen.dart';
import 'widgets/button.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'HNG12',
      debugShowCheckedModeBanner: false,
      home: const MyHomePage(title: 'HNG12 Encryption'),
      routes: {
        EncryptScreen.route: (context) => EncryptScreen(),
        DecryptScreen.route: (context) => DecryptScreen(),
      },
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          title,
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              "Encrypt or Decrypt your encrypted Data",
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.w500,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 20),
            CustomButton(
              onPressed: () {
                Navigator.pushNamed(
                  context,
                  EncryptScreen.route,
                );
              },
              buttonText: "Encrypt Data",
            ),
            const SizedBox(height: 10),
            CustomButton(
              onPressed: () {
                Navigator.pushNamed(
                  context,
                  DecryptScreen.route,
                );
              },
              buttonText: "Decrypt Data",
            ),
          ],
        ),
      ),
    );
  }
}
