import React, { useEffect } from 'react';
import Headline from '@/components/Headline';
import Text from "@nextui-org/react";
const Search = ({searchbar, setSearchbar,keyword, setKeyword}) => {
  useEffect(() => {
    console.log(keyword);
  }, [keyword]);
  return (
    <div>
      <Text h1>Search</Text>
      <Headline title="Top Headline"/>
    </div>
  )
}

export default Search