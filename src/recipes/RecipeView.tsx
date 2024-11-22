import { useRecipeViewController } from "./RecipeViewController";

export const RecipeView: React.FC = () => {
    const {
        recipe
    } = useRecipeViewController();

    return <>
        <b>{recipe.name}</b>
        <p>{recipe.description}</p>
    </>
};