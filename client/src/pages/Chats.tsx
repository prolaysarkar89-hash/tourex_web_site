import React, { useEffect, useState, useRef, useCallback } from 'react';
import { chats as chatApi } from '../services/apiService';
import { Search, Send, User, Bot, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

interface Customer {
  id: string;
  name?: string;
  phoneNumber: string;
  lastInteraction: string;
  handoffStatus: string;
  chats?: ChatMessage[];
}

const Chats = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const fetchCustomers = useCallback(async () => {
    try {
      const { data } = await chatApi.getAll();
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMessages = useCallback(async (customerId: string) => {
    try {
      const { data } = await chatApi.getById(customerId);
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      await fetchCustomers();
    };
    load();
    const interval = setInterval(fetchCustomers, 10000); // Poll for new messages
    return () => clearInterval(interval);
  }, [fetchCustomers]);

  useEffect(() => {
    if (selectedCustomer) {
      const loadMessages = async () => {
        await fetchMessages(selectedCustomer.id);
      };
      loadMessages();
    }
  }, [selectedCustomer, fetchMessages]);

  useEffect(scrollToBottom, [messages, scrollToBottom]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedCustomer || sending) return;

    setSending(true);
    try {
      const { data } = await chatApi.send({
        customerId: selectedCustomer.id,
        content: newMessage
      });
      setMessages([...messages, data]);
      setNewMessage('');
      fetchCustomers(); // Update last message in list
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const handleStatusUpdate = async (status: string) => {
    if (!selectedCustomer) return;
    try {
      await chatApi.updateStatus(selectedCustomer.id, status);
      setSelectedCustomer({ ...selectedCustomer, handoffStatus: status });
      fetchCustomers();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="flex h-[calc(100vh-160px)] gap-6 overflow-hidden">
      {/* Customer List */}
      <div className="w-80 flex flex-col glass-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-white/5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Loading...</div>
          ) : customers.length === 0 ? (
            <div className="p-8 text-center text-slate-500 italic">No conversations found.</div>
          ) : (
            customers.map((customer) => (
              <button
                key={customer.id}
                onClick={() => setSelectedCustomer(customer)}
                className={`w-full p-4 flex gap-3 border-b border-white/5 transition-all hover:bg-white/5 text-left ${selectedCustomer?.id === customer.id ? 'bg-white/5 border-l-4 border-l-amber-500' : ''}`}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-300">
                    <User size={20} />
                  </div>
                  {customer.handoffStatus === 'HUMAN_SUPPORT_REQUIRED' && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-[#0f172a] animate-pulse" />
                  )}
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-start">
                    <p className="font-semibold truncate">{customer.name || customer.phoneNumber}</p>
                    <span className="text-[10px] text-slate-500 mt-1">
                      {format(new Date(customer.lastInteraction), 'HH:mm')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-1">
                    {customer.chats?.[0]?.content || 'No messages yet'}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col glass-card rounded-2xl overflow-hidden">
        {selectedCustomer ? (
          <>
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/30">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{selectedCustomer.name || selectedCustomer.phoneNumber}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`w-2 h-2 rounded-full ${selectedCustomer.handoffStatus === 'HUMAN' ? 'bg-blue-500' : selectedCustomer.handoffStatus === 'HUMAN_SUPPORT_REQUIRED' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                      {selectedCustomer.handoffStatus.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {selectedCustomer.handoffStatus !== 'AI' && (
                  <button 
                    onClick={() => handleStatusUpdate('AI')}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
                  >
                    Enable AI
                  </button>
                )}
                {selectedCustomer.handoffStatus !== 'HUMAN' && (
                  <button 
                    onClick={() => handleStatusUpdate('HUMAN')}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/20 transition-all"
                  >
                    Take Over
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[70%] rounded-2xl p-4 ${
                    msg.role === 'user' 
                      ? 'bg-white/5 border border-white/10 text-slate-200' 
                      : 'bg-amber-500 text-amber-950 font-medium shadow-lg shadow-amber-500/10'
                  }`}>
                    <div className="flex items-center gap-2 mb-1 opacity-60">
                      {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                      <span className="text-[10px] uppercase font-bold tracking-tighter">
                        {msg.role === 'user' ? 'Customer' : 'Tourex AI'}
                      </span>
                    </div>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                    <p className="text-[10px] text-right mt-2 opacity-50">
                      {format(new Date(msg.createdAt), 'HH:mm')}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/5 bg-white/5">
              <div className="flex gap-3">
                <input 
                  type="text" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={selectedCustomer.handoffStatus === 'AI' ? "AI is handling this... (Send to override)" : "Type your message..."}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                />
                <button 
                  type="submit"
                  disabled={sending || !newMessage.trim()}
                  className="w-12 h-12 rounded-xl bg-amber-500 text-amber-950 flex items-center justify-center hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-amber-500/20"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
              <MessageSquare size={32} />
            </div>
            <p className="font-medium">Select a conversation to start chatting</p>
            <p className="text-sm mt-1 opacity-60">Manage your WhatsApp customer inquiries here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;
