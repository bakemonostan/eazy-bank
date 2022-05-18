import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const HeroSecton = () => {
  return (
    <Box as="section" position="absolute">
      {/* main container */}

      <Flex w="100%" wrap="wrap-reverse">
        {/* text and button container */}
        <Flex direction="column" mt="-100px" align="center">
          <Text
            as="h1"
            fontSize="2.5rem"
            textAlign="center"
            lineHeight="1.2"
            pb="1.5rem"
          >
            Next generation digital banking
          </Text>

          <Text
            px="1rem"
            pb="2rem"
            fontSize="1rem"
            textAlign="center"
            lineHeight="1.4"
          >
            Take your life online. Your Eazybank account will be a one-stop-shop
            for spending, saving, budgeting, investng and much more
          </Text>
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
        </Flex>
        {/* image container */}
        <Box
          position="relative"
          zIndex="-1"
          bgPosition="0 -40px"
          backgroundImage="url(./images/bg-intro-mobile.svg)"
          backgroundRepeat="no-repeat"
          bgSize="100%"
        >
          <Box position="relative" top="-30%" zIndex="0">
            <Image src="./images/image-mockups.png" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
export default HeroSecton;
