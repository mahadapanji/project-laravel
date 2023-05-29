import "./AppTable.scss";

function AppTable({ title, data }) {
  const RenderTitle = () => {
    return title.map((el, i) => {
      return (
        <th key={i} scope="col">
          {el}
        </th>
      );
    });
  };

  const RenderData = () => {
    return data.map((el, i) => (
      <tr key={i}>
        {Object.values(el).map((val, index) => {
          return <td key={index}>{val}</td>;
        })}
      </tr>
    ));
  };

  return (
    <>
      <table className="table table-header">
        <thead>
          <tr>
            <RenderTitle />
          </tr>
        </thead>
        <tbody>
          <RenderData />
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AppTable;
