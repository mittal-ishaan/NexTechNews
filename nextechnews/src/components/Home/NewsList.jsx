import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards';
import {Spinner} from "@nextui-org/spinner";
import { Card } from '@nextui-org/card';
import {ScrollShadow} from "@nextui-org/scroll-shadow";


const NewsList = ({ fetchNewsData, fetchTopArticles, keyword, sortBy, sortByAsc, setSortByAsc ,articleStartDate, articleEndDate, ignoreKeywords, setArticleuri, country, selectedProviders }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");

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
      let data;
      setLoading(true);
      if(keyword !== "" || country !== "" || selectedProviders.length > 0){
        setErrorMessage("");
        data = await fetchNewsData(keyword, sortBy, sortByAsc, articleStartDate, articleEndDate, ignoreKeywords, country,selectedProviders);
      }
      else{
        if(articleStartDate === "" && articleEndDate === "" && ignoreKeywords === ""){
          setErrorMessage("");
          data = await fetchTopArticles(sortBy, sortByAsc);
       }
       else{
        setErrorMessage("Date selection in top headlines is not allowed");
        data =-1;
       }
      }
      console.log(data);
      if(data === -1){
        setLoading(false);
        return;
      }
      setArticles(data);
      setLoading(false);
    };
    fetchData();

  }, [keyword,sortBy,sortByAsc, articleStartDate, articleEndDate, ignoreKeywords, country,selectedProviders]);



  return (
    <>
    {errorMessage && <div className="alert alert-error">{errorMessage}</div>}
    <ScrollShadow hideScrollBar >      
      {loading ? (
        <Spinner /> // Show loading spinner while articles are being fetched
      ) : (
          <div className="container">
            <div className="row">
                {articles.articles.results.map((element,index) => {
                    return <Cards
                      key={element.uri}
                      source={capitalizeFirstLetter(element.source.title)}
                      title={element.title? element.title : ""}
                      description={element.body? element.body : ""}
                      url={element.url}
                      index={index}
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
    </>
  )
NewsList.defaultProps = {
    country: 'in',
}

NewsList.propTypes = {
    country: PropTypes.string,
}
}
export default NewsList