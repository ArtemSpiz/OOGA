import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  Icon?: () => React.JSX.Element;
  variant?: "outline" | "filled";
};

const Button: React.FC<Props> = ({ children, Icon, variant = "filled" }) => {
  const baseClasses =
    "flex h-12 cursor-pointer justify-center text-center items-center gap-2 rounded-lg px-6 transition-colors uppercase";

  const variantClasses = {
    filled:
      "bg-primary text-[#121214] border border-primary hover:bg-primary/90 hover:border-primary/90",
    outline:
      "border border-white text-white hover:bg-primary hover:border-primary hover:text-[#121214]",
  };

  return (
    <button className={clsx(baseClasses, variantClasses[variant])}>
      {children}
      {Icon ? (
        <span className="h-4 w-4">
          <Icon />
        </span>
      ) : null}
    </button>
  );
};

export default Button;
