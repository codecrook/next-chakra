import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Flex, VStack } from '@chakra-ui/react';
import Details from '../src/sections/details';
import Cart from '../src/sections/Cart';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Chakra</title>
      </Head>
      <Container maxW={'container.xl'} p={0}>
        <Flex h="100vh" py={20}>
          <Details />
          <Cart />
        </Flex>
      </Container>

    </>
  );
};

export default Home;
