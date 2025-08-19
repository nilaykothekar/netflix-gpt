import { Fragment } from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';
import Body from './components/Body';

const App = () => {
  return (
    <Fragment>
      <Body />
    </Fragment>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
