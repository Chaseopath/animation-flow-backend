import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Industries from './components/Industries'
import GetStarted from './components/GetStarted'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <HowItWorks />
        <Industries />
        <GetStarted />
        <Contact />
      </main>
    </div>
  )
}

export default App 