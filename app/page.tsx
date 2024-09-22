import { Categories, Container, Filters, Title } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Categories />
      <Container>
        <div className="flex items-center gap-20">
          <Filters className="w-[250px]" />
          <div className="flex-1">Товары</div>
        </div>
        <div className="h-[1000px]"></div>
      </Container>
    </>
  );
}
