const TestTable = ({ tableData }) => {
  // console.log(tableData);
  return (
    <table>
      <thead>
        <tr>
          <th>Test Id</th>
          <th>Test Name</th>
          <th>Test Type</th>
          <th>Tester Email</th>
          <th>Tester Mobile No.</th>
          <th>Alternate No.</th>
          <th>Creation Date</th>
          <th>Updation Date</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(
          (
            {
              Test_Name,
              New_test,
              Tester_emailId,
              Tester_mobile_no,
              Alternative_no,
            },
            indx
          ) => {
            return (
              <tr>
                <td>{indx+1}</td>
                <td>{Test_Name}</td>
                <td>{New_test}</td>
                <td>{Tester_emailId}</td>
                <td>{Tester_mobile_no}</td>
                <td>{Alternative_no}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default TestTable;
