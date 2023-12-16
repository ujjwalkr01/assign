import styles from "../style/style.module.css";

const TestTable = ({ tableData, deleteItems }) => {
  // console.log(tableData);

  const deleteTheTodo = (e) => {
    deleteItems(e.target.id);
  };

  return (
    <table className={styles.table}>
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(
          (
            {
              Test_Name,
              type,
              Tester_emailId,
              Tester_mobile_no,
              Alternative_no,
              currDate,
            },
            indx
          ) => {
            return (
              <tr>
                <td>{indx + 1}</td>
                <td>{Test_Name}</td>
                <td>{type}</td>
                <td>{Tester_emailId}</td>
                <td>{Tester_mobile_no}</td>
                <td>{Alternative_no}</td>
                <td>{currDate}</td>
                <td>{currDate}</td>
                {/* <button>edit</button> */}
                <button
                  className={styles.btn}
                  id={indx}
                  onClick={deleteTheTodo}
                >
                  delete
                </button>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default TestTable;
