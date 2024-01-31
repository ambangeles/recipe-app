import { store } from "../reducers/recipe.store";
import { authenticationActions } from "../reducers/authentication.reducer";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { Alert } from "react-native";

function authenticationActionsApi(){
    const { dispatch } = store;
    const auth = getAuth();

    return {
        loginUser: async (params) => {
            try {
                const { user } = await signInWithEmailAndPassword(auth, params.email, params.password);

                if(user){
                    dispatch(loginUserSuccess(user.uid));
                }
            } catch (error) {
                console.log(error);
                Alert.alert(
                    "Error",
                    "Invalid email or password",
                    [
                        { text: "OK" }
                    ]
                );
            }
        },
        signUpUser: async (params) => {
            try {
                const { user } = await createUserWithEmailAndPassword(auth, params.email, params.password);
                
                if(user){
                    dispatch(signUpUserSuccess(user.uid));
                }
            } catch (error) {
                console.log(error);
                Alert.alert(
                    "Error",
                    "Invalid email or password",
                    [
                        { text: "OK" }
                    ]
                );
            }
        },
        checkUser: () => {
            try {
                onAuthStateChanged(auth, user => {
                    dispatch(checkUserSuccess(user?.uid));
                });
            } catch (error) {
                console.log(error);
            }
        },
        signOutUser: async () => {
            try {
                await signOut(auth);
                dispatch(signOutUserSuccess());
            } catch (error) {
                console.log(error);
            }
        
        }
    }
}

const { 
    loginUserSuccess,
    signUpUserSuccess,
    checkUserSuccess,
    signOutUserSuccess,
} = authenticationActions;

export default authenticationActionsApi();