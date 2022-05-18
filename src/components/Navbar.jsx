import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Image, List, ListItem } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

const Navbar = () => {
  const [isLargerThan660] = useMediaQuery('(min-width: 660px)');
  return (
    <Box as="nav" bg="white" px={8} py={4} color="black">
      <Flex
        justify={{ base: 'space-between', lg: 'space-around' }}
        align="center"
      >
        <Box>
          <Image src="/images/logo.svg" />
        </Box>

        {isLargerThan660 ? (
          <List>
            <Flex direction="row" gap="5" align="start">
              <ListItem>Home</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Contact</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Careers</ListItem>
            </Flex>
          </List>
        ) : (
          <HamburgerIcon w={6} h={6} />
        )}
        {isLargerThan660 ? (
          <Box>
            <Button
              bgGradient="linear(155deg, green.300 40%, blue.300 70%) "
              variant="solid"
              w="40"
              color="white"
              borderRadius="40px"
            >
              Request Invite
            </Button>
          </Box>
        ) : (
          ''
        )}
      </Flex>
    </Box>
  );
};
export default Navbar;
