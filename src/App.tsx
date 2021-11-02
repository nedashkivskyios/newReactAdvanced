import React from 'react';
import './App.css';

const App = () => {
  console.log('App rendering')
  return (
    <div className="App">
      <AppTitle />
      <Rating/>
      <Accordion/>
    </div>
  );
}

const AppTitle = () => {
  console.log('AppTitle rendering')
  return (
    <>This is APP Component</>
  )
}

const Rating = () => {
  console.log('Rating rendering')
  return (
    <div>
      Rating
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

const Star = () => {
  console.log('Star rendering')
  return (
    <div>star</div>
  )
}

const Accordion = () => {
  console.log('Accordion rendering')
  return (
    <div>
      <h3>Accordion</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App;
