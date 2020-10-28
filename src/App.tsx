import React, { FC } from "react";
import Square from "@/core/square";
import SquareDom from "@/dom/squareDom";
import "./App.scss";

const App: FC = function (props) {
	const point = Square({ x: 10, y: 20 });
	return (
		<div className="panel">
			<SquareDom x={point.x} y={point.y} />
		</div>
	);
};

export default App;
