import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = () => {
    setIsAuthModal((prev) => !prev);
  };

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ThemeButton.BACKGROUND}>
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        ++++++++++++++++++++
      </Modal>
    </div>
  );
};
