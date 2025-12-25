import './App.css'
import { PawPrints } from './components/PawPrints'

// Biscuit Dog Component
const BiscuitClassic = () => (
  <div className="pet-mini biscuit-classic">
    <div className="pet-head">
      <div className="biscuit-ear left"></div>
      <div className="biscuit-ear right"></div>
      <div className="happy-eye left"></div>
      <div className="happy-eye right"></div>
      <div className="biscuit-muzzle">
        <div className="biscuit-nose"></div>
        <div className="happy-smile"></div>
      </div>
      <div className="biscuit-cheek left"></div>
      <div className="biscuit-cheek right"></div>
    </div>
    <div className="biscuit-tail"></div>
  </div>
);

const LeonRegular = () => (
  <div className="pet-mini leon-regular">
    <div className="lion-mane"></div>
    <div className="pet-head">
      <div className="lion-ear left"></div>
      <div className="lion-ear right"></div>
      <div className="happy-eye left"></div>
      <div className="happy-eye right"></div>
      <div className="lion-nose"></div>
      <div className="happy-smile"></div>
      <div className="lion-whisker-dot left-top"></div>
      <div className="lion-whisker-dot left-bottom"></div>
      <div className="lion-whisker-dot right-top"></div>
      <div className="lion-whisker-dot right-bottom"></div>
    </div>
  </div>
);

const HamsterGolden = () => (
  <div className="pet-mini hamster-golden">
    <div className="pet-head">
      <div className="hamster-crown"></div>
      <div className="hamster-ear left"></div>
      <div className="hamster-ear right"></div>
      <div className="happy-eye left"></div>
      <div className="happy-eye right"></div>
      <div className="hamster-cheek left"></div>
      <div className="hamster-cheek right"></div>
      <div className="biscuit-nose"></div>
      <div className="happy-smile"></div>
    </div>
  </div>
);

const PandaClassic = () => (
  <div className="pet-mini panda-classic">
    <div className="pet-head">
      <div className="panda-ear left"></div>
      <div className="panda-ear right"></div>
      <div className="panda-patch left"></div>
      <div className="panda-patch right"></div>
      <div className="panda-eye-white left">
        <div className="panda-pupil"></div>
      </div>
      <div className="panda-eye-white right">
        <div className="panda-pupil"></div>
      </div>
      <div className="biscuit-nose"></div>
      <div className="happy-smile"></div>
    </div>
  </div>
);

const BiscuitWizard = () => (
  <div className="pet-mini biscuit-wizard">
    <div className="pet-head">
      <div className="biscuit-ear left"></div>
      <div className="biscuit-ear right"></div>
      <div className="wizard-hat"></div>
      <div className="happy-eye left"></div>
      <div className="happy-eye right"></div>
      <div className="biscuit-muzzle">
        <div className="biscuit-nose"></div>
        <div className="happy-smile"></div>
      </div>
      <div className="biscuit-cheek left"></div>
      <div className="biscuit-cheek right"></div>
    </div>
    <div className="biscuit-tail"></div>
  </div>
);

const LeonPink = () => (
  <div className="pet-mini leon-pink">
    <div className="lion-mane"></div>
    <div className="pet-head">
      <div className="lion-ear left"></div>
      <div className="lion-ear right"></div>
      <div className="happy-eye left"></div>
      <div className="happy-eye right"></div>
      <div className="lion-nose"></div>
      <div className="happy-smile"></div>
      <div className="lion-whisker-dot left-top"></div>
      <div className="lion-whisker-dot left-bottom"></div>
      <div className="lion-whisker-dot right-top"></div>
      <div className="lion-whisker-dot right-bottom"></div>
    </div>
  </div>
);

// Static Feature Icon Components
const NotebookIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80">
    <rect x="25" y="15" width="50" height="70" rx="4" fill="#ff6b9d"/>
    <rect x="30" y="20" width="40" height="60" fill="#fff"/>
    <line x1="35" y1="30" x2="65" y2="30" stroke="#ffb6d9" strokeWidth="2"/>
    <line x1="35" y1="40" x2="65" y2="40" stroke="#ffb6d9" strokeWidth="2"/>
    <line x1="35" y1="50" x2="65" y2="50" stroke="#ffb6d9" strokeWidth="2"/>
    <circle cx="25" cy="30" r="3" fill="#ff6b9d"/>
    <circle cx="25" cy="50" r="3" fill="#ff6b9d"/>
    <circle cx="25" cy="70" r="3" fill="#ff6b9d"/>
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80">
    <rect x="20" y="35" width="60" height="45" rx="6" fill="#ff8c42"/>
    <rect x="35" y="25" width="30" height="10" rx="3" fill="#ff6b9d"/>
    <circle cx="50" cy="57" r="15" fill="#fff"/>
    <circle cx="50" cy="57" r="10" fill="#ffb6d9"/>
    <circle cx="70" cy="45" r="3" fill="#ffe0b2"/>
  </svg>
);

const RobotIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80">
    <rect x="30" y="40" width="40" height="45" rx="8" fill="#ff6b9d"/>
    <circle cx="40" cy="55" r="4" fill="#fff"/>
    <circle cx="60" cy="55" r="4" fill="#fff"/>
    <rect x="35" y="65" width="30" height="3" rx="2" fill="#fff"/>
    <rect x="25" y="35" width="8" height="8" rx="2" fill="#ff8c42"/>
    <circle cx="29" cy="31" r="3" fill="#ffe0b2"/>
  </svg>
);

const GameIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80">
    <rect x="20" y="40" width="60" height="30" rx="15" fill="#ff8c42"/>
    <circle cx="35" cy="55" r="8" fill="#ff6b9d"/>
    <circle cx="65" cy="55" r="8" fill="#ff6b9d"/>
    <rect x="48" y="45" width="4" height="10" fill="#fff"/>
    <rect x="45" y="48" width="10" height="4" fill="#fff"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80">
    <rect x="20" y="30" width="60" height="40" rx="4" fill="#ff6b9d"/>
    <path d="M 20 30 L 50 55 L 80 30" fill="none" stroke="#fff" strokeWidth="3"/>
    <circle cx="70" cy="40" r="8" fill="#ff8c42"/>
    <text x="70" y="44" fontSize="10" fill="#fff" textAnchor="middle">!</text>
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 100 100" width="80" height="80">
    <path d="M 50 25 L 75 45 L 75 75 L 25 75 L 25 45 Z" fill="#ff8c42"/>
    <rect x="40" y="55" width="20" height="20" fill="#ff6b9d"/>
    <rect x="30" y="45" width="15" height="15" fill="#fff" opacity="0.8"/>
    <rect x="55" y="45" width="15" height="15" fill="#fff" opacity="0.8"/>
    <path d="M 20 45 L 50 20 L 80 45" fill="none" stroke="#ff6b9d" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const PawPrint = ({ size = 40 }) => (
  <div className="paw-print-static">
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <ellipse cx="50" cy="65" rx="20" ry="25" fill="#ffb6d9" opacity="0.6"/>
      <circle cx="35" cy="40" r="10" fill="#ffb6d9" opacity="0.6"/>
      <circle cx="50" cy="35" r="10" fill="#ffb6d9" opacity="0.6"/>
      <circle cx="65" cy="40" r="10" fill="#ffb6d9" opacity="0.6"/>
      <circle cx="50" cy="45" r="8" fill="#ffb6d9" opacity="0.6"/>
    </svg>
  </div>
);

function App() {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pets = [
    { name: 'Biscuit Classic', component: <BiscuitClassic />, desc: 'The original happy golden retriever!', rarity: 'Common' },
    { name: 'Leon the Lion', component: <LeonRegular />, desc: 'Majestic golden lion with flowing mane!', rarity: 'Rare' },
    { name: 'Golden Hamster', component: <HamsterGolden />, desc: 'Royal hamster with shimmering crown!', rarity: 'Epic' },
    { name: 'Classic Panda', component: <PandaClassic />, desc: 'Adorable black and white panda!', rarity: 'Common' },
    { name: 'Biscuit Wizard', component: <BiscuitWizard />, desc: 'Magical purple wizard dog!', rarity: 'Legendary' },
    { name: 'Pink Leon', component: <LeonPink />, desc: 'Fabulous pink lion with sparkly mane!', rarity: 'Epic' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100 relative overflow-hidden">
      <PawPrints />
      {/* Static Paw Prints Background */}
      <div className="paw-background-static">
        <div style={{ position: 'absolute', top: '10%', left: '10%' }}><PawPrint size={60} /></div>
        <div style={{ position: 'absolute', top: '30%', right: '15%' }}><PawPrint size={50} /></div>
        <div style={{ position: 'absolute', top: '60%', left: '20%' }}><PawPrint size={55} /></div>
        <div style={{ position: 'absolute', top: '50%', right: '25%' }}><PawPrint size={45} /></div>
        <div style={{ position: 'absolute', top: '80%', left: '40%' }}><PawPrint size={50} /></div>
        <div style={{ position: 'absolute', top: '70%', right: '10%' }}><PawPrint size={40} /></div>
      </div>

      {/* Navbar */}
      <nav className="glass-pink fixed top-0 left-0 right-0 z-50 shadow-lg border-b-2 border-pink-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="paw-logo-static">
                <svg viewBox="0 0 50 50" width="40" height="40">
                  <ellipse cx="25" cy="32" rx="10" ry="12" fill="#ff6b9d"/>
                  <circle cx="17" cy="20" r="5" fill="#ff6b9d"/>
                  <circle cx="25" cy="17" r="5" fill="#ff6b9d"/>
                  <circle cx="33" cy="20" r="5" fill="#ff6b9d"/>
                  <circle cx="25" cy="23" r="4" fill="#ff6b9d"/>
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Critter Crew AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#pets" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Pets</a>
              <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Pricing</a>
              <button 
                onClick={scrollToDownload}
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2.5 rounded-full font-semibold hover:from-pink-600 hover:to-orange-500 transition-all shadow-md hover:shadow-xl"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full border-2 border-pink-200">
            <span className="text-pink-700 font-semibold text-sm">Your Cuddly Pet Paradise 🌸</span>
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                AI-powered tracking system
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-600 mb-2">
              made for you and your wonderful pets
            </p>
          </div>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Collect & Care for Adorable Critters
          </p>
          <button 
            onClick={scrollToDownload}
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-pink-600 hover:to-orange-500 transition-all shadow-xl hover:shadow-2xl"
          >
            Start Your Adventure ✨
          </button>
        </div>
      </section>

      {/* Pets Gallery */}
      <section id="pets" className="py-16 px-4 bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Your New <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Best Friends</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Biscuit the Dog to Leon the Lion - all ready to join your family!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets.map((pet, i) => (
              <div 
                key={i} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-pink-200 hover:border-orange-300"
              >
                <div className="absolute top-4 right-4">
                  <svg viewBox="0 0 40 40" width="30" height="30">
                    <ellipse cx="20" cy="26" rx="8" ry="10" fill="#ffb6d9" opacity="0.4"/>
                    <circle cx="14" cy="16" r="4" fill="#ffb6d9" opacity="0.4"/>
                    <circle cx="20" cy="14" r="4" fill="#ffb6d9" opacity="0.4"/>
                    <circle cx="26" cy="16" r="4" fill="#ffb6d9" opacity="0.4"/>
                  </svg>
                </div>
                <div className="mb-6">
                  {pet.component}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{pet.name}</h3>
                <p className="text-gray-600 text-center mb-4">{pet.desc}</p>
                <div className="flex justify-center">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 rounded-full text-sm font-semibold border border-pink-200">
                    {pet.rarity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything for Your <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Pet Family</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <NotebookIcon />, title: 'Pet Logs', desc: 'Track your pets and their adorable moments' },
              { icon: <GameIcon />, title: 'Mini Games', desc: 'Play fun games to earn points and rewards' },
              { icon: <RobotIcon />, title: 'AI Assistant', desc: 'Get smart pet care advice from Biscuit AI' },
              { icon: <CameraIcon />, title: 'Photo Gallery', desc: 'Capture and share your favorite memories' },
              { icon: <EmailIcon />, title: 'Email Reminders', desc: 'Never forget to check on your pets' },
              { icon: <HomeIcon />, title: 'Virtual Homes', desc: 'Design custom habitats for each pet' },
            ].map((feature, i) => (
              <div key={i} className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-pink-100 hover:border-orange-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 text-center">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Free vs Premium */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Adventure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free and unlock more pets and features with Premium
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border-2 border-pink-200 relative">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Free</h3>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
                  $0
                </div>
                <p className="text-gray-600">Perfect to get started!</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700"><strong>3 Pets</strong> - Adopt Biscuit, Leon, and one more friend</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700"><strong>Basic Games</strong> - Puzzles and trivia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700"><strong>Pet Logs</strong> - Track your pet's journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700"><strong>AI Assistant</strong> - Limited daily chats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700"><strong>Photo Gallery</strong> - Store up to 20 photos</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-4 rounded-full font-bold hover:from-pink-600 hover:to-orange-500 transition-all shadow-md">
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-orange-400 relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                MOST POPULAR ⭐
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Premium</h3>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-1">
                  $11.99
                </div>
                <p className="text-gray-600 mb-4">per month</p>
                <p className="text-sm text-pink-600 font-semibold">Unlimited pet paradise!</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">★</span>
                  <span className="text-gray-700"><strong>UNLIMITED Pets</strong> - Collect them all!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">★</span>
                  <span className="text-gray-700"><strong>Rare & Legendary Pets</strong> - Wizard, Pink Leon, and more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">★</span>
                  <span className="text-gray-700"><strong>All Games Unlocked</strong> - Exclusive mini-games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">★</span>
                  <span className="text-gray-700"><strong>Unlimited AI Chats</strong> - 24/7 Biscuit AI support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">★</span>
                  <span className="text-gray-700"><strong>Unlimited Photos</strong> - Never run out of space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">★</span>
                  <span className="text-gray-700"><strong>Email Reminders</strong> - Stay connected daily</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">★</span>
                  <span className="text-gray-700"><strong>Custom Virtual Homes</strong> - Decorate pet habitats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">★</span>
                  <span className="text-gray-700"><strong>Ad-Free Experience</strong> - Pure joy, no interruptions</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-full font-bold hover:from-orange-600 hover:to-pink-600 transition-all shadow-xl text-lg">
                Go Premium Now! 🎉
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 text-sm">
            All plans include cloud sync across devices • Cancel anytime
          </p>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 px-4 bg-gradient-to-br from-pink-500 via-orange-400 to-pink-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your Pet Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95">
            Download Critter Crew AI and meet your new furry friends!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-pink-50 transition-all shadow-xl hover:shadow-2xl">
              Download on App Store
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-12 py-4 rounded-full text-lg font-semibold cursor-not-allowed opacity-70 border-2 border-white/30">
              Google Play (Coming Soon)
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-orange-500 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl mb-6 font-semibold">Critter Crew AI — Your Cuddly Pet Paradise</p>
          <div className="flex justify-center space-x-8 text-pink-100 mb-6">
            <a href="/privacy-policy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service.html" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:support@crittercrewai.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-pink-200">© 2025 Critter Crew AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
 
