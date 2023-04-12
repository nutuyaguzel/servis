import { Button } from "react-bootstrap";
import { useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import MainPage from "./pages/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/category-page";
import CategroyDetailsPage from "./pages/category-details-page";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import {
  SET_CATEGORiES,
  setCategoryAction,
} from "./redux/reducers/categoryReducer";
import { useEffect } from "react";

function App() {
  const categoryState = useSelector((state) => state.categoryState);
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    
    api
      .get(
        "https://api.adoptez1artisan.com/public/categories/listMainCategories"
      )
      .then((response) => {
        dispatch(setCategoryAction(response.data.data));
        console.log("<<RESPONSE", response.data.data);
      })
      .catch((err) => {
     
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />
        <Routes>
          <Route index element={<MainPage />} />

          <Route path="category">
            <Route index element={<CategoryPage />} />

            <Route path="detail">
              <Route path=":slug" element={<CategroyDetailsPage />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
