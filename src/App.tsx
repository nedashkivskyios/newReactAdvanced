import React, {FC} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

const App = () => {
  console.log('App rendering')
  return (
    <div className="App">
      <PageTitle title={"This is app component"}/>
      <Rating value={4}/>
      <Accordion collapsed={true} accordionTitle={"Accordion eto"}/>
      <Accordion collapsed={false} accordionTitle={"Accordion uncollapsed"}/>
      <OnOff on={true}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}
const PageTitle: FC<PageTitlePropsType> = ({title, ...restProps}) => {
  console.log('PageTitle rendering')
  return (
    <h1>{title}</h1>
  )
}

export default App;
