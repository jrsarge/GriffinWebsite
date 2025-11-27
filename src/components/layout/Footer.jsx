import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-stone-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm mb-4 md:mb-0">
            <p>&copy; {currentYear} Griffin Rossberg. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/griffinrossberg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/griffinrossberg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:griffin.rossberg@utah.edu"
              className="hover:text-emerald-400 transition-colors"
              aria-label="Email Griffin"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
