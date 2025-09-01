import Capabilities from "@/components/Homepage/Capabilities";
import Community from "@/components/Homepage/Community";
import Feature from "@/components/Homepage/Feature";
import Grow from "@/components/Homepage/Grow";
import Hero from "@/components/Homepage/Hero";
import Rewards from "@/components/Homepage/Rewards";
import StartNow from "@/components/Homepage/StartNow";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>OOGA</title>
      </Head>
      <Hero />
      <Grow />
      <Feature />
      <Capabilities />
      <Rewards />
      <Community />
      <StartNow />
    </>
  );
}
