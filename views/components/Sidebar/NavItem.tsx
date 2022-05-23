import { Flex, FlexProps, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface NavItemProps extends FlexProps {
  children: string | number;
  url: string;
}

export default function NavItem({ url, children, ...rest }: NavItemProps) {
  return (
    <Link href={url} passHref>
      <ChakraLink
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {children}
        </Flex>
      </ChakraLink>
    </Link>
  );
}
