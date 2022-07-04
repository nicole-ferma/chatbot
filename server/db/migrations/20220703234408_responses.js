exports.up = (knex) => {
  return knex.schema.createTable('responses', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.text('responseArray')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('responses')
}
