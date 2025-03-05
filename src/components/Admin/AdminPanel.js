// src/components/Admin/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from '../../firebase';
import { getRegionDisplayNames } from '../../data/historicalData';
import './AdminPanel.css';

function AdminPanel() {
  const [youtubeId, setYoutubeId] = useState('');
  const [year, setYear] = useState(1500);
  const [dynasties, setDynasties] = useState({
    global: '',
    europe: '',
    asia: '',
    middleEast: '',
    africa: '',
    americas: ''
  });
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const regionNames = getRegionDisplayNames();

  // Get a list of videos on component mount
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosCollection = collection(db, 'videos');
        const videoSnapshot = await getDocs(videosCollection);
        const videosList = videoSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setVideos(videosList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setStatus('Error fetching videos: ' + error.message);
        setStatusType('error');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleDynastyChange = (region, value) => {
    setDynasties(prev => ({
      ...prev,
      [region]: value
    }));
  };

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
      
      // Validate that at least the global dynasty is provided
      if (!dynasties.global.trim()) {
        setStatus('Please provide at least the global ruling power.');
        setStatusType('error');
        return;
      }
      
      // Add a new video document to Firestore
      const docRef = await addDoc(collection(db, 'videos'), {
        youtubeId,
        year: parseInt(year),
        dynasties,
        createdAt: serverTimestamp()
      });
      
      // Add the new video to the list with a temporary ID until refresh
      setVideos(prev => [{
        id: docRef.id,
        youtubeId,
        year: parseInt(year),
        dynasties,
        createdAt: new Date()
      }, ...prev]);
      
      setStatus('Video added successfully!');
      setStatusType('success');
      
      // Reset form
      setYoutubeId('');
      setYear(1500);
      setDynasties({
        global: '',
        europe: '',
        asia: '',
        middleEast: '',
        africa: '',
        americas: ''
      });
    } catch (error) {
      setStatus('Error adding video: ' + error.message);
      setStatusType('error');
    }
  };
  
  const handleDeleteVideo = async (id) => {
    if (!window.confirm('Are you sure you want to delete this video?')) {
      return;
    }
    
    try {
      await deleteDoc(doc(db, 'videos', id));
      setVideos(prev => prev.filter(video => video.id !== id));
      setStatus('Video deleted successfully!');
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
        <h1>Admin Panel</h1>
        <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
      </div>
      
      {status && (
        <div className={`status-message ${statusType}`}>
          {status}
        </div>
      )}
      
      <div className="admin-content">
        <div className="video-form-card">
          <h2>Add New Video</h2>
          
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
            
            <div className="form-group">
              <label htmlFor="year">Year:</label>
              <input 
                id="year"
                type="number" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                min="-3000" 
                max="2023" 
                required 
              />
              <p className="form-help">
                The historical year depicted in the video
              </p>
            </div>
            
            <div className="form-group">
              <h3>Dynasties/Powers by Region:</h3>
              <p className="form-help">
                Enter the ruling dynasty, empire, or power for each relevant region
              </p>
              
              {Object.keys(regionNames).map(region => (
                <div key={region} className="dynasty-input">
                  <label htmlFor={`dynasty-${region}`}>
                    {regionNames[region]}
                    {region === 'global' && ' (Required)'}:
                  </label>
                  <input 
                    id={`dynasty-${region}`}
                    type="text" 
                    value={dynasties[region]} 
                    onChange={(e) => handleDynastyChange(region, e.target.value)} 
                    placeholder={region === 'global' ? "Required" : "Optional"}
                    required={region === 'global'} 
                  />
                </div>
              ))}
            </div>
            
            <button type="submit" className="submit-button">Add Video</button>
          </form>
        </div>
        
        <div className="video-list-card">
          <h2>Existing Videos</h2>
          
          {loading ? (
            <div className="loading-videos">Loading videos...</div>
          ) : videos.length === 0 ? (
            <div className="no-videos">No videos added yet.</div>
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
                    <h3>{video.year}</h3>
                    <p><strong>Global Power:</strong> {video.dynasties.global}</p>
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
