# Project Name

This project provides an API server built using Node.js, Express, and MongoDB, enabling functionalities for user authentication, resource management, and scheduling.

## Features

- **User Authentication**: Register and login endpoints for users.
- **Resource Management**: Upload and fetch resources.
- **Scheduling**: Create and retrieve schedules.
- **File Uploads**: Handle file uploads with Multer.
- **CORS**: Configured for cross-origin resource sharing.
- **Environment Variables**: Use `dotenv` to manage configuration.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd <project-directory>
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=<Your MongoDB URI>
PORT=<Server Port>
```

## Running the Server

Start the server in development mode:

```
npm run dev
```

The server will be accessible at `http://localhost:<PORT>`.

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login an existing user.

### Resource Management

- **POST** `/api/teacher/upload`: Upload a resource file.
- **GET** `/api/student/resources`: Fetch all resources.

### Scheduling

- **POST** `/api/teacher/schedules`: Create a schedule.
- **GET** `/api/student/schedules`: Fetch all schedules.

## File Uploads

Files are uploaded to the `uploads/` directory. Ensure this directory exists at the project root.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **File Storage**: Multer
- **Authentication**: JWT (JSON Web Tokens)

## License

This project is licensed under the MIT License.
