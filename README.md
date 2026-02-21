# ✧ AURALYTIX ✧
**Smarter Assets Discovery** Built for Makeathon 8 by Team CODESTORM (Thapar University)

## 🚀 Overview
Finding exact movie scenes or songs from dialogues or vague moods is difficult. Traditional search engines rely heavily on exact keyword matches rather than emotions or context. 

**Auralytix** is an AI-driven semantic ranking engine designed to solve this. Whether you are looking for the exact timestamp of the museum heist scene from *Red Notice*, searching for the epic transformation episode in *Attack on Titan*, or just want to discover a specific vibe like an upbeat track by *Talwiinder*, Auralytix understands your intent. It converts voice or text input into semantic embeddings to fetch timestamped movie scenes and mood-based song recommendations.

## ✨ Key Features
* **Intelligent Search:** Voice-based and text-based semantic search.
* **Scene-Level Precision:** Dialogue-to-scene matching with exact timestamp outputs.
* **Emotion-Aware Ranking:** Understands the "mood" or context of your query.
* **Similarity Scoring:** Provides confidence metrics (e.g., 87% match) using Cosine Similarity.
* **Futuristic UI:** A sleek, dark-mode semantic interface built for speed and immersion.

## 🛠️ Tech Stack
### Frontend
* **Framework:** React + Vite
* **Styling:** Tailwind CSS (v4)
* **Design:** Custom Cyber-Teal UI with glassmorphism and CSS animations

### Backend & AI Architecture (In Progress)
* **Framework:** FastAPI
* **Speech-to-Text:** OpenAI Whisper
* **Embeddings:** Sentence Transformers (SBERT - 384-dim embeddings)
* **Search:** FAISS (Vector Search) + Cosine Similarity ranking
* **External APIs:** YouTube, IMDb, Spotify, GIPHY

## 💻 Getting Started (Local Setup)

To run the Auralytix frontend locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd Auralytix/FrontEnd