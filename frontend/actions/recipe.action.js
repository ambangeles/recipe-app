import { store } from "../reducers/recipe.store";
import { recipeActions } from "../reducers/recipe.reducer";
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../../backend/firebase.config";

function recipeActionsApi(){
    const { dispatch } = store;
    const recipe_collection = collection(db, "recipes");

    return {
        getRecipes: async () => {
            const { authentication: { user } } = store.getState();
            dispatch(getRecipesRequest());

            try {
                const recipes_snapshot = await getDocs(query(recipe_collection, where("user_id", "==", user)));
                const recipes = [];
                recipes_snapshot.forEach((doc) => {
                    recipes.push({...doc.data(), id: doc.id});
                });
                dispatch(getRecipesSuccess(recipes));   
            } catch (error) {
                console.log(error);
                dispatch(getRecipesFailure());
            }
        },
        addRecipe: async (params) => {
            const { authentication: { user } } = store.getState();

            try {
                const new_recipe_ref = await addDoc(recipe_collection, {
                    ...params.new_recipe,
                    user_id: user
                });
                if(new_recipe_ref?.id){
                    dispatch(addRecipeSuccess({
                        ...params.new_recipe,
                        id: new_recipe_ref.id,
                        user_id: user
                    }));   
                }
            } catch (error) {
                console.log(error);
            }
        },
        editRecipe: async (params) => {
            const { authentication: { user } } = store.getState();

            try {
                await setDoc(doc(db, `recipes/${params.id}`), {...params, user_id: user }, { merge: true  });
                dispatch(editRecipeSuccess(params));   
            } catch (error) {
                console.log(error);
            }
        },
        deleteRecipe: async (params) => {
            try {
                await deleteDoc(doc(db, `recipes/${params.id}`));
                dispatch(deleteRecipeSuccess(params));   
            } catch (error) {
                console.log(error);
            }
        },
    }
}

const { 
    getRecipesRequest, 
    getRecipesSuccess, 
    getRecipesFailure,
    addRecipeSuccess, 
    editRecipeSuccess, 
    deleteRecipeSuccess 
} = recipeActions;

export default recipeActionsApi();