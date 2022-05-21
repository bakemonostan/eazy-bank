import React from 'react';
import HeroSecton from './components/HeroSecton';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSecton />
        {/* <Box w="100%" h="400px"></Box> */}
      </main>
    </>
  );
}

export default App;
