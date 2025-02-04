import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final String buttonText;
  final VoidCallback onPressed;
  final bool rounded;

  const CustomButton({
    super.key,
    required this.onPressed,
    required this.buttonText,
    this.rounded = false,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ButtonStyle(
          shape: WidgetStatePropertyAll(RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(rounded ? 20 : 10),
      ))),
      onPressed: onPressed,
      child: Padding(
        padding: const EdgeInsets.all(10.0),
        child: Text(
          buttonText,
          style: TextStyle(
            color: rounded ? Colors.black54 : Colors.black87,
            fontWeight: rounded ? FontWeight.normal : FontWeight.w400,
            fontSize: rounded ? 16 : 20,
          ),
        ),
      ),
    );
  }
}
