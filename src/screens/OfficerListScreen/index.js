import { useState } from "react";
import Edit from "../../icons/edit";
import Delete from "../../icons/delete";
import "./OfficerListScreen.css";
import { TableController } from "../../components";


export default function OfficerListScreen() {

  // data
  const [data] = useState(mockup);
  // table
  const [indexTable, setIndexTable] = useState(0);
  const [numOfRow, setNumOfRow] = useState(10);
  const numOfTable = Math.ceil(data.length / numOfRow);
  const numberStartData = indexTable * numOfRow;
  const dataLength = +numOfRow;
  const numberEndData =
    numberStartData + dataLength > data.length
      ? data.length
      : numberStartData + dataLength;
  if (indexTable >= numOfTable) setIndexTable(numOfTable - 1);

  // option icon edit delete
  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  // data with table
  const rowData = data
    .slice(numberStartData, numberEndData)
    .map((item, key) => (
      <div className="table-grid" key={key}>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.position}</p>
        <div className="menu-row">
          <Edit
            {...iconOption}
            onClick={() => console.log("Click function edit " + item.id)}
          />
          <Delete
            {...iconOption}
            onClick={() => console.log("Click function delete " + item.id)}
          />
        </div>
      </div>
    ));


  return (
    <div className="content-body">
       <div className = "head-officerlist">
      <h2>รายชื่อเจ้าหน้าที่</h2>
      <div className = "button-officelist">
   <button className="btn btn-officerlist"> รายชื่อทั้งหมด</button>
   <button className="btn btn-officerlist"> รายชื่อเจ้าหน้าที่</button>
   <button className="btn btn-officerlist"> รายชื่อหมอ</button>
  </div>
        </div>
      <div className="working-content">
        <div className="table-content">
          <div className="table-grid header">
            {/* header table */}
            <p>รหัส</p>
            <p>ชื่อ</p>
            <p>ตำแหน่ง</p>
            <p></p>
            {/* end header */}
          </div>
          <div className="body-table">
            {/* body table */}
            {rowData}
            {/* end body table */}
          </div>
        </div>

        <TableController
          indexTable={indexTable}
          setIndexTable={setIndexTable}
          numOfTable={numOfTable}
          setNumOfRow={setNumOfRow}
          numOfRow={numOfRow}
        />
      </div>
    </div>
  );
}

//////////////////////// Mockup Data //////

const mockup = [
  {
    id: "A001",
    name: "นาย A",
    position : "หมอ", 

  },
  {
    id: "A002",
    name: "นาย B",
    position : "หมอ", 
  },
  {
    id: "A003",
    name: "นาย C",
    position : "หมอ", 
  },
  {
    id: "A004",
    name: "นาย D",
    position : "Admin", 
  },
  {
    id: "A005",
    name: "นาย E",
    position : "Admin", 
  },
  {
    id: "A006",
    name: "นาย F",
    position : "Admin", 
  },
  {
    id: "A007",
    name: "นาย G",
    position : "Admin", 
  },
  {
    id: "A008",
    name: "นาย H",
    position : "Admin", 
  },
  {
    id: "A009",
    name: "นาย I",
    position : "หมอ", 
  },
  {
    id: "A010",
    name: "นาย J",
    position : "หมอ", 
  },
  {
    id: "A011",
    name: "นาย K",
    position : "หมอ", 
  },
  {
    id: "A012",
    name: "นาย L",
    position : "หมอ", 
  },
  {
    id: "A013",
    name: "นาย M",
    position : "หมอ", 
  },
  {
    id: "A014",
    name: "นาย N",
    position : "หมอ", 
  },
  {
    id: "A015",
    name: "นาย O",
  },
  {
    id: "A016",
    name: "นาย P",
  },
  {
    id: "A017",
    name: "นาย Q",
    position : "Admin", 
  },
  {
    id: "A018",
    name: "นาย R",
    position : "Admin", 
  },
  {
    id: "A019",
    name: "นาย S",
    position : "หมอ", 
  },
];
