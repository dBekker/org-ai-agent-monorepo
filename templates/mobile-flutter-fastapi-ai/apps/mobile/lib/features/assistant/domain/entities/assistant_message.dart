class AssistantMessage {
  final String id;
  final String text;
  final bool fromUser;

  const AssistantMessage({
    required this.id,
    required this.text,
    required this.fromUser,
  });
}
