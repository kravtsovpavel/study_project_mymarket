import React from"react";
import { HashRouter,Routes,Route } from "react-router-dom";
import { product } from './mocks/product';

import PageIndex from './pages/PageIndex/PageIndex';
import PageProduct from './pages/PageProduct/PageProduct';
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="/product" element={<PageProduct product={product} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>      
    </div>
  );
}

export default App;

