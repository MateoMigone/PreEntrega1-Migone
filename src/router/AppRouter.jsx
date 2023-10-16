import { Route, Routes } from "react-router-dom";
import LayoutContainer from "../components/layouts/LayoutContainer";
import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutContainer />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
