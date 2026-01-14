import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import "./i18n";

const App = () => {
    return (
        <Body />
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
