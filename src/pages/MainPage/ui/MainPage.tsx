import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/counter";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("mainPage");

  return (
    <div>
      <div>
        {t("Главная страница")} <BugButton />
      </div>

      <Counter />
    </div>
  );
};

export default MainPage;
