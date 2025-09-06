# Live Demo Link: https://hamza-omran.github.io/Movies-Search-Website-Using-React/
<img width="1780" height="849" alt="image" src="https://github.com/user-attachments/assets/5e396c81-0e72-4280-8cf7-cd41743d0871" />



# Movies Search Website Using React

A simple movie search web app built with React and Vite, using the OMDb API. Users can search for movies, view details, and save favorites (persisted in localStorage).

## Features
- Search movies by title
- View movie details
- Add/remove favorites
- Favorites persist across reloads
- Responsive design

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)

### Installation
1. Clone the repository:
	 ```sh
	 git clone https://github.com/Hamza-Omran/Movies-Search-Website-Using-React.git
	 cd Movies-Search-Website-Using-React
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 ```
3. Add your OMDb API key to `apiKey.env` (or use the default provided).

### Running Locally
```sh
npm run dev
```
Open your browser at `http://localhost:5173` (or the port shown in the terminal).

### Building for Production
```sh
npm run build
```

### Deploying
You can deploy the `dist` folder to any static host (e.g., GitHub Pages, Netlify).

## Project Structure
```
apiKey.env
src/
	components/
		MovieCard/
		MovieList/
		Navbar/
		SearchBar/
	pages/
		FavoritesProvider.jsx
		Home.jsx
		MovieDetails.jsx
	services/
		api.js
		config.js
public/
	vite.svg
index.html
vite.config.js
```

## API
- Uses [OMDb API](https://www.omdbapi.com/) for movie data.

## License
MIT
