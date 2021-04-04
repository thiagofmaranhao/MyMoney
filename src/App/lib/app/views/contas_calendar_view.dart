import 'package:flutter/material.dart';
import 'package:mymoney_app/app/components/drawer_component.dart';
import 'package:mymoney_app/app/controllers/contas_calendar_controller.dart';
import 'package:table_calendar/table_calendar.dart';

class ContasCalendarView extends StatefulWidget {
  @override
  _ContasCalendarViewState createState() => _ContasCalendarViewState();
}

class _ContasCalendarViewState extends State<ContasCalendarView> {
  CalendarController _calendarController;
  ContasCalendarController _contasCalendarController;

  _start() {
    return Container();
  }

  _loading() {
    return Center(
      child: CircularProgressIndicator(),
    );
  }

  _success() {
    return TableCalendar(
      calendarController: _calendarController,
      events: _contasCalendarController.events,
      locale: 'pt_BR',
    );
  }

  _error() {
    return Center(
      child: RaisedButton(
        onPressed: () {
          _contasCalendarController.start();
        },
        child: Text('Tente novamente'),
      ),
    );
  }

  stateManagement(CalendarState state) {
    switch (state) {
      case CalendarState.start:
        return _start();
      case CalendarState.loading:
        return _loading();
      case CalendarState.success:
        return _success();
      case CalendarState.error:
        return _error();
      default:
        return _start();
    }
  }

  @override
  void initState() {
    super.initState();
    _calendarController = CalendarController();
    _contasCalendarController = ContasCalendarController();
    _contasCalendarController.start();
  }

  @override
  void dispose() {
    _calendarController.dispose();
    super.dispose();
  }

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
            icon: Icon(Icons.add_circle_outline_sharp),
            onPressed: () {
              Navigator.of(context).pushReplacementNamed('/manutencao');
            },
          ),
        ],
      ),
      body: AnimatedBuilder(
        animation: _contasCalendarController.state,
        builder: (context, child) {
          return stateManagement(_contasCalendarController.state.value);
        },
      ),
    );
  }
}
