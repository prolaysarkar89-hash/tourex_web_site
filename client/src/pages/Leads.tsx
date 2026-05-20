import { useEffect, useState, useCallback } from 'react';
import { leads as leadApi } from '../services/apiService';
import { Search, User, Calendar, MapPin, DollarSign, ExternalLink, Users } from 'lucide-react';
import { format } from 'date-fns';

interface Lead {
  id: string;
  customer?: {
    name?: string;
    phoneNumber: string;
  };
  destination?: string;
  travelDate?: string;
  groupSize?: number;
  budget?: string;
  status: string;
  createdAt: string;
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = useCallback(async () => {
    try {
      const { data } = await leadApi.getAll();
      setLeads(data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      await fetchLeads();
    };
    load();
  }, [fetchLeads]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'CONTACTED': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'BOOKED': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'CANCELLED': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white">Travel Leads</h2>
          <p className="text-slate-400 mt-2">Potential customers identified by AI.</p>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search leads..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
          />
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 text-slate-400 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-bold">Customer</th>
              <th className="px-6 py-4 font-bold">Destination</th>
              <th className="px-6 py-4 font-bold">Details</th>
              <th className="px-6 py-4 font-bold">Budget</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold">Created</th>
              <th className="px-6 py-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              <tr><td colSpan={7} className="px-6 py-12 text-center text-slate-500">Loading leads...</td></tr>
            ) : leads.length === 0 ? (
              <tr><td colSpan={7} className="px-6 py-12 text-center text-slate-500 italic">No leads found.</td></tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/5 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-all">
                        <User size={16} />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{lead.customer?.name || 'New Customer'}</p>
                        <p className="text-xs text-slate-500">{lead.customer?.phoneNumber}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin size={14} className="text-amber-500" />
                      <span className="text-sm">{lead.destination || 'Unspecified'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Calendar size={12} />
                        <span>{lead.travelDate || 'Flexible'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Users size={12} />
                        <span>{lead.groupSize ? `${lead.groupSize} People` : 'Unknown'}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-emerald-500 font-semibold text-sm">
                      <DollarSign size={14} />
                      <span>{lead.budget || 'N/A'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold border ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">
                    {format(new Date(lead.createdAt), 'MMM dd, yyyy')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-500 hover:text-amber-500 transition-all">
                      <ExternalLink size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
