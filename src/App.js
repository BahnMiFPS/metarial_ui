import React, { useContext } from "react"
import SearchAppBar from "./components/SearchAppBar"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import DetailPage from "./pages/DetailPage"
import SignInPage from "./pages/SignInPage"
import AuthContext from "./auth/AuthContext"

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function App() {
	const auth = useContext(AuthContext)
	console.log("from app.js", auth)
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<SearchAppBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="signInPage" element={<SignInPage />} />
				<Route path="pageDetail/:id" element={<DetailPage />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
