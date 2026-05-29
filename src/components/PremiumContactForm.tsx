import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Upload, X, AlertCircle } from 'lucide-react';

const inquiryTypes = [
  'Room Booking', 'General Inquiry', 'Group Booking', 'Corporate Stay', 
  'Family Stay', 'Event Inquiry', 'Restaurant Reservation', 
  'Partnership Inquiry', 'Feedback', 'Other'
];

const roomTypes = [
  'Deluxe Room', 'Executive Room', 'Family Room', 'Luxury Suite'
];

const specialRequestsList = [
  'Early Check-in', 'Late Check-out', 'Airport Transfer', 'Extra Bed',
  'Special Decoration', 'Birthday Arrangement', 'Anniversary Arrangement',
  'Business Setup', 'Dietary Requirements'
];

export default function PremiumContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', country: '', city: '',
    inquiryType: '', checkIn: '', checkOut: '', guests: '', rooms: '', roomType: '',
    subject: '', message: '',
    requests: [] as string[]
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [files, setFiles] = useState<File[]>([]);
  const [charCount, setCharCount] = useState(0);

  // Auto-save draft
  useEffect(() => {
    const saved = localStorage.getItem('hotelContactDraft');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
        setCharCount(JSON.parse(saved).message?.length || 0);
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (status !== 'success') {
      localStorage.setItem('hotelContactDraft', JSON.stringify(formData));
    }
  }, [formData, status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'message') setCharCount(value.length);
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleRequestToggle = (req: string) => {
    setFormData(prev => ({
      ...prev,
      requests: prev.requests.includes(req) 
        ? prev.requests.filter(r => r !== req)
        : [...prev.requests, req]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile Number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
        localStorage.removeItem('hotelContactDraft');
      }, 1500);
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-xl p-10 lg:p-16 border border-white max-w-3xl mx-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-hotel-gold"></div>
        <div className="w-24 h-24 bg-hotel-emerald/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-hotel-emerald-dark" />
        </div>
        <h3 className="text-4xl font-serif text-hotel-emerald-dark mb-4">Thank You For Contacting<br/>Hotel Green Galaxy</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">Our team has successfully received your inquiry and will contact you shortly.</p>
        
        <div className="bg-hotel-ivory p-6 mb-10 border border-hotel-gold/20 inline-block text-left">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Reference ID</p>
          <p className="font-mono text-xl text-hotel-emerald-dark font-medium">HGG-{Math.floor(Math.random() * 900000) + 100000}</p>
          <div className="w-full h-px bg-hotel-gold/30 my-4"></div>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Expected Response</p>
          <p className="text-hotel-emerald-dark font-medium">Within 2 hours</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+919235060018" className="w-full sm:w-auto px-8 py-3 outline outline-1 outline-hotel-emerald-dark text-hotel-emerald-dark hover:bg-hotel-emerald-dark hover:text-white transition-colors duration-300 font-sans tracking-wide">
            CALL US NOW
          </a>
          <a href="https://wa.me/919235060018" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-colors duration-300 font-sans tracking-wide">
            WHATSAPP
          </a>
        </div>
      </motion.div>
    );
  }

  const inputClass = (name: string) => `w-full bg-white/50 border ${errors[name] ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-hotel-gold'} px-4 py-3 placeholder-gray-400 text-gray-800 transition-all duration-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-hotel-gold/10`;

  return (
    <div className="bg-white/70 backdrop-blur-md p-8 lg:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hotel-emerald-dark via-hotel-gold to-hotel-emerald-dark"></div>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Personal Information */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h4 className="font-serif text-2xl text-hotel-emerald-dark">Personal Information</h4>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass('name')} placeholder="Full Name *" />
              {errors.name && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.name}</span>}
            </div>
            <div className="relative">
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="Email Address *" />
              {errors.email && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.email}</span>}
            </div>
            <div className="relative">
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className={inputClass('mobile')} placeholder="Mobile Number *" />
              {errors.mobile && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.mobile}</span>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="country" value={formData.country} onChange={handleChange} className={inputClass('country')} placeholder="Country" />
              <input type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass('city')} placeholder="City" />
            </div>
          </div>
        </section>

        {/* Inquiry & Booking Details */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h4 className="font-serif text-2xl text-hotel-emerald-dark">Inquiry Details</h4>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className={`${inputClass('inquiryType')} appearance-none`}>
                <option value="">Select Inquiry Type</option>
                {inquiryTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
            </div>
            <div className="relative">
              <select name="roomType" value={formData.roomType} onChange={handleChange} className={`${inputClass('roomType')} appearance-none`}>
                <option value="">Preferred Room Type</option>
                {roomTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Check-in Date</label>
              <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className={inputClass('checkIn')} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Check-out Date</label>
              <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className={inputClass('checkOut')} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Guests</label>
              <input type="number" name="guests" min="1" value={formData.guests} onChange={handleChange} className={inputClass('guests')} placeholder="0" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Rooms</label>
              <input type="number" name="rooms" min="1" value={formData.rooms} onChange={handleChange} className={inputClass('rooms')} placeholder="0" />
            </div>
          </div>
        </section>

        {/* Message */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h4 className="font-serif text-2xl text-hotel-emerald-dark">Your Message</h4>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputClass('subject')} placeholder="Subject *" />
              {errors.subject && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.subject}</span>}
            </div>
            <div className="relative">
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={`${inputClass('message')} resize-none`} placeholder="How can we assist you? *" />
              <div className="absolute bottom-3 right-4 text-xs text-gray-400">{charCount}/1000</div>
              {errors.message && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.message}</span>}
            </div>
          </div>
        </section>

        {/* Special Requests */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h4 className="font-serif text-2xl text-hotel-emerald-dark">Special Requests</h4>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specialRequestsList.map(req => (
              <label key={req} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={formData.requests.includes(req)}
                  onChange={() => handleRequestToggle(req)}
                />
                <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${formData.requests.includes(req) ? 'bg-hotel-gold border-hotel-gold' : 'border-gray-300 group-hover:border-hotel-gold'}`}>
                  {formData.requests.includes(req) && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <span className="text-gray-600 text-sm">{req}</span>
              </label>
            ))}
          </div>
        </section>

        {/* File Upload */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h4 className="font-serif text-2xl text-hotel-emerald-dark">Attachments <span className="text-gray-400 text-sm font-sans font-normal">(Optional)</span></h4>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <div className="border-2 border-dashed border-gray-300 bg-gray-50/50 hover:bg-hotel-ivory/50 transition-colors p-8 text-center relative rounded-sm">
            <input type="file" multiple onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <Upload className="w-8 h-8 text-hotel-gold mx-auto mb-3" />
            <p className="text-gray-600 text-sm mb-1">Upload ID Proof, Event Requirements, or Corporate Documents</p>
            <p className="text-xs text-gray-400">Drag & drop files or click to browse (Max 5MB per file)</p>
          </div>
          {files.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {files.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-hotel-emerald-dark text-white px-3 py-1.5 text-xs rounded-sm">
                  <span className="truncate max-w-[150px]">{f.name}</span>
                  <button type="button" onClick={() => removeFile(i)} className="hover:text-hotel-gold transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Submit */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <AlertCircle className="w-4 h-4 text-hotel-gold" />
            <span>Your information is secured with 256-bit encryption.</span>
          </div>
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full md:w-auto px-12 py-4 bg-hotel-emerald-dark hover:bg-hotel-emerald text-white tracking-[0.15em] font-sans text-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            <span className="relative z-10">{status === 'submitting' ? 'PROCESSING...' : 'SEND INQUIRY'}</span>
            <div className="absolute inset-0 bg-hotel-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </button>
        </div>
      </form>
    </div>
  );
}
