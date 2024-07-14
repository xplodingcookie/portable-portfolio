import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width="100%"
    >
      <Flex
        maxW="6xl"
        py={4}
        mx="auto"
        width="90%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>© 2024 Dong Li. All rights reserved</Text>
        <Spacer />
        <Text>
        Powered by{' '}
        <Link href="https://github.com/eldoraboo" isExternal>
          @eldoraboo
        </Link>
</Text>
      </Flex>
    </Box>
  );
}
