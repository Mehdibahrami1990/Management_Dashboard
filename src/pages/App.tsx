import {
  Routes,
  Route,
  // useLocation,
} from 'react-router-dom';
import {routesMapping} from '../configs/routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  console.log('ArvanCloud Frontend Challange App Is Run :) 🐻🍻🎉 !');
  const routes = routesMapping;
  return (
    <>
      <ToastContainer
        style={{
          marginTop: '80px',
          textAlign: 'center',
          width: '210px',
          fontFamily: 'IRANSans',
          zIndex: '99999',
        }}
      />
      <main className="relative p-4">
        <Routes>
          {routes.map((item) => (
            <Route
              key={item.route}
              path={item.route}
              element={<item.element />}
            />
          ))}
        </Routes>
      </main>
    </>
  );
};

export default App;
