import React, { FC, useState, useEffect,useRef } from "react";
import ContainerDom from "@/dom/containerDom";
import ShapeDom from "@/dom/shapeDom";
import Container, { NumArrLength10 } from "@/core/container";
import Productor from "@/core/productor";



import "./App.scss";


const App: FC = function (props) {

	const [pointsArr, setPointsArr] = useState<NumArrLength10>(Container.get());
    const shape = Productor();
   



	return (
		<div className="app">
			<ContainerDom pointsArr={pointsArr}>
				<ShapeDom shape={shape } />
			</ContainerDom>
		</div>
	);
};

export default App;
