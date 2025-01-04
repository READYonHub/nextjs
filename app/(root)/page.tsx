import SerachForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);
  
  console.log(JSON.stringify(posts))

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
