import { Box, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";
import { Markdown } from "views/components/Markdown";
import CsrExample from "markdown/csr-example.mdx";

function CSR() {
  return (
    <>
      <Head>
        <title>Client Side Render</title>
      </Head>
      <Stack>
        <Text fontSize="3xl">Client Side Render</Text>
        <Box>
          <Text fontSize="2xl">What is it?</Text>
          <Text fontSize="xl">
            It&apos;s approach that implements interaction with data on the
            client
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl">How?</Text>
          <Text fontSize="xl">
            Thanks to states and effects, we can implement receiving and saving
            data directly in the component, e.g.:
          </Text>
          <Markdown markdown={CsrExample} />
        </Box>
        <Box>
          <Text fontSize="2xl">When?</Text>
          <UnorderedList>
            <ListItem>data needs to be updated frequently</ListItem>
            <ListItem>don&apos;t need SEO</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </>
  );
}

export default CSR;
