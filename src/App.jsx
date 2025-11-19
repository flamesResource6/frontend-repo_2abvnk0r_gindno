import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#111322]">
      <Navbar />
      <Hero />
      <Events />
      <Footer />
    </div>
  )
}

export default App