import * as Yup from "yup";

const RecipeSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("title"),
  description: Yup.string().required().min(1).label("description"),
  image: Yup.string().label("image"),
  category: Yup.string().required().min(1).label("category"),
  isFavorite: Yup.bool().label("isFavorite"),
  instructioins: Yup.string().label("instructions"),
  ingredients: Yup.array().object().label("ingredients"),
});

export default RecipeSchema;
