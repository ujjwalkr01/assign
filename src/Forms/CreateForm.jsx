import { useState } from "react";
import TestTable from "../Table/TestTable";
import styles from "../style/style.module.css";

const CreateForm = () => {
  const [inptTxt, setInptTxt] = useState({
    Test_Name: "",
    New_test: "",
    Tester_emailId: "",
    Tester_mobile_no: "",
    Alternative_no: "",
    type: "",
    currDate: "",
  });
  const [selectList, setSelectList] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleFormInput = (e) => {
    //for checking character should not be digit
    let { name, value } = e.target;

    if (!/\d/.test(value)) {
      setInptTxt({ ...inptTxt, [name]: value });
    }
  };

  const handleSelectInpt = (e) => {
    setSelectList(e.target.value);
    // console.log(e.target.value);
    // setInptTxt({ ...inptTxt, New_test: e.target.value });
    setInptTxt({ ...inptTxt, type: e.target.value });
  };

  const handleCreateNewTest = () => {
    document.querySelectorAll("option").forEach((ele) => {
      if (inptTxt.New_test.toLowerCase() === ele.textContent.toLowerCase()) {
        alert(`${ele.textContent} already exists!`);
        // setInptTxt({ ...inptTxt, New_test: "" });
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
      setInptTxt({
        ...inptTxt,
        New_test: inptTxt.New_test,
        type: inptTxt.New_test,
      });
    }
    console.log(selectList);
  };

  const handleFormInput1 = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    if (
      (name === "Tester_mobile_no" && value >= 0 && value.length != 11) ||
      (name === "Alternative_no" && value >= 0 && value.length != 11)
    ) {
      setInptTxt({ ...inptTxt, [name]: value });
    }
    if (name === "Tester_emailId") {
      setInptTxt({ ...inptTxt, [name]: value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !inptTxt.Tester_emailId.includes("@") ||
      !inptTxt.Tester_emailId.includes(".com")
    ) {
      alert("Please enter the valid email id!");
    } else if (
      inptTxt.Tester_mobile_no.length < 10 ||
      inptTxt.Alternative_no.length < 10
    ) {
      alert("Please enter the valid mobile number!");
    } else if (inptTxt.Alternative_no === inptTxt.Tester_mobile_no) {
      alert("Alternate number can't be same as mobile number!");
    } else {
      setInptTxt({ ...inptTxt, currDate: `${new Date().toDateString()}` });
      setTableData([...tableData, inptTxt]);
    }
  };

  const deleteItems = (item) => {
    console.log(item);
    const newArray = tableData.filter((el, i) => i != item);
    setTableData(newArray);
  };

  return (
    <>
      <div className={styles.parentDiv}>
        <label className={styles.label}>Test Name:-</label>
        <input
          className={styles.inpt}
          type="text"
          value={inptTxt.Test_Name}
          name="Test_Name"
          onChange={handleFormInput}
        />
        <br />
        <label className={styles.label}>Test Type:-</label>
        <select
          className={styles.inpt}
          name="Test_Type"
          id="testType"
          onChange={handleSelectInpt}
        >
          <option value="Select Test Type">Select Test Type</option>
          <option value="PHP">PHP</option>
          <option value="Node Js">Node Js</option>
          <option value="React Js">React Js</option>
        </select>
        <br />
        <label className={styles.label}>Create New Test:-</label>
        <input
          className={styles.inpt}
          type="text"
          name="New_test"
          value={inptTxt.New_test}
          onChange={handleFormInput}
        />
        <br />
        <button className={styles.btn} onClick={handleCreateNewTest}>
          Create Test
        </button>
        <br />

        <h3>Enter Details of the Tester :-</h3>
        <form onSubmit={handleFormSubmit}>
          <label className={styles.label}>Tester Email id:-</label>
          <input
            className={styles.inpt}
            type="text"
            value={inptTxt.Tester_emailId}
            name="Tester_emailId"
            onChange={handleFormInput1}
          />
          <br />
          <label className={styles.label}>Tester Mobile No.:-</label>
          <input
            className={styles.inpt}
            type="text"
            value={inptTxt.Tester_mobile_no}
            name="Tester_mobile_no"
            onChange={handleFormInput1}
          />
          <br />
          <label className={styles.label}>Alternative No.:-</label>
          <input
            className={styles.inpt}
            type="text"
            value={inptTxt.Alternative_no}
            name="Alternative_no"
            onChange={handleFormInput1}
          />
          <br />
          <button className={styles.btn}>Submit</button>
        </form>
      </div>

      <TestTable tableData={tableData} deleteItems={deleteItems} />
    </>
  );
};
export default CreateForm;
