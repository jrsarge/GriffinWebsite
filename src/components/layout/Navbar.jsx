import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ currentView, setCurrentView, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
  };

  const isForest = theme === 'forest';
  const primaryColor = isForest ? 'emerald' : 'blue';
  const textColor = isForest ? 'stone' : 'slate';

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${isForest ? 'text-emerald-900' : 'text-blue-600'} transition-colors duration-300`}>
              Griffin Rossberg
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === item.id
                    ? `bg-${primaryColor}-600 text-white`
                    : `text-${textColor}-800 hover:bg-${primaryColor}-50`
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-lg ${isForest ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-orange-500 hover:bg-orange-600'} text-white transition-colors`}
              aria-label={`Switch to ${theme === 'forest' ? 'bright' : 'forest'} theme`}
            >
              {theme === 'forest' ? 'Bright' : 'Forest'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg text-${textColor}-800 hover:bg-${primaryColor}-50`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden bg-white border-t border-${textColor}-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium ${
                  currentView === item.id
                    ? `bg-${primaryColor}-600 text-white`
                    : `text-${textColor}-800 hover:bg-${primaryColor}-50`
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium ${isForest ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-orange-500 hover:bg-orange-600'} text-white`}
            >
              Switch to {theme === 'forest' ? 'Bright' : 'Forest'} Theme
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
