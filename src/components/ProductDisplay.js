import React ,{useEffect, useState} from 'react';
import ProductDataService from '../services/product.service';

const ProductDisplay = ()=>{
    const [products,setProducts]=useState([]);
    useEffect(() => {
        retrieveProducts();
   }, []);
   const retrieveProducts=()=> {
    ProductDataService.getAll()
      .then(response => {
        setProducts(
           response.data
        );
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

    return(
        <div>
            
               
<div className="container mt-3">
    <div className="row">
        <div className="col">
            <p className="h3 text-sucess">Products Display</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis perferendis inventore sequi ab quo pariatur dicta, corrupti numquam consequatur doloribus molestias animi aut aliquid ad incidunt adipisci quaerat enim.</p>
        </div>
    </div>
</div>

<div className="container mt-3">
    <div className="row">
    {products.map((element)=>
        <div className="col-md-3"  >
            <div className="card shadow-lg">
                <div className="card-header bg-white">
                    <img src={element.image} alt="" className="img-fluid"/>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                           Name:<span className="fw-bold">{element.name}</span>
                        </li>
                        <li className="list-group-item">
                            Price:<span className="fw-bold">{element.price}</span>
                         </li>
                         <li className="list-group-item">
                            Qty:<span className="fw-bold">{element.qty}</span>
                         </li>
                    </ul>
                </div>
            </div>
        </div>
        )}
    </div>
</div>



</div>
    )
}
export default ProductDisplay;