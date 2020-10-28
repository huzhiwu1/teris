import { Shape } from "@/core/types/shape";
import { IPoint } from "@/core/types/shape";

interface Props {
    shape: Shape,
    centerPoint: IPoint
}
function shape(props: Props): Shape {
    const { shape, centerPoint } = props;

    let newShape = shape.map(item => {
        return {
            x: item.x + centerPoint.x,
            y: item.y + centerPoint.y
        }

    })
    return newShape as Shape;

}
export default shape