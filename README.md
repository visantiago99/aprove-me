# Bankme Receivables Challenge

# Accomplished levels

### Back-end

- [x] **Level 1 - Validation**
- [x] **Level 2 - Persistency**
- [x] **Level 4 - Authentication**
- [x] **Level 5 - Permissions Management**

### Front-end

- [x] **Level 1 - Register**
- [x] **Level 2 - Connecting to the API**
- [x] **Level 3 - Listing**
- [x] **Level 4 - Authentication**
- [x] **Level 5 - Tests**

## Backend

# The backend of this project is built with NestJS, utilizing Prisma as the ORM and SQLite as the database. The authentication system uses JWT for secure user login, with token expiration set to 1 minute. All routes are protected, ensuring access only after a valid login.

# Getting Started with Backend

Navigate to the backend folder.

Install dependencies:

```sh
npm install
```

Start the server:

```sh
npm run start
```

The backend will be running on port 3001.

# Environment Variables
Ensure your .env file contains the following configuration:

```sh
JWT_SECRET=f3d9f5d8b6a544b5b149fe6d3d739b05fa27ec5a02b763d8b4a9738a8ee4c928

DATABASE_URL="file:./dev.db"
```

## Frontend

The frontend is built with Next.js, Tailwind CSS, and Shadcn for UI components. It includes form validation using Zod and React Hook Form.

# Getting Started with Frontend

Navigate to the frontend folder.

Install dependencies:
```sh
npm install
```

Start the development server:

```sh
npm run dev
```

The frontend will be running on port 3000.

# Authentication

You can log in using the following credentials:

```sh
Username: aprovame
Password: aprovame
```

## Technologies Used

Backend: NestJS, Prisma ORM, SQLite

Frontend: Next.js, Tailwind CSS, Shadcn

Form Validation: Zod, React Hook Form

Authentication: JWT with 1-minute expiration
