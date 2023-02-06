import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './child2';
import Counter from './Counter';
import Fruits from './Fruits';
import Notes from './Notes';
import Hooks from './components/Hooks';
import NewsApp from './components/NewsApp';
import UseEffect from './components/UseEffectHook';
import UserFrom from './components/UserForm';
import UseEffectHook from './components/UseEffectHook';


function App() {

  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  function uploadData() {
    console.log("I will start uploading the data now");
  }

  return (
    <>
      {/* <Counter />
      <Fruits />
      <Notes />
      <p>Inside the parent: {countInParent}</p>
      <Child1 onCountUpdate={updateCountInParent} />
      <Child2 countFromParent={countInParent} uploadData={uploadData} /> */}
      <UserFrom />
      <UseEffectHook />
      <Hooks />
      <NewsApp />
    </>
  );
}

export default App;
