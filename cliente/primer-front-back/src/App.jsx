import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const App = () => {
  const [productos, setProductos] = useState([])

  const getDatos = async() =>{
    const url = "http://localhost:5003/products"
    const response = await axios.get(url)
    console.log(response.data)
    setProductos(response.data)
  }

  useEffect(()=>{
   getDatos();
  },[])

  return (
    <div>
      {productos.map(item =>
      <Card style={{ width: '18rem' }} key={item.id}>
        <Card.Img src={item.image} />
        <Card.Title>{item.price}</Card.Title>
        <Card.Text> {item.description}</Card.Text>
      </Card>
      )}
    </div>
  )
}

export default App

