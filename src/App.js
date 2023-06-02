import Header from "./components/Header";
import Frontend from "./pages/Frontend";
import "./styles.scss";
import "./mediaquery.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Frontend />} />
      <Route path="/about-me" element={<About />} />
    </Route>
  ),
  { basename: "/my-cv" }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
