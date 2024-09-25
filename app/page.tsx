import {
  Categories,
  Container,
  Filters,
  Products,
  Title,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Categories />
      <Container>
        <div className="flex gap-20 mt-8">
          <Filters className="w-[250px]" />
          <div className="flex-1">
            <Products />
          </div>
        </div>
        <div className="h-[1000px]"></div>
      </Container>
    </>
  );
}
