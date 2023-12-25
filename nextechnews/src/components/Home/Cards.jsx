import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Cards({key,title, description, url, urlToImage,setArticleuri}) {
  return (
    <Card className="max-w-full my-1">
      <CardHeader className="flex gap-3">
        {urlToImage ?         
        <Image
          alt="logo"
          radius="sm"
          src={urlToImage}
        /> : null}

        <div className="flex flex-col">
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
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={url}
          className="text-sm"
        >
          Visit original article.
        </Link>
      </CardFooter>
    </Card>
  );
}
