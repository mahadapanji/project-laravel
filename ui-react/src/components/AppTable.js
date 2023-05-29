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
    </>
  );
}

export default AppTable;
