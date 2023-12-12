import React, { useState, useEffect } from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom';

function UpdateProduct(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  console.warn("props",props.match.params.id)

  const [data, setData] = useState([])
  useEffect( ()=> {
    async function getData(){
    let result = await fetch("http://localhost:8000/api/product/"+props.match.params.id)
    result = await result.json()
    setData(result)
    }
    getData()
    setName(data.name)
    setFile(data.file)
    setDescription(data.description)
    setPrice(data.price)
  },[])
async function editProduct(id){
  const fromData = new FormData();
  fromData.append('file', file);
  fromData.append('name', name);
  fromData.append('price', price);
  fromData.append('description', description);

  let result =  await fetch("http://localhost:8000/api/updateproduct/"+id+"?_method=PUT",{

      method: 'POST',
      body: fromData

  });

}

  return (
    <>
    <Header />
    <div>update products is here </div>
    <div className="col-sm-6 offset-sm-3">
    <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={data.name}/><br /><br />
    <input type="text" onChange={(e)=>setPrice(e.target.value)} defaultValue={data.price}/><br /><br />
    <input type="text" onChange={(e)=>setDescription(e.target.value)} defaultValue={data.description}/><br /><br />
    <input type="file" onChange={(e)=>setFile(e.target.file[0])} defaultValue={data.file_path} /><br /><br />
    <img style={{width:150}} src={"http://localhost:8000/"+data.file_path} /><br /><br />

    <button onClick={()=>{editProduct(data.id)}}>Update</button><br /><br />

    </div>
    </>
  )
}

export default withRouter(UpdateProduct)