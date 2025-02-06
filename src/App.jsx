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
      <div className='loan-picture-holder'>
        <img className='loan-picture' src="/laenupilt.png" alt="" />
      </div>
      <div className='middle-container'>
        <p className='middle-head'><b>Koosta soovinimekiri</b> ja vaata oma uue sisustuse kuumakset</p>
        <div className='total'>{totalSum.toFixed(2)} €</div>
          <div>
            <button className='loan-button'>Taotle sisustuslaenu</button>
          </div>
          <div>
            <button className='conditions-button'>Tutvu tingimustega</button>
          </div>
        <table className='table'>
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
                  <input className='input-toode' type="text" value={product.name} onChange={(e) => updateProduct(index, 'name', e.target.value)}/>
                </td>
                <td>
                  <input className='input-hind' type="number" value={product.price} onChange={(e) => updateProduct(index, 'price', e.target.value)}/> €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='add-button' onClick={addProduct}><img className='add-button-picture' src="/add.png" alt="" /> Lisa toode</button>
        <button className='delete-button' onClick={deleteRow}><img className='delete-button-picture' src="/delete.png" alt="" /> Kustuta</button>
        <br />
      </div>
      <div className='footer'>
        <span><img className='service-picture' src="/customer-service.png" alt="" /></span>
        <div>
          <span className='service-name'>LHV <b>Klienditugi</b></span>
          <br />
          <span className='service-text'>Kui sul tekib pangateenuse kasutamisel probleeme, saad klienditoe infotelefonilt abi ööpäev ringi.</span>
        </div>
        <span><img className='phone-picture' src="/telephone.png" alt="" /></span>
        <span className='phone'>6 800 400</span>
        <span><img className='email-picture' src="/email.png" alt="" /></span>
        <span className='email'><u>info@lhv.ee</u></span>
      </div>
    </>
  )
}

export default App
