import { ContextProvider } from './contexts/contextProviders';
import AppRouter from './routes/routes';

function App() {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  );
}

export default App;
