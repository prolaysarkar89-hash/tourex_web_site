import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/apiService';
import { useAuth } from '../hooks/useAuth';
import { LogIn, Mail, Lock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data } = await auth.login({ email, password });
      login(data.token, data.admin);
      navigate('/');
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020617] relative overflow-hidden px-4">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[150px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass-card p-10 rounded-[32px] relative z-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-amber-950 mb-6 shadow-xl shadow-amber-500/20">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic">
            TOUREX <span className="text-sm font-normal text-slate-500 block not-italic text-center mt-1">AI Support Admin</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@tourex.in"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-amber-500/50 transition-all focus:ring-1 focus:ring-amber-500/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-amber-500/50 transition-all focus:ring-1 focus:ring-amber-500/50"
              />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-medium"
            >
              {error}
            </motion.div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-amber-500 text-amber-950 font-bold rounded-2xl hover:bg-amber-400 disabled:opacity-50 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            {loading ? 'Authenticating...' : (
              <>
                <LogIn size={20} />
                Sign In to Dashboard
              </>
            )}
          </button>
        </form>

        <p className="text-center text-slate-500 text-xs mt-8">
          &copy; 2026 Tourex Travel Solutions. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
