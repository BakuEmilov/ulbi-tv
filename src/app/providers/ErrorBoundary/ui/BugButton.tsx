import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation("mainPage");

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrow = () => setError(true);

  return <Button onClick={onThrow}>{t("Вызов ошибки")}</Button>;
};
