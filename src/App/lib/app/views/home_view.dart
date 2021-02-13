import 'package:flutter/material.dart';

class HomeView extends StatefulWidget {
  @override
  _HomeViewState createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(
        child: Column(
          children: [
            UserAccountsDrawerHeader(
              currentAccountPicture: ClipRRect(
                borderRadius: BorderRadius.circular(40),
                child: Image.asset('assets/images/avatar.jpg'),
              ),
              // TODO: Como trazer o e-mail retornado no token ou passado no login para cá
              accountEmail: Text('teste@teste.com'),
              accountName: null,
            ),
            ListTile(
              leading: Icon(Icons.home),
              title: Text('Início'),
              onTap: () {
                Navigator.of(context).pushReplacementNamed('/home');
              },
            ),
            ListTile(
              leading: Icon(Icons.logout),
              title: Text('Sair'),
              onTap: () {
                Navigator.of(context).pushReplacementNamed('/');
              },
            ),
          ],
        ),
      ),
      appBar: AppBar(
        title: Text('Contas à pagar'),
        actions: [
          // TODO: Colocar ação no ícone/imagem
          Icon(Icons.event_rounded),
          // TODO: Verificar forma melhor de separar os ícones
          Text('     '),
          // TODO: Colocar ação no ícone/imagem
          Icon(Icons.add_circle_outline_sharp),
        ],
      ),
    );
  }
}
