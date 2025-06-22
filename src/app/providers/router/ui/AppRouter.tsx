import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <div className="page-wrapper">{element}</div>
                </Suspense>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
