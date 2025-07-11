import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { InputHTMLAttributes, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = "text",
    placeholder,
    value,
    onChange,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      className={classNames(cls.Input, {}, [className])}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
});
