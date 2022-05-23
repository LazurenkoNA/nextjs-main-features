import { Box, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";

function Plan() {
  return (
    <>
      <Head>
        <title>Plan</title>
      </Head>
      <Stack>
        <Text fontSize="3xl">Plan</Text>
        <Box>
          <Text fontSize="xl">For each feature there will be such points:</Text>
          <UnorderedList>
            <ListItem>What is it? (explanation)</ListItem>
            <ListItem>How? (implementation)</ListItem>
            <ListItem>When? (when to use)</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </>
  );
}

export default Plan;
