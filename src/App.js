import './App.css'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ell1 from './assets/Ellipse1.png'
import ell2 from './assets/Ellipse2.png'
import ell3 from './assets/Ellipse3.png'
import ell4 from './assets/Ellipse4.png'

function App() {
  return (
    <div className="App">
      <img src={ell1} className="ellipse1"></img>
      <img src={ell2} className="ellipse2"></img>
      <img src={ell3} className="ellipse3"></img>
      <img src={ell4} className="ellipse4"></img>
      <Header />
      <Content />
      <Main />
    </div>
  )
}

export default App
