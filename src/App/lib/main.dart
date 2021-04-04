import 'package:flutter/material.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:mymoney_app/app/views/contas_manutencao_view.dart';

import 'app/views/contas_calendar_view.dart';
import 'app/views/home_view.dart';
import 'app/views/login_view.dart';

main() {
  initializeDateFormatting().then((_) => runApp(AppWidget()));
}

class AppWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(),
      initialRoute: '/',
      routes: {
        '/': (context) => LoginView(),
        '/home': (context) => HomeView(),
        '/calendar': (context) => ContasCalendarView(),
        '/manutencao': (context) => ContasManutencaoView(),
      },
    );
  }
}
