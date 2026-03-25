import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldAlert, Clock, CheckCircle2, XCircle } from 'lucide-react';

const AdminPanel = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Load requests from localStorage
    const savedRequests = JSON.parse(localStorage.getItem('schemeRequests') || '[]');
    // Sort by newest first
    savedRequests.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setRequests(savedRequests);
  }, []);

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  const handleStatusChange = (requestId, newStatus) => {
    const updatedRequests = requests.map(req => 
      req.id === requestId ? { ...req, status: newStatus } : req
    );
    setRequests(updatedRequests);
    localStorage.setItem('schemeRequests', JSON.stringify(updatedRequests));
  };

  const StatusBadge = ({ status }) => {
    switch (status) {
      case 'Pending':
        return <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><Clock size={14}/> Pending</span>;
      case 'Under Review':
        return <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><ShieldAlert size={14}/> Reviewing</span>;
      case 'Approved':
        return <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CheckCircle2 size={14}/> Approved</span>;
      case 'Rejected':
        return <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><XCircle size={14}/> Rejected</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Admin Control Panel</h1>
          <p className="text-slate-400">Manage user scheme applications and support requests.</p>
        </div>

        <div className="bg-[#0F172A] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Applicant</th>
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Scheme Details</th>
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Date</th>
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {requests.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-12 text-center text-slate-500 font-bold">
                      No requests found yet.
                    </td>
                  </tr>
                ) : (
                  requests.map((request) => (
                    <tr key={request.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-6">
                        <p className="font-bold text-white">{request.userName}</p>
                        <p className="text-xs text-slate-500">{request.userId}</p>
                      </td>
                      <td className="p-6">
                        <p className="font-bold text-indigo-300 max-w-xs truncate" title={request.schemeName}>{request.schemeName}</p>
                        <p className="text-xs text-slate-500">ID: {request.schemeId}</p>
                      </td>
                      <td className="p-6">
                        <p className="text-sm text-slate-300">{new Date(request.timestamp).toLocaleDateString()}</p>
                        <p className="text-xs text-slate-500">{new Date(request.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                      </td>
                      <td className="p-6">
                        <StatusBadge status={request.status} />
                      </td>
                      <td className="p-6 text-right space-x-2">
                        <select 
                          className="bg-[#020617] border border-white/10 text-slate-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none cursor-pointer"
                          value={request.status}
                          onChange={(e) => handleStatusChange(request.id, e.target.value)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Approved">Approve</option>
                          <option value="Rejected">Reject</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
