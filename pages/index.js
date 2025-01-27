import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// 35bc86f4a53c49cfb6fac23a0a1126c6
export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Game Detail App</title>
        <meta
          name="description"
          content="app to display game which is perfect for you and latest"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}
