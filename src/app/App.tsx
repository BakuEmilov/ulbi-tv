import "app/styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};

export default App;
