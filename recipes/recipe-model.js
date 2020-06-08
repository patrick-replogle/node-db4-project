const db = require("../data/db-config.js");

function getRecipes() {
  return db("recipes").select();
}

function getRecipeById(id) {
  return db("recipes")
    .where("id", id)
    .first();
}

function getShoppingList(id) {
  return db
    .select(
      "ingredients.name",
      "recipe_ingredients.quantity",
      "recipe_ingredients.measurement"
    )
    .from("recipe_ingredients")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db("steps").where({ recipe_id: id });
}

function getRecipesByIngredient(id) {
  return db
    .select("recipes.name")
    .from("recipes")
    .join("recipe_ingredients", "recipe_ingredients.recipe_id", "recipes.id")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .where("ingredients.id", id);
}

function addRecipe(data) {
  return db("recipes")
    .insert(data)
    .then(([id]) => this.getRecipeById(id));
}

function updateRecipe(id, changes) {
  return db("recipes")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.getRecipeById(id) : null));
}

function removeRecipe(id) {
  return db("recipes")
    .where("id", id)
    .del();
}

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient,
  addRecipe,
  updateRecipe,
  removeRecipe
};
