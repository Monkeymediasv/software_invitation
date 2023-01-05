import React from "react";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";


import { UserRole } from "@prisma/client";
import { unstable_getServerSession, User } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";


const Home: NextPage<{ user: User }> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Tablero</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <>
        <h1 className="text-3xl my-4">Bienvenid@ {user?.name}</h1>

        {user.role === UserRole.ADMIN ? (
          <div className="grid grid-cols-3 gap-x-4 gap-y-4 p-2">
    
          </div>
        ) : (
          <div/>
        )}
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};

export default Home;
