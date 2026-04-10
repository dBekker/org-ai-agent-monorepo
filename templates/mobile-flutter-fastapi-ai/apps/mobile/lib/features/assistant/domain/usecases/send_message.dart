import '../entities/assistant_message.dart';
import '../repositories/assistant_repository.dart';

class SendMessage {
  final AssistantRepository repository;

  SendMessage(this.repository);

  Future<AssistantMessage> call(String text) {
    return repository.sendMessage(text);
  }
}
