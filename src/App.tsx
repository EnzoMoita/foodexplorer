import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';  // Certifique-se de que o caminho está correto

export function App() {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
}
