/* PLUGINS */
import { Provider } from "react-redux";
import { store } from "./frontend/reducers/recipe.store";
/* SCREENS */
import Layout from "./frontend/screens/layout/layout.screen";

export default function App() {
	return (
		<Provider store={store}>
            <Layout />
		</Provider>
	);
}