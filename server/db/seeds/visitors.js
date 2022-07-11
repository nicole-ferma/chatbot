exports.seed = (knex) => {
  return knex('visitors')
    .del()
    .then(() => {
      return knex('visitors').insert([
        {
          id: 1,
          name: 'friend',
        },
      ])
    })
}
