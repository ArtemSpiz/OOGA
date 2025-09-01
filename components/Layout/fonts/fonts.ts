import localFont from "next/font/local";

export const lufga = localFont({
  src: [
    {
      path: "./Lufga-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Lufga-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Lufga-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Lufga-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Lufga-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Lufga-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Lufga-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--local-font-lufga",
});
