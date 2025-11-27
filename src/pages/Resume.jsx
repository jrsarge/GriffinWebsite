import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { experience, education, skills, certifications, awards } from '../data/experience';

const Resume = ({ theme }) => {
  const isForest = theme === 'forest';

  return (
    <div className={`min-h-screen py-12 ${
      isForest ? 'bg-stone-50' : 'bg-slate-50'
    } transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold ${
            isForest ? 'text-stone-800' : 'text-slate-900'
          }`}>
            Resume
          </h1>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isForest
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            aria-label="Download Resume PDF"
          >
            <Download size={20} />
            Download PDF
          </button>
        </div>

        <div className="space-y-6">
          {/* Education Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className={`w-6 h-6 ${
                isForest ? 'text-emerald-600' : 'text-blue-600'
              }`} />
              <h2 className={`text-2xl font-bold ${
                isForest ? 'text-stone-800' : 'text-slate-900'
              }`}>
                Education
              </h2>
            </div>
            <div className={`${isForest ? 'text-stone-700' : 'text-slate-700'}`}>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <p className="font-bold text-lg">{education.institution}</p>
                  <p className="font-semibold">{education.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{education.graduationYear}</p>
                  <p>GPA: {education.gpa}</p>
                </div>
              </div>
              <p className={`text-sm mb-3 ${
                isForest ? 'text-stone-600' : 'text-slate-600'
              }`}>
                {education.location}
              </p>
              <div className="mt-4">
                <p className="font-semibold mb-2">Honors:</p>
                <ul className="list-disc list-inside space-y-1">
                  {education.honors.map((honor, index) => (
                    <li key={index}>{honor}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="font-semibold mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCourses.map((course, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isForest
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className={`w-6 h-6 ${
                isForest ? 'text-emerald-600' : 'text-blue-600'
              }`} />
              <h2 className={`text-2xl font-bold ${
                isForest ? 'text-stone-800' : 'text-slate-900'
              }`}>
                Experience
              </h2>
            </div>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.id} className={`${
                  isForest ? 'text-stone-700' : 'text-slate-700'
                }`}>
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <div>
                      <p className="font-bold text-lg">{job.position}</p>
                      <p className="font-semibold">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{job.duration}</p>
                      <p className={`text-sm ${
                        isForest ? 'text-stone-600' : 'text-slate-600'
                      }`}>
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <p className="mb-3">{job.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                  {job.id !== experience[experience.length - 1].id && (
                    <hr className={`mt-6 ${
                      isForest ? 'border-stone-200' : 'border-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className={`text-2xl font-bold mb-4 ${
              isForest ? 'text-stone-800' : 'text-slate-900'
            }`}>
              Technical Skills
            </h2>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className={`font-semibold mb-2 capitalize ${
                    isForest ? 'text-emerald-700' : 'text-blue-700'
                  }`}>
                    {category === 'cad' ? 'CAD & Design' :
                     category === 'technical' ? 'Technical Expertise' :
                     category}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-lg text-sm ${
                          isForest
                            ? 'bg-stone-100 text-stone-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className={`w-6 h-6 ${
                isForest ? 'text-emerald-600' : 'text-blue-600'
              }`} />
              <h2 className={`text-2xl font-bold ${
                isForest ? 'text-stone-800' : 'text-slate-900'
              }`}>
                Certifications
              </h2>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className={`flex justify-between items-start ${
                  isForest ? 'text-stone-700' : 'text-slate-700'
                }`}>
                  <div>
                    <p className="font-semibold">{cert.name}</p>
                    <p className={`text-sm ${
                      isForest ? 'text-stone-600' : 'text-slate-600'
                    }`}>
                      {cert.issuer}
                      {cert.id && ` • ID: ${cert.id}`}
                    </p>
                  </div>
                  <p className="font-semibold">{cert.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
