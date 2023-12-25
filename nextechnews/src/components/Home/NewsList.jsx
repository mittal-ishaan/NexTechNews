import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards';
import {Spinner} from "@nextui-org/spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from '@nextui-org/card';



const NewsList = ({selectedProvider}) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  } 

  const updateNews = async ()=> {
      const url = `https://newsapi.org/v2/top-headlines?q=${selectedProvider.query}&country=${selectedProvider.country}&category=technology&apiKey=f187ce5b9846475c9da589d78f6b29c1&pageSize=10`; 
      setLoading(true)
      console.log(url);
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(selectedProvider);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
  }

  useEffect(() => {
      console.log(selectedProvider.country);
      updateNews();
  }, [selectedProvider]);



  return (
    <div>      
      {loading ? (
        <Spinner /> // Show loading spinner while articles are being fetched
      ) : (
          <div className="container">
            <div className="row">
                {articles.map((element) => {
                    return <Cards
                      source={element.source.name}
                      title={element.title? element.title : ""}
                      description={element.description? element.description : ""}
                      url={element.url}
                      urlToImage={element.urlToImage}/>
                })}
            </div>
              <Card className="text-center my-8">
                <p>You've reached the end of the articles.</p>
              </Card>
        </div> )}
    </div>
  )
NewsList.defaultProps = {
    country: 'in',
}

NewsList.propTypes = {
    country: PropTypes.string,
}
}
export default NewsList

// f187ce5b9846475c9da589d78f6b29c1