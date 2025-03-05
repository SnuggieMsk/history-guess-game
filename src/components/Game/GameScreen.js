// src/components/Game/GameScreen.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase';
import { getDynastiesForPeriod, getRegionDisplayNames } from '../../data/historicalData';

import VideoPlayer from './VideoPlayer';
import YearSlider from './YearSlider';
import DynastySelector from './DynastySelector';
import RegionSelector from './RegionSelector';
import ScoreDisplay from './ScoreDisplay';
import './GameScreen.css';

function GameScreen() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedYear, setSelectedYear] = useState(1500);
  const [selectedDynasty, setSelectedDynasty] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isGuessing, setIsGuessing] = useState(true);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availableDynasties, setAvailableDynasties] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [error, setError] = useState('');

  // Game difficulty levels
  const DIFFICULTY_SETTINGS = {
    easy: { yearTolerance: 100, points: 1, label: 'Easy' },
    medium: { yearTolerance: 50, points: 2, label: 'Medium' },
    hard: { yearTolerance: 25, points: 3, label: 'Hard' },
    expert: { yearTolerance: 10, points: 5, label: 'Expert' }
  };

  useEffect(() => {
    // Fetch videos from Firestore
    const fetchVideos = async () => {
      try {
        setError('');
        const videosCollection = collection(db, 'videos');
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
        setError('Failed to load videos. Please try refreshing the page.');
        setLoading(false);
      }
    };

    fetchVideos();
    
    // Load score from localStorage
    const savedScore = localStorage.getItem('gameScore');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  // Update available dynasties when year or region changes
  useEffect(() => {
    const dynasties = getDynastiesForPeriod(selectedYear, selectedRegion);
    setAvailableDynasties(dynasties);
    
    // Reset selected dynasty when region changes
    if (dynasties.indexOf(selectedDynasty) === -1) {
      setSelectedDynasty('');
    }
  }, [selectedYear, selectedRegion, selectedDynasty]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleDynastyChange = (dynasty) => {
    setSelectedDynasty(dynasty);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const handleSubmitGuess = () => {
    if (!currentVideo) return;
    
    // Selected difficulty settings
    const currentDifficulty = DIFFICULTY_SETTINGS[difficulty];
    
    // Check year guess
    const yearDifference = Math.abs(selectedYear - currentVideo.year);
    let pointsEarned = 0;
    let yearFeedback = '';
    
    if (yearDifference <= currentDifficulty.yearTolerance) {
      pointsEarned += currentDifficulty.points;
      yearFeedback = yearDifference === 0 
        ? 'Perfect year guess! '
        : `Close with the year! (within ${yearDifference} years) `;
    } else {
      yearFeedback = `The correct year was ${currentVideo.year}. `;
    }
    
    // Check dynasty guess
    const correctDynasty = currentVideo.dynasties[selectedRegion] || 'Unknown';
    const dynastyCorrect = selectedDynasty === correctDynasty;
    let dynastyFeedback = '';
    
    if (dynastyCorrect) {
      pointsEarned += currentDifficulty.points;
      dynastyFeedback = 'Correct dynasty/power! ';
    } else {
      dynastyFeedback = `The correct dynasty/power was "${correctDynasty}". `;
    }
    
    // Update score and feedback
    const newScore = score + pointsEarned;
    setScore(newScore);
    localStorage.setItem('gameScore', newScore.toString());
    
    setFeedback(`${yearFeedback}${dynastyFeedback}You earned ${pointsEarned} points!`);
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
    setSelectedYear(1500);
    setSelectedDynasty('');
    setSelectedRegion('global');
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading videos...</p>
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
        <h2>No Videos Available</h2>
        <p>There are no videos available to play. Please check back later or contact the administrator.</p>
      </div>
    );
  }

  return (
    <div className="game-container">
      <h1>Historical Guess Challenge</h1>
      
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
          <RegionSelector 
            regions={Object.keys(getRegionDisplayNames())}
            regionNames={getRegionDisplayNames()} 
            selectedRegion={selectedRegion}
            onChange={handleRegionChange}
            disabled={!isGuessing}
          />
          
          <YearSlider
            min={-3000}
            max={2023}
            value={selectedYear}
            onChange={handleYearChange}
            disabled={!isGuessing}
          />
          
          <DynastySelector
            dynasties={availableDynasties}
            selectedDynasty={selectedDynasty}
            onChange={handleDynastyChange}
            disabled={!isGuessing}
          />
          
          {isGuessing ? (
            <button 
              onClick={handleSubmitGuess} 
              className="guess-button"
              disabled={!selectedDynasty}
            >
              Submit Guess
            </button>
          ) : (
            <button 
              onClick={handleNextVideo} 
              className="next-button"
            >
              Next Video
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
