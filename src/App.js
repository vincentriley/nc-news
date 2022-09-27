import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage";
import ArticlesPage from "./components/ArticlesPage";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import FilteredTopics from "./components/FilteredTopics";
import SingleArticlePage from "./components/SingleArticlePage";
import ErrorPage from "./components/ErrorPage";
import { UserContext } from "./contexts/UserLoggedIn";
import { useState } from "react";

function App() {
	const [user, setUser] = useState("")
  
	return (
		<UserContext.Provider value={{user, setUser}}>
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/login" element={<LoginPage />} />
		  <Route path="/topics/:topic_slug" element={<FilteredTopics />} />
		  <Route path="/articles/:article_id" element={<SingleArticlePage />} />
		  <Route path="/login" element={<LoginPage />} />
		  <Route path="*" element={<ErrorPage />}  />
         </Routes>
			</div>
		</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
