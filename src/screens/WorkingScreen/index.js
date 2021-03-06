import { useState } from "react";
import SearchIcon from "../../icons/search-icon";
import Add from "../../icons/add-paper";
import Edit from "../../icons/edit";
import Delete from "../../icons/delete";
import "./WorkingScreen.css";
import { TableController } from "../../components";
export default function WorkingScreen() {
  // for search
  const [data, setData] = useState(mockup);
  const [isSearch, setIsSearch] = useState(false);
  // data
  const [date, setDate] = useState();
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

  // option icon ad edit delete
  const iconOption = { className: "icon-link", width: "1rem", height: "1rem" };

  // data slice with table
  const rowData = data
    .slice(numberStartData, numberEndData)
    .map((item, key) => (
      <div className="table-grid" key={key}>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.date}</p>
        <div className="menu-row">
          <Add
            {...iconOption}
            onClick={() => console.log("Click function add " + item.id)}
          />
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

  // function search
  function searchWithDate() {
    let nDate = [];
    if (!date) {
      return null;
    }
    data.forEach((item, index) => {
      console.log(new Date(item.date).getTime() === new Date(date).getTime());
      if (new Date(item.date).getTime() === new Date(date).getTime()) {
        console.log(item);
        nDate.push(item);
      }
    });
    setIsSearch(true);
    setData(nDate);
  }

  // refresh page
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="content-body">
      <h2>?????????????????????????????????????????????</h2>
      <div className="working-content">
        <div className="date-picker-content">
          <p>?????????????????????????????????</p>
          <input
            type="date"
            className="date-picker"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          {isSearch ? (
            <span onClick={refreshPage} className="button-clear-date">
              ????????????
            </span>
          ) : (
            <SearchIcon
              width="1.5rem"
              hieght="1.5rem"
              style={{ cursor: "pointer" }}
              onClick={searchWithDate}
            />
          )}
        </div>

        <div className="table-content">
          <div className="table-grid header">
            {/* header table */}
            <p>????????????</p>
            <p>????????????</p>
            <p>??????????????????</p>
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
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toISOString()
    .slice(0, 10);
}

const mockup = [
  {
    id: "A001",
    name: "????????? A",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A002",
    name: "????????? B",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A003",
    name: "????????? C",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A004",
    name: "????????? D",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A005",
    name: "????????? E",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A006",
    name: "????????? F",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A007",
    name: "????????? G",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A008",
    name: "????????? H",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A009",
    name: "????????? I",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A010",
    name: "????????? J",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A011",
    name: "????????? K",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A012",
    name: "????????? L",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A013",
    name: "????????? M",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A014",
    name: "????????? N",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A015",
    name: "????????? O",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A016",
    name: "????????? P",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A017",
    name: "????????? Q",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A018",
    name: "????????? R",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A019",
    name: "????????? S",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A020",
    name: "????????? T",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A021",
    name: "????????? U",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A022",
    name: "????????? V",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A023",
    name: "????????? W",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A024",
    name: "????????? X",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A025",
    name: "????????? Y",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
  {
    id: "A026",
    name: "????????? Z",
    date: randomDate(new Date(2021, 1, 2), new Date()),
  },
];
