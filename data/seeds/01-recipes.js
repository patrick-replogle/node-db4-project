exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    {
      name: "Pizza",
      temperature: "425 Degrees",
      time: "15 minutes",
      servings: "One very hungry person"
    },
    {
      name: "Spaghetti",
      temperature: "medium heat",
      time: "20 minutes",
      servings: "Three semi-hungry people"
    }
  ]);
};
