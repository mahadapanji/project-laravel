import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = (val) => {
    return val === location.pathname;
  };

  const handleButtonSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-between custom-nav'>
          <div className='col'>
            <div className='row'>
              <div className='col col-lg-2'>
                <a
                  className={
                    'nav-link active text-center ' +
                    (currentPath('/dashboard') ? 'nav-active' : '')
                  }
                  aria-current='page'
                  href='/dashboard'
                >
                  Dashboard
                </a>
              </div>
              <div className='col-lg-2'>
                <a
                  className={
                    'nav-link active text-center ' +
                    (currentPath('/product') ? 'nav-active' : '')
                  }
                  aria-current='page'
                  href='/product'
                >
                  Product
                </a>
              </div>
              <div className='col-lg-2'>
                <a
                  className={
                    'nav-link active text-center ' +
                    (currentPath('/order') ? 'nav-active' : '')
                  }
                  aria-current='page'
                  href='/order'
                >
                  Order
                </a>
              </div>
            </div>
          </div>
          <div className='col d-flex justify-content-end'>
            <button
              type='button'
              className='btn btn-primary'
              onClick={handleButtonSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
