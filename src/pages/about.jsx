const About = () => {
  return (
    <div className="bg-transparent min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-12">About Me</h1>
          
          <div className="bg-transparent rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-white leading-relaxed">
              A blend of mechanical engineering and data-driven insight. I have hands-on experience with AWS, Python, Data Science, and Mechatronics. I am passionate about solving complex problems and building innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-transparent rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Personal Details</h2>
              <ul>
                <li className="text-lg text-white mb-2"><strong>Name:</strong> Abdulrauf Taofeek Bolaji</li>
                <li className="text-lg text-white mb-2"><strong>Age:</strong> 32</li>
                <li className="text-lg text-white"><strong>Location:</strong> Oyo State, Nigeria</li>
              </ul>
            </div>

            <div className="bg-transparent rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
              <ul>
                <li className="text-lg text-white mb-2">HND in Mechatronics Engineering (Upper Credit)</li>
                <li className="text-lg text-white mb-2">HND in Mechanical Engineering (Distinction)</li>
                <li className="text-lg text-white">ND in Mechatronics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;