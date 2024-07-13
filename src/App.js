import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './page/home';
import MenuPage from './page/menu';
import MenuCategory from './page/menuCategory';
import theme from './theme/theme';

function App() {
  return (
    <Box className="App" bgcolor={'#13131D'} minHeight={'100vh'}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:id" element={<MenuCategory />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Box>
  );
}

export default App;
