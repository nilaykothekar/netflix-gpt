import { Fragment } from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <Fragment>
      <p>App</p>
    </Fragment>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
