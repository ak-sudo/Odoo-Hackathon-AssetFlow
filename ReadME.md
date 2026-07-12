# AssetFlow

**Enterprise Asset & Resource Management System**

AssetFlow is an intelligent enterprise platform designed to help
organizations track, assign, monitor, and optimize their assets and
resources from a centralized system.

The platform focuses on reducing unnecessary procurement by identifying
idle and underutilized assets and recommending intelligent resource
reallocation across departments.

## Project Overview

Large organizations often manage assets using spreadsheets, disconnected
systems, and manual records. This can lead to:

-   Poor asset visibility
-   Untracked or misplaced assets
-   Underutilized resources
-   Unnecessary procurement
-   Inefficient asset allocation
-   Difficulty tracking asset lifecycle and maintenance

AssetFlow provides a unified platform for managing the complete asset
lifecycle.

``` text
Asset Registration
        ↓
Department / Employee Assignment
        ↓
Utilization Tracking
        ↓
Asset Intelligence
        ↓
Reallocation Recommendation
        ↓
Procurement Optimization
        ↓
Maintenance / Retirement
```

## Core Features

-   Centralized asset registry
-   Employee and department management
-   Asset assignment and transfer tracking
-   Asset status and lifecycle management
-   Utilization tracking
-   Procurement request management
-   AI-based asset reallocation recommendations
-   Procurement optimization
-   Asset analytics dashboard
-   Predictive asset insights
-   Role-based access control

## Main USP

AssetFlow is not only an asset tracking platform.

Its core intelligence layer analyzes available and underutilized
resources before recommending new purchases.

### Example

A department requests **20 laptops**.

AssetFlow analyzes the organization's assets and finds:

``` text
8 idle laptops       → CSE Department
6 unused laptops     → HR Department
2 available laptops  → Finance Department
```

AssetFlow recommends:

``` text
Reallocate: 16 laptops
Purchase:    4 laptops
```

This allows organizations to reduce unnecessary procurement and improve
resource utilization.

## Technology Stack

### Frontend

-   React.js
-   Vite
-   Tailwind CSS
-   Lucide React
-   Axios

### Backend

-   Node.js
-   Express.js
-   MySQL
-   mysql2

### AI Service

-   Python
-   FastAPI
-   Scikit-learn / XGBoost

### Development Tools

-   Git
-   GitHub
-   Postman
-   VS Code

## Project Directory Structure

``` text
AssetFlow/
│
├── client/                         # React frontend
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/                 # Images, icons and static assets
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Application pages
│   │   ├── layouts/                # Dashboard and authentication layouts
│   │   ├── services/               # Frontend API services
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── context/                # React context providers
│   │   ├── utils/                  # Frontend utility functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/                         # Node.js and Express backend
│   ├── config/
│   │   └── db.js                   # MySQL database configuration
│   │
│   ├── controllers/                # Request and business logic
│   │   ├── authController.js
│   │   ├── assetController.js
│   │   ├── departmentController.js
│   │   ├── procurementController.js
│   │   └── transferController.js
│   │
│   ├── models/                     # Database access and queries
│   │   ├── userModel.js
│   │   ├── assetModel.js
│   │   └── departmentModel.js
│   │
│   ├── routes/                     # Express API routes
│   │   ├── authRoutes.js
│   │   ├── assetRoutes.js
│   │   ├── departmentRoutes.js
│   │   └── procurementRoutes.js
│   │
│   ├── middleware/                 # Authentication and error middleware
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── services/                   # External and internal services
│   │   └── aiService.js
│   │
│   ├── utils/                      # Backend helper functions
│   ├── app.js                      # Express application configuration
│   ├── server.js                   # Server entry point
│   ├── package.json
│   └── .env
│
├── ai-service/                     # AI intelligence service
│   ├── models/                     # Trained ML models
│   ├── training/                   # Model training scripts
│   ├── datasets/                   # Development datasets
│   ├── services/                   # AI business logic
│   ├── main.py                     # FastAPI entry point
│   └── requirements.txt
│
├── .gitignore
├── README.md
└── LICENSE
```

## System Architecture

``` text
┌─────────────────────┐
│    React Frontend   │
│  Vite + Tailwind    │
└──────────┬──────────┘
           │
           │ REST API
           ▼
┌─────────────────────┐
│ Node.js + Express   │
│    Backend API      │
└───────┬─────────┬───┘
        │         │
        │         │ HTTP
        ▼         ▼
┌─────────────┐  ┌─────────────────┐
│    MySQL    │  │ FastAPI AI      │
│  Database   │  │ Intelligence    │
└─────────────┘  └─────────────────┘
```

The React frontend communicates with the Express backend through REST
APIs.

The Express backend manages authentication, business logic, and MySQL
database operations.

For intelligent recommendations, the backend communicates with the
FastAPI AI service.

## Planned Database Entities

The initial database design includes:

-   `users`
-   `departments`
-   `assets`
-   `asset_assignments`
-   `asset_transfers`
-   `procurement_requests`
-   `maintenance_records`

## Getting Started

### 1. Clone the repository

``` bash
git clone <repository-url>
cd AssetFlow
```

### 2. Install frontend dependencies

``` bash
cd client
npm install
npm run dev
```

### 3. Install backend dependencies

``` bash
cd server
npm install
npm run dev
```

### 4. Configure backend environment variables

Create a `.env` file inside the `server` directory.

``` env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=assetflow
DB_PORT=3306

PORT=5000
```

Never commit the `.env` file to GitHub.

### 5. Create the MySQL database

``` sql
CREATE DATABASE assetflow;
```

### 6. Start the AI service

``` bash
cd ai-service
pip install -r requirements.txt
uvicorn main:app --reload
```

## Git Workflow

The project is developed collaboratively by a team of three.

Recommended branches:

``` text
main
│
├── frontend
├── backend
└── ai-engine
```

Developers should work on their assigned branches and create pull
requests before merging changes into `main`.

Example:

``` bash
git switch frontend
git pull origin frontend

git add .
git commit -m "feat: add responsive login page"
git push origin frontend
```

### Commit Convention

Use clear commit messages:

``` text
feat: add asset registration API
fix: resolve login validation issue
ui: improve dashboard responsiveness
refactor: restructure asset controller
docs: update project README
```

## Development Roadmap

### Phase 1

-   Authentication
-   Employee accounts
-   Department management
-   Asset registry
-   Asset assignment

### Phase 2

-   Asset transfer workflow
-   Utilization tracking
-   Procurement requests
-   Analytics dashboard

### Phase 3

-   AI utilization analysis
-   Asset reallocation engine
-   Procurement intelligence
-   Predictive asset insights

## Team

AssetFlow is being developed collaboratively by a three-member team
focusing on:

-   Frontend and UI/UX
-   Backend and database
-   AI and resource intelligence

## Project Status

**Currently under active development.**

The initial focus is on building the authentication system, asset
registry, backend architecture, and MySQL database integration.

## License

This project is intended for development, learning, and hackathon
purposes. Licensing details may be updated as the project evolves.

------------------------------------------------------------------------

**AssetFlow --- Track assets. Optimize resources. Reduce unnecessary
procurement.**
