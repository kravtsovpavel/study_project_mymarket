import React from"react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { product } from './mocks/product';

import PageIndex from './pages/PageIndex/PageIndex';
import PageProduct from './pages/PageProduct/PageProduct';
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="/product" element={<PageProduct product={product} />} />
          {/* <Route path="/*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;

