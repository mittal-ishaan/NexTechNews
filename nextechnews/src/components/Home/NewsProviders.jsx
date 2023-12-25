'use client';
import React, { useState } from 'react';
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import DatePicker from 'react-date-picker';
import {Spacer} from "@nextui-org/spacer";

export default function NewsProviders({setSortBy,articleStartDate, articleEndDate, setArticleStartDate, setArticleEndDate, setIgnoreKeywords}) {
  const [formValues, setFormValues] = useState({
    sortBy: '',
    articleStartDate: null,
    articleEndDate: null,
    ignoreKeywords: ''
  });
  
  const handleChange = (e) => {
    setFormValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSortBy(formValues.sortBy);
    setArticleStartDate(formValues.articleStartDate);
    setArticleEndDate(formValues.articleEndDate);
    setIgnoreKeywords(prevKeywords => [...prevKeywords, formValues.ignoreKeywords]);
  };

  const sortBar=["date", "socialScore", "sourceImportance", "sourceAlexaGlobalRank", "sourceAlexaCountryRank"]

  return (
    <form onSubmit={handleSubmit}>
      <h3>Filters</h3>
      <Spacer y={1}/>
      <h4>Sort By</h4>
      <Select label="sortBy" placeholder="Select..." onChange={handleChange}>
        {sortBar.map((item, index) => (
          <SelectItem  key={index} value={item}>{item}</SelectItem >
        ))}
      </Select>
      <Spacer y={1}/>
      <h4>Start Date</h4>
      <DatePicker name="articleStartDate" placeholder={articleStartDate} onChange={(value) => setFormValues(prevValues => ({ ...prevValues, articleStartDate: value }))}/>
      <Spacer y={1}/>
      <h4>End Date</h4>
      <DatePicker name="articleEndDate" placeholder={articleEndDate} onChange={(value) => setFormValues(prevValues => ({ ...prevValues, articleEndDate: value }))}/>
      <Spacer y={1}/>
      <h4>Ignore Keywords</h4>
      <input type="text" name="ignoreKeywords" onKeyPress={(e) => {
        if (e.key === 'Enter') {
          setFormValues(prevValues => ({ ...prevValues, ignoreKeywords: e.target.value }));
          e.target.value = '';
        }
      }} />
      <button type="submit">Submit</button>
    </form>
      );
    }
