import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { day, month, year } from "../constant";

export default function trending() {
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
      <Main fetchDates={`${year - 5}-${month}-${day},${year}-${month}-${day}`} />

    </div>
  )
}
