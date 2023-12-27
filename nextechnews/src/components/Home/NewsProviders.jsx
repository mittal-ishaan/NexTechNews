'use client';
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";
import {
	Button,
	Link,
	Input,
	Navbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";
import { Spacer } from '@nextui-org/react';
import { Divider } from '@nextui-org/react';
import {Checkbox, Chip, cn} from "@nextui-org/react";

export default function NewsProviders({sortBy, setSortBy,articleStartDate, articleEndDate, setArticleStartDate, setArticleEndDate, setIgnoreKeywords, isSmallScreen, isMediumScreen,selectedProviders,setSelectedProviders}) {
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
  const newsProviders =[{title:"BBC", url:"bbc.com"},{title:"New York Post", url:"nypost.com"},{title:"USA Today", url:"usatoday.com"},{title:"yahoo", url:"news.yahoo.com"},{title:"CNN", url:"cnn.com"},{title:"The Hindu", url:"thehindu.com"},{title:"MSN International Edition", url:"msn.com"},{title:"The New York Times", url:"nytimes.com"}];

  const handleCheckboxChange = (provider) => {
    if (selectedProviders.includes(provider)) {
      setSelectedProviders(prevProviders => prevProviders.filter(prevProvider => prevProvider !== provider));
    } else {
      setSelectedProviders(prevProviders => [...prevProviders, provider]);
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit} className='m-3'>
      <h1 className='text-center text-lg'>Filters</h1>
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
      <Input type="date" value={formValues.articleStartDate} size="sm" className="w-3/4" name="articleStartDate" placeholder={articleStartDate} onChange={(event) => setFormValues(prevValues => ({ ...prevValues, articleStartDate: event.target.value }))}/>
      <Spacer y={1}/>
      <h4>End Date</h4>
      <Input type="date" value={formValues.articleEndDate} size="sm" className="w-3/4" name="articleEndDate" placeholder={articleEndDate} onChange={(event) => setFormValues(prevValues => ({ ...prevValues, articleEndDate: event.target.value }))}/>
      <Spacer y={1}/>
      {/* <h4>Ignore Keywords</h4>
      <input type="text" name="ignoreKeywords" onKeyPress={(e) => {
        if (e.key === 'Enter') {
          setFormValues(prevValues => ({ ...prevValues, ignoreKeywords: e.target.value }));
          e.target.value = '';
        }
      }} /> */}
      <Spacer y={1}/>
      <div className='grid grid-cols-4'>
        <Button onClick={() => setFormValues(prevValues => ({ ...prevValues, articleStartDate: "", articleEndDate: "" }))}>Clear Dates</Button>
        <div></div>
        <Button type="submit" className='jus'>Submit</Button>
      </div>
    </form>
    <Divider/>
    <div className='m-3'>
      <h3 className='text-center text-lg'>News Providers</h3>
      <Spacer y={1}/>
      {newsProviders.map(provider => (
        <Checkbox
          key={provider.url}
          aria-label={provider.title}
          color="warning"
          classNames={{
            base: cn(
              "inline-flex w-full max-w-md bg-content1 my-0",
              "hover:bg-content2 items-center justify-start",
              "cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent",
              // "data-[selected=true]:border-warning ",
            ),
            label: "w-full",
          }}
          isSelected={selectedProviders.includes(provider.url)}
          onValueChange={() => handleCheckboxChange(provider.url)}
        >
          <div className="w-full flex justify-between gap-2">
            <span className="text-default-500">{provider.title}</span>
          </div>
        </Checkbox>
      ))}
    </div>
    </>
      );
    }
