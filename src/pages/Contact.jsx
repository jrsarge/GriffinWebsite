import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Contact = ({ theme }) => {
  const isForest = theme === 'forest';

  return (
    <div className={`min-h-screen py-12 ${
      isForest ? 'bg-stone-50' : 'bg-slate-50'
    } transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
          isForest ? 'text-stone-800' : 'text-slate-900'
        }`}>
          Contact
        </h1>
        <p className={`text-lg mb-12 ${
          isForest ? 'text-stone-700' : 'text-slate-700'
        }`}>
          Feel free to reach out for opportunities, collaborations, or questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className={`text-2xl font-bold mb-6 ${
              isForest ? 'text-stone-800' : 'text-slate-900'
            }`}>
              Get In Touch
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className={isForest ? 'text-emerald-600' : 'text-blue-600'} size={24} />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`${
                    isForest
                      ? 'text-stone-700 hover:text-emerald-600'
                      : 'text-slate-700 hover:text-blue-600'
                  } transition-colors`}
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className={isForest ? 'text-emerald-600' : 'text-blue-600'} size={24} />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isForest
                      ? 'text-stone-700 hover:text-emerald-600'
                      : 'text-slate-700 hover:text-blue-600'
                  } transition-colors`}
                >
                  linkedin.com/in/griffinrossberg
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Github className={isForest ? 'text-emerald-600' : 'text-blue-600'} size={24} />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isForest
                      ? 'text-stone-700 hover:text-emerald-600'
                      : 'text-slate-700 hover:text-blue-600'
                  } transition-colors`}
                >
                  github.com/griffinrossberg
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className={isForest ? 'text-emerald-600' : 'text-blue-600'} size={24} />
                <span className={isForest ? 'text-stone-700' : 'text-slate-700'}>
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className={`text-2xl font-bold mb-6 ${
              isForest ? 'text-stone-800' : 'text-slate-900'
            }`}>
              Send a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-1 ${
                    isForest ? 'text-stone-700' : 'text-slate-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent ${
                    isForest
                      ? 'border-stone-300 focus:ring-emerald-600'
                      : 'border-slate-300 focus:ring-blue-600'
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-1 ${
                    isForest ? 'text-stone-700' : 'text-slate-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent ${
                    isForest
                      ? 'border-stone-300 focus:ring-emerald-600'
                      : 'border-slate-300 focus:ring-blue-600'
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-1 ${
                    isForest ? 'text-stone-700' : 'text-slate-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent ${
                    isForest
                      ? 'border-stone-300 focus:ring-emerald-600'
                      : 'border-slate-300 focus:ring-blue-600'
                  }`}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg transition-colors font-medium ${
                  isForest
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
