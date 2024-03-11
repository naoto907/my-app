import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';

import Tables from "@/conpornents/Tables";
import AddModal from "@/conpornents/modal";

const Home = () => {
    return (
        <div>
            <Head>
                <title>My Next.js Site</title>
                <meta name="description" content="Welcome to My Next.js Site!"/>
            </Head>
            
            <main>
                <h1>UserManagement</h1>
                <Tables />
                <AddModal />
            </main>
        </div>
    )
};

export default Home;