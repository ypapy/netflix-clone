import { getSession } from "next-auth/react";
import { NextPageContext } from 'next';
import UserInfo from "@/components/UserInfo";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  // const name: string = session['user']?.name || ''
  return {
    props: {
      // name
    }
  }


}

const Home: React.FC<UserInfo> = ({ name }) => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending now" data={movies}/>
        <MovieList title="My List" data={favorites}/>
      </div>
    </>
  );
}

export default Home;
