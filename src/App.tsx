import './App.css'
import EditionBar from './layout/editionBar/EditionBar'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import React from 'react'
import InflationChart from './components/charts/InflationChart'



function App() {
  // const [laborData, setLaborData] = useState<EmploymentData[]>([])
  // const [ecoData, setEcoData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [data, setData] = useState<Record<number, TransformedDataI>>([])

  // // if (isLoading) return <div>LOADING</div>

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const response = await getData()
  //       const result = response

  //       setData(result)
  //       setIsLoading(false)
  //     } catch (error) {
  //       console.error("Initialization failed", error)
  //       setIsLoading(false)
  //     }
  //   }

  //   init()
  // }, [])

  // useEffect(() => {
  //   console.log(data);
  // }, [data])

  // if (isLoading) {
  //   return (
  //     <div style={{ background: 'var(--bg)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  //       <h2 style={{ fontFamily: 'Bebas Neue', letterSpacing: '2px' }}>LOADING DATA...</h2>
  //     </div>
  //   )
  // }

  return (
    <React.Fragment>
      <Header></Header>
      <EditionBar></EditionBar>
      <InflationChart></InflationChart>

      <Footer></Footer>
    </React.Fragment>
  )
}

export default App
