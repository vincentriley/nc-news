import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage";
import ArticlesPage from "./components/ArticlesPage";
import UsersPage from "./components/UsersPage";
import LoginPage from "./components/LoginPage";

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<h1>test</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
