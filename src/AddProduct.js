import React, { useState } from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'

function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function addProduct(){
        console.log(name,price,description,file);
        const fromData = new FormData();

        fromData.append('file', file);
        fromData.append('name', name);
        fromData.append('price', price);
        fromData.append('description', description);

        let result =  await fetch("http://localhost:8000/api/addproduct",{
        
            method: 'POST',
            body: fromData
        });

    }

  return (
    <>
    <Header />
    <div className="col-sm-6 offset-sm-3" encType="multipart/form-data">

    <div>Add products here</div>
    <form method="POST" action='file' enctype="multipart/form-data">
    <input type="text" className='form-control' placeholder="name" onChange={(e)=>setName(e.target.value)}/>
    <br />
    <input type="file" className='form-control' placeholder="file" onChange={(e)=>setFile(e.target.file[0])}/>
    <br />
    <input type="text" className='form-control' placeholder="price" onChange={(e)=>setPrice(e.target.value)}/>
    <br />
    <input type="text" className='form-control' placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
    <br />
    <Button onClick={addProduct}> click to add</Button>
    </form>
    </div>
    </>
  )
}

export default AddProduct