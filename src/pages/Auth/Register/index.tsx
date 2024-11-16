import  {useState} from 'react';
import {register} from '../../../services/apis/auth';
import {beforeAuthRoutes} from '../../../configs/routes';
import Input from '../../../common/ui/CustomInput';
import Button from '../../../common/ui/CustomButton';
import {NavLink, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
// import {msisdnValidation} from '../../../utils/validation';
const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [msisdn, setMsisdn] = useState('');
  const [msisdnError, setMsisdnError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    const response = await register(emailAddress, password, userName);
    setLoading(false);
    if (response?.status === 201 && response?.statusText === 'Created') {
      const notify = () =>
        toast.success('Register Successfully', {
          autoClose: 2000,
          position: 'top-right',
          className: 'toast-message',
        });
      notify();
      navigate(beforeAuthRoutes.login, {state: {msisdn}});
      setLoading(false);
    }
  }
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-[#ECEEEF] flex rounded-1xl shadow-lg max-w-3xl py-[40px] items-center">
          <div className="md:w-full px-8 md:px-6">
            <h2 className="font-bold text-3xl text-[#818A91] text-center">
              Register
            </h2>
            <form
              action=""
              className="flex flex-col gap-3 min-w-[20vw]"
              onSubmit={handleSubmit}
            >
              <label htmlFor="username" className="text-[0.9rem]">
                User
              </label>
              <Input
                className="p-2 rounded-1xl border w-[100%]"
                type="text"
                name="username"
                placeholder="Username"
                helperText={msisdnError ? 'Required field' : ''}
                value={userName}
                error={msisdnError}
                onChangeHandler={(value) => {
                  setUserName(value);
                  if (value === '') setMsisdnError(true);
                  else setMsisdnError(false);
                }}
              />
              <label htmlFor="email" className="text-[0.9rem]">
                Email
              </label>
              <Input
                className="p-2 rounded-1xl border w-[100%]"
                type="email"
                name="email"
                placeholder="Email"
                helperText={msisdnError ? 'Required field' : ''}
                value={emailAddress}
                error={msisdnError}
                onChangeHandler={(value) => {
                  setEmailAddress(value);
                  if (value === '') setMsisdnError(true);
                  else setMsisdnError(false);
                }}
              />
              <label htmlFor="password" className="text-[0.9rem]">
                Password
              </label>

              <Input
                className="p-2 rounded-1xl border w-[100%]"
                type="password"
                name="password"
                placeholder="Password"
                helperText={msisdnError ? 'Required field' : ''}
                value={password}
                error={msisdnError}
                onChangeHandler={(value) => {
                  setPassword(value);
                  if (value === '') setMsisdnError(true);
                  else setMsisdnError(false);
                }}
              />

              <Button
                className="bg-[#1C7CD5] rounded-1xl text-white py-1 hover:scale-105 mt-8 duration-300 w-[100%] cursor-pointer"
                fullWidth
                variant="contained"
                disabled={
                  userName === '' ||
                  emailAddress === '' ||
                  password === '' ||
                  msisdnError ||
                  loading
                }
                loading={loading}
                type="submit"
              >
                Register
              </Button>
            </form>
            <div className="mt-3 text-xs flex items-center text-[#373a3c]">
              <p>Already Registered ?</p>
              <NavLink
                to="/"
                className="py-2 hover:scale-110 duration-300 text-[#373a3c] font-bold ml-2"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
