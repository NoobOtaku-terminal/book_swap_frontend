📚 BookSwap Frontend
BookSwap is a platform designed to connect book owners and buyers directly, promoting sustainability and easy book exchanges. This repository contains the frontend codebase, built using modern web technologies for a seamless user experience.

🚀 Features
Dynamic UI: Built with React.js for a responsive and interactive interface
User Authentication: Secure login and signup functionalities
Book Listings: Users can list books for swapping or selling
Real-time Updates: Smooth interactions using React state management
Backend Integration: Easily connect with the backend API for full functionality
Upcoming Features: Payment gateway integration and enhanced security
🛠️ Tech Stack
Frontend: React.js, HTML5, CSS, Tailwind CSS, Bootstrap
Backend (Find it here!): BookSwap Backend
Built with Node.js, Express.js, MongoDB (via Mongoose.js)
📂 Folder Structure

📦 bookswap-frontend<br>
 ┣ 📂 public<br>
 ┃ ┗ 📜 index.html<br>
 ┣ 📂 src<br>
 ┃ ┣ 📂 assets<br>
 ┃ ┃ ┣ 📜 book.jpeg<br>
 ┃ ┃ ┣ 📜 data.json<br>
 ┃ ┃ ┗ 📜 image.png<br>
 ┃ ┣ 📂 components<br>
 ┃ ┃ ┣ 📜 book.js<br>
 ┃ ┃ ┣ 📜 categories.js<br>
 ┃ ┃ ┣ 📜 drawerMyAccount.js<br>
 ┃ ┃ ┣ 📜 footer.js<br>
 ┃ ┃ ┣ 📜 header.js<br>
 ┃ ┃ ┣ 📜 headerMyAccount.js<br>
 ┃ ┃ ┗ 📜 slide.js<br>
 ┃ ┣ 📂 components_css<br>
 ┃ ┃ ┣ 📜 bookDetail.css<br>
 ┃ ┃ ┣ 📜 books.css<br>
 ┃ ┃ ┣ 📜 category.css<br>
 ┃ ┃ ┣ 📜 contactus.css<br>
 ┃ ┃ ┣ 📜 drawerMyAccount.css<br>
 ┃ ┃ ┣ 📜 footer.css<br>
 ┃ ┃ ┣ 📜 headerMyAccount.css<br>
 ┃ ┃ ┣ 📜 login.module.css<br>
 ┃ ┃ ┣ 📜 search.css<br>
 ┃ ┃ ┣ 📜 signup.css<br>
 ┃ ┃ ┗ 📜 slide.css<br>
 ┃ ┣ 📂 pages<br>
 ┃ ┃ ┣ 📜 bookDetail.js<br>
 ┃ ┃ ┣ 📜 category.js<br>
 ┃ ┃ ┣ 📜 contactus.js<br>
 ┃ ┃ ┣ 📜 landing.js<br>
 ┃ ┃ ┣ 📜 login.js<br>
 ┃ ┃ ┣ 📜 myaccount.js<br>
 ┃ ┃ ┗ 📜 signUp.js<br>
 ┃ ┣ 📂 services<br>
 ┃ ┃ ┗ 📜 api.js<br>
 ┃ ┣ 📜 App.css<br>
 ┃ ┣ 📜 App.js<br>
 ┃ ┣ 📜 index.css<br>
 ┃ ┣ 📜 index.js<br>
 ┃ ┗ 📜 reportWebVitals.js<br>
 ┣ 📜 package.json<br>
 ┣ 📜 README.md<br>
 ┗ 📜 .gitignore<br>
🏗️ Installation & Setup
To run this project locally:

Clone the repository:
git clone https://github.com/NoobOtaku-terminal/bookswap-frontend.git
cd bookswap-frontend
Install dependencies:
npm install
Start the development server:
npm start
Open http://localhost:3000/ in your browser.
🔗 Backend Setup & Integration
To enable full functionality, connect the frontend to the backend:

Clone and set up the backend:
git clone https://github.com/NoobOtaku-terminal/bookswap-backend.git
cd bookswap-backend
npm install
npm start
Ensure MongoDB is running.
Update the frontend API URLs in src/services/api.js to match the backend server.
🌍 Deployment
The frontend is currently hosted at: BookSwap Live

🏆 Contributors
Dheeraj Dhakad (GitHub)
Rohan Regar (Github)
