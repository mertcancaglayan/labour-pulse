import React, { useEffect, useState } from 'react'
import './App.css'
import EditionBar from './layout/editionBar/EditionBar'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import { getEconomicMetrics, getLaborMetrics } from './api/client'
import { INDICATOR_MAP } from './api/endpoints'

interface Indicator {
  id: string;
  value: string;
}

interface Country {
  id: string;
  value: string;
}

interface EmploymentData {
  indicator: Indicator;
  country: Country;
  countryiso3code: string;
  date: string;
  value: number | null;
  scale: string;
  unit: string;
  obs_status: string;
  decimal: number;
}

function App() {
  const [laborData, setLaborData] = useState<EmploymentData[]>([])
  const [ecoData, setEcoData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const [laborResponse, ecoResponse] = await Promise.all([
          getLaborMetrics(),
          getEconomicMetrics()
        ]);

        setLaborData(laborResponse);
        setEcoData(ecoResponse);

      } catch (error) {
        console.error('Failed to fetch economic metrics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  if (isLoading) return <div>LOADING</div>

  return (
    <React.Fragment>
      <Header></Header>
      <EditionBar></EditionBar>
      <div>
        {laborData.length > 0 && (
          <div>
            {
              laborData.map((e) => {
                const elementId = e.indicator.id as keyof typeof INDICATOR_MAP;
                return (
                  <>
                    <p><span>{INDICATOR_MAP[elementId]}</span></p>
                    <p><span>{e.value}</span></p>
                  </>
                )
              })
            }
          </div>
        )}
      </div>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default App
