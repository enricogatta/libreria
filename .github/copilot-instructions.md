# AI Coding Guidelines for Libreria Project

## Architecture Overview
This is a full-stack web application for library management ("libreria" means library in Spanish/Italian).

- **Backend**: Flask-based REST API in `back-end/` directory
- **Frontend**: React application in `front-end/` directory using Vite
- **Communication**: CORS-enabled for frontend-backend integration

## Technology Stack
- **Backend**: Python 3.12+, Flask, flask-cors, faker (for test data generation)
- **Frontend**: React 19, Vite, ESLint with custom rules
- **Package Management**: uv for Python dependencies, npm for Node.js

## Project Structure
```
back-end/          # Flask API server
front-end/         # React client application
.github/           # GitHub workflows and AI instructions
```

## Development Workflows

### Backend Setup
```bash
cd back-end
uv sync  # Install dependencies
uv run python main.py  # Run development server
```

### Frontend Setup
```bash
cd front-end
npm install
npm run dev  # Start Vite dev server
npm run build  # Production build
npm run lint  # ESLint check
```

## Coding Conventions

### ESLint Rules
- Unused variables starting with uppercase letters or underscores are allowed (e.g., `Component`, `_privateVar`)
- Follow React hooks and refresh plugin recommendations

### Import Patterns
- Backend: Standard Python imports
- Frontend: ES6 modules with React imports

### API Design
- Use Flask routes for REST endpoints
- Enable CORS for frontend communication
- Consider faker for generating mock library data (books, users, etc.)

## Key Files
- `back-end/main.py`: Entry point for Flask app
- `front-end/src/App.jsx`: Main React component
- `front-end/package.json`: Frontend dependencies and scripts
- `back-end/pyproject.toml`: Backend dependencies and config

## Common Patterns
- Separate concerns between backend API logic and frontend UI
- Use faker in backend for seeding test data related to library items
- CORS headers configured for local development (adjust for production)

Focus on building library management features: book catalog, user management, borrowing system, etc.