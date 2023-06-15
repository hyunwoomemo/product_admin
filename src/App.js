import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/atoms/GlobalStyle';
import Home from './components/pages/Home/Home';
import Products from './components/pages/Products/Products';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
