import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";

import './changes.css';

const products = [
    { id: 0, name: "Item name 0", price: 2100 },
    { id: 1, name: "Item name 1", price: 2101 },
    { id: 2, name: "Item name 2", price: 2102 },
    { id: 3, name: "Item name 3", price: 2103 }
];

const columns = [
    {
        dataField: "id",
        text: "Product ID",
        sort: true
    },
    {
        dataField: "name",
        text: "Product Name",
        sort: true
    },
    {
        dataField: "price",
        text: "Product Price"
    }
];

export default function BSTable() {
    return (
        <div className="App">
            <BootstrapTable style="background-color: #90ee903d;"
                bootstrap4
                keyField="id"
                data={products}
                columns={columns}
            />
        </div>
    );
}