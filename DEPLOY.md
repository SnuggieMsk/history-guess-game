# Deployment Instructions

Follow these steps to deploy your Historical Guess Game to GitHub Pages:

1. **Update package.json**: Replace the "homepage" value in package.json with your GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/history-guess-game",
   ```

2. **Create a GitHub repository**:
   - Go to GitHub and create a new repository named "history-guess-game"
   - Copy the repository URL for the next step

3. **Initialize Git and push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/history-guess-game.git
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

5. **Access your app**:
   - Your app should now be available at: https://yourusername.github.io/history-guess-game

## Testing Before Deployment

1. Start the local development server:
   ```bash
   npm start
   ```

2. Test all functionality:
   - Admin login
   - Adding videos
   - Playing the game
   - Different difficulty levels

## Admin Login Instructions

1. Use the Firebase console to find your admin email
2. Use the password you set when creating the admin user
3. If you need to reset your admin password, use the Firebase console Authentication section

## Adding Videos

1. Create short 4-5 second video clips using Sora
2. Upload them to YouTube as unlisted videos
3. Copy the video ID from the YouTube URL (the part after v=)
4. Add the videos through the admin panel
