import styles from "../style/style.module.css";

const TestTable = ({ tableData, deleteItems }) => {
  // console.log(tableData);

  //deleting the tables data...
  const deleteTheTodo = (e) => {
    deleteItems(e.target.id);
  };

  const getRowColor = (type) => {
    switch (type) {
      case "PHP":
        return "green";
      case "Node Js":
        return "yellow";
      default:
        return "orange";
    }
  };

  return (
    <>
      <h1 className={styles.heading}> Php_test_mast</h1>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
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
        <tbody className={styles.tableBody}>
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
                <tr
                  style={{ backgroundColor: getRowColor(type) }}
                  key={indx + 1}
                >
                  <td>{indx + 1}</td>
                  <td>{Test_Name}</td>
                  <td>{type}</td>
                  <td>{Tester_emailId}</td>
                  <td>{Tester_mobile_no}</td>
                  <td>{Alternative_no}</td>
                  <td>{currDate}</td>
                  <td>{currDate}</td>

                  <td>
                    <button className={styles.btn}>edit</button>
                    <button
                      className={styles.btn}
                      id={indx}
                      onClick={deleteTheTodo}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default TestTable;
