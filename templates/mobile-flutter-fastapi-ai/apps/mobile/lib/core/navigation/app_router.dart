import 'package:go_router/go_router.dart';
import '../../features/assistant/presentation/screens/assistant_screen.dart';

GoRouter buildAppRouter() {
  return GoRouter(
    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => const AssistantScreen(),
      ),
    ],
  );
}
