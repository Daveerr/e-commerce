const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (_req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve categories" });
  }

  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: Product,
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category for this ID" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", (req, res) => {
  // create a new category
  try {
  } catch (error) {}
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  try {
  } catch (error) {}
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  try {
  } catch (error) {}
});

module.exports = router;
