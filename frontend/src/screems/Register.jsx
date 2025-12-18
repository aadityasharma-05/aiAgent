import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios.js';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      setLoading(true);

      await axios.post('/users/register', {
        email,
        password,
      });

      // ✅ Redirect to login after successful registration
      navigate('/');

    } catch (err) {
      setError(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4e8098] via-[#f5f3f5] to-[#332e3c] px-4">
      <div className="w-full max-w-md bg-[#332e3c] rounded-3xl shadow-2xl p-10 border border-white/10 backdrop-blur-sm">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#f5f3f5] tracking-tight">
            Welcome!
          </h2>
          <p className="text-[#4e8098] font-medium mt-2">
            Register to continue your journey
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="mb-4 text-red-400 text-sm font-semibold text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-[#f5f3f5] mb-2 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="hello@youthful.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#2a2632] border-2 border-[#4e8098]/30 text-[#f5f3f5] rounded-2xl px-5 py-3.5 outline-none focus:border-[#4e8098] focus:ring-4 focus:ring-[#4e8098]/20 transition-all placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#f5f3f5] mb-2 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#2a2632] border-2 border-[#4e8098]/30 text-[#f5f3f5] rounded-2xl px-5 py-3.5 outline-none focus:border-[#4e8098] focus:ring-4 focus:ring-[#4e8098]/20 transition-all placeholder:text-slate-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4e8098] hover:bg-[#5a92ad] text-[#f5f3f5] font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-[#4e8098]/30 active:scale-[0.95] text-lg disabled:opacity-60"
          >
            {loading ? 'Creating account...' : 'Get Started'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-[#f5f3f5]/60 text-sm font-medium">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#4e8098] hover:text-[#f5f3f5] font-bold underline underline-offset-4 decoration-2 transition-all"
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
