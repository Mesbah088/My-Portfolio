
const Hero = () => {
  const socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'portfolio', url: '#' },
    { icon: 'linkedin', url: '#' },

  ];

  const skills = [
    { name: 'InVision', color: 'text-pink-500' },
    { name: 'Sketch', color: 'text-yellow-500' },
    { name: 'Figma', color: 'text-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
                Welcome to my world
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-pink-600">Mesbah uddin</span>
                <br />
                <span className="text-white">a Developer.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                I’m a passionate MERN Stack Web Developer who loves building fast, modern, and scalable web applications. I combine creativity with clean code to craft seamless user experiences — from responsive frontends built with React to powerful backends powered by Node.js, Express, and MongoDB. My focus is on creating efficient, user-centric solutions that make an impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <p className="text-xs tracking-[0.2em] text-cyan-400 uppercase">
                  Find with me
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="w-14 h-14 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-600 hover:to-pink-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {link.icon === 'facebook' && (
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        )}
                        {link.icon === 'portfolio' && (
                          <path
                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10
       10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-6.32-3.105
       15.978 15.978 0 003.148-.657A17.78 17.78 0 0010 17.92V20zm0-2
       c-.9 0-1.736-.163-2.495-.451a15.987 15.987 0 002.495-.549
       15.987 15.987 0 002.495.549A7.965 7.965 0 0112 18zm2-.08a17.78
       17.78 0 001.172-1.762 15.978 15.978 0 003.148.657A7.946 7.946
       0 0112 20v-2.08zM4.07 13.5A7.956 7.956 0 014 12c0-.515.053-1.018.152-1.5
       A15.94 15.94 0 007.5 11c.164.514.356 1.015.573 1.5a15.978
       15.978 0 00-4.003 1zm15.86 0a15.978 15.978 0 00-4.003-1
       c.217-.485.409-.986.573-1.5a15.94 15.94 0 003.348-.5
       c.099.482.152.985.152 1.5 0 .515-.053 1.018-.07 1.5zM12
       4a7.946 7.946 0 016.32 3.105 15.978 15.978 0 00-3.148.657
       A17.78 17.78 0 0014 6.08V4zm0 2c.9 0 1.736.163 2.495.451
       a15.987 15.987 0 00-2.495.549 15.987 15.987 0 00-2.495-.549
       A7.965 7.965 0 0112 6zm-2 .08a17.78 17.78 0 00-1.172 1.762
       15.978 15.978 0 00-3.148-.657A7.946 7.946 0 0112 4v2.08zM4.07
       10.5A15.978 15.978 0 008.073 9.5c-.217-.485-.409-.986-.573-1.5
       A15.94 15.94 0 004.152 8.5 7.956 7.956 0 004 10c0 .515.053
       1.018.07 1.5zM19.93 10.5c.017-.482.07-.985.07-1.5
       0-.515-.053-1.018-.152-1.5a15.94 15.94 0 00-3.348.5
       17.78 17.78 0 00-.573 1.5 15.978 15.978 0 004.003 1z"
                          />
                        )}

                        {link.icon === 'linkedin' && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs tracking-[0.2em] text-cyan-400 uppercase">
                  Best skill on
                </p>
                <div className="flex gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="w-14 h-14 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer group"
                    >
                      <span className={`text-2xl font-bold ${skill.color} group-hover:scale-110 transition-transform`}>
                        {skill.name === 'InVision' && '㋡'}
                        {skill.name === 'Sketch' && '◆'}
                        {skill.name === 'Figma' && '⬢'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative z-10">
              <img
                src="/My pic.png"
                alt="Developer portrait"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;
