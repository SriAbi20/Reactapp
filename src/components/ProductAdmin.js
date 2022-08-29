import React ,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import ProductDataService from '../services/product.service';
const ProductAdmin= ()=>{
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
  const deleteProduct = (id)=>{   
    ProductDataService.delete(id)
          .then(response => {
            console.log(response.data);
           // this.props.history.push('/tutorials')
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
            <p className="h3 text-sucess">Products admin</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis perferendis inventore sequi ab quo pariatur dicta, corrupti numquam consequatur doloribus molestias animi aut aliquid ad incidunt adipisci quaerat enim.</p>
        <Link to="/AddProduct" className="btn btn-success btn-sm">Create New</Link>
        </div>
    </div>
</div>
<div className="container mt-3">
    <div className="row">
        <div className="col">
            <table className="table table-striped table-hover text-center">
             <thead className="bg-success text-white">
                <tr>
                    <th>SNO</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Actions</th>
                </tr>
             </thead>
             <tbody>
                {products.map((element)=>
                <tr >
                    <td >Product Id</td>
                    <td>
                        <img src={element.image} width="50" height="50" />
                    </td>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td>{element.qty} kgs</td>
                    <td>
                        <Link to ="/EditProduct" className="btn btn-primary btn-sm">
                        <button className="btn btn-primary btn-sm">
                            <i className="fa fa-edit"></i>Edit
                        </button>
                        </Link>
                        <button className="btn btn-danger btn-sm"  onClick={(e)=>{deleteProduct(element._id)}}>
                            <i className="fa fa-trash" ></i>Delete
                        </button>
                    </td>
                </tr>
              )}
             </tbody>
            </table>
        </div>
    </div>
</div>
</div>
    )
}
export default ProductAdmin;