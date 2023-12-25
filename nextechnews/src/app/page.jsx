import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar';
import {Button} from '@nextui-org/button'; 
import {NextUIProvider} from "@nextui-org/react";
import Explore from '@/components/Explore';

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Explore/>
    </main>
  )
}
