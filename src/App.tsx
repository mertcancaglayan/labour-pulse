import React from 'react'
import './App.css'
import EditionBar from './layout/editionBar/EditionBar'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <EditionBar></EditionBar>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default App
