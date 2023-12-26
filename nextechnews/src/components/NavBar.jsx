'use client';
import React, { useState } from 'react';
import {
	Button,
	Link,
	Input,
	Navbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";
import {
	GithubIcon,
	SearchIcon,
  SunIcon,
  MoonIcon,
} from "@/components/icons";
import NextLink from "next/link";



export default function NavBar({searchBar ,setSearchbar, keyword, setKeyword, darkMode, setDarkMode}) {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(searchQuery);
    console.log(keyword);
    setSearchQuery("");
  };

  const searchInput = (
		<form onSubmit={handleSearchSubmit} className="flex items-center">
			<Input
			aria-label="Search"
			classNames={{
				inputWrapper: 'bg-default-100 w-96',
				input: 'text-sm',
        
			}}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" size={18} />
			}
			type="search"
			value={searchQuery}
			onChange={handleInputChange}
			/>
			<NavbarItem className="hidden md:flex ml-2">
				<Button
					type="submit"
					className="text-sm font-normal text-default-600 bg-default-100"
					variant="flat"
				>
					Search
				</Button>
			</NavbarItem>
		</form>
	);

  return (
    <Navbar isBordered maxWidth="xl" position="sticky">
      <NavbarBrand className="gap-3 max-w-fit basis-1/5 sm:basis-full">
        {/* Icon */}
        <NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-inherit">nexTechNews</p>
					</NextLink>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='center'>
        {searchInput}
      </NavbarContent>
      <NavbarContent justify="end" className='hidden sm:flex'>
        <NavbarItem className='flex'>
        <Link isExternal href="https://github.com/mittal-ishaan" className='m-2'>
          <GithubIcon className="text-default-500" />
        </Link>
          <Switch
            isSelected={darkMode}
            size="lg"
            color="success"
            startContent={<MoonIcon />}
            endContent={<SunIcon />}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          <Button as={Link} href="#" variant="flat">
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='sm:hidden basis-1 pl-4' justify="end">
        <Link isExternal href="https://github.com/mittal-ishaan">
            <GithubIcon className="text-default-500" />
          </Link>
          <Switch
            isSelected={darkMode} 
            size="lg"
            color="success"
            startContent={<MoonIcon />}
            endContent={<SunIcon />}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
    <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {searchInput}
      </NavbarMenu>
    </Navbar>
  );
}
