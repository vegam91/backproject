# MusicApp Backend

Welcome to the backend repository for MusicApp, an application that allows registered users to manage their playlists, add and remove songs, change playlist names, and explore public playlists from other users. Additionally, an admin panel is provided for database management.

## Features

- **Playlist Management:**
  - Create new playlists.
  - Add songs to playlists.
  - Remove songs from playlists.
  - Change playlist names.
  - Delete playlists.

- **Explore Public Playlists:**
  - Get public playlists from other users.

- **Admin Panel:**
  - Add songs to the database.
  - Delete songs from the database.

## Technologies Used

- **Node.js and Express:** For server development and API creation.
- **MongoDB:** As the database to store information about playlists and songs.
- **JWT (JSON Web Tokens):** For user authentication and authorization.
- **Render:** Deployment platform used to host the application at [https://musciapp.onrender.com](https://musciapp.onrender.com).

## Installation



## API Endpoints

## List Routes

### 1. Create a new playlist
   - **Method:** POST
   - **Endpoint:** `/api/playlist/`
   - **Description:** Create a new playlist.

### 2. Add a song to a playlist
   - **Method:** PUT
   - **Endpoint:** `/api/playlist/:listId/song/:songId`
   - **Description:** Add a song to an existing playlist.

### 3. Delete a song from a playlist
   - **Method:** DELETE
   - **Endpoint:** `/api/playlist/:listId/song/:songId`
   - **Description:** Remove a song from a playlist.

### 4. Delete a playlist
   - **Method:** DELETE
   - **Endpoint:** `/api/playlist/:id`
   - **Description:** Delete a playlist.

### 5. Get all playlists
   - **Method:** GET
   - **Endpoint:** `/api/playlist/`
   - **Description:** Get all playlists.

## Song Routes

### 1. Update a song
   - **Method:** PUT
   - **Endpoint:** `/api/song/:id`
   - **Description:** Update details of an existing song.

### 2. Add a new song
   - **Method:** POST
   - **Endpoint:** `/api/song/`
   - **Description:** Add a new song to the database.

### 3. Delete a song
   - **Method:** DELETE
   - **Endpoint:** `/api/song/:id`
   - **Description:** Delete a song from the database.

### 4. Get songs by author
   - **Method:** GET
   - **Endpoint:** `/api/song/`
   - **Description:** Get songs filtered by author.

## User Routes

### 1. User signup
   - **Method:** POST
   - **Endpoint:** `/api/users/signup`
   - **Description:** Register a new user in the application.

### 2. User signin
   - **Method:** POST
   - **Endpoint:** `/api/users/signin`
   - **Description:** Allow a user to sign in.

### 3. Get user profile
   - **Method:** GET
   - **Endpoint:** `/api/users/profile/:id`
   - **Description:** Get the profile of a user.
## Contributions

Contributions are welcome! If you find any issues or have an improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
