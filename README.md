# CalmSphere Project Structure

```
calmsphere/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── styles/         # CSS/SCSS files
│   │   ├── utils/          # Utility functions
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static files
│   └── package.json        # Frontend dependencies
│
├── backend/                 # Django backend
│   ├── src/
│   │   ├── api/           # API endpoints
│   │   ├── core/          # Core functionality
│   │   └── utils/         # Utility functions
│   ├── tests/             # Backend tests
│   └── requirements.txt   # Backend dependencies
│
└── README.md              # Project documentation
```

## Setup Instructions

### Frontend
```bash
cd fe
npm install
npm run dev
```

### Backend
```bash
cd be
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
``` 