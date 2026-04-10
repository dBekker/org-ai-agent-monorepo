import '../entities/assistant_message.dart';

abstract class AssistantRepository {
  Future<AssistantMessage> sendMessage(String text);
}
