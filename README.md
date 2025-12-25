# 🎵 HarmonyHub — Music Info Discord Bot

HarmonyHub is a **lightweight, stateless Discord bot** built with **Node.js & discord.js v14** that instantly fetches **song details, artist info, and lyrics** using public music APIs.

---

## ✨ Features

### 🎶 Song Information
Get detailed metadata of any song.

/song name:[song name]


---

### 👨‍🎤 Artist Information
Get insights about an artist.

/artist name:[artist name]


---

### 📝 Lyrics Fetcher
Fetch lyrics for a song (Discord-safe length).

/lyrics song:[song name] artist:[artist name]


---

## 🛠 Tech Stack

- **Node.js**
- **discord.js v14**
- **Spotify Web API**
- **Lyrics.ovh / Genius API**
- **axios**
- **dotenv**

---

## 📁 Project Structure

```
HarmonyHub/  
├── commands/  
│ ├── song.js  
│ ├── artist.js  
│ └── lyrics.js  
├── services/  
│ ├── spotify.service.js  
│ └── lyrics.service.js  
├── utils/  
│ └── embedBuilder.js  
├── index.js  
├── .env  
├── package.json  
└── README.md  
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_application_id
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
```
---

## 🚀 Installation & Setup  

### 1️⃣ Clone the Repository

```
git clone https://github.com/Suvanwita/HarmonyHub.git
cd HarmonyHub
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start the Bot

```
npm start
```

---

## 📜 License

MIT License © 2025 HarmonyHub

---


## 🙌 Credits

  - Spotify Web API

  - Lyrics.ovh / Genius

  - discord.js
