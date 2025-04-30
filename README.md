🎮 Match Game
A fun and fast-paced matching game built with React, where players match a displayed image with one of many thumbnails based on category tabs. The game is timed and scores are tracked until the player makes a mistake or the timer runs out.

## 🚀 Live Demo

👉 [Click here to play the Match Game](https://pakupodisathish.github.io/MatchGame/)


🧩 Features
🕒 60-second countdown timer

✅ Score increases on correct matches

❌ Game ends on incorrect match or when time runs out

🔄 "Play Again" button resets the game

📁 Filter thumbnails by category tabs (Fruits, Animals, Places)

🖼️ Screens Supported
Extra Small & Small (Size < 768px): Responsive layout optimized for mobile

Medium and Above (Size ≥ 768px):

Match Game View

Scorecard View on game over

📦 Getting Started
Prerequisites
Ensure you have Node.js and npm installed.

Installation
bash
Copy
Edit
git clone https://github.com/your-username/match-game.git
cd match-game
npm install
Run the App
bash
Copy
Edit
npm start
🛠️ Functional Requirements
On initial load:

Score is 0

Timer is set to 60s

First image to match is the first object in imagesList

Active tab is Fruits

On thumbnail click:

✅ If correct: score increases, a new random image is selected

❌ If incorrect: game ends, scorecard is shown

On tab click: thumbnails update to match selected category

On timer reaching 0s: game ends

On "Play Again": game resets to initial state

📂 Data Structures
tabsList (Array of Objects)
js
Copy
Edit
{
  tabId: String,
  displayText: String
}
imagesList (Array of Objects)
js
Copy
Edit
{
  id: String,
  imageUrl: String,
  thumbnailUrl: String,
  category: String
}
🎨 Assets & Style
Image URLs
Background: https://assets.ccbp.in/frontend/react-js/match-game-bg.png

Scorecard (Large): https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png

Scorecard (Small): https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png

Logo: https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png

Timer Icon: https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png

Reset Icon: https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png

Trophy: https://assets.ccbp.in/frontend/react-js/match-game-trophy.png

Colors
Background: #2c0e3a

Text: #ffffff

Accent: #fec653, #cf60c8

Fonts
Roboto
