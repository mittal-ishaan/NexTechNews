import React from 'react'

const searchPage = async () => {
    const res = await fetch(`https://hn.algolia.com/api/v1/search?query=react`)
    const data = await res.json()
  return (
    <>
        <h1>Search Page</h1>
        <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    </>
  )
}

export default searchPage