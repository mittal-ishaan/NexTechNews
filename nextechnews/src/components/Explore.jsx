// home.jsx
'use client';
import React, { useState } from 'react';
import NewsProviders from './Home/NewsProviders';
import NewsList from './Home/NewsList';
import NewsPreview from './Home/NewsPreview';
import {Divider} from "@nextui-org/divider";

const Explore = ({darkMode,keyword,country,isSmallScreen,isMediumScreen,sortBy,setSortBy,articleStartDate,setArticleStartDate,articleEndDate,setArticleEndDate,selectedProviders,setSelectedProviders}) => { 
    const [sortByAsc, setSortByAsc] = useState(false);
    const [articleuri, setArticleuri] = useState("");
    const [ignoreKeywords, setIgnoreKeywords] = useState("");

      async function fetchNewsData() {
        let requestBody = {
            "action": "getArticles",
            "keyword": keyword,
            "articlesPage": 1,
            "articlesCount": 25,
            "resultType": "articles",
            "dataType": ["news", "pr", "blog"],
            "apiKey": process.env.NEXT_PUBLIC_API_KEY_EVENT,
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
          if(selectedProviders){
            requestBody.sourceUri = selectedProviders.map(provider => `${provider}`);          
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
          "apiKey": process.env.NEXT_PUBLIC_API_KEY_EVENT,
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
            <div className='h-screen md:col-span-2 hidden md:block  overflow-x-hidden scrollbar-hide'>
            <div className={` ${darkMode ? 'border-slate-900' : 'border-gray-300'}`}>
                <NewsProviders 
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    articleStartDate={articleStartDate}
                    articleEndDate={articleEndDate}
                    setArticleStartDate={setArticleStartDate}
                    setArticleEndDate={setArticleEndDate}
                    setIgnoreKeywords={setIgnoreKeywords}
                    isSmallScreen={isSmallScreen}
                    isMediumScreen={isMediumScreen}
                    selectedProviders={selectedProviders}
                    setSelectedProviders={setSelectedProviders}
                />
            </div>
            </div>
            <div className='h-screen md:col-span-5 col-span-5 overflow-x-hidden scrollbar-hide'>
              <div className={`border-r border-l ${darkMode ? 'border-slate-900' : 'border-gray-300'}`}>
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
                    selectedProviders={selectedProviders}
                    setSelectedProviders={setSelectedProviders}
                />
              </div>
            </div>
            <div className='h-screen md:col-span-5 col-span-7 overflow-x-hidden scrollbar-hide'>
                <NewsPreview
                    articleuri={articleuri}
                />
            </div>
    </div>
  );
};

export default Explore;
