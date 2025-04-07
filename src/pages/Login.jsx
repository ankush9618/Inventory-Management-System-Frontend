import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { toast } from "react-toastify";


function Login({loggedIn,setLoggedIn}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axiosInstance.post('/users/login', formData); // ✅ set your actual route here
      console.log(response.data); // Optional: Handle token or session
      setLoading(false);
      setLoggedIn(true)
      //alert('Login successful!');
      toast.success(response.data.message,{autoClose:1000})
      navigate('/dashboard'); // ✅ redirect to a protected route
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Invalid email or password.');
      toast.error("Invalid email or password.")
      setLoading(false);
    }
  };
  useEffect(()=>{
    if(loggedIn){
        navigate("/dashboard")
    }
  },[])
  return (
    <div className="h-auto">
      <section className="bg-gray-50 dark:bg-gray-500">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{' '}
                  <NavLink to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Signup
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
