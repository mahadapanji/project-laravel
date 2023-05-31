import AppRoute from "./routes/AppRoute";
import interceptorServices from "./services/interceptorServices";

function App() {
  interceptorServices.setupInterceptor();

  return (
    <>
      <div className="app">
        <AppRoute />
      </div>
    </>
  );
}

export default App;
