import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductsStore from "./Components/ProductsStore";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteLayout from "./Components/RouteLayout";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
