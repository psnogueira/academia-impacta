// Imports dos Modelos.
import Membro from "./membro.js";
import Instrutor from "./instrutor.js";
import Aula from "./Aula.js";
import PlanoDeTreino from "./planoDeTreino.js";

import * as fs from 'fs';

///
/// Classe da Academia
///
class Academia {
    constructor() {
        this.membros = [];
        this.instrutores = [];
        this.aulasAgendadas = [];
        this.idCounter = 1;
        this.idAula = 1;
    }

    registrarInstrutor(nome, cpf, especialidades) {
        const novoInstrutor = new Instrutor(this.idCounter, nome, cpf, especialidades);
        this.instrutores.push(novoInstrutor);
        this.idCounter ++;
        console.log("Instrutor registrado.");
    }

    registrarMembro(nome, idade, endereco, telefone, cpf, planoDeAssinatura) {
        const novoMembro = new Membro(this.idCounter, nome, idade, endereco, telefone, cpf, planoDeAssinatura);
        this.membros.push(novoMembro);
        this.idCounter ++;
        console.log("Membro registrado.");
    }

    listarInstrutores() {
        if (!this.instrutores.length) {
            console.log("Não há instrutores cadastrados.");
        }
        else
        {
            console.log("Instrutores da Academia: ");
            this.instrutores.forEach((instrutor, index) => {
                console.log(`${index + 1}. ${instrutor.nome}`);
            });
        }
    }

    listarMembros() {
        if (!this.membros.length) {
            console.log("Não há membros cadastrados.");
        }
        else
        {
            console.log("Membros da Academia: ");
            this.membros.forEach((membro, index) => {
                console.log(`${index + 1}. ${membro.nome}`);
            });
        }
    }

    atualizarInformacoesInstrutor(cpfInstrutor, nome, especialidades) {
        const instrutor = this.instrutores.find(obj => obj.cpf === cpfInstrutor);
        if (instrutor) {
            instrutor.nome = nome;
            instrutor.especialidades = especialidades;
            console.log("Informações Atualizadas!")
        }
        else {
            console.log("Não foi possível atualizar as informações.")
        }
        
    }

    atualizarInformacoesMembro(cpfMembro, nome, idade, endereco, telefone, planoDeAssinatura) {
        const membro = this.membros.find(obj => obj.cpf === cpfMembro);
        if (membro) {
            membro.nome = nome;
            membro.idade = idade;
            membro.endereco = endereco;
            membro.telefone = telefone;
            membro.planoDeAssinatura = planoDeAssinatura;
            console.log("Informações Atualizadas!")
        }
        else {
            console.log("Não foi possível atualizar as informações.")
        }
        
    }

    removerInstrutor(idInstrutor) {
        const instrutor = this.instrutores.find(obj => obj.id === idInstrutor);
        if (instrutor) {
            const indexParaRemover = this.instrutores.indexOf(instrutor);
            this.instrutores.splice(indexParaRemover, 1);
            console.log("Instrutor removido do sistema.");
        }
        else {
            console.log("Instrutor não encontrado.")
        }
    }

    removerMembro(idMembro) {
        const membro = this.membros.find(obj => obj.id === idMembro);
        if (membro) {
            const indexParaRemover = this.membros.indexOf(membro);
            this.membros.splice(indexParaRemover, 1);
            console.log("Membro removido do sistema.");
        }
        else {
            console.log("Membro não encontrado.")
        }
    }

    cancelarAulaAgendada(idAula) {
        const aula = this.aulasAgendadas.find(obj => obj.id === idAula);
        if (aula) {
            const indexParaRemover = this.aulasAgendadas.indexOf(aula);
            this.aulasAgendadas.splice(indexParaRemover, 1);
            console.log("Aula excluida do sistema.");
        }
        else {
            console.log("Aula não encontrada.")
        }
    }

    excluirPlanoDeTreino(idPlano) {

    }

    visualizarInformacoesMembro(cpf) {
        console.log("----- Informações Membro -----");
        const membro = this.membros.find(obj => obj.cpf === cpf);
        console.log(`Membro: ${membro.nome} \nmyID: ${membro.id} \nIdade: ${membro.idade} \nEndereço: ${membro.endereco} \nTelefone: ${membro.telefone} \nCPF: ${membro.cpf} \nPlano de Assinatura: ${membro.planoDeAssinatura}`);
        console.log("--- ---------------------- ---");
    }

    visualizarInformacoesInstrutor(cpf) {
        console.log("----- Informações Instrutor -----");
        const instrutor = this.instrutores.find(obj => obj.cpf === cpf);
        console.log(`Instrutor: ${instrutor.nome} \nmyID: ${instrutor.id} \nEspecialidades: ${instrutor.especialidades}`);
        console.log("--- ------------------------- ---");
    }

    agendarAula(titulo, data, horario, nomeInstrutor, nomeMembro) {
        let disponivel = true;

        this.aulasAgendadas.forEach((aula) => {
            // Checar se já possui uma aula com o mesmo horário no mesmo dia.
            // Checar se o instrutor já possui uma aula com o mesmo horário no mesmo dia.
            if(aula.data === data && aula.horario === horario && aula.nomeInstrutor === nomeInstrutor)
            {
                // Horário e instrutor ocupados.
                disponivel = false;
                return;
            } 
        });

        if (disponivel) {
            // Adicionar aula na lista de aulas agendadas da academia.
            const novaAula = new Aula(this.idAula, titulo, data, horario, nomeInstrutor, nomeMembro);
            this.idAula ++;
            this.aulasAgendadas.push(novaAula);
            console.log("Aula agendada.");
        }
        else
        {
            console.log("Horário indisponível. Por favor escolha outro horário.");
        }
    }

    listarAulasAgendadas() {
        if (!this.aulasAgendadas.length) {
            console.log("Não há aulas agendadas.")
        }
        else
        {
            // Ordenar as aulas agendadas por data.
            if (this.aulasAgendadas.length > 1) {
                this.aulasAgendadas.sort((a, b) => {
                    const dataParteA = a.data.split('/');
                    const dataParteB = b.data.split('/');
                  
                    const dataA = new Date(+dataParteA[2], dataParteA[1] - 1, + dataParteA[0]);
                    const dataB = new Date(+dataParteB[2], dataParteB[1] - 1, + dataParteB[0]);
                  
                    return dataA - dataB;
                });
            }

            // Listar aulas agendadas.
            console.log("Aulas agendadas: ")
            this.aulasAgendadas.forEach((aula, index) => {
                console.log(`${index + 1}. id(${aula.id}) ${aula.data}: Aula de ${aula.titulo} as ${aula.horario} do aluno/a ${aula.nomeMembro} com o/a instrutor/a ${aula.nomeInstrutor}.`);
            });
        }
    }

    criarPlanoDeTreino(cpfMembro, titulo, frequencia, horarioInicio, horarioFim, totalDeDias, exercicios) {
        const membro = this.membros.find(obj => obj.cpf === cpfMembro);
        const novoPlano = new PlanoDeTreino(titulo, frequencia, horarioInicio, horarioFim, totalDeDias, exercicios);
        if (membro) {
            membro.planosDeTreino.push(novoPlano)
            console.log(`Plano de Treino criado para ${membro.nome}.`);
        }
        else {
            console.log("Não foi possível criar um plano de Treino. \nRazão: Membro não encontrado.")
        }
    }

    visualizarPlanosDeTreinoDoMembro(cpf) {
        const membro = this.membros.find(obj => obj.cpf === cpf);
        const planos = membro.planosDeTreino;
        
        if(!membro){
            console.log("Membro não Encontrado.");
            return;
        }
        // titulo, frequencia, horarioInicio, horarioFim, totalDeDias, exercicios
        if (membro.planosDeTreino.length) {
            console.log(`----- Planos de Treino - ${membro.nome} -----`);
            membro.planosDeTreino.forEach((plano, index) => {
                console.log(`${index + 1}. ${plano.titulo} \nExercícios: ${plano.exercicios} \nHorário: ${plano.horarioInicio}-${plano.horarioFim} \nFrequência: ${plano.frequencia} \nTotal de Dias: ${plano.totalDeDias} `);
            });
            console.log("----- --------------------------------- -----");
        }
        else{
            console.log(`Não há planos de treino para ${membro.nome}`);
        }
        
    }

    exportarDadosComoJSON() {
        // Convertendo todos os dados da Academia para JSON.
        const dadosJSONInstrutores = JSON.stringify({
            instrutores : this.instrutores,
            idCounter : this.idCounter
        }, null, 2);

        const dadosJSONMembros = JSON.stringify({
            membros: this.membros,
            idCounter : this.idCounter
        }, null, 2);

        const dadosJSONAulasAgendadas = JSON.stringify({
            aulasAgendadas : this.aulasAgendadas,
        }, null, 2);

        const nomeArquivoInstrutores = "dados/dados_instrutores.json";
        const nomeArquivoMembros = "dados/dados_membros.json";
        const nomeArquivoAulasAgendadas = "dados/dados_aulasAgendadas.json";

        // Criando/Atualizando arquivo JSON.
        fs.writeFile(nomeArquivoInstrutores, dadosJSONInstrutores, (err) => {
            if (err) {
                console.error("Ocorreu um erro na gravação do arquivo JSON ", err);
                return;
            }
            console.log("Arquivo JSON criado/Atualizado.")
        });

        fs.writeFile(nomeArquivoMembros, dadosJSONMembros, (err) => {
            if (err) {
                console.error("Ocorreu um erro na gravação do arquivo JSON ", err);
                return;
            }
            console.log("Arquivo JSON criado/Atualizado.")
        });

        fs.writeFile(nomeArquivoAulasAgendadas, dadosJSONAulasAgendadas, (err) => {
            if (err) {
                console.error("Ocorreu um erro na gravação do arquivo JSON ", err);
                return;
            }
            console.log("Arquivo JSON criado/Atualizado.")
        });
    }

}

export default Academia;