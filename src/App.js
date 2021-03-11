import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.js";
import style from "./App.css";
const App = (props) => {
	return (
		<div className={style.App}>
			<Header />
		</div>
	);
}

export default App;