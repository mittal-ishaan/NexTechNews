import React, { useEffect } from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
export default function Headline({title, url, setSearchbar,setKeyword,setCountry}) {

  const handlePress = () => {
    if(title === "Top Headline"){
      setKeyword("");
      setCountry("");
      setSearchbar(false);
    }
    else if(title === "USA Top Tech News"){
      setCountry("http://en.wikipedia.org/wiki/United_States");
      setSearchbar(false);
    }
    else if(title === "India Top Tech News"){
      setCountry("http://en.wikipedia.org/wiki/India");
      setSearchbar(false);
    }
  }
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none m-5"
      isPressable
      onPress={() => {
        handlePress();
      }}
    >
      <Image
        alt="Woman listing to music"
        style={{ height: '200px', objectFit: 'cover' }}
        src={`/images/${url}`}
        width={200}
      />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80 text-center">{title}</p>
          {/* <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            {title}
          </Button> */}
        </CardFooter>
    </Card>
  );
}

