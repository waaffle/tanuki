import { FC } from "react";
import { Container } from ".";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { ArrowRight, Search, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <>
      <Container>
        <div className={cn(className, "py-3 flex justify-between gap-3")}>
          <div className={cn("text-primary text-3xl font-bold")}>TANUKI</div>
          <Input
            type="text"
            placeholder="Поиск по меню"
            className="text-base w-1/2"
          />
          <div className="flex border border-input rounded-md inline-block group">
            <Button variant="ghost" className="text-base border-r rounded-none">
              Войти
            </Button>
            <Button variant="ghost" className="rounded-none relative w-14">
              <ShoppingCart className="h-5 w-5 group-hover:opacity-0 group-hover:transition-opacity absolute" />
              <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:transition-opacity absolute" />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};
