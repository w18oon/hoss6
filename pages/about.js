import Head from 'next/head';
import Navbar from '../components/navbar';
import Container from '@mui/material/Container';

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Navbar />
      <Container>
        <p>About</p>
      </Container>
    </>
  );
}
