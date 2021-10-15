import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Flex } from '@chakra-ui/react';
import Details from '../src/sections/details';
import Cart from '../src/sections/cart';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Chakra</title>
      </Head>
      <Container maxW={'container.xl'} p={0}>
        <Flex
          h={{ base: 'auto', md: '100vh' }}
          py={[0, 10, 20]}
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Details />
          <Cart />
        </Flex>
      </Container>

    </>
  );
};

export default Home;
