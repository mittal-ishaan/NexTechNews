// home.jsx
'use client';
import React, { useState } from 'react';
import NewsProviders from './Home/NewsProviders';
import NewsList from './Home/NewsList';
import NewsPreview from './Home/NewsPreview';
import {Divider} from "@nextui-org/divider";

const Explore = ({darkMode,keyword,country}) => { 
    const [sortBy, setSortBy] = useState("date");
    const [sortByAsc, setSortByAsc] = useState(false);
    const [articleuri, setArticleuri] = useState("");
    const [articleStartDate, setArticleStartDate] = useState("");
    const [articleEndDate, setArticleEndDate] = useState("");
    const [ignoreKeywords, setIgnoreKeywords] = useState("");

      async function fetchNewsData() {
        let requestBody = {
            "action": "getArticles",
            "keyword": keyword,
            "articlesPage": 1,
            "articlesCount": 25,
            "resultType": "articles",
            "dataType": ["news", "pr", "blog"],
            "apiKey": "66a98f4d-c282-4adc-816b-8c13fe3de062",
            "categoryUri": "news/Technology",
            "lang": "eng",
            "articleBodyLen": 100,
          };
          
          if (sortBy) {
            requestBody.articlesSortBy = sortBy;
          }
          
          if (sortByAsc) {
            requestBody.articlesSortByAsc = sortByAsc;
          }
          
          if (articleStartDate) {
            requestBody.dateStart = articleStartDate;
          }
          
          if (articleEndDate) {
            requestBody.dateEnd = articleEndDate;
          }
          
          if (ignoreKeywords) {
            requestBody.ignoreKeywords = ignoreKeywords;
          }
          
          if(country){
            requestBody.sourceLocationUri = country;
          }
          console.log(requestBody);
        const response = await fetch('http://eventregistry.org/api/v1/article/getArticles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
        const data = await response.json();
        return data;
      };

      async function fetchTopArticles(){
        let requestBody = {
            "uri": "54cdbea0-24f3-435f-bbbf-fb0647787d97",
            "articlesCount": 25,
            "apiKey": "66a98f4d-c282-4adc-816b-8c13fe3de062",
            "articlePage": 1,
            "dataType": ["news", "pr", "blog"],
            "articleBodyLen": 100  
        }
        if(sortBy){
            requestBody.articlesSortBy = sortBy;
        }
        if(sortByAsc){
            requestBody.articlesSortByAsc = sortByAsc;
        }
        console.log(requestBody);
        const response = await fetch('http://eventregistry.org/api/v1/article/getArticlesForTopicPage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
        const data = await response.json();
        return data;
      }
  return (
    <div className='grid grid-cols-12 gap-1'>
            <div className={`col-span-3 border-r  ${darkMode ? 'border-slate-900' : 'border-gray-300'}`}>
                <NewsProviders 
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    articleStartDate={articleStartDate}
                    articleEndDate={articleEndDate}
                    setArticleStartDate={setArticleStartDate}
                    setArticleEndDate={setArticleEndDate}
                    setIgnoreKeywords={setIgnoreKeywords}
                />
            </div>
            <div className={`col-span-4 border-r overflow-scroll ${darkMode ? 'border-slate-900' : 'border-gray-300'}`}>
                <NewsList 
                    fetchNewsData={fetchNewsData}
                    fetchTopArticles={fetchTopArticles}
                    keyword={keyword}
                    sortBy={sortBy}
                    sortByAsc={sortByAsc}
                    setSortByAsc={setSortByAsc}
                    articleStartDate={articleStartDate}
                    articleEndDate={articleEndDate}
                    ignoreKeywords={ignoreKeywords}
                    setArticleuri={setArticleuri}
                    country={country}
                />
            </div>
            <div className='col-span-5'>
                <NewsPreview
                    articleuri={articleuri}
                />
            </div>
    </div>
  );
};

export default Explore;
