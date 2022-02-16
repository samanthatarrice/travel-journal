import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import data from './data'
import Footer from './components/Footer'

function App() {

  const cards = data.map(card => 
    <>
      <Card key={card.id} {...card} />
      <hr />
    </>
  )

  return (
    <>
      <Header />
      {cards}
      <Footer />
    </>
  );
}

export default App;
