import 'package:flutter/material.dart';
import 'package:mymoney_app/app/models/contas_a_pagar_model.dart';
import 'package:mymoney_app/app/repositories/contas_a_pagar_repository.dart';

class HomeController {
  List<ContasAPagarModel> contasAPagar = [];
  final _repository;
  final state = ValueNotifier<HomeState>(HomeState.start);

  HomeController([ContasAPagarRepository repository])
      : _repository = repository ?? ContasAPagarRepository();

  Future start() async {
    state.value = HomeState.loading;
    try {
      contasAPagar = await _repository.obterTodasContasAPagar();
      state.value = HomeState.success;
    } catch (e) {
      state.value = HomeState.error;
    }
  }
}

enum HomeState { start, loading, success, error }
