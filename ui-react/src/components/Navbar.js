import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleButtonSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <a className='navbar-brand' href='/dashboard'>
                Home
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='/product'
                  >
                    Product
                  </a>
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
