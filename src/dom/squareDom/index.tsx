import React, { FC } from "react";
import { IPoint } from "@/core/types/square";
import { Square } from "@/dom/config";
import "./index.scss";

const squareDom: FC<IPoint> = function (props) {
	const { x, y } = props;

	return (
		<div
			className="squareDom"
			style={{
				left: x * Square.width + "px",
				top: y * Square.width + "px",
				width: Square.width + "px",
				height: Square.width + "px",
			}}
		></div>
	);
};
export default squareDom;
