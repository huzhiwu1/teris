import React, { FC, useState, useEffect } from "react";
import ContainerDom from "@/dom/containerDom";
import ShapeDom from "@/dom/shapeDom";
import Container, { NumArrLength10 } from "@/core/container";
import Productor from "@/core/productor";
import { Shape, IPoint } from "@/core/types/shape";

import "./App.scss";

const App: FC = function (props) {
	const [shape, setShape] = useState<Shape>(Productor.getShape());
	const [pointsArr, setPointsArr] = useState<NumArrLength10>(Container.get());

	Productor.onChange = setShape;

	return (
		<div className="app">
			<ContainerDom pointsArr={pointsArr}>
				<ShapeDom shape={shape} />
			</ContainerDom>
		</div>
	);
};

export default App;
