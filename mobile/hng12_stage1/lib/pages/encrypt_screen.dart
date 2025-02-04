import 'package:flutter/material.dart';

import '../widgets/encryption_body.dart';

class EncryptScreen extends StatelessWidget {
  static final route = "/encrypt";

  const EncryptScreen({super.key});

  @override
  Widget build(BuildContext context) {
    TextEditingController controller = TextEditingController();
    return EncryptionBody(
      isEncrypt: true,
      controller: controller,
      title: 'Encrypt Data',
    );
  }
}
