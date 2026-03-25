import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, CheckCircle2, AlertCircle, Send, Upload, Paperclip } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DocumentFormModal = ({ isOpen, onClose, onSubmit, schemeName }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    aadhaar: '',
    landRecords: '',
    bankDetails: '',
    citizenship: '',
    mobile: ''
  });

  const [files, setFiles] = useState({
    aadhaarFile: null,
    landRecordsFile: null,
    bankDetailsFile: null,
    citizenshipFile: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(prev => ({ ...prev, [`${field}File`]: file.name }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.aadhaar) newErrors.aadhaar = t('Aadhaar Card is mandatory', 'आधार कार्ड अनिवार्य है');
    if (!formData.landRecords) newErrors.landRecords = t('Revised Land Records are required', 'संशोधित भूमि रिकॉर्ड आवश्यक हैं');
    if (!formData.bankDetails) newErrors.bankDetails = t('Bank Account Details are required', 'बैंक खाता विवरण आवश्यक है');
    if (!formData.citizenship) newErrors.citizenship = t('Citizenship Certificate is required', 'नागरिकता प्रमाण पत्र आवश्यक है');
    if (!formData.mobile) newErrors.mobile = t('Mobile number is required', 'मोबाइल नंबर आवश्यक है');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ ...formData, ...files });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-[#0F172A] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{t('Required Documents', 'आवश्यक दस्तावेज़')}</h3>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-slate-400 text-sm">
                {t('Please provide the following information to apply for', 'के लिए आवेदन करने के लिए कृपया निम्नलिखित जानकारी प्रदान करें')} <span className="text-indigo-400 font-bold">{schemeName}</span> {t('support.', 'समर्थन।')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
              <div className="space-y-6">
                {/* Aadhaar */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    {t('Aadhaar Card', 'आधार कार्ड')} <span className="text-indigo-500 font-black">({t('Mandatory', 'अनिवार्य')})</span>
                  </label>
                  <div className="space-y-2">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                        <FileText size={18} />
                      </div>
                      <input
                        type="text"
                        name="aadhaar"
                        placeholder={t('Enter Aadhaar Number', 'आधार नंबर दर्ज करें')}
                        value={formData.aadhaar}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.aadhaar ? 'border-red-500/50' : 'border-white/10'} focus:border-indigo-500 rounded-2xl py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-600 font-medium`}
                      />
                    </div>
                    <FileUpload 
                      label={t('Upload Aadhaar Copy', 'आधार कॉपी अपलोड करें')} 
                      fileName={files.aadhaarFile} 
                      onChange={(e) => handleFileChange(e, 'aadhaar')} 
                      t={t}
                    />
                  </div>
                  {errors.aadhaar && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider pl-4">{errors.aadhaar}</p>}
                </div>

                {/* Land Records */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    {t('Revised Land Records (Khasra Khatauni)', 'संशोधित भूमि रिकॉर्ड (खसरा खतौनी)')}
                  </label>
                  <div className="space-y-2">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                        <FileText size={18} />
                      </div>
                      <input
                        type="text"
                        name="landRecords"
                        placeholder={t('Enter Khasra/Khatauni Number', 'खसरा/खतौनी नंबर दर्ज करें')}
                        value={formData.landRecords}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.landRecords ? 'border-red-500/50' : 'border-white/10'} focus:border-indigo-500 rounded-2xl py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-600 font-medium`}
                      />
                    </div>
                    <FileUpload 
                      label={t('Upload Land Records', 'भूमि रिकॉर्ड अपलोड करें')} 
                      fileName={files.landRecordsFile} 
                      onChange={(e) => handleFileChange(e, 'landRecords')} 
                      t={t}
                    />
                  </div>
                  {errors.landRecords && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider pl-4">{errors.landRecords}</p>}
                </div>

                {/* Bank Details */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    {t('Bank Account Detail with IFSC', 'IFSC के साथ बैंक खाता विवरण')}
                  </label>
                  <div className="space-y-2">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                        <FileText size={18} />
                      </div>
                      <input
                        type="text"
                        name="bankDetails"
                        placeholder={t('Account No. and IFSC Code', 'खाता सं. और IFSC कोड')}
                        value={formData.bankDetails}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.bankDetails ? 'border-red-500/50' : 'border-white/10'} focus:border-indigo-500 rounded-2xl py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-600 font-medium`}
                      />
                    </div>
                    <FileUpload 
                      label={t('Upload Passbook/Cheque Copy', 'पासबुक/चेक कॉपी अपलोड करें')} 
                      fileName={files.bankDetailsFile} 
                      onChange={(e) => handleFileChange(e, 'bankDetails')} 
                      t={t}
                    />
                  </div>
                  {errors.bankDetails && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider pl-4">{errors.bankDetails}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Citizenship */}
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      {t('Citizenship Certificate', 'नागरिकता प्रमाण पत्र')}
                    </label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="citizenship"
                        placeholder={t('Certificate No.', 'प्रमाणपत्र संख्या')}
                        value={formData.citizenship}
                        onChange={handleChange}
                        className={`w-full bg-white/5 border ${errors.citizenship ? 'border-red-500/50' : 'border-white/10'} focus:border-indigo-500 rounded-2xl py-4 px-4 text-white outline-none transition-all placeholder:text-slate-600 font-medium`}
                      />
                      <FileUpload 
                        label={t('Upload Certificate', 'प्रमाणपत्र अपलोड करें')} 
                        fileName={files.citizenshipFile} 
                        onChange={(e) => handleFileChange(e, 'citizenship')} 
                        compact
                        t={t}
                      />
                    </div>
                    {errors.citizenship && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider pl-4">{errors.citizenship}</p>}
                  </div>

                  {/* Mobile */}
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      {t('Aadhaar Linked Mobile', 'आधार लिंक्ड मोबाइल')}
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder={t('For OTP verification', 'OTP सत्यापन के लिए')}
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.mobile ? 'border-red-500/50' : 'border-white/10'} focus:border-indigo-500 rounded-2xl py-4 px-4 text-white outline-none transition-all placeholder:text-slate-700 font-medium h-[58px]`}
                    />
                    {errors.mobile && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider pl-4">{errors.mobile}</p>}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 group"
                >
                  {t('Submit Application Support', 'आवेदन समर्थन जमा करें')} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FileUpload = ({ label, fileName, onChange, compact, t }) => (
  <label className={`flex items-center gap-3 cursor-pointer group/file ${compact ? 'py-3' : 'py-3'} px-4 bg-indigo-500/5 border border-indigo-500/10 hover:border-indigo-500/30 rounded-xl transition-all`}>
    <input type="file" className="hidden" onChange={onChange} />
    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover/file:bg-indigo-500/20 transition-colors">
      <Upload size={16} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover/file:text-indigo-300 transition-colors">
        {fileName ? (t ? t('Re-upload File', 'फ़ाइल फिर से अपलोड करें') : 'Re-upload File') : label}
      </p>
      {fileName && (
        <p className="text-[11px] font-medium text-indigo-300 truncate flex items-center gap-1 mt-0.5">
          <Paperclip size={10} /> {fileName}
        </p>
      )}
    </div>
    {fileName && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
  </label>
);

export default DocumentFormModal;
