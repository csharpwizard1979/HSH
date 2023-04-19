export default [
  {
    id: 1,
    title: "Smith Family Cookbook",
    description: "Our Family Secrets",
    image: require("../../assets/recipe-cover.jpg"),
    recipes: [
      {
        id: 1,
        title: "Main Recipe",
        description: "Instructions included",
        image: require("../../assets/cooking.jpg"),
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
