// Import
import Academia from "./Models/Academia.js";

// Tipos de Plano de Assinatura.
const tipoDeAssinatura = {
    basico: "Plano Básico",
    gold: "Plano Gold",
    premium: "Plano Premium"
}

/**
 *
 * 
 *  Testes Manuais
 * 
 * 
**/

// Instanciando a academia.
const academia = new Academia();

//Registrando Instrutores (nome, especialidades).
academia.registrarInstrutor("João", "45678901200", "Musculação e Pilates");
academia.registrarInstrutor("Maria", "21098765400", "Musculação e Nutrição");
academia.registrarInstrutor("André", "89012345600", "Yoga, Pilates e Nutrição");
academia.registrarInstrutor("Camila", "25666901200", "Nutrição");

// Registrando membros (nome, idade, endereco, telefone, cpf, planoDeAssinatura).
academia.registrarMembro("Maria da Silva", 32, "Rua das Flores, 123, Bairro Alegria, São Paulo, SP", "(11) 98765-4321", "12345678900", tipoDeAssinatura["basico"]);
academia.registrarMembro("João Pereira", 45, "Avenida Central, 456, Bairro Centro, Rio de Janeiro, RJ", "(21) 98765-1234", "98765432100", tipoDeAssinatura["basico"]);
academia.registrarMembro("Ana Souza", 28, "Travessa das Palmeiras, 789, Bairro Verde, Belo Horizonte, MG", "(31) 98765-5678", "54321098700", tipoDeAssinatura["gold"]);
academia.registrarMembro("Pedro Oliveira", 50, "Rua dos Pinheiros, 321, Bairro Jardim, Curitiba, PR", "(41) 98765-8765", "76543210900", tipoDeAssinatura["basico"]);
academia.registrarMembro("Fernanda Lima", 29, "Rua das Violetas, 876, Bairro Primavera, Recife, PE", "(81) 98765-3456", "34567890100", tipoDeAssinatura["premium"]);
academia.registrarMembro("Laura Santos", 22, "Alameda das Acácias, 987, Bairro Florido, Porto Alegre, RS", "(51) 98765-2345", "21098765400", tipoDeAssinatura["gold"]);

// Remover Instrutores e Membros.
academia.removerInstrutor(4);
academia.removerMembro(10);

// Listar Instrutores e Membros da Academia.
academia.listarInstrutores();
academia.listarMembros();

// Visualizar Insformações de Instrutor e Membro.
academia.visualizarInformacoesInstrutor("45678901200");
academia.visualizarInformacoesMembro("12345678900");

// Atualizar Informações
academia.atualizarInformacoesInstrutor("45678901200", "João", "Musculação, Pilates e Funcional");
academia.atualizarInformacoesMembro("12345678900", "Maria da Silva", 32, "Rua das Flores, 123, Bairro Alegria, São Paulo, SP", "(11) 98765-4321", tipoDeAssinatura["premium"]);

// Visualizar novamente Instrutores e Membros da Academia.
academia.visualizarInformacoesInstrutor("45678901200");
academia.visualizarInformacoesMembro("12345678900");

// Agendamento de aulas.
academia.listarAulasAgendadas();
academia.agendarAula("Musculação", "24/04/2024", "09:00-10:00", "João", "Maria da Silva");
academia.agendarAula("Troca de Treino", "23/04/2024", "09:00-10:00", "Maria", "Pedro Oliveira");
academia.agendarAula("Pilates", "22/04/2024", "12:00-13:00", "André", "Ana Souza");
academia.agendarAula("Nutrição", "22/04/2024", "12:00-13:00", "André", "João Pereira");
academia.agendarAula("Musculação", "22/04/2024", "10:00-11:00", "Maria", "João Pereira");
academia.listarAulasAgendadas();

// Excluir aula agendada.
academia.cancelarAulaAgendada(2);
academia.listarAulasAgendadas();

// Criar Planos de Treino.
academia.criarPlanoDeTreino("34567890100", "Yoga Matinal", "Diariamente", "7:00", "8:00", 30, "Alongamento, posturas de yoga");
academia.criarPlanoDeTreino("34567890100", "Treino Funcional", "Segunda a Sexta", "12:00", "13:00", 20, "Circuitos, burpees, pranchas");
academia.criarPlanoDeTreino("12345678900", "Treino de Força", "Segundas, Quartas e Qextas", "18:30", "19:30", 12, "Levantamento de peso, agachamentos, flexões");
academia.criarPlanoDeTreino("98765432100", "Treino Funcional", "Segunda a Sexta", "12:00", "13:00", 20, "Circuitos, burpees, pranchas");

// Visualizar Planos de Treino
academia.visualizarPlanosDeTreinoDoMembro("34567890100");

// Exportar todos os dados da Academia como JSON.
// (Instrutores, Membros, Aulas Agendadas, Planos de Treino e IDs)
academia.exportarDadosComoJSON();

