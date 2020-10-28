import { IPoint } from "@/core/types/square";
interface Props {
    x: number,
    y: number,
}
function square(props: Props): IPoint {
    return {
        x: props.x,
        y: props.y,
    }
}

export default square;