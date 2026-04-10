import 'package:flutter/material.dart';
import 'core/navigation/app_router.dart';

void main() {
  runApp(const TemplateApp());
}

class TemplateApp extends StatelessWidget {
  const TemplateApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Template Mobile',
      routerConfig: buildAppRouter(),
    );
  }
}
