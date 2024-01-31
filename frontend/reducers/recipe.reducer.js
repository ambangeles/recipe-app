import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    is_refreshing: false,
}

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        getRecipesRequest: (state) => {
            list = [];
            state.is_refreshing = true;
        },
        getRecipesSuccess: (state, { payload }) => {
            state.list = payload;
            state.is_refreshing = false;
        },
        getRecipesFailure: (state) => {
            state.is_refreshing = false;
        },
        addRecipeSuccess: ({ list }, { payload }) => {
            list.unshift(payload);
        },
        editRecipeSuccess: (state, { payload }) => {
            const { id } = payload;
            const index = state.list.findIndex((recipe) => recipe.id === id);
            
            state.list[index] = payload;
        },
        deleteRecipeSuccess: (state, { payload }) => {
            const { id } = payload;
            const index = state.list.findIndex((recipe) => recipe.id === id);

            state.list.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        builder.addCase("authentication/signOutUserSuccess", (state) => {
            state.list = [];
        });
    },
})

export const recipeActions = recipeSlice.actions;

export default recipeSlice.reducer;