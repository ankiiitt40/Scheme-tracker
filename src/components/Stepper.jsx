import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Image as ImageIcon, Maximize2, X } from 'lucide-react';

const Stepper = ({ steps }) => {
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <div className="space-y-12">
      {/* Fullscreen Image Overlay */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setExpandedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
              onClick={() => setExpandedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={expandedImage} 
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {steps.map((step, index) => (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          key={index} 
          className="relative flex gap-8 group"
        >
          {/* Vertical Line */}
          {index !== steps.length - 1 && (
            <div className="absolute top-12 left-6 bottom-[-48px] w-0.5 bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-colors"></div>
          )}

          {/* Icon/Number */}
          <div className="relative z-10 w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-indigo-500/20">
            {index + 1}
          </div>

          {/* Content */}
          <div className="pb-8 flex-1">
            <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {step.description}
            </p>
            
            {/* Step Illustration/Image */}
            <div 
              className="w-full min-h-[200px] h-fit md:h-[400px] rounded-3xl bg-indigo-600/5 border border-white/5 flex items-center justify-center overflow-hidden transition-all group-hover:border-indigo-500/30 relative cursor-zoom-in"
              onClick={() => step.image && setExpandedImage(step.image)}
            >
               {step.image ? (
                 <>
                   <img 
                     src={step.image} 
                     alt={step.title} 
                     className="w-full h-full object-contain p-4 hover:scale-[1.02] transition-transform duration-500"
                     onError={(e) => {
                       e.target.onerror = null; 
                       e.target.src = "https://via.placeholder.com/800x400/0F172A/6366F1?text=Image+Not+Found";
                     }}
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20">
                        <Maximize2 size={24} />
                      </div>
                   </div>
                 </>
               ) : (
                 <div className="text-indigo-400/30 flex flex-col items-center gap-2">
                   <ImageIcon size={40} className="text-indigo-400/30" />
                   <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400/50">Instructional Graphic</span>
                 </div>
               )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stepper;
