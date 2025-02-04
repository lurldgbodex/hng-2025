import 'dart:convert';
import 'dart:math';

import 'package:crypto/crypto.dart';

class Encryptor {
  static final String key = "not-so-secret-key";

  static String encrypt(String plaintext) {
    final hashedKey = _generateHashKey(key);
    final rand = Random(hashedKey);
    final bytes = utf8.encode(plaintext);

    final encryptedString = bytes.map((byte) {
      final mask = rand.nextInt(256);
      return byte ^ mask;
    }).toList();

    return _rotateString(base64Url.encode(encryptedString), hashedKey);
  }

  static String decrypt(String encryptedString) {
    final hashedKey = _generateHashKey(key);
    final rand = Random(hashedKey);

    final originalBase64 = _rotateString(encryptedString, -hashedKey);
    final encryptedBytes = base64Url.decode(originalBase64);

    final decryptedBytes = encryptedBytes.map((byte) {
      final mask = rand.nextInt(256);
      return byte ^ mask;
    }).toList();

    return utf8.decode(decryptedBytes);
  }

  static int _generateHashKey(String key) {
    return sha256
        .convert(utf8.encode(key))
        .bytes
        .fold(0, (prev, byte) => prev + byte);
  }

  static String _rotateString(String input, int rotation) {
    if (input.isEmpty) return input;

    final len = input.length;
    final offset = rotation % len;
    final adjustedOffset = offset < 0 ? len + offset : offset;

    return input.substring(adjustedOffset) + input.substring(0, adjustedOffset);
  }
}
