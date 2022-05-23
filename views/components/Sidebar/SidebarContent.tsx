import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SIDEBAR_LINKS } from "./constants";
import NavItem from "./NavItem";

interface SidebarContentProps extends BoxProps {
  onClose: () => void;
}

export default function SidebarContent({
  onClose,
  ...rest
}: SidebarContentProps) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {SIDEBAR_LINKS.map((link) => (
        <NavItem key={link.name} {...link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}
