import { ThemeToggle } from "@/features/ThemeToggle";
import { Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { FC } from "react";

export const Header: FC = () => {
  return <header className="bg-background py-4">
    <div className="container flex items-center justify-between">
      <Link to='/' className="flex items-center gap-4">
        <Users className="h-10 w-10" />
        <span className="text-3xl font-bold">Список групп</span>
      </Link>
      <ThemeToggle />
    </div>
  </header>
}