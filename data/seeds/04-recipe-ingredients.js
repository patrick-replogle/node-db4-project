exports.seed = function(knex, Promise) {
  return knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 3, measurement: "Cups" },
    { recipe_id: 1, ingredient_id: 2, quantity: 2, measurement: "Cups" },
    { recipe_id: 1, ingredient_id: 3, quantity: 1, measurement: "Can" },
    {
      recipe_id: 1,
      ingredient_id: 4,
      quantity: 400,
      measurement: "Tasty pepperoni"
    },
    { recipe_id: 2, ingredient_id: 5, quantity: 1, measurement: "Package" },
    { recipe_id: 2, ingredient_id: 6, quantity: 1, measurement: "Jar" },
    { recipe_id: 2, ingredient_id: 7, quantity: 3, measurement: "Tablespoons" }
  ]);
};
