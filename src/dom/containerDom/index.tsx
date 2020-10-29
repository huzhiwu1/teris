import React, { FC } from "react";
import { NumArrLength10 } from "@/core/container";
import SquareDom from "@/dom/squareDom";
import { Panel } from "@/core/types/panel";
import { Square } from "@/dom/config";

import "./index.scss";
interface Props {
	pointsArr: NumArrLength10;
}
const containerDom: FC<Props> = function (props) {
	const { pointsArr } = props;

	return (
		<div
			className="container"
			style={{
				width: Panel.width * Square.width + "px",
				height: Panel.height * Square.width + "px",
			}}
		>
			{pointsArr.map((row, rowIndex) => {
				return (
					<div key={rowIndex} className="row">
						{row.map((col, colIndex) => {
							if (col === 1) {
								return (
									<SquareDom
										key={colIndex}
										x={colIndex}
										y={rowIndex}
									/>
								);
							}
						})}
					</div>
				);
			})}
			{props.children}
		</div>
	);
};

export default containerDom;
