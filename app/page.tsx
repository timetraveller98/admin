import { NextPage } from "next";
import Link from "next/link";

 

const Home: NextPage = async() => {
  return (
    <div>
 <Link href={'/admin'}>Admin</Link>
    </div>
  );
};
export default Home;
