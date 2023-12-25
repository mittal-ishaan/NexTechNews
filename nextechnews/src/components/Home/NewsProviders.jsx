'use client';
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";
import {Input} from "@nextui-org/input";
import { Button, Spacer } from '@nextui-org/react';

export default function NewsProviders({sortBy, setSortBy,articleStartDate, articleEndDate, setArticleStartDate, setArticleEndDate, setIgnoreKeywords}) {
  const [formValues, setFormValues] = useState({
    sortBy: sortBy,
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

  const sortBar=[{"text":"Date",value:"date"}, {"text":"Social Score",value:"socialScore"}, {"text":"Importance",value:"sourceImportance"}, {"text":"Source Global Rank",value:"sourceAlexaGlobalRank"}, {"text":"Source Country Rank",value:"sourceAlexaCountryRank"}]
  const [selectedKey, setSelectedKey] = React.useState("Sort By");

  return (
    <form onSubmit={handleSubmit} className='mx-3'>
      <h3>Filters</h3>
      <Spacer y={1}/>
      <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
            className="capitalize"
          >
            {selectedKey}
          </Button>
        </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKey}
        onSelectionChange={(newSelection)=>{
          const selectedIndex = Array.from(newSelection)[0];
          setSelectedKey(sortBar[selectedIndex].text);
          setFormValues(prevValues => ({ ...prevValues, sortBy: sortBar[selectedIndex].value }));
        }}
      >
    {sortBar.map((item, index) => (
      <DropdownItem key={index}>{item.text}</DropdownItem>
    ))}
      </DropdownMenu>
    </Dropdown>
      <Spacer y={1}/>
      <h4>Start Date</h4>
      <Input type="date" size="sm" className="w-3/4" name="articleStartDate" placeholder={articleStartDate} onChange={(value) => setFormValues(prevValues => ({ ...prevValues, articleStartDate: value }))}/>
      <Spacer y={1}/>
      <h4>End Date</h4>
      <Input type="date" size="sm" className="w-3/4" name="articleEndDate" placeholder={articleEndDate} onChange={(value) => setFormValues(prevValues => ({ ...prevValues, articleEndDate: value }))}/>
      <Spacer y={1}/>
      {/* <h4>Ignore Keywords</h4>
      <input type="text" name="ignoreKeywords" onKeyPress={(e) => {
        if (e.key === 'Enter') {
          setFormValues(prevValues => ({ ...prevValues, ignoreKeywords: e.target.value }));
          e.target.value = '';
        }
      }} /> */}
      <Spacer y={1}/>
      <div className='flex justify-end'>
        <Button type="submit" className='jus'>Submit</Button>
      </div>
    </form>
    
      );
    }
