import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  Icon?: () => React.JSX.Element;
  variant?: "outline" | "filled";
};

const Button: React.FC<Props> = ({ children, Icon, variant = "filled" }) => {
  const baseClasses =
    "flex h-12 cursor-pointer justify-center text-center items-center gap-2 rounded-lg px-6 transition-colors uppercase relative z-0 overflow-visible group";

  const variantClasses = {
    filled:
      "bg-primary text-[#121214] border border-primary hover:bg-primary/90 hover:border-primary/90",
    outline:
      "border border-white text-white hover:bg-primary hover:border-primary hover:text-[#121214]",
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant])}
      style={{
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.animation = "pulse 0.6s ease-in-out";
      }}
      onAnimationEnd={(e) => {
        e.currentTarget.style.animation = "";
      }}
    >
      {children}
      {Icon ? (
        <span className="h-4 w-4">
          <Icon />
        </span>
      ) : null}

      <span className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-lg border border-white/50 opacity-0 group-hover:animate-[pulseWave_1s_infinite_ease-out]" />
      <span className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-lg border border-white/50 opacity-0 group-hover:animate-[pulseWave_1s_infinite_ease-out] group-hover:delay-1000" />

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes pulseWave {
          0% {
            transform: scale(0.9, 0.9);
            opacity: 0.6;
          }
          100% {
            transform: scale(1, 1.2);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
};

export default Button;
