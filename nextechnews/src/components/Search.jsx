import React, { useEffect } from 'react';
import Headline from '@/components/Headline';
const Search = ({setSearchbar,setKeyword,setCountry}) => {
  return (
    <div className='min-h-screen'>
      <br/>
      <div className='flex justify-center'>
        <Headline 
          title="Top Headline" 
          url="newspaper.jpg" 
          setSearchbar={setSearchbar}
          setKeyword={setKeyword}
          setCountry={setCountry}
          />
        <Headline title="USA Top Tech News" url="office_building.jpg"
          setSearchbar={setSearchbar}
          setKeyword={setKeyword}
          setCountry={setCountry}
          />
        <Headline title="India Top Tech News" url="office_building.jpg"
          setSearchbar={setSearchbar}
          setKeyword={setKeyword}
          setCountry={setCountry}
          />
      </div>
    </div>
  )
}

export default Search