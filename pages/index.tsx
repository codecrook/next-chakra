import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Flex } from '@chakra-ui/react';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Chakra</title>
      </Head>
      <Container maxW={'container.xl'} p={0}>
        <Flex h="100vh" py={20}>
          <h1>Hello, Next Chakra</h1>
        </Flex>
      </Container>

    </>
  );
};

export default Home;
