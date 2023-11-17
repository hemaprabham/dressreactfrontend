import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'

const View = () => {
    const [data,ChangeData]=useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/").then(
            (response)=>{
                ChangeData(response.data)
            }
        )
        
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Addheader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                        <table class="table table-striped">
                                        <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Style</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Material</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                            {data.map((value,index)=>{
                                return <tr>
                                        <td>{value.name}</td>
                                        <td>{value.style}</td>
                                        <td>{value.color}</td>
                                        <td>{value.size}</td>
                                        <td>{value.price}</td>
                                        <td>{value.material}</td>
                                        </tr>
                              
})}
                                            </tbody>
                                            </table>
                                
                                
                                    </div> 
                            
                            
                         
                            </div>
                            
                        </div>
                    </div>
                </div>


    </div>
  )
}

export default View