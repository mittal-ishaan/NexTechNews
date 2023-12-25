import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards';
import {Spinner} from "@nextui-org/spinner";
import { Card } from '@nextui-org/card';
import {ScrollShadow} from "@nextui-org/scroll-shadow";


const NewsList = ({ fetchNewsData, sortBy, sortByAsc, setSortByAsc ,articleStartDate, articleEndDate, ignoreKeywords, setArticleuri }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  } 


  
  // Call this function where you need to fetch the news data
  
  // const updateNews = async ()=> {
  //     // const url = `https://newsapi.org/v2/top-headlines?q=${selectedProvider.query}&country=${selectedProvider.country}&category=technology&apiKey=f187ce5b9846475c9da589d78f6b29c1&pageSize=10`; 
  //     const url = 'http://eventregistry.org/api/v1/article/getArticles?apiKey=66a98f4d-c282-4adc-816b-8c13fe3de062&keyword=apple';
  //     setLoading(true)
  //     console.log(url);
  //     let data = await fetch(url);
  //     let parsedData = await data.json()
  //     console.log(selectedProvider);
  //     setArticles(parsedData.articles)
  //     setTotalResults(parsedData.totalResults)
  //     setLoading(false)
  // }

  // useEffect(() => {
  //     console.log(selectedProvider.country);
  //     updateNews();
  // }, [selectedProvider]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNewsData(sortBy, sortByAsc, articleStartDate, articleEndDate, ignoreKeywords);
      setArticles(data);
      console.log(data);
      setLoading(false);
    };
  
    fetchData();
  }, [sortBy,sortByAsc, articleStartDate, articleEndDate, ignoreKeywords]);



  return (
    <ScrollShadow hideScrollBar >      
      {loading ? (
        <Spinner /> // Show loading spinner while articles are being fetched
      ) : (
          <div className="container">
            <div className="row">
                {articles.articles.results.map((element) => {
                    return <Cards
                      key={element.uri}
                      // source={element.source.title}
                      title={element.title? element.title : ""}
                      description={element.body? element.body : ""}
                      url={element.url}
                      image={element.image}
                      uri={element.uri}
                      setArticleuri={setArticleuri}
                    />
                })}
            </div>
              <Card className="text-center my-8">
                <p>You've reached the end of the articles.</p>
              </Card>
        </div> )}
    </ScrollShadow>
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