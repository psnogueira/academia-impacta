// Tipos de Plano de Assinatura.
const tipoDeAssinatura = {
    basico: "Plano Básico",
    gold: "Plano Gold",
    premium: "Plano Premium"
}

// Dias da Semana.
const calendario = [
    { dia: 'Domingo', inicio: '', fim: '' },
    { dia: 'Segunda', inicio: '', fim: ''},
    { dia: 'Terça', inicio: '', fim: '' },
    { dia: 'Quarta', inicio: '', fim: '' },
    { dia: 'Quinta', inicio: '', fim: '' },
    { dia: 'Sexta', inicio: '', fim: '' },
    { dia: 'Sábado', inicio: '', fim: '' },
];

///
/// Classe do Membro
///
class Membro {
    constructor(nome, idade, endereco, telefone, cpf, planoDeAssinatura){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
        this.planoDeAssinatura = planoDeAssinatura;
        this.planosDeTreino = [];
    }
}

///
/// Classe do Plano de Treino
///
class planoDeTreino {
    constructor(titulo, frequencia, horarioInicio, horarioFim, totalDeDias, exercicios) {
        this.titulo = titulo; // Nome do treino.
        this.frequencia = frequencia; // Lista dos dias da semana.
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
        this.totalDeDias = totalDeDias; // Quantidade de dias do treino.
        this.exercicios = exercicios; // Lista de exercícios.
    }
}

///
/// Classe do Instrutor
///
class Instrutor {
    constructor(nome, especialidades, agenda) {
        this.nome = nome;
        this.especialidades = especialidades; // Lista das especialidades.
        this.agenda = agenda; // Lista dos dias, e dos horários disponíveis de cada dia.
    }
}

///
/// Classe da Aula
///
class Aula {
    constructor(titulo, dia, horarioInicio, horarioFim) {
        this.titulo = titulo; // Nome da Aula.
        this.dia = dia; // Dia da aula.
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
    }
}

///
/// Classe da Academia
///
class Academia {
    constructor() {
        this.membros = [];
        this.instrutores = [];
        this.aulas = [];
    }

    registrarMembro(nome, idade, endereco, telefone, cpf, planoDeAssinatura) {
        const novoMembro = new Membro(nome, idade, endereco, telefone, cpf, planoDeAssinatura);
        this.membros.push(novoMembro);
    }

    registrarInstrutor(nome, especialidades, agenda) {
        const novoInstrutor = new Instrutor(nome, especialidades, agenda);
        this.instrutores.push(novoInstrutor);
    }

    listarMembros() {
        if (!this.membros.length) {
            console.log("Não há membros cadastrados.")
        }
        else
        {
            console.log("Membros da Academia: ")
            this.membros.forEach((membro, index) => {
                console.log(`${index + 1}. ${membro.nome}`);
            });
        }
    }

    listarInstrutores() {
        if (!this.instrutores.length) {
            console.log("Não há instrutores cadastrados.")
        }
        else
        {
            console.log("Instrutores da Academia: ")
            this.instrutores.forEach((instrutor, index) => {
                console.log(`${index + 1}. ${instrutor.nome}`);
            });
        }
    }

    agendarAula(instrutor, horarioInicio) {
        if (!this.aulas.length) {
            console.log("Não há aulas agendadas.")
        }
        else
        {

        }
    }

}

const academia = new Academia();
academia.registrarMembro("Ana Silva", 28, "123 Main Street, Redmond, WA", "(555) 123-4567", "123-45-6789", tipoDeAssinatura["basico"]);
academia.registrarMembro("Carlos Oliveira", 35, "456 Elm Avenue, Seattle, WA", "(555) 987-6543", "987-65-4321", tipoDeAssinatura["basico"]);
academia.listarMembros();

academia.registrarInstrutor("João Trapézio", "Musculação", [
    {dia: 1, inicio: '10:30', fim: '22:00'},
    {dia: 2, inicio: '11:00', fim: '22:30'}
]);
academia.registrarInstrutor("Maria Levanta Ferro", "Musculação", [
    {dia: 1, inicio: '9:30', fim: '22:00'},
    {dia: 2, inicio: '10:00', fim: '22:30'}
]);
academia.listarInstrutores();




// Array of reserved time slots
const reservedTimeSlots = [
    { start: '10:00', end: '11:00' },
    { start: '13:00', end: '14:00' },
    { start: '16:00', end: '17:00' }
];

// Function to check if a time slot is available
function isTimeSlotAvailable(start, end, duration) {
    // Convert time slots to a format that can be compared
    const startTime = start + '-' + end;
    const endTime = end + '-' + start;

    // Check if the time slot is not in the reserved time slots array
    // and if the duration is available
    return (
        !reservedTimeSlots.some(
        (reservedSlot) =>
            (start <= reservedSlot.start && end >= reservedSlot.start) ||
            (start <= reservedSlot.end && end >= reservedSlot.end)
        ) && (end - start) >= duration
    );
}

// Example usage
const classStart = '11:00';
const classEnd = '12:00';
const classDuration = 60; // in minutes

if (isTimeSlotAvailable(classStart, classEnd, classDuration)) {
console.log(
    'The time slot from ' +
    classStart +
    ' to ' +
    classEnd +
    ' is available and has a duration of ' +
    classDuration +
    ' minutes.'
);
} else {
console.log(
    'The time slot from ' +
    classStart +
    ' to ' +
    classEnd +
    ' is not available or the duration is not sufficient.'
);
}