# 🚀 MERN Portfolio - Revanth Baspally

A modern, full-stack portfolio website built with the **MERN Stack** (MongoDB, Express, React, Node.js) featuring professional styling, certifications showcase, and contact functionality.

## 📋 Features

✨ **Professional Design** - Modern UI with gradient backgrounds and smooth animations  
✨ **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile  
✨ **Full Stack Architecture** - Complete separation of concerns with frontend and backend  
✨ **Dynamic Content** - MongoDB integration for skills, projects, and certifications  
✨ **Certifications Display** - Beautiful certification cards with categories and details  
✨ **Contact Form** - Functional contact form with validation and success notification  
✨ **Navigation** - Sticky navbar with emoji icons and hover effects  

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **CSS3** - Professional styling with gradients and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

## 📁 Project Structure

```
myportfolio_final/
├── client/                          # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Certifications.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server/                          # Node.js/Express Backend
│   ├── models/
│   │   ├── Skill.js
│   │   ├── Project.js
│   │   ├── Message.js
│   │   └── Certification.js
│   ├── controllers/
│   │   ├── skillController.js
│   │   ├── projectController.js
│   │   ├── contactController.js
│   │   └── certificationController.js
│   ├── routes/
│   │   ├── skillRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── contactRoutes.js
│   │   └── certificationRoutes.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── package.json                     # Root scripts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/revanthbaspally6-cell/Revanth-Portfolio.git
cd Revanth-Portfolio
```

2. **Install root dependencies**
```bash
npm install
```

3. **Install server dependencies**
```bash
cd server
npm install
cd ..
```

4. **Install client dependencies**
```bash
cd client
npm install
cd ..
```

### Configuration

1. **Ensure MongoDB is running locally** on `mongodb://127.0.0.1:27017/portfolio`
   - Or update the connection string in `server/server.js`

2. **Update the proxy** in `client/package.json` if backend runs on different port:
```json
"proxy": "http://localhost:5000"
```

### Running the Project

#### Option 1: Run Server and Client Separately

**Terminal 1 - Start Backend Server**
```bash
cd server
npm start
```
Server runs on: `http://localhost:5000`

**Terminal 2 - Start Frontend**
```bash
cd client
npm start
```
Frontend runs on: `http://localhost:3001`

#### Option 2: Run Both Concurrently
```bash
npm run dev
```
(From root directory - requires `concurrently` package)

## 📚 API Endpoints

### Skills
- `GET /api/skills` - Fetch all skills

### Projects
- `GET /api/projects` - Fetch all projects

### Certifications
- `GET /api/certifications` - Fetch all certifications

### Contact
- `POST /api/contact` - Submit contact form
  - Required fields: `name`, `email`, `mobile` (10 digits), `message`

## 🎨 Design Features

- **Gradient Background** - Purple to blue gradient for modern look
- **Responsive Cards** - Hover effects and smooth transitions
- **Professional Typography** - Clean, readable fonts
- **Mobile Optimized** - Works on all screen sizes
- **Accessibility** - Semantic HTML and proper ARIA labels

## 📸 Pages

1. **Home** - Hero section with introduction
2. **About** - Career objective and education
3. **Skills** - Display programming languages and technologies
4. **Projects** - Portfolio projects showcase
5. **Certifications** - Professional certifications and achievements
6. **Contact** - Contact form with validation

## 📝 Sample Data

### Default Skills
- MongoDB, Express.js, React, Node.js, JavaScript, HTML & CSS, REST APIs, Git & GitHub

### Default Projects
- MERN Portfolio
- E-Commerce Platform
- Task Management App
- Weather Dashboard

### Certifications
- Tech Savishkaar 4.0 - Participation
- Turing Cup 2K26 - Coding Contest
- Intro to Generative AI - IBM SkillsBuild
- CCNA: Intro to Networks - Cisco Networking Academy

## 🗄️ Adding Data to Database

Use MongoDB Compass or mongosh to add data:

```javascript
// Add Skills
db.skills.insertMany([
  { name: "Python" },
  { name: "Java" },
  { name: "AWS" }
])

// Add Projects
db.projects.insertMany([
  { 
    title: "Project Title",
    description: "Project Description"
  }
])

// Add Certifications
db.certifications.insertMany([
  {
    title: "Cert Title",
    issuer: "Organization",
    date: "2026",
    category: "Professional",
    description: "Description"
  }
])
```

## 🎯 Future Enhancements

- [ ] Add authentication for admin panel
- [ ] Upload certificate images/PDFs
- [ ] Add testimonials section
- [ ] Implement dark mode
- [ ] Add blog section
- [ ] Deploy to cloud (Vercel + Heroku)
- [ ] Add search functionality

## 📧 Contact

- **Email:** revanthbaspally6@gmail.com
- **Phone:** +91 9346761704
- **Location:** Hyderabad, India
- **GitHub:** [revanthbaspally6-cell](https://github.com/revanthbaspally6-cell)
- **LinkedIn:** [Revanth Baspally](https://www.linkedin.com/in/revanth-baspally-974033294)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Revanth Baspally | 2026**
