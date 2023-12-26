'use client';
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar';
import {Button} from '@nextui-org/button'; 
import {NextUIProvider} from "@nextui-org/react";
import Explore from '@/components/Explore';
import Search from '@/components/Search';
import React, { useEffect } from 'react';

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [isMediumScreen, setIsMediumScreen] = React.useState(false);
  const [searchbar, setSearchbar] = React.useState(true);
  const [keyword, setKeyword] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);


  return (
    <main className={`text-foreground bg-background ${darkMode ? 'dark' : ''}`}>
          <NavBar 
            searchbar={searchbar}
            setSearchbar={setSearchbar}
            keyword={keyword}
            setKeyword={setKeyword} 
            darkMode={darkMode}
            setDarkMode={setDarkMode}       
          />
        {searchbar ?
          <Search
            searchbar={searchbar}
            setSearchbar={setSearchbar}
            keyword={keyword}
            setKeyword={setKeyword}
          />:  
          <>    
            <Explore
              darkMode={darkMode}
              keyword={keyword}
            />
          </>
        }
    </main>
  )
}
