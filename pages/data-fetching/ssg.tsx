import {
  Box,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Code } from "views/components/Code";
import { Markdown } from "views/components/Markdown";
import ssgExample from "markdown/ssg-example.mdx";

// export var __N_SSG = true;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: { test: "ssg", user: { name: "getStaticProps" } },
  };
}

function SSG(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Static Site Generation</title>
      </Head>
      <Stack>
        <Text fontSize="3xl">Static Site Generation</Text>

        <Box>
          <Text fontSize="xl">
            Props from{" "}
            <Link
              href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props#when-does-getstaticprops-run"
              isExternal
            >
              getStaticProps{" "}
            </Link>
            :
          </Text>
          <Code object={props} />
        </Box>
        <Box>
          <Text fontSize="2xl">What is it?</Text>
          <Text fontSize="xl">
            It&apos;s a tool that generates a full static HTML website based on
            raw data and a set of templates. Essentially, a static site
            generator automates the task of coding individual HTML pages and
            gets those pages ready to serve to users ahead of time.
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl">How?</Text>
          <Text fontSize="xl">
            Generate all your website pages as static pages each time your
            content changes. connect your content to your CI engine using
            webhooks for instance, so that each time your content changes, a CI
            pipeline is triggered, thus rebuilding all your website and
            invalidating the cache.
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl">When?</Text>
          <UnorderedList>
            <ListItem>performance</ListItem>
            <ListItem>need SEO</ListItem>
          </UnorderedList>
        </Box>
        <Markdown markdown={ssgExample} />
      </Stack>
    </>
  );
}

export default SSG;
