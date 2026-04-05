import './App.css'
import EditionBar from './layout/editionBar/EditionBar'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import React from 'react'

import InflationChart from './components/charts/InflationChart'
import UnemploymentChart from './components/charts/UnemploymentChart'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import LabourParticipationChart from './components/charts/LabourParticipationChart'
import ProductivityChart from './components/charts/ProductivityChart'
import { useData } from './hooks/useData'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, Filler
)



function App() {
  const data = useData()

  return (
    <React.Fragment>
      <Header></Header>
      <EditionBar></EditionBar>
      {data.isLoading ? (
        <div style={{ background: 'var(--bg)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontFamily: 'Bebas Neue', letterSpacing: '2px' }}>LOADING DATA...</h2>
        </div>
      ) : (
        <div className='chart-grid'>
          <InflationChart labels={data.labels} inflation={data.inflation}></InflationChart>
          <UnemploymentChart labels={data.labels} totalUnemployment={data.totalUnemployment} youthUnemployment={data.youthUnemployment} graduateUnemployment={data.graduateUnemployment}></UnemploymentChart>
          <LabourParticipationChart labels={data.labels} laborParticipation={data.laborParticipation}></LabourParticipationChart>
          <ProductivityChart labels={data.labels} laborProductivity={data.laborProductivity}></ProductivityChart>
        </div>
      )}


      <Footer></Footer>
    </React.Fragment>
  )
}

export default App
