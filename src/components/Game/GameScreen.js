// src/components/Game/GameScreen.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase';
import { 
  getMemeOptionsForPeriod, 
  getCountryOptions, 
  getMonthOptions 
} from '../../data/memeData';

import VideoPlayer from './VideoPlayer';
import YearMonthSelector from './YearMonthSelector';
import MemeSelector from './MemeSelector';
import CountrySelector from './CountrySelector';
import ScoreDisplay from './ScoreDisplay';
import './GameScreen.css';

function GameScreen() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2015);
  const [selectedMonth, setSelectedMonth] = useState(6);
  const [selectedMeme, setSelectedMeme] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isGuessing, setIsGuessing] = useState(true);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availableMemes, setAvailableMemes] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [error, setError] = useState('');

  // Game difficulty levels
  const DIFFICULTY_SETTINGS = {
    easy: { yearTolerance: 3, monthTolerance: 6, points: 1, label: 'Easy' },
    medium: { yearTolerance: 2, monthTolerance: 3, points: 2, label: 'Medium' },
    hard: { yearTolerance: 1, monthTolerance: 2, points: 3, label: 'Hard' },
    expert: { yearTolerance: 0, monthTolerance: 1, points: 5, label: 'Expert' }
  };

  useEffect(() => {
    // Fetch videos from Firestore
    const fetchVideos = async () => {
      try {
        setError('');
        const videosCollection = collection(db, 'meme_videos');
        const videosQuery = query(videosCollection, orderBy('createdAt', 'desc'), limit(20));
        const videoSnapshot = await getDocs(videosQuery);
        const videosList = videoSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setVideos(videosList);
        
        if (videosList.length > 0) {
          // Select a random video
          const randomIndex = Math.floor(Math.random() * videosList.length);
          setCurrentVideo(videosList[randomIndex]);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load meme videos. Please try refreshing the page.');
        setLoading(false);
      }
    };

    fetchVideos();
    
    // Load score from localStorage
    const savedScore = localStorage.getItem('memeGameScore');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  // Update available memes when year or month changes
  useEffect(() => {
    const memes = getMemeOptionsForPeriod(selectedYear, selectedMonth);
    setAvailableMemes(memes);
    
    // Reset selected meme when year/month changes significantly
    if (memes.indexOf(selectedMeme) === -1) {
      setSelectedMeme('');
    }
  }, [selectedYear, selectedMonth, selectedMeme]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleMemeChange = (meme) => {
    setSelectedMeme(meme);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const handleSubmitGuess = () => {
    if (!currentVideo) return;
    
    // Selected difficulty settings
    const currentDifficulty = DIFFICULTY_SETTINGS[difficulty];
    
    // Check year and month guess
    const yearDifference = Math.abs(selectedYear - currentVideo.year);
    const monthDifference = Math.abs(selectedMonth - currentVideo.month);
    
    // Calculate month difference more accurately (consider December to January is 1 month apart, not 11)
    const totalMonthsOff = (yearDifference * 12) + monthDifference;
    const adjustedMonthsOff = Math.min(totalMonthsOff, Math.abs(totalMonthsOff - 12));
    
    let timePoints = 0;
    let timeFeedback = '';
    
    // Perfect match on year and month
    if (yearDifference === 0 && monthDifference === 0) {
      timePoints = currentDifficulty.points * 1.5; // Bonus for perfect timing
      timeFeedback = 'Perfect timing guess! ';
    } 
    // Within year tolerance, check month tolerance
    else if (yearDifference <= currentDifficulty.yearTolerance) {
      if (adjustedMonthsOff <= currentDifficulty.monthTolerance) {
        // Calculate proportional points
        const maxMonthsOff = (currentDifficulty.yearTolerance * 12) + currentDifficulty.monthTolerance;
        const accuracyRatio = 1 - (adjustedMonthsOff / maxMonthsOff);
        timePoints = Math.round(currentDifficulty.points * accuracyRatio * 10) / 10;
        
        timeFeedback = `Close! Off by about ${adjustedMonthsOff} month${adjustedMonthsOff !== 1 ? 's' : ''}. `;
      } else {
        // Year is close but month is off
        timePoints = currentDifficulty.points * 0.3; // 30% for getting year close
        timeFeedback = `Right era, wrong month. The meme was from ${getMonthOptions()[currentVideo.month]} ${currentVideo.year}. `;
      }
    } else {
      // Both year and month are off by too much
      timeFeedback = `The meme was actually from ${getMonthOptions()[currentVideo.month]} ${currentVideo.year}. `;
    }
    
    // Check meme name guess
    const memeCorrect = selectedMeme === currentVideo.memeName;
    let memePoints = 0;
    let memeFeedback = '';
    
    if (memeCorrect) {
      memePoints = currentDifficulty.points;
      memeFeedback = 'You got the meme name right! ';
    } else {
      memeFeedback = `This was the "${currentVideo.memeName}" meme. `;
    }
    
    // Check country guess
    const countryCorrect = selectedCountry === currentVideo.country;
    let countryPoints = 0;
    let countryFeedback = '';
    
    if (countryCorrect) {
      countryPoints = currentDifficulty.points * 0.5; // Half points for country
      countryFeedback = 'Correct country of origin! ';
    } else {
      countryFeedback = `It originated from ${getCountryOptions()[currentVideo.country]}. `;
    }
    
    // Total points earned
    const pointsEarned = timePoints + memePoints + countryPoints;
    
    // Update score and feedback
    const newScore = score + pointsEarned;
    setScore(newScore);
    localStorage.setItem('memeGameScore', newScore.toString());
    
    setFeedback(`${timeFeedback}${memeFeedback}${countryFeedback}You earned ${pointsEarned.toFixed(1)} points!`);
    setIsGuessing(false);
  };

  const handleNextVideo = () => {
    if (videos.length <= 1) {
      return;
    }
    
    // Select a new random video that's different from current
    const filteredVideos = videos.filter(v => v.id !== currentVideo.id);
    const randomIndex = Math.floor(Math.random() * filteredVideos.length);
    setCurrentVideo(filteredVideos[randomIndex]);
    
    // Reset state for next round
    setFeedback('');
    setIsGuessing(true);
    setSelectedYear(2015);
    setSelectedMonth(6);
    setSelectedMeme('');
    setSelectedCountry('us');
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading meme videos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!currentVideo) {
    return (
      <div className="no-videos-container">
        <h2>No Meme Videos Available</h2>
        <p>There are no meme videos available to play. Please check back later or contact the administrator.</p>
      </div>
    );
  }

  return (
    <div className="game-container">
      <h1>Meme Timeline Challenge</h1>
      
      <div className="difficulty-selector">
        <label>Difficulty:</label>
        <div className="difficulty-buttons">
          {Object.entries(DIFFICULTY_SETTINGS).map(([key, { label }]) => (
            <button
              key={key}
              className={`difficulty-button ${difficulty === key ? 'active' : ''}`}
              onClick={() => handleDifficultyChange(key)}
              disabled={!isGuessing}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="game-content">
        <div className="video-container">
          <VideoPlayer videoId={currentVideo.youtubeId} />
        </div>
        
        <div className="game-controls">
          <CountrySelector 
            countries={getCountryOptions()}
            selectedCountry={selectedCountry}
            onChange={handleCountryChange}
            disabled={!isGuessing}
          />
          
          <YearMonthSelector
            minYear={1999}
            maxYear={2024}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            onYearChange={handleYearChange}
            onMonthChange={handleMonthChange}
            months={getMonthOptions()}
            disabled={!isGuessing}
          />
          
          <MemeSelector
            memes={availableMemes}
            selectedMeme={selectedMeme}
            onChange={handleMemeChange}
            disabled={!isGuessing}
          />
          
          {isGuessing ? (
            <button 
              onClick={handleSubmitGuess} 
              className="guess-button"
              disabled={!selectedMeme}
            >
              Submit Guess
            </button>
          ) : (
            <button 
              onClick={handleNextVideo} 
              className="next-button"
            >
              Next Meme
            </button>
          )}
        </div>
      </div>
      
      {feedback && (
        <div className="feedback-container">
          <h3>Results</h3>
          <p>{feedback}</p>
        </div>
      )}
      
      <ScoreDisplay score={score} />
    </div>
  );
}

export default GameScreen;
