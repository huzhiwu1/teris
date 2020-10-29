import Container from "@/core/container";
import { Shape } from "@/core/types/shape";
import { Panel } from "@/core/types/panel";

export default class Rule {
    static canImove(shape: Shape) {
        let result: boolean = true;
        shape.map(item => {
            if (item.x < 0 || item.x > Panel.width) {
                result = false;
            }
            if (Container.getOne(item.y, item.x) === 1) {
                result = false;
            }
        })
        return result;
    }
}