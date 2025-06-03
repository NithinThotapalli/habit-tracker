📊 Habit Tracker
A clean, minimalistic Habit Tracker built using HTML, CSS, JavaScript, Node.js, and MongoDB. Track your daily habits efficiently and visually, helping you stay consistent and accountable.


🚀 Features
✅ Add & manage daily habits

📅 Visualize progress across days

🟩 Toggle habits as completed or not

🧠 Backend built with Express.js & MongoDB

📦 RESTful routes and modular file structure

🛠️ Tech Stack
Frontend	Backend	Database	Tools
HTML, CSS, JS	Node.js, Express	MongoDB	EJS, Mongoose

📸 Demo
Live Demo – https://nithinthotapalli.github.io/habit-tracker/

📂 Folder Structure
bash
Copy
Edit
habit-tracker/
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── config/         # MongoDB configuration
├── controllers/    # Handles request logic
├── models/         # Mongoose schemas
├── routes/         # Express routes
├── views/          # EJS templates
│
├── index.js        # Main server file
└── package.json
⚙️ Setup Instructions
Clone the Repository

bash
Copy
Edit
git clone https://github.com/NithinThotapalli/habit-tracker.git
cd habit-tracker
Install Dependencies

bash
Copy
Edit
npm install
Setup MongoDB

Make sure MongoDB is installed and running.

(Optional) Use MongoDB Atlas and set connection string in .env.

Start the App

bash
Copy
Edit
npm start
Visit in Browser

arduino
Copy
Edit
http://localhost:3000
🧩 Routes Overview
Method	Route	Description
GET	/	Show home/habit list
POST	/create-habit	Add a new habit
POST	/delete-habit	Remove a habit
GET	/habit/:id	View single habit status
POST	/toggle-status	Toggle habit for a date

🧑‍💻 Author
Nithin Thotapalli
GitHub

🙌 Contributions
Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a PR.

📄 License
This project is licensed under the MIT License.
