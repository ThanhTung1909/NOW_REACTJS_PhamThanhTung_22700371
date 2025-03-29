
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './pages/Labs02/Labs02'


function App() {
  

  return (
    <div className='container'>
      <Header />
      <main className="main">
        <Main />
      </main>
      <Footer />
      
    </div>
  )
}

export default App
