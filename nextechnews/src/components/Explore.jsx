// home.jsx
'use client';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import NewsProviders from './Home/NewsProviders';
import NewsList from './Home/NewsList';
import NewsPreview from './Home/NewsPreview';
import {Divider} from "@nextui-org/divider";

const Explore = () => { 
    const [selectedProvider, setSelectedProvider] = useState({query: "", country: 'us'});

    const handleProviderChange = (newProvider) => {
        setSelectedProvider(newProvider);
      };
  return (
    <div>
        <Grid container spacing={2} className="min-h-screen">
            <Grid item xs={2} className="border-r border-gray-200">
                <NewsProviders onProviderChange={handleProviderChange} selectedProvider={selectedProvider}/>
            </Grid>
            <Grid item xs={4} className="border-r border-gray-200" style={{paddingLeft: 0}}>
                <NewsList selectedProvider={selectedProvider}/>
            </Grid>
            <Grid item xs={5}>
                <NewsPreview/>
            </Grid>
        </Grid>
    </div>
  );
};

export default Explore;
