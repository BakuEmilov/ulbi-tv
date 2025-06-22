import "app/styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/helpers/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>

      <Link to={"/about"}>О сайте</Link>
      <Link to={"/"}>Главная </Link>

      <AppRouter />
    </div>
  );
};

export default App;
