// src/components/Admin/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from '../../firebase';
import { getCountryOptions, getMonthOptions } from '../../data/memeData';
import './AdminPanel.css';

function AdminPanel() {
  const [youtubeId, setYoutubeId] = useState('');
  const [year, setYear] = useState(2015);
  const [month, setMonth] = useState(6);
  const [memeName, setMemeName] = useState('');
  const [country, setCountry] = useState('us');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const countryOptions = getCountryOptions();
  const monthOptions = getMonthOptions();

  // Get a list of videos on component mount
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosCollection = collection(db, 'meme_videos');
        const videoSnapshot = await getDocs(videosCollection);
        const videosList = videoSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setVideos(videosList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setStatus('Error fetching meme videos: ' + error.message);
        setStatusType('error');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setStatusType('');
    
    try {
      // Validate YouTube ID format (basic validation)
      if (!/^[A-Za-z0-9_-]{11}$/.test(youtubeId)) {
        setStatus('Invalid YouTube ID format. Should be 11 characters.');
        setStatusType('error');
        return;
      }
      
      // Validate that meme name is provided
      if (!memeName.trim()) {
        setStatus('Please provide the meme name.');
        setStatusType('error');
        return;
      }
      
      // Add a new video document to Firestore
      const docRef = await addDoc(collection(db, 'meme_videos'), {
        youtubeId,
        year: parseInt(year),
        month: parseInt(month),
        memeName,
        country,
        description,
        createdAt: serverTimestamp()
      });
      
      // Add the new video to the list with a temporary ID until refresh
      setVideos(prev => [{
        id: docRef.id,
        youtubeId,
        year: parseInt(year),
        month: parseInt(month),
        memeName,
        country,
        description,
        createdAt: new Date()
      }, ...prev]);
      
      setStatus('Meme video added successfully!');
      setStatusType('success');
      
      // Reset form
      setYoutubeId('');
      setMemeName('');
      setDescription('');
      // Leave year, month, and country at their current values for convenience
    } catch (error) {
      setStatus('Error adding meme video: ' + error.message);
      setStatusType('error');
    }
  };
  
  const handleDeleteVideo = async (id) => {
    if (!window.confirm('Are you sure you want to delete this meme video?')) {
      return;
    }
    
    try {
      await deleteDoc(doc(db, 'meme_videos', id));
      setVideos(prev => prev.filter(video => video.id !== id));
      setStatus('Meme video deleted successfully!');
      setStatusType('success');
    } catch (error) {
      setStatus('Error deleting video: ' + error.message);
      setStatusType('error');
    }
  };
  
  const handleSignOut = () => {
    signOut(auth).catch(error => {
      console.error("Sign out error:", error);
    });
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Meme Game Admin Panel</h1>
        <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
      </div>
      
      {status && (
        <div className={`status-message ${statusType}`}>
          {status}
        </div>
      )}
      
      <div className="admin-content">
        <div className="video-form-card">
          <h2>Add New Meme Video</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="youtubeId">YouTube Video ID:</label>
              <input 
                id="youtubeId"
                type="text" 
                value={youtubeId} 
                onChange={(e) => setYoutubeId(e.target.value)} 
                placeholder="dQw4w9WgXcQ"
                required 
              />
              <p className="form-help">
                The YouTube ID is the part after "v=" in YouTube URL<br/>
                Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ, enter "dQw4w9WgXcQ"
              </p>
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="year">Year:</label>
                <input 
                  id="year"
                  type="number" 
                  value={year} 
                  onChange={(e) => setYear(e.target.value)} 
                  min="1999" 
                  max="2024" 
                  required 
                />
              </div>
              
              <div className="form-group half">
                <label htmlFor="month">Month:</label>
                <select
                  id="month"
                  value={month}
                  onChange={(e) => setMonth(parseInt(e.target.value))}
                  required
                >
                  {Object.entries(monthOptions).map(([value, name]) => (
                    <option key={value} value={value}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="memeName">Meme Name:</label>
              <input 
                id="memeName"
                type="text" 
                value={memeName} 
                onChange={(e) => setMemeName(e.target.value)} 
                placeholder="Rickroll"
                required 
              />
              <p className="form-help">
                The commonly known name of the meme
              </p>
            </div>
            
            <div className="form-group">
              <label htmlFor="country">Country of Origin:</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {Object.entries(countryOptions).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
              <p className="form-help">
                The country where the meme originated or became famous first
              </p>
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description (Optional):</label>
              <textarea 
                id="description"
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Brief description of the meme's context or history"
                rows="3"
              />
            </div>
            
            <button type="submit" className="submit-button">Add Meme Video</button>
          </form>
        </div>
        
        <div className="video-list-card">
          <h2>Existing Meme Videos</h2>
          
          {loading ? (
            <div className="loading-videos">Loading videos...</div>
          ) : videos.length === 0 ? (
            <div className="no-videos">No meme videos added yet.</div>
          ) : (
            <div className="video-list">
              {videos.map(video => (
                <div key={video.id} className="video-item">
                  <div className="video-thumbnail">
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                        alt="Video thumbnail" 
                      />
                    </a>
                  </div>
                  <div className="video-details">
                    <h3>{video.memeName}</h3>
                    <p>
                      <strong>{monthOptions[video.month]} {video.year}</strong> • 
                      {countryOptions[video.country]}
                    </p>
                    <button 
                      onClick={() => handleDeleteVideo(video.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
