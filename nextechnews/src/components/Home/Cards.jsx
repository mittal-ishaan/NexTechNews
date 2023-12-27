import React, { useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

export default function Cards({key,source, title, description, url, index,uri,setArticleuri}) {
  useEffect(() => {
    console.log(source);
  }, [source]);
  return (
    <Card className="max-w-full m-1">
      <CardHeader className="grid grid-cols-12 gap-3">
      <span className="w-6 h-6 bg-blue-500 col-span-1 flex items-center justify-center">{index+1}</span>      
      <div className="flex flex-col col-span-11">
        {/* <p className="text-md">{source}</p> */}
        <p className="text-sm">{title}</p>
      </div>
      </CardHeader>
      
    {description ? (
      <>
      <Divider/>
      <CardBody>
        <p className="text-xs">{description}</p>
      </CardBody>
      </>
    ) : null}
      <Divider/>
      <CardFooter className="justify-between gap-3">
        <Link
          isExternal
          showAnchorIcon
          href={url}
          className="text-sm col-8"
        >
          Visit original article.
        </Link>
        <Button 
          className="text-tiny text-white bg-black/20" 
          variant="flat" 
          color="default" 
          radius="lg" 
          size="sm"
          onClick={() => {console.log(uri);setArticleuri(uri);}}>
            Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
