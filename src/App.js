import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import "./i18n";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <Body />
        </Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
