<a name="readme-top"></a>

<h1 align="center">
	<img
		width="300"
		alt="NexTechNews"
		src="./images/logo.png">
</h1>

<h3 align="center">
	NexTechNews - The Premier Tech News Aggregator
</h3>

<p align="center">
	<strong>
		<a href="http://www.nextechnews.site/">Website</a>
	</strong>
</p>

<div style="display: inline-block; background-color: black; padding: 2px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
    <!-- Inline styles for the image -->
    <img src="./images/homepage.png" alt="Homepage" style="width: 100%; height: auto; display: block;">
  </div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#api">API</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

### Features

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Material-UI](https://mui.com/)
* [NewsAPI](https://newsapi.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mittal-ishaan/dotflo-assignment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nextechnews
    ```

3. Create a virtual environment (optional but recommended -- Step 4-5):

    ```bash
    python -m venv venv
    ```

4. Activate the virtual environment:

    - On Windows:

        ```bash
        venv\Scripts\activate
        ```

    - On Unix or MacOS:

        ```bash
        source venv/bin/activate
        ```
5. Install the required packages:
    
        ```bash
        npm install
        ```
6. Run the development server:

    ```bash
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Frontend Folder Stucture
```
└── nextechnews/
    ├── public
    │   ├── images/
    ├── src/
    │   ├── app/
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.jsx
    │   │   ├── providers.jsx
    │   │   └── page.jsx
    │   └── components/
    │       ├── Home/
    │       │   ├── Cards.jsx
    │       │   ├── NewsList.jsx
    │       │   ├── NewsPreview.jsx
    │       │   ├── NewsProviders.jsx
    │       │   ├── ListboxWrapper.jsx
    │       ├──Explore.jsx
    │       ├──icons.jsx
    │       ├──NavBar.jsx
    │       ├──Search.jsx
    │       ├──SearchIcon.jsx
    │       └── Headline.jsx
    ├── .gitignore
    ├── README.md
    ├── jsconfig.json
    ├── .eslintrc.json
    ├── .env.local
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    └── tailwind.config.js
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Ishaan Mittal - [me210003039@iiti.ac.in](mailto:me210003039@iiti.ac.in)
Github - [https://github.com/mittal-ishaan/dotflo-assignment](https://github.com/mittal-ishaan/dotflo-assignment)
