import React from 'react';
import Header from "../../components/Header/header.jsx";
import Banner from "../../components/Banner/banner.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Home.scss'

function Home() {
  return (
    <div>
      < Header />
      < Banner />
      < Gallery />
      < Footer />
    </div>
  );
}

export default Home;
