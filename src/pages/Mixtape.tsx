 
import { useState, useEffect } from 'react';
import { Music, Heart, Play, Pause } from 'lucide-react';

const Mixtape = () => {
  const [visibleSongs, setVisibleSongs] = useState<number[]>([]);
  const [unlockedFinal, setUnlockedFinal] = useState(false);
  const [secretInput, setSecretInput] = useState('');

  const songs = [
    {
      id: 1,
      title: "Until I Found You",
      artist: "Stephen Sanchez",
      spotifyId: "1Y3LN4zO1Edc2EluIoSPJN",
      message: "Because I'd like to believe something soft and old-school still exists. Like us, maybe.",
      note: "🎧 Song 1"
    },
    {
      id: 2,
      title: "Just the Two of Us",
      artist: "Grover Washington Jr.",
      spotifyId: "1ko2lVN0vKGUl9zrU0qSlT",
      message: "We haven't danced to this, but I've imagined it — a quiet moment, city lights outside, and this playing low in the background.",
      note: "🎧 Song 2"
    },
    {
      id: 3,
      title: "Lover",
      artist: "Taylor Swift",
      spotifyId: "1dGr1c8CrMLDpV6mPbImSI",
      message: "Not a cliché — just a wish. A simple, slow 'maybe someday' set to strings.",
      note: "🎧 Song 3"
    },
    {
      id: 4,
      title: "Perfect",
      artist: "Ed Sheeran",
      spotifyId: "0tgVpDi06FyKpA1z0VMD4v",
      message: "Every love song makes me think of moments we haven't had yet, but somehow feel like memories.",
      note: "🎧 Song 4"
    },
    {
      id: 5,
      title: "Make You Feel My Love",
      artist: "Adele",
      spotifyId: "273QnyCvJB65rScHJ1nPZb",
      message: "Some promises are too big for words. This song says what I'm still learning how to.",
      note: "🎧 Song 5"
    }
  ];

  const finalSong = {
    id: 'final',
    title: "Dooron Dooron",
    artist: "You are the artist my darling",
    spotifyId: "4PyN1rUjh0xRWqVZ1mwn7l",
    message: "NO COMMENTS JUST LISTEN TO THIS",
    note: "🎧 Final Track"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSongs([1]);
    }, 500);

    const intervals = songs.slice(1).map((_, index) => 
      setTimeout(() => {
        setVisibleSongs(prev => [...prev, index + 2]);
      }, 1500 + (index + 1) * 1000)
    );

    return () => {
      clearTimeout(timer);
      intervals.forEach(clearTimeout);
    };
  }, []);

  const handleSecretSubmit = () => {
    if (secretInput.toLowerCase().includes('pooja') || secretInput.toLowerCase().includes('love')) {
      setUnlockedFinal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-blue-50">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Music className="text-rose-400" size={32} />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            If I Could Say It Through Songs
          </h1>
          <Heart className="text-rose-400" size={32} />
        </div>
        <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          A heartfelt mixtape of moments, memories, and maybes — each song carrying words 
          I'm still learning how to say.
        </p>
      </div>

      {/* Songs Container */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={`mb-12 transform transition-all duration-1000 ${
              visibleSongs.includes(song.id)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/50">
              {/* Song Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {song.note}
                </h3>
                <p className="text-lg text-gray-600">
                  <span className="font-semibold">"{song.title}"</span> – {song.artist}
                </p>
              </div>

              {/* Spotify Embed */}
              <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                <iframe
                  src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </div>

              {/* Personal Message */}
              <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl p-6 border-l-4 border-rose-300">
                <p className="text-gray-700 leading-relaxed handwritten-text text-lg">
                  "{song.message}"
                </p>
              </div>
            </div>

            {/* Decorative Separator */}
            {index < songs.length - 1 && (
              <div className="flex items-center justify-center my-8">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                <div className="mx-4 w-2 h-2 bg-rose-300 rounded-full"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-rose-300 via-transparent to-transparent"></div>
              </div>
            )}
          </div>
        ))}

        {/* Final Track - Locked */}
        <div className="mt-16">
          {!unlockedFinal ? (
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-rose-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  🔒 Final Track - Locked
                </h3>
                <p className="text-gray-600 mb-6">
                  Enter the secret word to unlock the final song...
                </p>
              </div>
              
              <div className="max-w-sm mx-auto">
                <input
                  type="text"
                  placeholder="What's the magic word?"
                  value={secretInput}
                  onChange={(e) => setSecretInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:border-rose-400 mb-4 text-center"
                />
                <button
                  onClick={handleSecretSubmit}
                  className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-colors duration-200 font-semibold"
                >
                  Unlock Final Track
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl p-8 shadow-xl border-2 border-rose-200">
                {/* Confetti Effect */}
                <div className="text-center mb-6">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    {['🎉', '💕', '🎵', '✨', '💖'].map((emoji, i) => (
                      <span key={i} className="text-2xl animate-bounce" style={{animationDelay: `${i * 0.1}s`}}>
                        {emoji}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {finalSong.note}
                  </h3>
                  <p className="text-xl text-gray-600">
                    <span className="font-semibold">"{finalSong.title}"</span> – {finalSong.artist}
                  </p>
                </div>

                <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={`https://open.spotify.com/embed/track/${finalSong.spotifyId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl"
                  ></iframe>
                </div>

                <div className="bg-white/80 rounded-xl p-6 border-l-4 border-rose-400 text-center">
                  <p className="text-gray-700 leading-relaxed handwritten-text text-xl font-medium">
                    "{finalSong.message}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-rose-200/50 bg-white/30">
        <p className="text-gray-500 text-sm">
          Handpicked with care, coded with feeling — by <span className="font-semibold text-rose-500">Abhay</span>.
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Patrick+Hand&family=Poppins:wght@300;400;600;700&display=swap');
        
        .handwritten-text {
          font-family: 'Dancing Script', 'Patrick Hand', cursive;
          font-weight: 500;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -30px, 0);
          }
          70% {
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Mixtape;  