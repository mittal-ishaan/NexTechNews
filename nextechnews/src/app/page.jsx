'use client';
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar';
import {Button} from '@nextui-org/button'; 
import {NextUIProvider} from "@nextui-org/react";
import Explore from '@/components/Explore';
import Search from '@/components/Search';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [country, setCountry] = useState("");
  const [articleStartDate, setArticleStartDate] = useState("");
  const [articleEndDate, setArticleEndDate] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [selectedProviders, setSelectedProviders] = useState([]);


  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 640);
    setIsMediumScreen(window.innerWidth < 768);
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <main className={`text-foreground bg-background ${darkMode ? 'dark' : ''}`}>
          <NavBar 
            searchbar={searchbar}
            setSearchbar={setSearchbar}
            keyword={keyword}
            setKeyword={setKeyword} 
            darkMode={darkMode}
            setDarkMode={setDarkMode}  
            sortBy={sortBy}
            setSortBy={setSortBy}
            articleStartDate={articleStartDate}
            setArticleStartDate={setArticleStartDate}
            articleEndDate={articleEndDate}
            setArticleEndDate={setArticleEndDate}
            selectedProviders={selectedProviders}
            setSelectedProviders={setSelectedProviders}  
          />
        {searchbar ?
          <Search
            setSearchbar={setSearchbar}
            setKeyword={setKeyword}
            setCountry={setCountry}
          />:  
          <>    
            <Explore
              darkMode={darkMode}
              keyword={keyword}
              country={country}
              isSmallScreen={isSmallScreen}
              isMediumScreen={isMediumScreen}
              sortBy={sortBy}
              setSortBy={setSortBy}
              articleStartDate={articleStartDate}
              articleEndDate={articleEndDate}
              setArticleStartDate={setArticleStartDate}
              setArticleEndDate={setArticleEndDate}
              selectedProviders={selectedProviders}
              setSelectedProviders={setSelectedProviders}
            />
          </>
        }
    </main>
  )
}
