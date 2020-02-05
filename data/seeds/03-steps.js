exports.seed = function(knex, Promise) {
  return knex("steps").insert([
    { step_number: 1, instruction: "make dough", recipe_id: 1 },
    { step_number: 2, instruction: "pour sauce on dough", recipe_id: 1 },
    { step_number: 3, instruction: "add toppings", recipe_id: 1 },
    { step_number: 4, instruction: "bake for 20 min", recipe_id: 1 },
    { step_number: 1, instruction: "Warm water to boiling", recipe_id: 2 },
    { step_number: 2, instruction: "Add pasta to water", recipe_id: 2 },
    { step_number: 3, instruction: "Heat up sauce", recipe_id: 2 },
    {
      step_number: 4,
      instruction:
        "Pour sauce on to pasta and add parmesan to your heart's content",
      recipe_id: 2
    }
  ]);
};
