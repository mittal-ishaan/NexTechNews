import Image from 'next/image'
import Link from 'next/link'
import NewsList from '@/components/NewsList';
import NavBar from '@/components/NavBar';
import {Button} from '@nextui-org/button'; 
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <h1>Hello World</h1>
      <Link href="/search">About</Link>
      <Button>Click me</Button>
      <NewsList/>
    </main>
  )
}
