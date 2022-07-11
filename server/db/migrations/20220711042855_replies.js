exports.up = (knex) => {
  return knex.schema.createTable('replies', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.text('repliesArray')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('replies')
}
