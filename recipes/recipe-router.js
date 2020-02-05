const express = require("express");
const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Recipes.getRecipes());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const recipe = await Recipes.getRecipeById(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: "That recipe id does not exist" });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:id/shoppinglist", async (req, res, next) => {
  try {
    const shoppingList = await Recipes.getShoppingList(req.params.id);
    if (shoppingList) {
      res.json(shoppingList);
    } else {
      res.status(404).json({ message: "That shopping list does not exist" });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:id/instructions", async (req, res, next) => {
  try {
    const steps = await Recipes.getInstructions(req.params.id);
    if (steps) {
      res.json(steps);
    } else {
      res.status(404).json({ message: "Those steps dont't exist!" });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:id/ingredients", async (req, res, next) => {
  try {
    const recipes = await Recipes.getRecipesByIngredient(req.params.id);
    if (recipes.length > 0) {
      res.json(recipes);
    } else {
      res
        .status(404)
        .json({ message: "No recipes exist with that ingredient" });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name
    };
    if (!req.body.name) {
      res.status(400).json({ message: "Please include recipe name!" });
    } else {
      res.status(201).json(await Recipes.addRecipe(payload));
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name
    };
    if (!req.body.name) {
      res.status(400).json({ message: "Please include name" });
    }
    const recipe = await Recipes.getRecipeById(req.params.id);
    if (recipe) {
      return res
        .status(201)
        .json(await Recipes.updateRecipe(req.params.id, payload));
    } else {
      res.status(404).json({ message: "That id doesn't exist" });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const recipe = await Recipes.getRecipeById(req.params.id);
    if (recipe) {
      return res.status(204).json(await Recipes.removeRecipe(req.params.id));
    } else {
      res.status(404).json({ message: "id does not exist" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
