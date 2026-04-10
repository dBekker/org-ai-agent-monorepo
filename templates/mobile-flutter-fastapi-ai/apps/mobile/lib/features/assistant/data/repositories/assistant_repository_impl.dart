import '../../domain/entities/assistant_message.dart';
import '../../domain/repositories/assistant_repository.dart';

class AssistantRepositoryImpl implements AssistantRepository {
  @override
  Future<AssistantMessage> sendMessage(String text) async {
    return AssistantMessage(id: 'temp-id', text: text, fromUser: false);
  }
}
