import React from 'react'
import { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from '@nextui-org/card'
const NewsPreview = ({articleuri}) => {
  const [article, setArticle] = useState([]);

  const getArticleData=async()=>{
    const url = `http://eventregistry.org/api/v1/article/getArticle/?apiKey=66a98f4d-c282-4adc-816b-8c13fe3de062&articleUri=${articleuri}`;
    const response = await fetch(url);
    let data = await response.json();
    return data;
  }
  useEffect(() => {
    console.log(articleuri)
    const getArticle = async () => {
      const articleFromServer = await getArticleData();
      setArticle(articleFromServer[articleuri].info);
    }
    getArticle();
  }, [articleuri])
  return (
    <Card shadow>
      <CardHeader>{article.title}</CardHeader>
      <CardFooter>
        <img src={article.image} alt={article.title} style={{ width: '100%', height: 'auto' }} />
      </CardFooter>
      <CardBody>{article.body}</CardBody>
    </Card>
  )
}

export default NewsPreview