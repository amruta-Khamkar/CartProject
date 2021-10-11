import React, { Component } from 'react'
import json from './Products.json'
// let count=0;
export class Product extends Component {

    constructor() {
        super();
        this.state = { productData: [], length: 0 }
    }

    componentDidMount() {
        this.setState({ productData: json.Products });
        if (localStorage.getItem('myCart') != undefined && (localStorage.getItem('myQuan') != undefined)) {
            let quan = JSON.parse(localStorage.getItem('myQuan'));
            let sum = 0;
            for (let i = 0; i < quan.length; i++) {
                sum = sum + quan[i]
            }
            this.setState({ length: sum })
        }
    }

    addCard = (id, quantity) => {

        if ((localStorage.getItem('myCart') != undefined) && (localStorage.getItem('myQuan') != undefined)) {
            let quan = JSON.parse(localStorage.getItem('myQuan'));
            let arr = JSON.parse(localStorage.getItem('myCart'));

            let i = arr.indexOf(id);

            if (arr.includes(id)) {

                quan[i] = quan[i] + 1;
                localStorage.setItem('myQuan', JSON.stringify(quan));
                this.setState({ length: this.state.length + 1 });
                // console.log(quan[i]);
            }
            else {
                arr.push(id);
                localStorage.setItem('myCart', JSON.stringify(arr));
                quan.push(quantity);
                localStorage.setItem('myQuan', JSON.stringify(quan));
                this.setState({ length: this.state.length + 1 });
                alert("product added");
            }
        }
        else {
            let arr = [];
            let quan = [];
            quan.push(quantity);
            localStorage.setItem('myQuan', JSON.stringify(quan));
            arr.push(id);
            localStorage.setItem('myCart', JSON.stringify(arr));
            this.setState({ length: this.state.length + 1 });
            alert("product added")
        }
    }

    empty=(()=>{
        let quan = JSON.parse(localStorage.getItem('myQuan'));
       let arr = JSON.parse(localStorage.getItem('myCart'));
        if(window.confirm("Are You Sure You want to clear the cart ?")){

            quan=[];
            arr=[];
            localStorage.setItem('myQuan', JSON.stringify(quan));
            localStorage.setItem('myCart', JSON.stringify(arr));
            document.getElementById("cart").style.display="none";
          
                let sum = 0;
                for (let i = 0; i < quan.length; i++) {
                    sum = sum + quan[i]
                }
            this.setState({length:sum});
        }
      
    })
    render() {
        let quan = JSON.parse(localStorage.getItem('myQuan'));
        let arr = JSON.parse(localStorage.getItem('myCart'));
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Click on cart to see added products</h1>
                <ul className="nav">

                    <li className="nav-item">
                        <a className="nav-link" href="#cart">Cart <span className="bg-primary text-white p-1 px-2">{this.state.length}</span>
                        </a>
                    </li>
                </ul>
                {this.state.productData.map(json =>
                    <div key={Math.random()} className="card-body block">
                        <img key={Math.random()} className="card-img-top imgs" height=" 300px" src={json.imgsrc} alt=" "></img>
                        <h4 key={Math.random()} className="card-title">{json.ProductName}</h4>
                        <div key={Math.random()}  className="card-text">
                            Price : <span style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>Rs. {json.Price}</span><br />

                            {quan == null ? <p>Quantity : 0</p> : <p>Quantity: {quan[arr.indexOf(json.id)]} </p>}
                        </div>
                        <a  key={Math.random()} onClick={() => this.addCard(json.id, json.Quantity)} className="btn btn-primary">Add To Cart</a>
                    </div>
                )}

                    <button className="bg-danger text-white rounded btns" onClick={this.empty}>Empty Cart</button>
                    <h1 className="my-5" style={{ textAlign: "center" }}>Hello, Welcome to the cart check Your added products here !</h1>

                <div id="cart">
                    {
                        arr != null ?
                            arr.map((h,index) =>
                               <span key={index} id="pro">
                                    <div key={Math.random()} className="card-body" id="blocks">
                                        <img key={Math.random()} className="card-img-top imgs" height=" 300px" src={json.Products[h - 1].imgsrc} ></img>
                                        <h4 key={Math.random()} className="card-title">{json.Products[h - 1].ProductName}</h4>
                                        <div key={Math.random()} className="card-text">
                                            Price : <span style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>{json.Products[h - 1].Price}</span><br />
                                            <p>Quantity : <span style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>{quan[arr.indexOf(h)]} </span></p>
                                        </div>
                                        <h4 key={Math.random()} >Total Price: <span style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>{quan[arr.indexOf(h)]*json.Products[h-1].Price}</span> <span style={{ color: "red", fontSize:"21px"}}>Rs </span></h4>
                                    </div></span>
                                   

                            ) : <h1  key={Math.random()} style={{ color: "red", textAlign: "center" }}>No Data To Display Please add some products in cart</h1>

                    }
                </div>
            </div>
        )
    }
}

export default Product;
