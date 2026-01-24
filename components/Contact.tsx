import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({...formData, email});
    
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:ewies.pm@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-background-dark">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-xs font-medium uppercase tracking-[0.2em] mb-3">Contact</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Let's Work Together</h2>
        </div>
        
        <div className="bg-surface-light/30 rounded-xl overflow-hidden border border-gray-800/50">
          <div className="flex flex-col lg:flex-row">
            
            <div className="lg:w-1/2 p-8 lg:p-12">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">Name</label>
                    <input 
                      className="w-full bg-background-dark border-gray-800 rounded focus:ring-1 focus:ring-accent focus:border-accent text-white px-4 py-3 text-sm border outline-none transition-all placeholder:text-gray-600" 
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">Email</label>
                    <input 
                      className={`w-full bg-background-dark border rounded focus:ring-1 focus:ring-accent focus:border-accent text-white px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-600 ${
                        emailError ? 'border-red-500/50 focus:border-red-500' : 'border-gray-800'
                      }`}
                      type="email"
                      pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleEmailChange}
                      onBlur={(e) => {
                        if (e.target.value && !validateEmail(e.target.value)) {
                          setEmailError('Please enter a valid email address');
                        }
                      }}
                      required
                    />
                    {emailError && (
                      <p className="text-xs text-red-400 mt-1">{emailError}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Message</label>
                  <textarea 
                    className="w-full bg-background-dark border-gray-800 rounded focus:ring-1 focus:ring-accent focus:border-accent text-white px-4 py-3 text-sm border outline-none transition-all placeholder:text-gray-600 resize-none" 
                    rows={5}
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-medium py-3.5 rounded text-sm transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2 bg-surface-dark/50 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-gray-800/50">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:+966506871951" className="flex items-center gap-4 group">
                  <div className="size-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                    <p className="text-sm text-gray-200">+966 50 687 1951</p>
                  </div>
                </a>
                
                <a href="mailto:ewies.pm@gmail.com" className="flex items-center gap-4 group">
                  <div className="size-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm text-gray-200">ewies.pm@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm text-gray-200">Riyadh, Saudi Arabia</p>
                  </div>
                </div>
                
                <hr className="border-gray-800/50 my-6"/>
                
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Connect</p>
                  <div className="flex gap-3">
                    <a href="mailto:ewies.pm@gmail.com" className="size-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300" title="Email">
                      <span className="material-symbols-outlined text-lg">mail</span>
                    </a>
                    <a href="tel:+966506871951" className="size-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300" title="Call">
                      <span className="material-symbols-outlined text-lg">call</span>
                    </a>
                    <a href="https://wa.me/966506871951" target="_blank" rel="noopener noreferrer" className="size-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all duration-300" title="WhatsApp">
                      <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/omar-ewies-product-manager/" target="_blank" rel="noopener noreferrer" className="size-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-all duration-300" title="LinkedIn">
                      <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                    <a href="https://github.com/oebitw" target="_blank" rel="noopener noreferrer" className="size-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300" title="GitHub">
                      <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;