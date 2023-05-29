import { useState } from 'react';
import './AppTable.scss';

function AppTable({ title, data, dataPerPage }) {
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

    const slicePages = () => {
      const indexFirstPage = () => {
        if (currentPage + 1 === pages.length) {
          return pages.length - dataPerPage;
        } else if (pages[currentPage - 1] === undefined) {
          return currentPage;
        } else {
          return currentPage - 1;
        }
      };

      const indexLastPages = () => {
        return indexFirstPage() + dataPerPage;
      };
      console.log(currentPage, indexFirstPage(), indexLastPages(), pages);

      return pages.slice(indexFirstPage(), indexLastPages());
    };

    return slicePages().map((el, i) => {
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
      <div className='row'>
        <div className='col d-flex justify-content-center'>
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
        </div>
      </div>
    </>
  );
}

export default AppTable;
