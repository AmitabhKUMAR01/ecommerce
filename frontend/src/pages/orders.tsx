import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Link } from "react-router-dom";
import { Column } from "react-table";

type DataType={
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action:ReactElement

}
const column : Column<DataType>[] =[
    {
        Header:"ID",
        accessor:"_id",
    },{
        Header:"Quantity",
        accessor:"quantity",
    },{
        Header:"Discount",
        accessor:"discount",
    },{
        Header:"Amount",
        accessor:"amount",
    },{
        Header:"Status",
        accessor:"status",
    },{
        Header:"Action",
        accessor:"action",
    }

] 
const Orders = () => {
    const [rows,setRows] =useState<DataType>([{
        _id:"fdadfsdlk",
        amount:100,
        quantity:10,
        discount:10,
        status: <span className="badge badge-success">Success</span>,
        action:<Link to="/admin/transaction/sajknaskd">Manage</Link>
    }])
    const Table = TableHOC<DataType>(column,rows,"column-product-box","Orders",true)();
  return (
    <div className="container">
        <h1>my orders</h1>
        {
            Table
        }

    </div>
  )
}

export default Orders