import React from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner'
import HeadlineCards from './components/HeadlineCards.jsx';
import Foods from './components/Foods.jsx';
import Categories from './components/Categories.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <HeadlineCards/>
      <Foods/>
      <Categories/>
    </div>
  );
}

export default App;
