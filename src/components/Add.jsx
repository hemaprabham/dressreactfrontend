import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'

const Add = () => {
    const [inputfield,Changeinputfield]=useState(
        {
            
            "name": "",
            "style":"",
            "color":"",
            "size": "",
            "price": "",
            "material": ""
            
        
        }
        
        )
        const inputhandler=(event)=>{

            Changeinputfield({...inputfield,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
                console.log(inputfield)
                
                    axios.post("http://127.0.0.1:8000/addall/",inputfield).then(
                        (response)=>{
                            alert(response.data.status)
                        }
                    )
                    
               

        }

  return (
    <div>
        <Addheader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
                        <div className="row g-3" >
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <label htmlFor="" className="label-control">name</label>
  <input 
    type="text" 
    className="form-control" 
    name='name' 
    value={inputfield.name} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <label htmlFor="" className="label-control">Style</label>
  <input 
    type="text" 
    className="form-control" 
    name='style' 
    value={inputfield.style} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <label htmlFor="" className="label-control">Color</label>
  <input 
    type="text" 
    className="form-control" 
    name='color' 
    value={inputfield.color} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <label htmlFor="" className="label-control">Size</label>
  <input 
    type="text" 
    className="form-control" 
    name='size' 
    value={inputfield.size} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <label htmlFor="" className="label-control">Price</label>
  <input 
    type="text" 
    className="form-control" 
    name='price' 
    value={inputfield.price} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <label htmlFor="" className="label-control">Material</label>
  <input 
    type="text" 
    className="form-control" 
    name='material' 
    value={inputfield.material} 
    onChange={inputhandler} 
  />
</div>

      </div>
    </div>
                            
                            
                            
                            <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <button  onClick={readvalue}className="btn btn-warning">Add dress</button>
                            </div>
                        </div>
                    </div>
                </div>
            
    
    
  )
}

export default Add