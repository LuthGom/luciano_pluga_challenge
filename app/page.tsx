import CardsList from "./components/lists/CardsList";
import { api } from './services/api';

export default async function Home({ searchParams }: { searchParams?: { page?: string } }) {

  return (
    <>
      <main className="w-4/5 mx-auto ">

        <CardsList URL={api}  ></CardsList>
      </main>
    </>
  );
}
