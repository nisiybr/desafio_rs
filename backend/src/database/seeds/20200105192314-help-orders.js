module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'help_orders',
      [
        {
          student_id: 1,
          question: 'Boa tarde. Poderiam atualizar o meu treino de pernas.',
          answer: null,
          answered_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 2,
          question:
            'O que vocês me recomendam comer após os treinos de hipertrofia?',
          answer: null,
          answered_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 3,
          question: 'Qual o melhor horário para os treinos de cardio?',
          answer: null,
          answered_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
