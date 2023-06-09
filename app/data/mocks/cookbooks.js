export default [
  {
    id: 1,
    title: "Smith Family Cookbook",
    description: "Our Family Secrets",
    image: require("../../assets/recipe-cover.jpg"),
    recipes: [
      {
        id: 1,
        title: "White Cake",
        description: "Instructions included",
        image: require("../../assets/cooking.jpg"),
        category: "desserts",
      },
      {
        id: 2,
        title: "Pizza",
        description: "Instructions included",
        image: require("../../assets/cooking.jpg"),
        category: "mainEntrees",
      },
      {
        id: 3,
        title: "Turkey Casserole",
        description: "Instructions included",
        image: require("../../assets/cooking.jpg"),
        category: "mainEntrees",
      },
      {
        id: 4,
        title: "Green Salad",
        description: "Instructions included",
        image: require("../../assets/cooking.jpg"),
        category: "salads",
      },
      {
        id: 5,
        title: "Pasta and Noodles",
        description: "Instructions included",
        image: require("../../assets/cooking.jpg"),
        category: "pasta",
      },
      {
        id: 6,
        title: "Snack-Pac",
        description: "Instructions included",
        image: require("../../assets/cooking.jpg"),
        category: "snacks",
      },
    ],
  },
  {
    id: 2,
    title: "Holiday Cookbook",
    description: "A touch of the Holidays",
    image: require("../../assets/recipe-cover-alt.jpg"),
    recipes: [],
  },
  {
    id: 3,
    title: "Seasonal Cookbook",
    description: "Cooking for every season",
    image: require("../../assets/cooking.jpg"),
    recipes: [],
  },
];
