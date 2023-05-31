import { useState } from 'react';
import './AppTable.scss';

function AppTable({ title, data, dataPerPage, deleteButton }) {
  const [currentPage, setCurrentPage] = useState(0);

  const RenderTitle = () => {
    return title.map((el, i) => {
      return (
        <th key={i} scope='col'>
          {el.title}
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

  const handleEditData = (val) => {
    console.log(val, 'CLICKED');
  };

  const RenderData = () => {
    return sliceData().map((el, i) => (
      <tr key={i}>
        {title.map((item, index) => {
          // eslint-disable-next-line array-callback-return
          return Object.keys(el).map((val) => {
            if (item.value === val && item.value === 'action') {
              return (
                <td key={index}>
                  <button
                    onClick={() => handleEditData(i)}
                    className='me-2 action-button-edit'
                  >
                    <i className='bi bi-pencil-square'></i>
                  </button>
                  <button
                    onClick={() => deleteButton(el.id)}
                    className='action-button-delete'
                  >
                    <i className='bi bi-x-lg'></i>
                  </button>
                </td>
              );
            } else if (item.value === val) {
              return <td key={index}>{el[val]}</td>;
            }
          });
        })}
      </tr>
    ));
  };

  const handleButtonPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleButtonNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleButtonSelectPage = (val) => {
    setCurrentPage(val);
  };

  const RenderPreviousButton = () => {
    if (currentPage > 0 && data.length !== 0) {
      return (
        <button className='page-link' onClick={handleButtonPrevious}>
          Previous
        </button>
      );
    }
  };

  const RenderNextButton = () => {
    const totalPages = Math.ceil(data.length / 5);
    console.log(data.length);
    if (currentPage + 1 !== totalPages && data.length !== 0) {
      return (
        <button className='page-link' onClick={handleButtonNext}>
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

      return pages.slice(indexFirstPage(), indexLastPages());
    };

    return slicePages().map((el, i) => {
      return (
        <li key={i} className='mx-1 page-item'>
          <button
            value={el}
            onClick={() => handleButtonSelectPage(el)}
            className={'page-link ' + (currentPage === el ? 'page-button' : '')}
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
            <ul className='pagination'>
              <li className='page-item'>
                <RenderPreviousButton />
              </li>
              <RenderPagination />
              <li className='page-item'>
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
