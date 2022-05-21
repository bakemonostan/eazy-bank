import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const HeroSecton = () => {
  return (
    // MAIN CONTAINER
    <Box
      as="section"
      background="url('./images/bg-intro-mobile.svg') no-repeat 0 -3em"
      backgroundSize="375px"
      h="100vh"
    >
      {/* IMAGE AND INFO CONTAINER */}
      <Flex direction="column" justify="space-between">
        {/* IMAGE CONTAINER */}
        <Flex flex="auto">
          <Image
            maxW="100%"
            src="/images/image-mockups.png"
            position="relative"
            bottom="6em"
            px="1rem"
          />
        </Flex>
        <Box>
          <Flex
            flex="auto"
            direction="column"
            align="center"
            textAlign="center"
            mt="-3em"
          >
            <Text
              as="h1"
              fontSize={['2.5em', '4em']}
              lineHeight="1.2"
              pb=".5em"
            >
              Next generation digital banking
            </Text>
            <Text px=".5em" pb="2em">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing and much
              more.
            </Text>

            <Button
              bgGradient="linear(155deg, green.300 40%, blue.300 70%) "
              variant="solid"
              w="40"
              color="white"
              borderRadius="40px"
            >
              Request Invite
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default HeroSecton;
