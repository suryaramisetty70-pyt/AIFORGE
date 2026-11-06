# AI FORGE — Official Web Platform & Community Hub

> **Empowering the Next Generation of AI Innovators & Autonomous Agents**  
> **Institution:** Veltech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology  
> **Head & Founder:** R. Jayasurya (VTU 27657)

---

## 🌟 Overview

**AI FORGE** is the premier student-led Artificial Intelligence innovation club at Veltech University. Founded by **R. Jayasurya**, the club operates under a zero-budget ethos—transforming raw student passion into production-grade AI systems, research models, and full-day hackathons without costly subscriptions or external dependencies.

This repository contains the complete frontend web application for AI FORGE, built with an **Obsidian, Electric Violet, and Neon Coral** design aesthetic.

---

## 🚀 Key Features

### 1. 🏆 AI Forge Expo & Event Gallery
- High-definition event archives from our flagship **AI Forge Expo** (Full-Day AI Hackathon organized in collaboration with IEEE).
- Interactive lightbox view, tags, participant metrics, and live event photo uploading capability.

### 2. 📚 Comprehensive Curriculum & Learning Roadmap
Six-track structured training from scratch to industry-ready mastery:
1. **Core Python & Systems Programming** (OOP, Memory Profiling, AsyncIO, PyPI packaging)
2. **Mathematical Foundations for Machine Learning** (Linear Algebra, Multivariate Calculus, Probability)
3. **Classical Machine Learning & Statistical Modeling** (Scikit-Learn, Feature Engineering, XGBoost)
4. **Deep Learning Foundations with PyTorch** (CNNs, RNNs, Backprop from scratch, GPU acceleration)
5. **Generative AI, Large Language Models & Modern RAG** (Hugging Face, Vector DBs, LangChain/LlamaIndex)
6. **Autonomous AI Agents & Production Deployment** (Multi-agent loops, Tool calling, MCP, FastAPI, Docker)

Includes an interactive **Club Curriculum Syllabus Modal** and **Downloadable Handbook** slot.

### 3. 👥 Core Leadership & Team Roster
- Head & Founder: **R. Jayasurya** (VTU 27657)
- Technical Lead: **K. Manidhar** (VTU 27685)
- Model Architecture Lead: **T. Sai Mani** (VTU 27670)
- Event Coordinators & Research Engineers: **D. Sri Rama Chandra Murthy**, **P. Sai Venkat**, **K. Chandu**, **S. Kowsik**, and **D. Bala Venkata Ramana**.
- Interactive Dossier modal showcasing background, roles, and project portfolios.

### 4. 🎫 Student Membership & Real-Time QR Attendance
- **Direct Student Registration:** Real-time form validating name, Roll Number / VTU ID, email, and department.
- **Dynamic Digital ID Card:** Instantly generates a holographic club ID card with a unique QR code.
- **Live Attendance Verification Engine:** Simulates camera scanning and instant verification with attendance status logs.

### 5. 🎯 Goals, Agendas & Vision
- 8 high-impact club pillars: Autonomous Systems, Zero-Budget Innovation, Research-Grade Architectures, Open Source Contributions, Hackathon Domination, Interdisciplinary Projects, Peer-to-Peer Mentorship, and Industry Partnerships.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS with custom neon violet/coral gradients and glow effects
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **State Management:** LocalStorage persistence for students and gallery events

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/suryaramisetty70-pyt/AIFORGE.git

# Navigate to the project directory
cd AIFORGE

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser to explore the website.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```
AIFORGE/
├── public/
│   └── events/
│       └── aiforge-expo/           # Real AI Forge Expo hackathon photos
├── src/
│   ├── assets/
│   │   └── team/                  # Real photos of leadership & coordinators
│   ├── components/
│   │   ├── Navbar.jsx             # Top navigation with club branding
│   │   ├── Hero.jsx               # Hero section, Founder Dossier & Blueprint Modal
│   │   ├── ClubInfoAndTeam.jsx    # About club, goals, and core 8 team members
│   │   ├── CurriculumRoadmap.jsx  # 6-track curriculum & syllabus modal
│   │   ├── ClubGallery.jsx        # Real AI Forge Expo gallery & photo upload
│   │   ├── StudentAttendance.jsx  # Student ID generation & QR attendance scanner
│   │   ├── Footer.jsx             # Club footer & social links
│   │   └── ...
│   ├── data/
│   │   ├── clubData.js            # Club info, leader profiles, and curriculum
│   │   ├── galleryData.js         # AI Forge Expo photos and metadata
│   │   └── studentsData.js        # Default student registry
│   ├── App.jsx                    # Root component
│   └── main.jsx                   # Entry point
├── package.json
└── vite.config.js
```

---

## 🤝 Contributing

We welcome contributions from all club members and tech enthusiasts! Feel free to open issues or submit Pull Requests for new modules, tutorials, or hackathon showcases.

---

## 📜 License & Acknowledgments

- Organized under the auspices of **Veltech University** and partner technical societies (IEEE).
- Designed & Developed by the **AI FORGE** Core Team.
