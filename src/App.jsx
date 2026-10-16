import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import { ItemDetailContain } from './components/itemDetailContainer/itemDetailContainer'
import { CartContainer } from './components/Cart/cartContainer'
import { Layout } from './components/layout/layout'
function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path = "/products" element = {<ItemListContainer/>}/>
            <Route path = "products/:id" element={<ItemDetailContain/>}/>
            <Route path= "/cart" element = {<CartContainer/>}/>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
