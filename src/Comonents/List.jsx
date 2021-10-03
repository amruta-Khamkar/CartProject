import React, { Component } from 'react';
import ListDetails from './ListDetails'

export class List extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:[
                
                        {"empId": "001" ,"empName":"Amruta" , "phoneNo":"9876543210" },
                        {"empId": "002" ,"empName":"Amar" , "phoneNo":"9876543210" },
                        {"empId": "003" ,"empName":"Amol" , "phoneNo":"9876543210" },
                        {"empId": "004" ,"empName":"Atul" , "phoneNo":"9876543210" },
                        {"empId": "005" ,"empName":"Jeff" , "phoneNo":"9876543210" },
                        {"empId": "006" ,"empName":"Arpan" , "phoneNo":"9876543210" },
                        {"empId": "007" ,"empName":"Apurva" , "phoneNo":"9876543210" },
                        {"empId": "008" ,"empName":"Rohit" , "phoneNo":"9876543210" },
                        {"empId": "009" ,"empName":"Chinmay" , "phoneNo":"9876543210" },
                        {"empId": "010" ,"empName":"Prachi" , "phoneNo":"9876543210" },
                        {"empId": "011" ,"empName":"Samiksha" , "phoneNo":"9876543210" },
                        {"empId": "012" ,"empName":"Mayank" , "phoneNo":"9876543210" },
                        {"empId": "013" ,"empName":"Sunaina" , "phoneNo":"9876543210" },
                        {"empId": "014" ,"empName":"Aman" , "phoneNo":"9876543210" },
                        {"empId": "015" ,"empName":"Harshit" , "phoneNo":"9876543210" },
                        {"empId": "016" ,"empName":"Vikas" , "phoneNo":"9876543210" },
                        {"empId": "017" ,"empName":"Amandeep" , "phoneNo":"9876543210" },
                        {"empId": "018" ,"empName":"Kimmi" , "phoneNo":"9876543210" },
                        {"empId": "019" ,"empName":"Monika" , "phoneNo":"9876543210" },
                        {"empId": "020" ,"empName":"Kush" , "phoneNo":"9876543210" }
                
                
                    ]
                    

        }
    }
    
    render() {
        return (
            <div>
                <ListDetails emp={this.state.arr}/>
            </div>
        )
    }
}

export default List
