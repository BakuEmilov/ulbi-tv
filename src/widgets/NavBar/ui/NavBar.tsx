import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/authByUsername/ui/LoginModal/LoginModal";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = () => {
    setIsAuthModal(false);
  };

  const onShowModal = () => {
    setIsAuthModal(true);
  };

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Button onClick={onShowModal} theme={ThemeButton.BACKGROUND}>
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
