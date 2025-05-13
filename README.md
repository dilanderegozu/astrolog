# Astrolog 

## Overview
Astrolog API provides services for managing zodiac signs, user authentication, and blog posts. It supports daily, weekly, monthly, and yearly horoscopes, zodiac compatibility, and user actions like registration, login, password change, and profile update.

## Features
- **Zodiac**: Manage zodiac signs, horoscopes, and compatibility.
- **User**: Register, login, change password, and update user info.
- **Blog**: Create, update, delete, and fetch blog posts.
- **Validation**: Validations for zodiac, user, and blog data.

## Setup

### Installation
1. Clone the repo:
    ```bash
    git clone https://github.com/dilanderegozu/astrolog.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up `.env` file with:
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/astrolog
    ```

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

- **Zodiac**:
  - `POST /zodiac/create` - Create zodiac
  - `GET /zodiac/all` - Get all zodiacs
  - `GET /zodiac/:id` - Get zodiac by ID
  - `PUT /zodiac/update/:id` - Update zodiac
  - `GET /zodiac/compatibility/:zodiac1/:zodiac2` - Zodiac compatibility

- **User**:
  - `POST /user/register` - Register a user
  - `POST /user/login` - Login
  - `PUT /user/update/:id` - Update user info
  - `PUT /user/change-password/:id` - Change password

- **Blog**:
  - `POST /blog/create` - Create blog post
  - `GET /blog/all` - Get all blog posts
  - `GET /blog/:id` - Get blog by ID
  - `PUT /blog/update/:id` - Update blog post
  - `DELETE /blog/delete/:id` - Delete blog post

## Middleware
- **Logger**: Logs request details.
- **Auth**: JWT authentication for protected routes.

## Sample Data
- 12 zodiac signs (Aries, Taurus, etc.)
- At least 4 users with profile and password change functionality.
