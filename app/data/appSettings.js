import colors from "../configs/colors";

export default [
  {
    id: 1,
    title: "Cook Books",
    description: "Manage your Cookbooks",
    slug: "Cookbooks",
    icon: {
      name: "menu-book",
      library: "MI",
      backgroundColor: colors.success,
    },
  },
  {
    id: 2,
    title: "Inventory",
    description: "Manage your Inventory",
    slug: "Inventory",
    icon: {
      name: "inventory",
      library: "MI",
      backgroundColor: colors.info,
    },
  },
  {
    id: 3,
    title: "Maintenace",
    description: "Home Maintenace Plan",
    slug: "Maintenance",
    icon: {
      name: "home-work",
      library: "MI",
      backgroundColor: colors.black,
    },
  },
  {
    id: 4,
    title: "Meal Planner",
    description: "Manage and Plan your Menus",
    slug: "Meal Planner",
    icon: {
      name: "restaurant-menu",
      library: "MI",
      backgroundColor: colors.warning,
    },
  },
  {
    id: 5,
    title: "My Projects",
    description: "Manage your Projects",
    slug: "Projects",
    icon: {
      name: "arrow-projectile-multiple",
      backgroundColor: colors.primary,
    },
  },
];
