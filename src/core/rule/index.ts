import Container from "@/core/container";
import { Shape } from "@/core/types/shape";
import { Panel } from "@/core/types/panel";

export default class Rule {
    static canImove(shape: Shape) {

        let result: boolean = true;
        shape.map(item => {
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

    // 是否已经触碰到其他方块
    static isTouch(shape: Shape) {
        let result: boolean = false;
        shape.map(item => {
            if (Container.getOne(item.y + 1, item.x) === 1) {
                result = true;
            }
        })

        return result;
    }
}