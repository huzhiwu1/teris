import React, { FC } from "react";
import SquareDom from "../squareDom";
import { Shape } from "@/core/types/shape";

interface Props {
	shape: Shape;
}
const shapeDom: FC<Props> = function (props) {
	const { shape } = props;

	return (
		<>
			{shape.map((item, index) => {
				return <SquareDom key={index} x={item.x} y={item.y} />;
			})}
		</>
	);
};

export default shapeDom;
