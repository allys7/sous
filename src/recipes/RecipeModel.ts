export type RecipeModel = {
    name: string;
    description: string;
}

export const useRecipeModel = () => {
    const recipe: RecipeModel = {
        name: "Hey",
        description: "Description"
    }

    return { recipe };
}