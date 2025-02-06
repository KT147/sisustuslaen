import { useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState([{ name: "", price: "" }])

  const addProduct = () => {
    setProducts([...products, { name: "", price: "" }])
  }

  const updateProduct = (index, field, value) => {
    const updatedProducts = [...products]
    updatedProducts[index][field] = value
    setProducts(updatedProducts)
  }

  const deleteRow = () => {
    if (products.length > 1) {
      setProducts(products.slice(0, products.length-1))
    }
  }

  const totalSum = products.reduce((sum, product) => sum + (Number(product.price) || 0), 0)

  return (
    <>
      <div className='header'>
        <h4 className='header-head'>Kas sinu diivan on oma aja ära elanud?</h4>
        <span className='header-text'>Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti uuest sisekujundusest, aga kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna.</span>
        <div className='header-extra-container'>
          <h5 className='header-extra'>Loe lisa</h5>
          <img className='arrow-down' src="/arrow-down.png" alt="" />
        </div>
      </div>
      <div>
        <img className='loan-picture' src="/laenupilt.png" alt="" />
      </div>
      <div className='middle-container'>
        <p className='middle-head'><b>Koosta soovinimekiri</b> ja vaata oma uue sisustuse kuumakset</p>
        <table>
          <thead>
            <tr className='table-head'>
              <th>TOODE</th>
              <th>HIND</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <input type="text" value={product.name} onChange={(e) => updateProduct(index, 'name', e.target.value)}/>
                </td>
                <td>
                  <input type="number" value={product.price} onChange={(e) => updateProduct(index, 'price', e.target.value)}/> €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='total'>{totalSum.toFixed(2)} €</div>
        <button onClick={addProduct}><img className='add-button' src="/add.png" alt="" /> Lisa toode</button>
        <button onClick={deleteRow}><img className='delete-button' src="/delete.png" alt="" /> Kustuta</button>
        <button>Taotle sisustuslaenu</button>
        <div><u>Tutvu tingimustega</u></div>
      </div>
    </>
  )
}

export default App
