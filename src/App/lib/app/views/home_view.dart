import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:mymoney_app/app/components/drawer_component.dart';
import 'package:mymoney_app/app/controllers/home_controller.dart';

class HomeView extends StatefulWidget {
  @override
  HomeViewState createState() => HomeViewState();
}

class HomeViewState extends State<HomeView> {
  final controller = HomeController();

  _start() {
    return Container();
  }

  _loading() {
    return Center(
      child: CircularProgressIndicator(),
    );
  }

  _success() {
    return ListView.builder(
      itemCount: controller.contasAPagar.length,
      itemBuilder: (context, index) {
        var contasAPagar = controller.contasAPagar[index];
        return ListTile(
          // TODO: Agrupar por dia
          title: Center(
              child: Text(contasAPagar.nome, style: TextStyle(fontSize: 20))),
          subtitle: Column(
            children: [
              SizedBox(height: 5),
              Text('Vencimento: ' +
                  DateFormat('dd/MM/yyyy').format(contasAPagar.dataVencimento)),
              Text('Valor: ' +
                  NumberFormat.simpleCurrency(locale: 'pt_BR')
                      .format(contasAPagar.valor)),
              SizedBox(height: 15),
            ],
          ),
        );
      },
    );
  }

  _error() {
    return Center(
      child: RaisedButton(
        onPressed: () {
          controller.start();
        },
        child: Text('Tente novamente'),
      ),
    );
  }

  stateManagement(HomeState state) {
    switch (state) {
      case HomeState.start:
        return _start();
      case HomeState.loading:
        return _loading();
      case HomeState.success:
        return _success();
      case HomeState.error:
        return _error();
      default:
        return _start();
    }
  }

  @override
  void initState() {
    super.initState();
    controller.start();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: DrawerComponent(),
      appBar: AppBar(
        title: Text('Contas à pagar'),
        actions: [
          IconButton(
            icon: Icon(Icons.refresh_outlined),
            onPressed: () {
              controller.start();
            },
          ),
          IconButton(
            icon: Icon(Icons.event_rounded),
            onPressed: () {
              Navigator.of(context).pushReplacementNamed('/calendar');
            },
          ),
          IconButton(
            icon: Icon(Icons.add_circle_outline_sharp),
            onPressed: () {
              //controller.start();
            },
          ),
        ],
      ),
      body: AnimatedBuilder(
        animation: controller.state,
        builder: (context, child) {
          return stateManagement(controller.state.value);
        },
      ),
    );
  }
}
