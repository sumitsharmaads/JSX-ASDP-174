import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const JsxFile =() => {
	return (
		<div>
			<h1> I am in JSX </h1>
		</div>
	);
};

export default JsxFile;

ReactDOM.render(<JsxFile />, document.getElementById("root"));