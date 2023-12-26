// home.jsx
'use client';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import NewsProviders from './Home/NewsProviders';
import NewsList from './Home/NewsList';
import NewsPreview from './Home/NewsPreview';
import {Divider} from "@nextui-org/divider";

const Explore = ({keyword}) => { 
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
          
        const response = await fetch('http://eventregistry.org/api/v1/article/getArticles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
        const data = await response.json();
        console.log(data);
        return data;
      }
  return (
    <div>
        <Grid container spacing={2} className="">
            <Grid item xs={2} className="border-r border-gray-200">
                <NewsProviders 
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    articleStartDate={articleStartDate}
                    articleEndDate={articleEndDate}
                    setArticleStartDate={setArticleStartDate}
                    setArticleEndDate={setArticleEndDate}
                    setIgnoreKeywords={setIgnoreKeywords}
                />
            </Grid>
            <Grid item xs={4} className="border-r border-gray-200" style={{paddingLeft: 0}}>
                <NewsList 
                    fetchNewsData={fetchNewsData}
                    keyword={keyword}
                    sortBy={sortBy}
                    sortByAsc={sortByAsc}
                    setSortByAsc={setSortByAsc}
                    articleStartDate={articleStartDate}
                    articleEndDate={articleEndDate}
                    ignoreKeywords={ignoreKeywords}
                    setArticleuri={setArticleuri}
                />
            </Grid>
            <Grid item xs={5}>
                <NewsPreview
                    articleuri={articleuri}
                />
            </Grid>
        </Grid>
    </div>
  );
};

export default Explore;
