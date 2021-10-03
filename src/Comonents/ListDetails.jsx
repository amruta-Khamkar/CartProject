import React, { Component } from 'react'

export class ListDetails extends Component {
 
    render() {
        return (
            <div>
                <table border='3' className="table">
                    <thead>
                        <th>Sr No</th>
                        <th>Employee Code</th>
                        <th>Employee Name</th>
                        <th>Phone Number</th>
                    </thead>

                    <tbody>
                        {console.log(this.props.emp)}
                        {
                            this.props.emp.map((e,i) => 
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{e.empId}</td>
                                    <td>{e.empName}</td>
                                    <td>{e.phoneNo}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )

    }
}
export default ListDetails;
