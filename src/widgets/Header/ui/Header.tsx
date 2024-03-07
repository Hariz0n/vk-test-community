import { ThemeToggle } from "@/features/ThemeToggle";
import { Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="bg-background py-6 border-b">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <Users className="h-10 w-10 shrink-0" />
          <span className="text-3xl font-bold line-clamp-1 select-none">Список групп</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};
