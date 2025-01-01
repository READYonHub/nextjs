import SerachForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    title: "Fejlesztő",
    authorr: { _id: 1 },
    category: "Normális állás",
    description: 'Itt vannak juttatások, megbecsülés és versenyképes fizetés is!',
    views: 55,
    _createdAt: new Date(),
    image: "https://as2.ftcdn.net/v2/jpg/02/10/96/95/1000_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg"
  },]
    ;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">A reptéren dolgozom és nagyon jól keresek! 🥹</h1>

        <p className="sub-heading !max-w-3xl">
          Ennél többet nem is akarhatok, hogy akarhatnák!
        </p>

        <SerachForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Keresett eredmény: "${query}"` : "Minden más"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

    </>
  );
}
