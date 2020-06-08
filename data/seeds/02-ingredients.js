exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "flour" },
    { name: "cheese" },
    { name: "tomato sauce" },
    { name: "pepperoni" },
    { name: "pasta" },
    { name: "Pasta Sauce" },
    { name: "Parmesan" }
  ]);
};
