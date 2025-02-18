import 'package:flutter/material.dart';
import 'package:flutter_3d_controller/flutter_3d_controller.dart';

class CharacterViewer extends StatelessWidget {
  final Flutter3DController controller;

  const CharacterViewer({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return Flutter3DViewer(
        controller: controller, src: 'assets/models/character1.glb');
  }
}
