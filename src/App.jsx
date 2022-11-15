import {
  Header,
  Blog,
  WhatGPT3,
  Features,
  Possibility,
  Footer,
} from "./containers";

import { CTA, Brand, NavBar } from "./components";

function App() {
  return (
    <>
      <div className="App">
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
