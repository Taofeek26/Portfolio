import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">Abdulrauf Taofeek Bolaji</h1>
        <p className="text-xl text-gray-200 mb-8">Data Analyst | Mechatronics Engineer | Python Developer</p>
        <div className="space-x-4">
          <NavLink to="/projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
            View My Projects
          </NavLink>
          <a href="/assets/ABDULRAUF TAOFEEK Bolaji.docx" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;