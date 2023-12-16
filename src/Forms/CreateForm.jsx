import { useState } from "react";
import Form1 from "./Form1";
import TestTable from "../Table/TestTable";

const CreateForm = () => {
  const [inptTxt, setInptTxt] = useState({
    Test_Name: "",
    New_test: "",
  });
  const [selectList, setSelectList] = useState("");
  const [data, setData] = useState({});
  const [tableData, setTableData] = useState([]);

  const handleFormInput = (e) => {
    //for checking character should not be digit
    let { name, value } = e.target;

    if (!/\d/.test(value)) {
      // console.log(Number(e.target.value));
      setInptTxt({ ...inptTxt, [name]: value });
    }
  };

  const handleSelectInpt = (e) => {
    setSelectList(e.target.value);
    // dataDetails(e.target.value);
    console.log(e.target.value);
  };

  const dataDetails = (e) => {
    // console.log(e,"hi");
    // if (inptTxt.New_test === "") {
    //   setData({ ...inptTxt, New_test: e });
    // } else {
    //   setData({ ...inptTxt });
    // }
    setData({ ...inptTxt, New_test: selectList });
  };

  const handleCreateNewTest = () => {
    document.querySelectorAll("option").forEach((ele) => {
      if (inptTxt.New_test.toLowerCase() === ele.textContent.toLowerCase()) {
        alert(`${ele.textContent} already exists.`);
        inptTxt.New_test = "";
        setInptTxt({ ...inptTxt, New_test: "" });
      }
    });

    if (inptTxt.New_test !== "") {
      // console.log(inptTxt.New_test);
      let opt = document.createElement("option");
      opt.setAttribute("value", inptTxt.New_test);
      opt.textContent = inptTxt.New_test;
      opt.selected = true;
      setSelectList(inptTxt.New_test);
      document.getElementById("testType").appendChild(opt);
      setInptTxt({ ...inptTxt, New_test: inptTxt.New_test });
      dataDetails();
      setInptTxt({ ...inptTxt, New_test: "" });
    }
    console.log(selectList);
  };

  const passingData = (obj) => {
    setData({ ...data, ...obj });
    console.log(data);
    setTableData([...tableData, data]);
    // passingTableData();
    //
  };

  // const passingTableData = () => {
  //   console.log(data);
  //   // if(data.Tester_mobile_no){
  //   //   setTableData([...tableData, data]);
  //   //   console.log(tableData);
  //   // }
  //   // setTableData([...tableData, data]);
  // };
  return (
    <div>
      <label>Test Name:-</label>
      <input
        type="text"
        value={inptTxt.Test_Name}
        name="Test_Name"
        onChange={handleFormInput}
      />
      <br />
      <label>Test Type:-</label>
      <select name="Test_Type" id="testType" onChange={handleSelectInpt}>
        <option value="Select Test Type">Select Test Type</option>
        <option value="PHP">PHP</option>
        <option value="Node Js">Node Js</option>
        <option value="React Js">React Js</option>
      </select>
      <br />
      <label>Create New Test:-</label>
      <input
        type="text"
        name="New_test"
        value={inptTxt.New_test}
        onChange={handleFormInput}
      />
      <br />
      <button onClick={handleCreateNewTest}>Create Test</button>
      <br />
      <Form1
        passingData={passingData}
        // passingTableData={passingTableData}
        tableData={tableData}
      />
      <TestTable tableData={tableData} />
    </div>
  );
};
export default CreateForm;
