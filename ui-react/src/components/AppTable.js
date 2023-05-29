import { useState } from 'react';
import './AppTable.scss';

function AppTable({ title, data }) {
  const [currentPage, setCurrentPage] = useState(0);

  const RenderTitle = () => {
    return title.map((el, i) => {
      return (
        <th key={i} scope='col'>
          {el}
        </th>
      );
    });
  };

  const sliceData = () => {
    const indexFirstItem = () => {
      if (currentPage > 0) {
        return currentPage * 5;
      } else {
        return 0;
      }
    };

    const indexLastItem = () => {
      const lastIndex = (currentPage + 1) * 5;
      if (lastIndex > data.length) {
        return data.length;
      } else {
        return lastIndex;
      }
    };

    return data.slice(indexFirstItem(), indexLastItem());
  };

  const RenderData = () => {
    return sliceData().map((el, i) => (
      <tr key={i}>
        {Object.values(el).map((val, index) => {
          return <td key={index}>{val}</td>;
        })}
      </tr>
    ));
  };

  const handleButtonPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleButtonNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleButtonSelectPage = (val) => {
    setCurrentPage(val);
  };

  const RenderPreviousButton = () => {
    if (currentPage > 0) {
      return (
        <button class='page-link' onClick={handleButtonPrevious}>
          Previous
        </button>
      );
    }
  };

  const RenderNextButton = () => {
    const totalPages = Math.ceil(data.length / 5);
    if (currentPage + 1 !== totalPages) {
      return (
        <button class='page-link' onClick={handleButtonNext}>
          Next
        </button>
      );
    }
  };

  const RenderPagination = () => {
    const pages = [];
    const totalPages = Math.ceil(data.length / 5);
    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }

    return pages.map((el, i) => {
      return (
        <li key={i} class='mx-1 page-item'>
          <button
            value={el}
            onClick={() => handleButtonSelectPage(el)}
            class={'page-link ' + (currentPage === el ? 'page-button' : '')}
            href='#'
          >
            {el + 1}
          </button>
        </li>
      );
    });
  };

  return (
    <>
      <table className='table table-header'>
        <thead>
          <tr>
            <RenderTitle />
          </tr>
        </thead>
        <tbody>
          <RenderData />
        </tbody>
      </table>
      <nav aria-label='Page navigation example'>
        <ul class='pagination'>
          <li class='page-item'>
            <RenderPreviousButton />
          </li>
          <RenderPagination />
          <li class='page-item'>
            <RenderNextButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AppTable;
