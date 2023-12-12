import React, { useEffect, useState } from 'react'
import Header from './Header';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList() {

  const [data, setData] = useState("")
  useEffect(() => {

    getData()
  }, [])

  async function getData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }
  // console.log(typeof data);
  // console.log( data);
  async function deleteOpr(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.log(result);
    getData()
  }

  // console.warn("data", data);
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <div>product is here </div>
        <Table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Operations</th>

            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(data) ? (
                data.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><img style={{ width: 140 }} src={"http://localhost:8000/" + product.file_path} /></td>
                    <td><span className="delete" onClick={() => { deleteOpr(product.id) }}
                      style={{ background: 'red', color: 'white', padding: '6px', cursor: 'pointer' ,borderRadius: '5px'}}>Delete</span></td>
                      <td><Link to={"/update/"+product.id}><span className="update" 
                      style={{ background: 'green', padding: '6px', cursor: 'pointer', color: 'white', borderRadius: '5px'}}>Update</span></Link></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Invalid data format</td>
                </tr>
              )
            }


            {/* <td>{products.id}</td>
      <td>{products.name}</td>
      <td>{products.description}</td>
      <td>{products.price}</td>
      <td>img</td>
      </tr> */}


          </tbody>
        </Table>
      </div>
    </>
  )
}

export default ProductList