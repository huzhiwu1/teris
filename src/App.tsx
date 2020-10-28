import React, { FC, useState, useEffect } from "react";
import Shape from "@/core/shape";
import controller from "@/core/controller";
import ShapeDom from "@/dom/shapeDom";
import { Shapes, Shape as IShape } from "@/core/types/shape";
import "./App.scss";

const App: FC = function (props) {
	const centerPoint = { x: 10, y: 10 };

	let shape = Shapes[5];

	let shapeInfo = Shape({ shape, centerPoint });
	const [e, setE] = useState<IShape>(shapeInfo);
	useEffect(() => {
		let removeEvent = controller(e, setE);
		return removeEvent;
	});

	return <ShapeDom shape={e} />;
};

export default App;
