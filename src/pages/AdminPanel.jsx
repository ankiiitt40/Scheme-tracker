import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ShieldAlert, Clock, CheckCircle2, XCircle, ChevronDown, ChevronUp, FileText, User, Phone, Landmark, MapPin, Paperclip, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { schemes } from '../data/schemes';

const AdminPanel = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  const { t, translateScheme } = useLanguage();
  const [requests, setRequests] = useState([]);
  const [expandedRequestId, setExpandedRequestId] = useState(null);

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
        return <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><Clock size={14}/> {t('Pending', 'लंबित')}</span>;
      case 'Under Review':
        return <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><ShieldAlert size={14}/> {t('Reviewing', 'समीक्षाधीन')}</span>;
      case 'Approved':
        return <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CheckCircle2 size={14}/> {t('Approved', 'स्वीकृत')}</span>;
      case 'Rejected':
        return <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><XCircle size={14}/> {t('Rejected', 'अस्वीकृत')}</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">{t('Admin Control Panel', 'व्यवस्थापक नियंत्रण कक्ष')}</h1>
          <p className="text-slate-400">{t('Manage user scheme applications and support requests.', 'उपयोगकर्ता योजना अनुप्रयोगों और समर्थन अनुरोधों का प्रबंधन करें।')}</p>
        </div>

        <div className="bg-[#0F172A] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">{t('Applicant', 'आवेदक')}</th>
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">{t('Scheme Details', 'योजना विवरण')}</th>
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">{t('Date', 'तारीख')}</th>
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">{t('Status', 'स्थिति')}</th>
                  <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest text-right">{t('Actions', 'कार्रवाई')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {requests.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-12 text-center text-slate-500 font-bold">
                      {t('No requests found yet.', 'अभी तक कोई अनुरोध नहीं मिला।')}
                    </td>
                  </tr>
                ) : (
                  requests.map((request) => {
                    const schemeRaw = schemes.find(s => s.id === request.schemeId);
                    const scheme = schemeRaw ? translateScheme(schemeRaw) : null;
                    const displayName = scheme ? scheme.name : request.schemeName;
                    
                    return (
                    <React.Fragment key={request.id}>
                      <tr className="hover:bg-white/[0.02] transition-colors border-b border-white/5">
                        <td className="p-6">
                          <p className="font-bold text-white uppercase tracking-tighter">{request.userName}</p>
                          <p className="text-xs text-slate-500">{request.userId}</p>
                        </td>
                        <td className="p-6">
                          <p className="font-bold text-indigo-300 max-w-xs truncate" title={displayName}>{displayName}</p>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest opacity-50">ID: {request.schemeId}</p>
                        </td>
                        <td className="p-6">
                          <p className="text-sm text-slate-300 font-bold">{new Date(request.timestamp).toLocaleDateString()}</p>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest opacity-50">{new Date(request.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                        </td>
                        <td className="p-6">
                          <StatusBadge status={request.status} />
                        </td>
                        <td className="p-6 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <button 
                              onClick={() => setExpandedRequestId(expandedRequestId === request.id ? null : request.id)}
                              className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-[10px] uppercase tracking-widest transition-all ${expandedRequestId === request.id ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/20' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'}`}
                            >
                              {expandedRequestId === request.id ? (
                                <><ChevronUp size={14} /> {t('Close', 'बंद करें')}</>
                              ) : (
                                <><Eye size={14} /> {t('View Form', 'फॉर्म देखें')}</>
                              )}
                            </button>
                            <select 
                              className="bg-[#020617] border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 outline-none cursor-pointer"
                              value={request.status}
                              onChange={(e) => handleStatusChange(request.id, e.target.value)}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Under Review">Under Review</option>
                              <option value="Approved">Approve</option>
                              <option value="Rejected">Reject</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      {expandedRequestId === request.id && (
                        <tr className="bg-indigo-500/5">
                          <td colSpan="5" className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">{t('Identity & Contact', 'पहचान और संपर्क')}</h4>
                                <DocItem icon={<User size={14}/>} label={t('Applicant Name', 'आवेदक का नाम')} value={request.userName} />
                                <DocItem icon={<FileText size={14}/>} label={t('Aadhaar Card', 'आधार कार्ड')} value={request.documents?.aadhaar || t('Not provided', 'प्रदान नहीं किया गया')} highlight file={request.documents?.aadhaarFile} />
                                <DocItem icon={<Phone size={14}/>} label={t('Mobile (Aadhaar Linked)', 'मोबाइल (आधार से जुड़ा)')} value={request.documents?.mobile || t('Not provided', 'प्रदान नहीं किया गया')} />
                              </div>
                              <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">{t('Financial & Legal', 'वित्तीय और कानूनी')}</h4>
                                <DocItem icon={<Landmark size={14}/>} label={t('Bank Details (IFSC)', 'बैंक विवरण (IFSC)')} value={request.documents?.bankDetails || t('Not provided', 'प्रदान नहीं किया गया')} file={request.documents?.bankDetailsFile} />
                                <DocItem icon={<MapPin size={14}/>} label={t('Land Records (Khasra)', 'भूमि रिकॉर्ड (खसरा)')} value={request.documents?.landRecords || t('Not provided', 'प्रदान नहीं किया गया')} file={request.documents?.landRecordsFile} />
                                <DocItem icon={<ShieldAlert size={14}/>} label={t('Citizenship Status', 'नागरिकता की स्थिति')} value={request.documents?.citizenship || t('Not provided', 'प्रदान नहीं किया गया')} file={request.documents?.citizenshipFile} />
                              </div>
                              <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 flex flex-col justify-center">
                                <p className="text-xs text-slate-400 font-bold leading-relaxed mb-4 italic">
                                  {t('"Verification required for all submitted documents before approving the application support request."', '"आवेदन समर्थन अनुरोध को स्वीकृत करने से पहले सबमिट किए गए सभी दस्तावेज़ों का सत्यापन आवश्यक है।"')}
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('Pending Review', 'समीक्षा हेतु लंबित')}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  )})
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const DocItem = ({ icon, label, value, highlight, file }) => (
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest truncate">{label}</p>
      <p className={`text-xs font-bold leading-tight ${highlight ? 'text-indigo-300' : 'text-slate-300'} break-words tracking-tight`}>{value}</p>
      {file && (
        <div className="mt-1 flex items-center gap-1.5 px-2 py-1 bg-indigo-500/10 rounded-md w-fit border border-indigo-500/20">
          <Paperclip size={10} className="text-indigo-400" />
          <span className="text-[10px] font-medium text-indigo-300 truncate max-w-[120px]">{file}</span>
        </div>
      )}
    </div>
  </div>
);

export default AdminPanel;
