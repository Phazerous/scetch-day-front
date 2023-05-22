import styles from './table-board-header.module.scss';

export default function TableBoardHeader() {
  return (
    <>
      <thead>
        <tr className={styles.row}>
          <td>
            <h5>Task Title</h5>
          </td>
          <td>
            <h5>Plan Time</h5>
          </td>
          <td>
            <h5>Fact Time</h5>
          </td>
          <td>
            <h5>Done</h5>
          </td>
        </tr>
      </thead>
    </>
  );
}
