import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={"/"}
        >
          {t("Главная")}
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          {t("О сайте")}
        </AppLink>
      </div>
    </div> 
  );
};
