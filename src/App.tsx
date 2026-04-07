import './App.css'
import EditionBar from './layout/editionBar/EditionBar'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
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
  BarElement,
} from "chart.js"
import { CountryDataProvider } from './context/context'
import ChartsGrid from './components/chartsGrid/chartsGrid'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend, Filler
)

function App() {
  return (
    <CountryDataProvider>
      <Header></Header>
      <EditionBar></EditionBar>
      <ChartsGrid></ChartsGrid>
      <Footer></Footer>
    </CountryDataProvider>
  )
}

export default App
