import { Header } from "@/widgets/Header";
import { Outlet } from "@tanstack/react-router";
import { FC } from "react";

export const GlobalLayout: FC = () => {
  return <>
    <Header />
    <Outlet />
  </>
} 