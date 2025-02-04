import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../utils/encryptor.dart';
import 'button.dart';
import 'textfield.dart';

class EncryptionBody extends StatefulWidget {
  final String title;
  final bool isEncrypt;
  final TextEditingController controller;

  const EncryptionBody({
    super.key,
    required this.title,
    required this.controller,
    required this.isEncrypt,
  });

  @override
  State<EncryptionBody> createState() => _EncryptionBodyState();
}

class _EncryptionBodyState extends State<EncryptionBody> {
  String encryptionText = '';

  @override
  void dispose() {
    widget.controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: Text(widget.title),
        centerTitle: true,
        leading: IconButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          icon: Icon(
            Icons.navigate_before,
            size: 30,
          ),
        ),
      ),
      body: Column(
        children: [
          CustomTextField(
            controller: widget.controller,
          ),
          const SizedBox(height: 16),
          CustomButton(
            rounded: true,
            onPressed: () {
              String inputText = widget.controller.value.text;
              setState(() {
                if (inputText.isNotEmpty) {
                  encryptionText = widget.isEncrypt
                      ? Encryptor.encrypt(inputText)
                      : Encryptor.decrypt(inputText);
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text(
                          "you need to input the text to ${widget.isEncrypt ? 'encrypt' : 'decrypt'}"),
                    ),
                  );
                }
              });
            },
            buttonText: widget.isEncrypt ? "encrypt" : 'decrypt',
          ),
          const SizedBox(height: 16),
          if (encryptionText.isNotEmpty)
            Column(
              children: [
                Text(
                  encryptionText,
                ),
                if (widget.isEncrypt)
                  IconButton(
                    icon: Icon(
                      Icons.copy,
                      color: Colors.black38,
                    ),
                    onPressed: () {
                      Clipboard.setData(
                        ClipboardData(
                          text: encryptionText,
                        ),
                      );

                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('copied to clipboard'),
                        ),
                      );
                    },
                  ),
              ],
            ),
        ],
      ),
    );
  }
}
