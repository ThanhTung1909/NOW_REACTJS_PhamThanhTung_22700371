
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './pages/Labs02/Labs02'
import Labs03 from './pages/Labs03/Labs03'
import Labs04 from './pages/Labs04/Labs04'

function App() {
  

  return (
    <div className='container'>
      <Header />
      <main className="main">
        {/* <Main /> */}
        {/* <Labs03 /> */}
        <Labs04/>
      </main>
      <Footer />
      
    </div>
  )
}

export default App
