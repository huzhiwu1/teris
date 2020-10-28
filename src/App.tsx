import React, { FC } from "react";
import Shape from "@/core/shape";
import ShapeDom from "@/dom/shapeDom";
import { Shapes } from "@/core/types/shape";
import "./App.scss";

const App: FC = function (props) {
	const centerPoint = { x: 10, y: 10 };
	let shape = Shapes[5];

	let shapeInfo = Shape({ shape, centerPoint });
	return <ShapeDom shape={shapeInfo} />;
};

export default App;
