import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:mymoney_app/app/models/contas_a_pagar_model.dart';
import 'package:mymoney_app/app/repositories/contas_a_pagar_repository.dart';

class ContasCalendarController {
  Map<DateTime, List> events = {};
  final _repository;
  final state = ValueNotifier<CalendarState>(CalendarState.start);

  ContasCalendarController([ContasAPagarRepository repository])
      : _repository = repository ?? ContasAPagarRepository();

  Future start() async {
    state.value = CalendarState.loading;
    try {
      final contasAPagar = await _repository.obterTodasContasAPagar();
      events = obterEventosContasAPagar(contasAPagar);
      state.value = CalendarState.success;
    } catch (e) {
      state.value = CalendarState.error;
    }
  }

  // TODO: Converter o grupamento para um Map<DateTime, List> List de String
  Map<DateTime, List> obterEventosContasAPagar(
      List<ContasAPagarModel> contasAPagar) {
    // var grupos = groupBy(contasAPagar, (ContasAPagarModel c) {
    //   return c.dataVencimento;
    // });
    return {
      DateTime(2021, 2, 13): ['Deso'],
      DateTime(2021, 2, 14): ['Energisa'],
      DateTime(2021, 2, 15): ['Condomínio']
    };
  }
}

enum CalendarState { start, loading, success, error }
