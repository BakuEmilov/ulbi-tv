import "app/styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { useEffect } from "react";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() <  0.5) {
      throw new Error()
    }
  }, [])

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
