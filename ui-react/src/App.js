import AppRoute from './routes/AppRoute';
import { NotificationContainer } from 'react-notifications';
import { interceptorServices } from './services/interceptorServices';

function App() {
  interceptorServices.setupInterceptor();
  return (
    <>
      <div className='app'>
        <AppRoute />
        <NotificationContainer />
      </div>
    </>
  );
}

export default App;
