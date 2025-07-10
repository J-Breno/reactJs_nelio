import './App.css'
import ButtonInverse from './components/buttonInverse'
import ButtonPrimary from './components/buttonPrimary'
import HeaderClient from './components/headerClient'
import ProductDetailsCard from './components/ProductDetailsCard'

function App() {
  return (
    <>
    <HeaderClient/>
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard />
        <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
        </div>
      </section>
    </main>
    </>
  )
}

export default App
