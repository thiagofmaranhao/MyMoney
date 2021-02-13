class ContasAPagarModel {
  String id;
  String nome;
  String descricao;
  double valor;
  DateTime dataVencimento;

  ContasAPagarModel(
      {this.id, this.nome, this.descricao, this.valor, this.dataVencimento});

  ContasAPagarModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    nome = json['nome'];
    descricao = json['descricao'];
    valor = json['valor'].toDouble();
    dataVencimento = DateTime.parse(json['dataVencimento']);
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['nome'] = this.nome;
    data['descricao'] = this.descricao;
    data['valor'] = this.valor.toString();
    data['dataVencimento'] = this.dataVencimento.toString();
    return data;
  }
}
