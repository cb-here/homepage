import Footer from './components/Footer'
import EmailSection from './components/EmaiSection'
import Blogs from './components/Blogs'
import Testimonials from './components/Testimonials'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Header from './components/Header'
import Hero from './components/Hero'
import Explore from './components/Explore'

function App() {

  return (
    <>
    <Header />
      <main>
        <Hero />
        <Explore />
        <Services />
        <Benefits />
        <Testimonials />
        <Blogs />
        <EmailSection />
      </main>
      <Footer />
    </>
  )
}

export default App
