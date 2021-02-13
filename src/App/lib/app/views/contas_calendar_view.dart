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
  List _selectedEvents;

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
      onDaySelected: _onDaySelected,
      onVisibleDaysChanged: _onVisibleDaysChanged,
      onCalendarCreated: _onCalendarCreated,
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

  void _onDaySelected(DateTime day, List events, List holidays) {
    print('CALLBACK: _onDaySelected');
    setState(() {
      _selectedEvents = events;
    });
  }

  void _onVisibleDaysChanged(
      DateTime first, DateTime last, CalendarFormat format) {
    print('CALLBACK: _onVisibleDaysChanged');
  }

  void _onCalendarCreated(
      DateTime first, DateTime last, CalendarFormat format) {
    print('CALLBACK: _onCalendarCreated');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: DrawerComponent(),
      appBar: AppBar(
        title: Text('Contas à pagar'),
        actions: [
          IconButton(
            icon: Icon(Icons.arrow_back),
            onPressed: () {
              Navigator.of(context).pushReplacementNamed('/home');
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
      body: stateManagement(_contasCalendarController.state.value),
    );
  }
}
