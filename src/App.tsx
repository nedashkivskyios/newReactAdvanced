import React, {FC} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

const App = () => {
  console.log('App rendering')
  return (
    <div className="App">
      <PageTitle title={"This is app component"}/>
      <Rating value={4}/>
      <Accordion accordionTitle={"Accordion eto"}/>
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
