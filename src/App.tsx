import { BrowserRouter as Router } from 'react-router-dom';
import { Root } from './routes';
import { AuthContextProvider } from './contexts/Auth';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Root />
      </Router>
    </AuthContextProvider>
  );
}

export default App;