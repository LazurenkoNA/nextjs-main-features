interface LinkItemProps {
  name: string;
  url: string;
}

export const SIDEBAR_LINKS: LinkItemProps[] = [
  { name: "Plan", url: "/" },
  { name: "CSR", url: "/data-fetching/csr" },
  { name: "SSR", url: "/data-fetching/ssr" },
  { name: "SSG", url: "/data-fetching/ssg" },
];
