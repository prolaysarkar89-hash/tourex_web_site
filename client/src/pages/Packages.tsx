import { useEffect, useState, useCallback } from 'react';
import { packages as pkgApi } from '../services/apiService';
import { Plus, Edit2, Trash2, MapPin, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration?: string;
  location: string;
  category?: string;
  isTrending: boolean;
  images?: string[];
}

const Packages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPackages = useCallback(async () => {
    try {
      const { data } = await pkgApi.getAll();
      setPackages(data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      await fetchPackages();
    };
    load();
  }, [fetchPackages]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        await pkgApi.delete(id);
        setPackages(packages.filter(p => p.id !== id));
      } catch (error) {
        console.error('Error deleting package:', error);
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white">Travel Packages</h2>
          <p className="text-slate-400 mt-2">Manage your North Bengal tour offerings.</p>
        </div>
        <button 
          onClick={() => { /* TODO: Implement Add New Package Modal */ }}
          className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-amber-950 font-bold rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
        >
          <Plus size={20} />
          Add New Package
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full text-center py-20 text-slate-500">Loading packages...</div>
        ) : packages.length === 0 ? (
          <div className="col-span-full text-center py-20 text-slate-500 italic">No packages found. Add your first one!</div>
        ) : (
          packages.map((pkg) => (
            <motion.div 
              layout
              key={pkg.id} 
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800'} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-widest text-amber-500 border border-amber-500/30">
                    {pkg.category || 'Experience'}
                  </span>
                </div>
                {pkg.isTrending && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-amber-500 text-amber-950 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Tag size={10} /> Trending
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-amber-500 transition-colors">{pkg.title}</h3>
                </div>
                
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">{pkg.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={14} className="text-amber-500" />
                    <span className="truncate">{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock size={14} className="text-amber-500" />
                    <span>{pkg.duration || 'N/A'}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block uppercase font-bold tracking-tighter">Starting from</span>
                    <span className="text-2xl font-black text-amber-500">₹{pkg.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => { /* TODO: Implement Edit Modal */ }}
                      className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(pkg.id)}
                      className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Packages;
