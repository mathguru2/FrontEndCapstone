import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <>
      <head>
        <meta
          name="description"
          content="The littlest and lemonest restaraunt there ever was!"
        />
        <meta name="og:title" content="Little Lemon" />
        <meta name="og:description" content="The little lemon app" />
        <meta name="og:image" content="" />
        {/*TODO: add image */}
      </head>
      <body>
        <Header />
        <Main />
      </body>
      <footer></footer>
    </>
  );
}

export default App;
