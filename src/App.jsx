import React from"react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { product } from './mocks/product';

import PageIndex from './pages/PageIndex/PageIndex';
import PageProduct from './pages/PageProduct/PageProduct';
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="https://kravtsovpavel.github.io/study_project_mymarket/" element={<PageIndex />} />
          <Route path="https://kravtsovpavel.github.io/study_project_mymarket/product" element={<PageProduct product={product} />} />
          <Route path="https://kravtsovpavel.github.io/study_project_mymarket/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;

