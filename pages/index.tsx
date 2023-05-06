import { signOut, getSession } from "next-auth/react";
import { NextPageContext } from 'next';
import UserInfo from "@/components/UserInfo";

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
  
  const name: string = session['user']?.name || ''
  return {
    props: {
      name
    }
  }
  
  
}

const Home: React.FC<UserInfo> = ({ name }) => {

  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix clone</h1>
      <p className="text-white">Logged in as : { name }</p>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">Logout</button>
    </>
  );
}

export default Home;
