import { FC } from "react";
import { Container } from ".";
import { cn } from "@/lib/utils";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button, Input } from "../ui";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn(className, "border-b")}>
      <Container className="text-center py-5 flex justify-between gap-3">
        <div className={cn("text-primary text-3xl font-bold")}>TANUKI</div>
        <Input
          type="text"
          placeholder="Поиск по меню"
          className="text-base w-1/2"
        />
        <div className="flex gap-3">
          <Button variant="outline" className="text-base">
            Войти
          </Button>
          <Button variant="outline" className="group relative">
            <b>456 &#8381;</b>
            <span className="h-full w-[1px] bg-black/30 mx-3" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart className="h-4 w-4" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight className="h-5 w-5 absolute right-5 transition -translate-x-2 duration-300 group-hover:opacity-100  group-hover:translate-x-0 opacity-0" />
          </Button>
        </div>
      </Container>
    </header>
  );
};
