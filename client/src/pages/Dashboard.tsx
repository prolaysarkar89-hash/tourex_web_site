import React, { useEffect, useState } from 'react';
import { analytics } from '../services/apiService';
import { Users, MessageSquare, TrendingUp, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
}

const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card p-6 rounded-2xl flex items-center gap-5"
  >
    <div className={`p-4 rounded-xl ${color} bg-opacity-10 border border-opacity-20 ${color.replace('bg-', 'border-').replace('text-', 'border-')}`}>
      <Icon className={`${color.replace('bg-', 'text-')}`} size={24} />
    </div>
    <div>
      <p className="text-slate-400 text-sm font-medium">{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  </motion.div>
);

interface DashboardStats {
  totalLeads: number;
  totalChats: number;
  totalCustomers: number;
  pendingHandoffs: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await analytics.get();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-amber-500"></div></div>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
        <p className="text-slate-400 mt-2">Real-time performance of Tourex AI Support.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Leads" 
          value={stats?.totalLeads || 0} 
          icon={TrendingUp} 
          color="bg-emerald-500 text-emerald-500" 
        />
        <StatCard 
          title="Active Chats" 
          value={stats?.totalChats || 0} 
          icon={MessageSquare} 
          color="bg-blue-500 text-blue-500" 
        />
        <StatCard 
          title="Total Customers" 
          value={stats?.totalCustomers || 0} 
          icon={Users} 
          color="bg-indigo-500 text-indigo-500" 
        />
        <StatCard 
          title="Pending Handoffs" 
          value={stats?.pendingHandoffs || 0} 
          icon={AlertCircle} 
          color="bg-amber-500 text-amber-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl min-h-[400px]">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-slate-500 text-center mt-20 italic">Activity log will appear here...</p>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl min-h-[400px]">
          <h3 className="text-xl font-bold mb-6">Popular Destinations</h3>
          <div className="space-y-4">
            <p className="text-slate-500 text-center mt-20 italic">Analytics data visualization coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
