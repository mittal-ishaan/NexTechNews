import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
// import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const Search = ({searchbar, setSearchbar,keyword, setKeyword}) => {
  return (
    <>
        <Navbar>
            <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">NexTechNews</p>
            </NavbarBrand>
            <NavbarContent justify="center" className="items-center">
            <Input
                classNames={{
                    base: `md:w-96 sm:w-80 h-10`,
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                fullWidth="true"
                startContent={<SearchIcon size={18} />}
                type="search"
                />
        </NavbarContent>
        <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            variant="flat"
            onClick={() => setSearchbar(false)}
            radius='full'
            >
            Home
          </Button>
        </NavbarItem>
      </NavbarContent>
        </Navbar>   

    </>
  )
}

export default Search