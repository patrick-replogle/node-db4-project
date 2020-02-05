exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments();
    table
      .string("name")
      .notNullable()
      .unique();
    table.string("temperature").notNullable();
    table.string("time").notNullable();
    table.string("servings").notNullable();
  });

  await knex.schema.createTable("ingredients", table => {
    table.increments();
    table
      .string("name")
      .notNullable()
      .unique();
  });

  await knex.schema.createTable("steps", table => {
    table.increments();
    table
      .integer("step_number")
      .unsigned()
      .notNullable();
    table
      .text("instruction")
      .notNullable()
      .references();
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("recipe_ingredients", table => {
    table.increments();
    table
      .integer("recipe_id")
      .noNullable.unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("ingredient_id")
      .unsiged()
      .nonNullable()
      .references("id")
      .intable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.float("quantity").nonNullable();
    table.float("measurement");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients");
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
