import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './page/home';
import MenuPage from './page/menu';
import MenuCategory from './page/menuCategory';
import theme from './theme/theme';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store';
import Favorite from './page/favorite';
import RandomMeal from './page/random';
import AboutUsPage from './page/about';

function App() {
  return (
    <Box className="App" bgcolor={'#13131D'} minHeight={'100vh'}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/menu/:id" element={<MenuCategory />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/random" element={<RandomMeal />} />
                <Route path="/about" element={<AboutUsPage />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Box>
  );
}

export default App;
