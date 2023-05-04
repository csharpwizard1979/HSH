import colors from "../configs/colors";
import { Routes } from "../components/navigation";

export default [
  {
    id: 1,
    title: "Cook Books",
    description: "Manage your Cookbooks",
    slug: Routes.COOKBOOKS_SCREEN,
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
    slug: Routes.INVENTORY_SCREEN,
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
    slug: Routes.MAINTENANCE_SCREEN,
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
    slug: Routes.MEAL_PLANNER_SCREEN,
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
    slug: Routes.PROJECTS_SCREEN,
    icon: {
      name: "arrow-projectile-multiple",
      backgroundColor: colors.primary,
    },
  },
  {
    id: 6,
    title: "Shopping",
    description: "Manage your Shopping Lists",
    slug: Routes.SHOPPING_HOME_SCREEN,
    icon: {
      name: "shopping-bag",
      library: "MI",
      backgroundColor: colors.danger,
    },
  },
];
