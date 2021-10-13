import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Chakra</title>
      </Head>
      <Container maxW={'container.xl'} p={0}>
        <h1>Hello, Next Chakra</h1>
      </Container>

    </>
  );
};

export default Home;
