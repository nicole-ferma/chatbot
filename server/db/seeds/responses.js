exports.seed = (knex) => {
  return knex('responses')
    .del()
    .then(() => {
      return knex('responses').insert([
        {
          id: 1,
          category: 'greetings',
          responseArray: JSON.stringify([
            'greetings, friend',
            'howdy',
            'hallo',
          ]),
        },
        {
          id: 2,
          category: 'farewells',
          responseArray: JSON.stringify([
            'farewell',
            'until next time',
            'so long',
          ]),
        },
      ])
    })
}
