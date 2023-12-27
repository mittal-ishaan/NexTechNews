import React from 'react'
import { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from '@nextui-org/card';
import {Divider} from '@nextui-org/react';
import {Skeleton} from "@nextui-org/skeleton";

const NewsPreview = ({articleuri}) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const getArticleData=async()=>{
    const url = `http://eventregistry.org/api/v1/article/getArticle/?apiKey=66a98f4d-c282-4adc-816b-8c13fe3de062&articleUri=${articleuri}`;
    const response = await fetch(url);
    let data = await response.json();
    return data;
  }
  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);
      const articleFromServer = await getArticleData();
      setArticle(articleFromServer[articleuri].info);
      setLoading(false);
    }
    if(articleuri !== ""){
      getArticle();
    }
  }, [articleuri])
  return (
    <div>
      {articleuri !== "" ? 
            <Card shadow>
              <CardHeader className='justify-center'>
              <Skeleton isLoaded={!loading}>
                <p className='text-md text-center'>{article.title}</p>  
                </Skeleton>
              </CardHeader>
            <Divider/>

            {article.image &&
              <CardFooter className='flex justify-center'>
                <Skeleton isLoaded={!loading}>
              <img src={article.image} 
              alt={article.title} 
              width={250}
              className='rounded'
              // style={{ width: '75%', height: 'auto' }} 
            />
            </Skeleton>
            </CardFooter>
            }
            <Skeleton isLoaded={!loading}>
            <CardBody className='text-sm justify-normal'>{article.body}</CardBody>
            </Skeleton>
          </Card>
      : 
      <Card shadow>
        <CardHeader>Click on Read More to see the article</CardHeader>
        </Card>
      }
    </div>
  )
}

export default NewsPreview