import colors from "../configs/colors";
import { Routes } from "../components/navigation";

export default [
  {
    id: 1,
    title: "Cook Books",
    description: "Manage your Cookbooks",
    slug: Routes.COOKBOOKS,
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
    slug: Routes.INVENTORY,
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
    slug: Routes.MAINTENANCE,
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
    slug: Routes.MEAL_PLANNER,
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
