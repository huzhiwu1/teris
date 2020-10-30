import Container from "@/core/container";
import { Shape, IPoint } from "@/core/types/shape";
import { Panel } from "@/core/types/panel";

export default class Rule {
    static canImove(shape: Shape, centerPoint: IPoint) {

        let result: boolean = true;
        let newShape = shape.map(item => ({
            x: item.x + centerPoint.x,
            y: item.y + centerPoint.y,
        }))
        newShape.map(item => {

            if (item.x < 0 || item.x >= Panel.width) {
                result = false;
            }
            if (item.y < 0 || item.y >= Panel.height) {
                result = false;
            }
            if (Container.getOne(item.y, item.x) === 1) {
                result = false;
            }
        })
        return result;
    }

    // 是否已经触碰到其他方块,或者触底了
    static isTouch(shape: Shape, centerPoint: IPoint) {
        let result: boolean = false;
        let newShape = shape.map(item => ({
            x: item.x + centerPoint.x,
            y: item.y + centerPoint.y
        }))
        newShape.map(item => {
            if (Container.getOne(item.y + 1, item.x) === 1) {
                result = true;
            }

            if (item.y >= Panel.height - 1) {

                result = true;
            }
        })

        return result;
    }

    // 到顶了
    static isTouchTop() {
        let result: boolean = false
        Container.get()[0].forEach(item => {
            if (item === 1) {
                result = true
            }
        })
        return result;
    }
}