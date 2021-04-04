import 'package:flutter/material.dart';
import 'package:mymoney_app/app/components/drawer_component.dart';

class ContasManutencaoView extends StatefulWidget {
  @override
  _ContasManutencaoViewState createState() => _ContasManutencaoViewState();
}

class _ContasManutencaoViewState extends State<ContasManutencaoView> {
  @override
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: DrawerComponent(),
      appBar: AppBar(
        title: Text('Contas à pagar'),
        actions: [
          IconButton(
            icon: Icon(Icons.home),
            onPressed: () {
              Navigator.of(context).pushReplacementNamed('/home');
            },
          ),
          IconButton(
            icon: Icon(Icons.event_rounded),
            onPressed: () {
              Navigator.of(context).pushReplacementNamed('/calendar');
            },
          ),
        ],
      ),
      body: Text('Em Construção!!!'),
    );
  }
}
