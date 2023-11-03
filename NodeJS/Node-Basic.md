# 1. Node.js Express: Recipes Pagination

Your company is creating a new Recipe Management app. As the
NodeJS developer in the company, you have been given the task to
write a basic Express app that fetches the Recipe list from a data-
store.

The request to the route /recipes returns all the paginated recipes
with default values of page and limit. The query parameters that
can be used to set the pagination criteria are:
• page: The page of the resource to be fetched. Defaults to 1. [NUMBER]
• limit: The number of items to be returned in a single page. Defaults to 3. [NUMBER]

Routes
/recipes?page&/imit - The route to fetch all the recipes from
the data-store. Optional query parameters, page and limit,
help in controlling the number and position of recipes sent
back as a response bv the server.

Examples

# Express: Recipes Pagination

The request to the route `/recipes` returns all the paginated recipes with default values of page and limit. The query parameters that can be used to set the pagination criteria are:

- `page:` The page of the resource to be fetched. Defaults to 1. [NUMBER]
- `limit:` The number of items to be returned in a single page. Defaults to 3. [NUMBER]

### Routes

- `/recipes?page&limit` - The route to fetch all the recipes from the data-store. Optional query parameters, page and limit, help in controlling the number and position of recipes sent back as a response by the server.

### Examples

- `/recipes` - a GET request to get all recipes

```json
[
  {
    "id": 1,
    "name": "Crock Pot Roast"
  },
  {
    "id": 2,
    "name": "Roasted Asparagus"
  },
  {
    "id": 3,
    "name": "Curried Lentils and Rice"
  }
]
```

- `/recipes?page=1&limit=2`

```json
[
  {
    "id": 1,
    "name": "Crock Pot Roast"
  },
  {
    "id": 2,
    "name": "Roasted Asparagus"
  }
]
```

```javaScript
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
```

# 2. Express: Pagination Middleware

You have been given the task to write an Express middleware that has to standardize the query, search, and projection parameters for all the endpoints.

The middleware should parse the query parameter from the URL and create an object containing the following properties:

- `page:` The page of the resource to fetch. Defaults to 1. [NUMBER]
- `limit:` The number of items to return in a response. Defaults to 3. [NUMBER]
- `skip:` The actual number of items that have to skip while fetching the data. Its value is ((page - 1) \* limit). [NUMBER]
- `searchTerm:` The search term to be used in the data-store query. The term is extracted from the q query parameter. [STRING]
- `search:` A Regex expression that can be evaluated to match the names of the items in the recipes. The search should be global and case insensitive ("gi"). [RegexP]

The generated object should then be added to the context property in the Express request object, and the control should be forwarded using the next function.

### Routes

- `/recipes?page&limit&q` - The route to fetch all the recipes from the data-store. Optional query parameters `page`, `limit`, and `q` help in controlling the number and position of recipes sent back as a response by the server.

### Examples

- `/recipes - a GET request to get all recipes`

```json
{
  "page": 1,
  "limit": 3,
  "skip": 0,
  "data": [
    {
      "id": 1,
      "name": "Roast"
    },
    {
      "id": 2,
      "name": "Asparagus"
    },
    {
      "id": 3,
      "name": "Rice"
    }
  ]
}
```

- `/recipes?page=1&limit=2`

```json
{
  "page": 1,
  "limit": 2,
  "skip": 0,
  "data": [
    {
      "id": 1,
      "name": "Roast"
    },
    {
      "id": 2,
      "name": "Asparagus"
    }
  ]
}
```

- `/recipes?page=2&limit=3`

```json
{
  "page": 2,
  "limit": 3,
  "skip": 3,
  "data": [
    {
      "id": 4,
      "name": "Pizza"
    },
    {
      "id": 5,
      "name": "Recipe"
    },
    {
      "id": 6,
      "name": "Puds"
    }
  ]
}
```

- `/recipes?page=1&limit=3&q=cr`

```json
{
  "page": 1,
  "limit": 3,
  "skip": 0,
  "search": "cr",
  "data": [
    {
      "id": 1,
      "name": "Crock"
    },
    {
      "id": 5,
      "name": "Cranberry"
    }
  ]
}
```
