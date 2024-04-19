///
/// Classe do Plano de Treino
///
class PlanoDeTreino {
    constructor(titulo, frequencia, horarioInicio, horarioFim, totalDeDias, exercicios) {
        this.titulo = titulo; // Nome do treino.
        this.frequencia = frequencia; // Lista dos dias da semana.
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
        this.totalDeDias = totalDeDias; // Quantidade de dias do treino.
        this.exercicios = exercicios; // Lista de exercícios.
    }
}

export default PlanoDeTreino;