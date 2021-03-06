import { useState } from "react";
import SearchIcon from "../../icons/search-icon";
import { InputNumber, TableController } from "../../components";
import "./MedicineScreen.css";


export default function MedicineScreen() {
  // for search
  const [searchInput, setSearchInput] = useState(null);
  const [searched, setSearched] = useState(false);
  // data
  const [data, setData] = useState(mockup);
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

  // function row data creating
  const RowMedicine = ({ id, name, price, index, amount }) => {
    const [disable, setDisable] = useState(amount ? false : true);
    return (
      <div className="table-grid">
        <div className="menu-row">
          <input
            type="checkbox"
            checked={!disable}
            onChange={(e) => {
              let nData = data;
              nData[index] = { ...data[index], amount: undefined };
              setDisable(!e.target.checked);
              setData(nData);
            }}
          />
        </div>
        <p>{id}</p>
        <p>{name}</p>
        <div className="menu-row">
          <InputNumber
            disable={disable}
            value={amount}
            min={0}
            onChange={(number) => {
              let nData = data;
              nData[index] = { ...data[index], amount: number };
              setData(nData);
            }}
          />
        </div>
        <p>{price}</p>
      </div>
    );
  };

  // data slice with table
  const rowData = data
    .slice(numberStartData, numberEndData)
    .map((item, key) => (
      <RowMedicine
        id={item.id}
        name={item.name}
        price={item.price}
        key={key}
        index={numberStartData + key}
        amount={item.amount}
      />
    ));

  // refresh page
  function refreshPage() {
    window.location.reload();
  }
  // function search
  function search(text) {
    let nData = [];
    data.forEach((item, key) => {
      if (item.name.search(text) != -1) nData.push(item);
    });
    setData(nData);
  }

  // function submit
  const submit = () => {
    const report = data.filter((item) => item.amount != undefined);
    console.log({ report });
  };

  return (
    <div className="content-body">
      <div className="medicine-content">
        <div className="search-bar-container">
          <h2 style={{ alignSelf: "flex-start" }}> ?????? </h2>
          <div>
            <input
              type="text"
              className="search-bar"
              placeholder="???????????????..."
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            {searched ? (
              <span onClick={refreshPage} className="button-clear-date">
                ????????????
              </span>
            ) : (
              <SearchIcon
                width="1.5rem"
                hieght="1.5rem"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  search(searchInput);
                  setSearched(true);
                }}
              />
            )}
          </div>
        </div>
          
        <div className="table-content">
          {/* header table */}
          <div className="table-grid header">
            <p></p>
            <p>????????????</p>
            <p>??????????????????</p>
            <p>???????????????</p>
            <p>????????????</p>
          </div>
          {/* end header */}

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

        <span
          className="button-submit"
          style={{ backgroundColor: "#7e99b8", color: "white" }}
          onClick={submit}
        >
          ????????????????????????
        </span>
      </div>
    </div>
  );
}

//////////////////////// Mockup Data //////

const mockup = [
  {
    id: "C001",
    name: "?????? A",
    price: 100,
  },
  {
    id: "C002",
    name: "?????? B",
    price: 100,
  },
  {
    id: "C003",
    name: "?????? C",
    price: 100,
  },
  {
    id: "C004",
    name: "?????? D",
    price: 100,
  },
  {
    id: "C005",
    name: "?????? E",
    price: 100,
  },
  {
    id: "C006",
    name: "?????? F",
    price: 100,
  },
  {
    id: "C007",
    name: "?????? G",
    price: 100,
  },
  {
    id: "C008",
    name: "?????? H",
    price: 100,
  },
  {
    id: "C009",
    name: "?????? I",
    price: 100,
  },
  {
    id: "C010",
    name: "?????? J",
    price: 100,
  },
  {
    id: "C011",
    name: "?????? K",
    price: 100,
  },
  {
    id: "C012",
    name: "?????? L",
    price: 100,
  },
  {
    id: "C013",
    name: "?????? M",
    price: 100,
  },
  {
    id: "C014",
    name: "?????? N",
    price: 100,
  },
  {
    id: "C015",
    name: "?????? O",
    price: 100,
  },
  {
    id: "C016",
    name: "?????? P",
    price: 100,
  },
  {
    id: "C017",
    name: "?????? Q",
    price: 100,
  },
  {
    id: "C018",
    name: "?????? R",
    price: 100,
  },
  {
    id: "C019",
    name: "?????? S",
    price: 100,
  },
  {
    id: "C020",
    name: "?????? T",
    price: 100,
  },
  {
    id: "C021",
    name: "?????? U",
    price: 100,
  },
  {
    id: "C022",
    name: "?????? V",
    price: 100,
  },
  {
    id: "C023",
    name: "?????? W",
    price: 100,
  },
  {
    id: "C024",
    name: "?????? X",
    price: 100,
  },
  {
    id: "C025",
    name: "?????? Y",
    price: 100,
  },
  {
    id: "C026",
    name: "?????? Z",
    price: 100,
  },
];
