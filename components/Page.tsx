import Head from 'next/head'
import { PropsWithChildren } from "react";
import Title from "../components/Title"
import NavBar from "./NavBar";

interface PageProps extends PropsWithChildren {
  title: string;
}

export default function Page({ title, children }: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{`${title} - Beekeeper's Journal E-Shop`}</title>
      </Head>
      <NavBar />
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}