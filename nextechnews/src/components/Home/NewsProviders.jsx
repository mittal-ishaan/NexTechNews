'use client';
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";

export default function NewsProviders({onProviderChange, selectedProvider}) {
  const items = [
    {
      key: "apple",
      label: "Reddit",
    },
    {
      key: "google",
      label: "HackerNews",
    },
    {
      key: "facebook",
      label: "ProductHunt",
    },
    {
      key: "twitter",
      label: "DesignerNews",
    }
  ];

  const handleSelectionChange = (value) => {
    const selectedItem = items.find(item => item.key === value);
    onProviderChange({ ...selectedProvider, query: selectedItem.key });
  };
  
  return (
    <ListboxWrapper>
      <Listbox
        items={items}
        aria-label="Dynamic Actions"
        onAction={handleSelectionChange}
        >
        {(item) => (
          <ListboxItem
            key={item.key} >
            {item.label}
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
}
