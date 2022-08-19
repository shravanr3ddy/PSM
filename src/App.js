import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import InputComponent from "./components/inputComponent";

function App() {
  const [isResult, setIsResult] = useState(false);

  const [similarItems, setSimilarItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      <Header setIsResult={setIsResult} isResult={isResult} />
      {isResult ? (
        <MainContent setIsResult={setIsResult} similarItems={similarItems} isLoading={isLoading}/>
      ) : (
        <InputComponent
          setIsResult={setIsResult}
          setSimilarItems={setSimilarItems}
          setIsLoading={setIsLoading}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
