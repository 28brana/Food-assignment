import { CssBaseline, Menu, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CategoryDetail from './page/categoryDetail';
import Home from './page/home';
import theme from './theme/theme';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<CategoryDetail />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
