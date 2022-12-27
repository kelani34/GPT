import {
  Header,
  Blog,
  WhatGPT3,
  Features,
  Possibility,
  Footer,
} from "./containers";

import { CTA, Brand, NavBar } from "./components";
import "./App.css";
import Test from "./containers/Test";
function App() {
  return (
    <>
      <div className="App">
        {/* <Test /> */}
        <div className="gradient__bg">
          <NavBar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
