import React, { FC, useEffect } from "react";
import ContainerDom from "@/dom/containerDom";
import Container from "@/core/container";
import "./App.scss";

const App: FC = function (props) {
	return (
		<div className="app">
			<ContainerDom pointsArr={Container.get()} />
		</div>
	);
};

export default App;
