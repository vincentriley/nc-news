import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage";
import ArticlesPage from "./components/ArticlesPage";
import UsersPage from "./components/UsersPage";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import FilteredTopics from "./components/FilteredTopics";
import SingleArticlePage from "./components/SingleArticlePage";

function App() {
  
	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/login" element={<LoginPage />} />
		  <Route path="/topics/:topic_slug" element={<FilteredTopics />} />
		  <Route path="/articles/:article_id" element={<SingleArticlePage />} />
        </Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
