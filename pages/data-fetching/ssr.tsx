import {
  Box,
  ListItem,
  Link,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Code } from "views/components/Code";

// export var __N_SSP = true;

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  // https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#caching-with-server-side-rendering-ssr
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );
  const data = {}; // mocked, result from request

  // if (!data) {
  //   return {
  //     // redirect on 404 page
  //     notFound: true,
  //   };
  // }
  // if (!data) {
  //   return {
  //     // custom redirect
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { test: "ssr", user: { name: "getServerSideProps" }, data },
  };
}

function SSR(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Server Side Rendering</title>
      </Head>
      <Stack>
        <Text fontSize="3xl">Server Side Rendering</Text>
        <Box>
          <Text fontSize="xl">
            Props from{" "}
            <Link
              href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#when-does-getserversideprops-run"
              isExternal
            >
              getServerSideProps{" "}
            </Link>
            :
          </Text>
          <Code object={props} />
        </Box>
        <Box>
          <Text fontSize="2xl">What is it?</Text>
          <Text fontSize="xl">
            It&apos;s the ability of an application to contribute by displaying
            the web-page on the server instead of rendering it in the browser.
            Server-side sends a fully rendered page to the client; the
            client&apos;s JavaScript bundle takes over and allows the SPA
            framework to operate.
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl">How?</Text>
          <Text fontSize="xl">
            Thanks to isomorphic rendering, JavaScript can now run both in the
            server and the client, which makes sharing rendering logic possible.
          </Text>
          <Text fontSize="xl">
            Essentially allows you to lay out a certain part of the logic on the
            server, then to send it to the client
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl">When?</Text>
          <UnorderedList>
            <ListItem>data needs to be updated frequently</ListItem>
            <ListItem>need SEO</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </>
  );
}

export default SSR;
