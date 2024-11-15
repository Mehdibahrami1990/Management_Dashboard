import {
  Routes,
  Route,
} from 'react-router-dom';
import {routesMapping} from '../configs/routes';
import {ToastContainer} from 'react-toastify';
import {MainLayout} from '../constants';
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
          zIndex: '99999',
        }}
      />
      <MainLayout>
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
      </MainLayout>
    </>
  );
};

export default App;
