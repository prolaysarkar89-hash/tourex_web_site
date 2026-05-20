import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Users, Package, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SidebarItem = ({ to, icon: Icon, label }: { to: string, icon: React.ElementType, label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
      isActive 
        ? "bg-amber-500/20 text-amber-500 border border-amber-500/30" 
        : "text-slate-400 hover:bg-white/5 hover:text-white"
    )}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </NavLink>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#020617] text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col glass border-r border-white/10">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent italic">
            TOUREX <span className="text-sm font-normal text-slate-400 block not-italic">AI Support</span>
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <SidebarItem to="/" icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem to="/chats" icon={MessageSquare} label="Live Chats" />
          <SidebarItem to="/leads" icon={Users} label="Travel Leads" />
          <SidebarItem to="/packages" icon={Package} label="Packages" />
          <SidebarItem to="/settings" icon={Settings} label="Settings" />
        </nav>

        <div className="p-4 mt-auto border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/30">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">{user?.name || 'Admin'}</p>
              <p className="text-xs text-slate-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 relative">
        <div className="absolute top-0 right-0 p-32 bg-amber-500/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 p-32 bg-indigo-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
