import styles from "../style/style.module.css";

const TestType = ({ testType }) => {
  return (
    <>
      <h1 className={styles.heading}> Test-Type</h1>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Type Id</th>
            <th>Test Type</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {testType.map((ele, indx) => {
            return (
              <tr key={indx + 1}>
                <td>{indx + 1}</td>
                <td>{ele.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default TestType;
