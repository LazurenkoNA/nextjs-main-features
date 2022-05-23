import { Box } from "@chakra-ui/react";

export default function Code({ object }: { object: any }) {
  return <Box as="pre">{JSON.stringify(object, null, 2)}</Box>;
}
