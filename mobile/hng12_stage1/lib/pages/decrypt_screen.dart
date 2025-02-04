import 'package:flutter/material.dart';

import '../widgets/encryption_body.dart';

class DecryptScreen extends StatelessWidget {
  static final route = "/decrypt";

  const DecryptScreen({super.key});

  @override
  Widget build(BuildContext context) {
    TextEditingController controller = TextEditingController();

    return EncryptionBody(
      isEncrypt: false,
      controller: controller,
      title: 'Decrypt Data',
    );
  }
}
