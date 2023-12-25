'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";


export default function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar isBordered>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">NexTechNews</p>
      </NavbarBrand>
      {isSmallScreen ? (
      <NavbarContent as="div" justify="end">
        <Button isIconOnly as={Link} href="#" variant="flat" className="rounded-full">
          <SearchIcon size={18}/>
        </Button>
        </NavbarContent>      
        ) : (
      <NavbarContent as="div" className="items-center" justify="center">
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
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      )}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#" variant="flat">
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
