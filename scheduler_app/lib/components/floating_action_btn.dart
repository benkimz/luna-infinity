import 'package:flutter/material.dart';

class AddNewHabit extends StatelessWidget {
  final Function()? onpressed;
  const AddNewHabit({
    super.key, required this.onpressed,
  });

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      onPressed: onpressed,
      tooltip: 'Add New Todo',
      child: const Icon(Icons.add),
    );
  }
}
