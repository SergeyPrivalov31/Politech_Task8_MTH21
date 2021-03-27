import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.js";
import style from "./App.css";
const App = () => {
	return (
		<div className={style.app}>
			<Header />
		</div>
	);
}

export default App;