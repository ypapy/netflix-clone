import { getSession } from "next-auth/react";
import { NextPageContext } from 'next';
import UserInfo from "@/components/UserInfo";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/BillBoard";

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

  return (
    <>
      <Navbar />
      {/* <Billboard /> */}
    </>
  );
}

export default Home;
