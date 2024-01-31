import { configureStore } from '@reduxjs/toolkit'
import recipe_reducer from './recipe.reducer';
import authentication_reducer from './authentication.reducer';

export const store = configureStore({
    reducer: {
        authentication: authentication_reducer,
        recipe: recipe_reducer,
    }
});