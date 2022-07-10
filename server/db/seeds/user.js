exports.seed = (knex) => {
  return knex('user')
    .del()
    .then(() => {
      return knex('user').insert([
        {
          id: 1,
          name: 'friend',
        },
      ])
    })
}
