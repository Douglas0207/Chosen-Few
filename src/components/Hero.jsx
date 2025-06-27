
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [verseOfDay, setVerseOfDay] = useState({
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11"
  });

  // 31 days of verses for monthly rotation
  const getVerseOfDay = () => {
    const verses = [
      {
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11"
      },
      {
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13"
      },
      {
        text: "Trust in the Lord with all your heart and lean not on your own understanding.",
        reference: "Proverbs 3:5"
      },
      {
        text: "The Lord is my shepherd, I lack nothing.",
        reference: "Psalm 23:1"
      },
      {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reference: "Joshua 1:9"
      },
      {
        text: "Come to me, all you who are weary and burdened, and I will give you rest.",
        reference: "Matthew 11:28"
      },
      {
        text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        reference: "Matthew 6:33"
      },
      {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16"
      },
      {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        reference: "Romans 8:28"
      },
      {
        text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        reference: "2 Corinthians 5:17"
      },
      {
        text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        reference: "Ephesians 4:32"
      },
      {
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        reference: "Philippians 4:6"
      },
      {
        text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
        reference: "Galatians 6:9"
      },
      {
        text: "Be completely humble and gentle; be patient, bearing with one another in love.",
        reference: "Ephesians 4:2"
      },
      {
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7"
      },
      {
        text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
        reference: "Psalm 27:1"
      },
      {
        text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        reference: "Isaiah 40:31"
      },
      {
        text: "This is the day that the Lord has made; let us rejoice and be glad in it.",
        reference: "Psalm 118:24"
      },
      {
        text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        reference: "1 Corinthians 13:4"
      },
      {
        text: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
        reference: "Matthew 5:16"
      },
      {
        text: "Therefore encourage one another and build each other up, just as in fact you are doing.",
        reference: "1 Thessalonians 5:11"
      },
      {
        text: "Be joyful in hope, patient in affliction, faithful in prayer.",
        reference: "Romans 12:12"
      },
      {
        text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
        reference: "John 14:27"
      },
      {
        text: "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
        reference: "Hebrews 4:16"
      },
      {
        text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
        reference: "Proverbs 18:10"
      },
      {
        text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        reference: "Romans 15:13"
      },
      {
        text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
        reference: "Psalm 34:8"
      },
      {
        text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
        reference: "Romans 12:2"
      },
      {
        text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
        reference: "1 Thessalonians 5:16-18"
      },
      {
        text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.",
        reference: "Numbers 6:24-26"
      },
      {
        text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",
        reference: "Psalm 91:1"
      }
    ];
    
    // Use the day of the month (1-31) to select a verse
    const today = new Date();
    const dayOfMonth = today.getDate(); // 1-31
    // Use modulo to handle months with fewer than 31 days
    const index = (dayOfMonth - 1) % verses.length;
    return verses[index];
  };

  useEffect(() => {
    setVerseOfDay(getVerseOfDay());
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-chosen-blue/10 to-white -z-10"></div>
      
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 animate-fade-in">
          Welcome to <span className="text-chosen-orange">Chosen Few</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto animate-fade-in">
          A community of young believers supporting each other through prayer, 
          fellowship, and spiritual growth in Christ's love.
        </p>
        
        <div className="verse-card mb-10 max-w-2xl mx-auto animate-fade-in">
          <p className="mb-2">{verseOfDay.text}</p>
          <p className="text-right font-bold text-chosen-orange">{verseOfDay.reference}</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#prayer-wall" 
            className="bg-chosen-orange text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors duration-200 button-animation"
          >
            Prayer Wall
          </a>
          <a 
            href="#testimonies" 
            className="bg-chosen-blue text-gray-800 px-6 py-3 rounded-full hover:bg-blue-200 transition-colors duration-200 button-animation"
          >
            Read Testimonies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
