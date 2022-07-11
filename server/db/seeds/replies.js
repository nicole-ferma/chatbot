exports.seed = (knex) => {
  return knex('replies')
    .del()
    .then(() => {
      return knex('replies').insert([
        {
          id: 1,
          category: 'greetings',
          repliesArray: JSON.stringify(['greetings, friend', 'howdy', 'hallo']),
        },
        {
          id: 2,
          category: 'farewells',
          repliesArray: JSON.stringify([
            'farewell',
            'until next time',
            'so long',
          ]),
        },
      ])
    })
}
