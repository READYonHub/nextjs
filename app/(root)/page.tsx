import Image from "next/image";
import SerachForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">A reptéren dolgozom és nagyon jól keresek! 🥹</h1>

        <p className="sub-heading !max-w-3xl">
          Ennél többet nem is akarhatok, hogy akarhatnák!
        </p>

        <SerachForm query={query} />

      </section>
    </>
  );
}
