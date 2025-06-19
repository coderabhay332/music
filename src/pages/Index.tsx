import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isBottleOpened, setIsBottleOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageCount, setMessageCount] = useState(0);

  const messages = [
    "Pooja, I saw the moon and thought of you—it wasn't half as lovely.",
    "If I were a wave, I'd crash at your feet just to say hi.",
    "Ever wonder how many stars are out there? Still not as many as reasons I want to see you again.",
    "This bottle traveled a long way—just like my thoughts to reach you.",
    "Every ocean has a tide. Mine always drifts back to you.",
    "Messages in bottles are for wishes. Mine's simple—I'd like to see you again. 🌊",
    "If smiles were treasures, yours would be buried somewhere on a distant island.",
    "The ocean is vast, but my curiosity about you is vaster.",
    "I'd sail seven seas just to share a coffee with you.",
    "Even mermaids would be jealous of how you make waves in my thoughts.",
    "This message has crossed oceans. Your reply would make the journey worth it.",
    "Somewhere between the horizon and here, I keep thinking of you.",
    "If I could bottle laughter, yours would be my favorite vintage.",
    "The tides change, but my interest in getting to know you stays constant.",
    "I found this bottle on a beach of maybes. Want to turn it into a definitely?",
    "Ocean waves whisper secrets. Mine is that I'd love to see you smile again.",
    "If wishes were shells, I'd have a whole beach dedicated to spending time with you.",
    "This bottle floated here with one mission: to ask if you'd like to grab dinner sometime.",
    "I threw this into the sea of possibilities. Hope it finds you well.",
    "Sailors navigate by stars. I navigate conversations hoping they lead to you.",
    "The ocean is blue, violets are too, this message is cheesy, but my interest is true.",
    "If you were a lighthouse, I'd be the ship always finding its way to you.",
    "This bottle contains 99% seawater and 1% hope that you'll text me back.",
    "I'd brave storms and sea monsters just to hear about your day.",
    "Roses are red, the ocean is blue, I found this bottle and thought of you.",
    "If I were a pirate, you'd be the treasure I'd never stop searching for.",
    "This message survived sharks, storms, and my terrible handwriting to reach you.",
    "The best part of any adventure would be sharing it with you.",
    "I'd rather be lost at sea with you than safe on shore without you.",
    "If conversations were currents, ours would carry me to the most beautiful places.",
    "This bottle has seen sunsets across the world. Want to watch one together?",
    "I threw my hopes into the ocean. Funny how they all float back to you.",
    "If you were a mermaid, I'd learn to swim just to say hello.",
    "The ocean has many mysteries. The biggest one is how someone like you stays single.",
    "I'd cross oceans for a chance, or settle happily for crossing the street to a café.",
    "This message was written with invisible ink made from courage and a dash of hope.",
    "If you were a shooting star, I'd wish on you every night.",
    "The sea is deep, but not as deep as my interest in taking you on a proper date.",
    "I've been sending messages in bottles for years. You're the first to feel worth the effort.",
    "If laughter was currency, spending an evening with you would make me rich.",
    "This bottle traveled further than most people's dating app radius to reach you.",
    "The ocean brought us together once. Maybe it's trying to tell us something.",
    "I'd rather have five minutes of your attention than five hours of anyone else's.",
    "If you were a song, you'd be the one I'd never skip.",
    "This message comes with a guarantee: at least one terrible ocean pun per conversation.",
    "I threw this bottle into the sea of uncertainty. Your smile would calm any storm.",
    "If dates were destinations, anywhere with you would be my favorite place.",
    "The tide brought this message to you. Maybe it's time brought us together too.",
    "I'd trade all the fish in the sea for one evening of good conversation with you.",
    "This bottle has one last message: coffee this weekend? The ocean insists. 🌊💙"
  ];

  const handleBottleClick = () => {
    if (!isBottleOpened) {
      // First click - open bottle and show first message
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(randomMessage);
      setIsBottleOpened(true);
      setTimeout(() => {
        setShowMessage(true);
      }, 800);
      setMessageCount(1);
    } else {
      // Subsequent clicks - show new message
      setShowMessage(false);
      setTimeout(() => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setCurrentMessage(randomMessage);
        setShowMessage(true);
        setMessageCount(prev => prev + 1);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-700 to-teal-500">
      {/* Navigation */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          onClick={() => navigate('/mixtape')}
          className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300"
        >
          🎵 Musical Journey
        </Button>
      </div>

      {/* Animated waves background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Sparkle effects */}
      <div className="sparkles">
        <div className="sparkle sparkle1"></div>
        <div className="sparkle sparkle2"></div>
        <div className="sparkle sparkle3"></div>
        <div className="sparkle sparkle4"></div>
        <div className="sparkle sparkle5"></div>
        <div className="sparkle sparkle6"></div>
        <div className="sparkle sparkle7"></div>
        <div className="sparkle sparkle8"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          {!isBottleOpened ? (
            <h1 className="text-white text-2xl md:text-3xl font-light mb-8 animate-fade-in opacity-80">
              A Message Awaits...
            </h1>
          ) : (
            <h1 className="text-white text-xl md:text-2xl font-light mb-6 animate-fade-in opacity-80">
              Message {messageCount} of 50 • Click for another
            </h1>
          )}

          {/* Bottle container */}
          <div className="relative mb-8">
            <div 
              className={`bottle-container cursor-pointer transition-transform duration-500 ${
                isBottleOpened ? 'bottle-opened' : 'hover:scale-110'
              }`}
              onClick={handleBottleClick}
            >
              <div className="bottle">
                <div className="bottle-neck"></div>
                <div className="bottle-cork"></div>
                <div className="bottle-body">
                  <div className="bottle-highlight"></div>
                  <div className="bottle-shine"></div>
                  {!isBottleOpened && (
                    <div className="message-scroll">
                      <div className="scroll-paper"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Message paper that slides out */}
            {isBottleOpened && (
              <div className={`message-paper ${showMessage ? 'message-visible' : ''}`}>
                <div className="paper-content">
                  <div className="paper-texture"></div>
                  <p className="handwritten-text">
                    {currentMessage}
                  </p>
                </div>
              </div>
            )}
          </div>

          {!isBottleOpened && (
            <p className="text-white/70 text-sm md:text-base animate-fade-in animation-delay-1000">
              Click the bottle to reveal its secret...
            </p>
          )}

          {isBottleOpened && (
            <p className="text-white/60 text-xs md:text-sm animate-fade-in mt-4">
              Each click reveals a new message from the depths of the ocean
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-xs text-center">
        Made with 🌊 + 💙 by coderabhay
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Poppins:wght@300;400&display=swap');

        /* Wave animations */
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 200px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          border-radius: 50%;
          animation: wave-move 15s ease-in-out infinite;
          opacity: 0.3;
        }

        .wave1 {
          animation-delay: 0s;
          animation-duration: 12s;
        }

        .wave2 {
          animation-delay: -2s;
          animation-duration: 15s;
          height: 150px;
        }

        .wave3 {
          animation-delay: -4s;
          animation-duration: 18s;
          height: 100px;
        }

        @keyframes wave-move {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-45%) rotate(1deg); }
          50% { transform: translateX(-55%) rotate(0deg); }
          75% { transform: translateX(-45%) rotate(-1deg); }
        }

        /* Enhanced sparkle effects */
        .sparkles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: sparkle 3s ease-in-out infinite;
        }

        .sparkle1 { top: 20%; left: 10%; animation-delay: 0s; }
        .sparkle2 { top: 40%; right: 15%; animation-delay: 1s; }
        .sparkle3 { top: 60%; left: 20%; animation-delay: 2s; }
        .sparkle4 { top: 30%; right: 30%; animation-delay: 0.5s; }
        .sparkle5 { top: 70%; right: 10%; animation-delay: 1.5s; }
        .sparkle6 { top: 15%; right: 25%; animation-delay: 2.5s; }
        .sparkle7 { top: 55%; left: 15%; animation-delay: 3s; }
        .sparkle8 { top: 80%; left: 30%; animation-delay: 0.8s; }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        /* Enhanced bottle styling */
        .bottle-container {
          position: relative;
          display: inline-block;
          animation: float 4s ease-in-out infinite;
        }

        .bottle-container:hover {
          animation: float-hover 2s ease-in-out infinite;
        }

        .bottle-opened {
          transform: rotate(25deg) !important;
          animation: bottle-celebrate 1s ease-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-1deg); }
        }

        @keyframes float-hover {
          0%, 100% { transform: translateY(-5px) rotate(0deg) scale(1.1); }
          50% { transform: translateY(-20px) rotate(2deg) scale(1.1); }
        }

        @keyframes bottle-celebrate {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-10deg) scale(1.1); }
          50% { transform: rotate(30deg) scale(1.05); }
          75% { transform: rotate(20deg) scale(1.08); }
          100% { transform: rotate(25deg) scale(1); }
        }

        .bottle {
          position: relative;
          width: 90px;
          height: 220px;
          margin: 0 auto;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
        }

        .bottle-neck {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 45px;
          background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
          border-radius: 12px 12px 0 0;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }

        .bottle-cork {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 18px;
          background: linear-gradient(135deg, #8B4513, #654321);
          border-radius: 14px 14px 0 0;
          border: 1px solid #543318;
          box-shadow: inset 0 2px 4px rgba(139,69,19,0.5);
        }

        .bottle-body {
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 160px;
          background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05));
          border-radius: 0 0 35px 35px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.4);
          overflow: hidden;
          position: relative;
        }

        .bottle-highlight {
          position: absolute;
          top: 15px;
          left: 8px;
          width: 18px;
          height: 80px;
          background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.2));
          border-radius: 9px;
          filter: blur(3px);
        }

        .bottle-shine {
          position: absolute;
          top: 10px;
          right: 5px;
          width: 3px;
          height: 40px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
          animation: shine 4s ease-in-out infinite;
        }

        @keyframes shine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .message-scroll {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          width: 35px;
          height: 90px;
        }

        .scroll-paper {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #f9f7f1, #e8e5d8);
          border-radius: 17px;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);
          border: 1px solid rgba(139,69,19,0.2);
        }

        /* Enhanced message paper animation */
        .message-paper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0) rotate(-5deg);
          width: 320px;
          max-width: 90vw;
          background: linear-gradient(135deg, #faf8f3, #f5f2eb);
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 20;
          border: 2px solid rgba(139,69,19,0.1);
        }

        .message-visible {
          transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }

        .paper-content {
          padding: 35px 25px;
          text-align: center;
          position: relative;
        }

        .paper-texture {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            rgba(139,69,19,0.1) 25px
          );
          border-radius: 15px;
          pointer-events: none;
        }

        .handwritten-text {
          font-family: 'Dancing Script', 'Great Vibes', cursive;
          font-size: 19px;
          line-height: 1.7;
          color: #2d3748;
          margin: 0;
          position: relative;
          z-index: 1;
          font-weight: 500;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .bottle {
            width: 70px;
            height: 170px;
          }

          .bottle-neck {
            width: 18px;
            height: 35px;
          }

          .bottle-cork {
            width: 22px;
            height: 14px;
          }

          .bottle-body {
            width: 55px;
            height: 125px;
            top: 30px;
          }

          .message-scroll {
            width: 28px;
            height: 70px;
            bottom: 20px;
          }

          .handwritten-text {
            font-size: 17px;
          }

          .paper-content {
            padding: 25px 20px;
          }

          .message-paper {
            width: 280px;
          }
        }

        @media (max-width: 480px) {
          .bottle {
            width: 60px;
            height: 150px;
          }

          .bottle-body {
            width: 50px;
            height: 110px;
          }

          .handwritten-text {
            font-size: 16px;
            line-height: 1.6;
          }

          .message-paper {
            width: 260px;
          }
        }

        /* Animation utilities */
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
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
      `}</style>
    </div>
  );
};

export default Index;
