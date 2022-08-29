import React,{Component} from 'react';
import ProductDataService from '../services/product.service';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
        this.onChangeInfo = this.onChangeInfo.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.newProduct = this.newProduct.bind(this);
        this.state = {
          id:null,
          name:"",
          image:"",
          price:"",
          qty:"",
          info:"", 
          published: false,
          submitted: false
        };
      }
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeImage(e) {
        this.setState({
          image: e.target.value
        });
      }
      onChangePrice(e) {
        this.setState({
          price: e.target.value
        });
      }
      onChangeQty(e) {
        this.setState({
          qty: e.target.value
        });
      }
      onChangeInfo(e) {
        this.setState({
          info: e.target.value
        });
      }
      saveProduct() {
          var data = {
            id:this.state._id,
            name:this.state.name,
            image:this.state.image,
            price:this.state.price,
            qty:this.state.qty,
            info:this.state.info
          };
          ProductDataService.update(data)
            .then(response => {
              this.setState({
                id: response.data.id,
                image:response.data.image,
                price:response.data.price,
                qty:response.data.qty,
                info:response.data.info,
                description: response.data.description,
                published: response.data.published,
                submitted: true
              });
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
            ProductDataService.update(this.state._id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: ""
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
        }
        newProduct() {
          this.setState({
            id:null,
            name:"",
            image: "",
            price: "",
            qty: "",
            info: "", 
            published: false,
            submitted: false
          });
        }
    
render(){

    return(
        <div>

<div className="container mt-3">
    <div className="row">
        <div className="col">
            <p className="h3 text-success">Edit Product</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis perferendis inventore sequi ab quo pariatur dicta, corrupti numquam consequatur doloribus molestias animi aut aliquid ad incidunt adipisci quaerat enim.</p>
        </div>
    </div>
</div>

<div className="container">
    <div className="row">
        <div className="col-md-4">
<div className="alert alert-danger alert-dismissible fade-show">
    <span>Please fill in the Fields</span>
    <button  type="button" className="btn-close" data-dismiss="alert" aria-label="Close">
    </button>
  </div>
 </div>
</div>
</div>
<div className="container mt-3">
    <div className="row">
        <div className="col-md-4">
            <form >
                <div className="mb-3">
                    <input
                    name="name" 
                     type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="mb-3">
                    <input 
                    name="image" 
                    type="text" className="form-control" placeholder="Image"/>
                </div>
                <div className="mb-3">
                    <input type="text" 
                    name="price" 
                    className="form-control" placeholder="Price"/>
                </div>
                <div className="mb-3">
                    <input 
                    name="qty" 
                    type="text" className="form-control" placeholder="Quantity"/>
                </div>
                <div className="mb-3">
                    <textarea 
                    name="info"
                    rows="4" className="form-control" placeholder="Info"></textarea> 
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-success btn-sm" value="Update"/>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
    )
}
}