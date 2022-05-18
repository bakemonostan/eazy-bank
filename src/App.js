import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
// import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';

// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [isLargerThan475] = useMediaQuery('(min-width: 475px)');

  return (
    <Box>
      <Box
        as="nav"
        bg="white"
        w="100%"
        p={4}
        color="black"
        shadow="md"
        position="sticky"
      >
        <Flex justify="space-between" align="center">
          <Box>
            <Image src="/images/logo.svg" />
          </Box>
          {/* <Spacer /> */}
          <Box>
            {/* <HamburgerMenuIcon  /> */}
            {isLargerThan475 ? 'Nav stuff ' : <HamburgerIcon w={8} h={8} />}
            {isLargerThan475 ? 'Nav stuff ' : ''}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
