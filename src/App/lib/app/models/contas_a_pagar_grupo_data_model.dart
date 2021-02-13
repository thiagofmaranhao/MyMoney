import 'contas_a_pagar_model.dart';

class ContasAPagarGrupoDataModel {
  DateTime dataVencimento;
  List<ContasAPagarModel> contasAPagar;

  ContasAPagarGrupoDataModel({this.dataVencimento, this.contasAPagar});

  ContasAPagarGrupoDataModel.fromJson(Map<String, dynamic> json) {
    dataVencimento = DateTime.parse(json['dataVencimento']);
    if (json['contasAPagar'] != null) {
      contasAPagar = new List<ContasAPagarModel>();
      json['contasAPagar'].forEach((v) {
        contasAPagar.add(new ContasAPagarModel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['dataVencimento'] = this.dataVencimento.toString();
    if (this.contasAPagar != null) {
      data['contasAPagar'] = this.contasAPagar.map((v) => v.toJson()).toList();
    }
    return data;
  }
}
