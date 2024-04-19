///
/// Classe do Membro
///
class Membro {
    constructor(id, nome, idade, endereco, telefone, cpf, planoDeAssinatura){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
        this.planoDeAssinatura = planoDeAssinatura;
        this.planosDeTreino = [];
        this.idPlano = 1;
    }
}

export default Membro;