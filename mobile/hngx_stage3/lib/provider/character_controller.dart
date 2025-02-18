import 'package:flutter_3d_controller/flutter_3d_controller.dart';

class CharacterController {
  final Flutter3DController _controller;
  bool _isJumping = false;

  CharacterController(this._controller);

  void play() {
    _controller.playAnimation();
  }

  void stop() {
    _controller.stopAnimation();
  }
}
