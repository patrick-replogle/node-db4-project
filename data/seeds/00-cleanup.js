exports.seed = async knex => {
  await knex("recipe_ingredients").truncate();
  await knex("steps").truncate();
  await knex("ingredients").truncate();
  await knex("recipes").truncate();
};
