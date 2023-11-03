var recipes = require('../recipes.json'); // make sure the path to your recipes.json is correct
var router = require('express').Router();

// GET paginated list of recipes
router.get('/', (req, res) => {
// Default values for page and limit
let page = parseInt(req.query.page, 10) || 1;
let limit = parseInt(req.query.limit, 10) || 3;
let startIndex = (page - 1) _ limit;
let endIndex = page _ limit;

// Paginate the recipes
const paginatedRecipes = recipes.slice(startIndex, endIndex);

// Respond with the paginated recipes
res.json(paginatedRecipes);
});

module.exports = router;