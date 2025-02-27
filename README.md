## Project Setup Guide

### 1. Install Dependencies
You can install all required dependencies at once or individually.

#### Install all at once:
```sh
npm install express mongoose bcryptjs jsonwebtoken cors dotenv axios react-router-dom prop-types
```

#### Or install individually:
```sh
npm install express
npm install mongoose
npm install bcryptjs
npm install jsonwebtoken
npm install cors
npm install dotenv
npm install axios
npm install react-router-dom
npm install prop-types
```

---

### 2. Create `.env` File
Create a `.env` file in the root of your project and add the following environment variables:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET="your secret key"
VITE_API_URL=http://localhost:5000/api
```

Replace `<username>` and `<password>` with your actual MongoDB credentials.

---

### 3. Run the Project
Navigate to the appropriate directory and start the frontend and backend servers.

#### Start Backend:
```sh
cd Backend
node server.js
```

#### Start Frontend:
```sh
cd Frontend
npm run dev
```

