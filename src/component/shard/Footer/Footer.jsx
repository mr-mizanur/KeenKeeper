import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#16a085] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
       
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
            KeenKeeper
          </h2>
          <p className="text-[#d1f0e8] max-w-md mx-auto text-lg">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the 
            relationships that matter most.
          </p>
        </div>

       
        <div className="flex flex-col items-center">
          <h3 className="text-[#d1f0e8] uppercase tracking-widest text-sm font-medium mb-4">
            Social Links
          </h3>
          
          <div className="flex gap-6">
            <a 
              href="https://www.facebook.com/mr.mizanur.info/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all hover:scale-110"
            >
              <FaFacebook className="text-2xl" />
            </a>
            
            <a 
              href="https://www.instagram.com/mr.mizanur_/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all hover:scale-110"
            >
              <FaInstagram className="text-2xl" />
            </a>
            
            <a 
              href="https://www.youtube.com/@mizdev" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all hover:scale-110"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-[#d1f0e8] flex justify-between">
          <div><p>© 2026 KeenKeeper. All rights reserved.</p></div>
          <div className=' gap-4  flex'> 
            <Link to={"/privacy"}>Privacy Policy </Link>
            <Link to={"/terms"}>  Terms of Service   </Link>
            <Link to={"/cookies"}>Cookies </Link>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;