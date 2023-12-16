import { useState } from "react";
import TestTable from "../Table/TestTable";

const Form1 = ({ passingData }) => {
  const [inputDetails, setInputDetails] = useState({
    Tester_emailId: "",
    Tester_mobile_no: "",
    Alternative_no: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    if (
      (name === "Tester_mobile_no" && value >= 0 && value.length != 11) ||
      (name === "Alternative_no" && value >= 0 && value.length != 11)
    ) {
      setInputDetails({ ...inputDetails, [name]: value });
    }
    if (name === "Tester_emailId") {
      setInputDetails({ ...inputDetails, [name]: value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !inputDetails.Tester_emailId.includes("@") ||
      !inputDetails.Tester_emailId.includes(".com")
    ) {
      alert("Please enter the valid email id!");
    } else if (
      inputDetails.Tester_mobile_no.length < 10 ||
      inputDetails.Alternative_no.length < 10
    ) {
      alert("Please enter the valid mobile number!");
    } else if (inputDetails.Alternative_no === inputDetails.Tester_mobile_no) {
      alert("Alternate number can't be same as mobile number!");
    } else {
      console.log("hiiiii")
      passingData(inputDetails);
      // passingTableData();
    }
  };

  return (
    <>
      <h3>Enter Details of the Tester :-</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Tester Email id:-</label>
        <input
          type="text"
          value={inputDetails.Tester_emailId}
          name="Tester_emailId"
          onChange={handleFormInput}
        />
        <br />
        <label>Tester Mobile No.:-</label>
        <input
          type="text"
          value={inputDetails.Tester_mobile_no}
          name="Tester_mobile_no"
          onChange={handleFormInput}
        />
        <br />
        <label>Alternative No.:-</label>
        <input
          type="text"
          value={inputDetails.Alternative_no}
          name="Alternative_no"
          onChange={handleFormInput}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form1;
