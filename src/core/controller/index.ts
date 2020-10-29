import { Shape } from "@/core/types/shape";
import Rule from "@/core/rule";


function controller(shape: Shape, onChange: (e: Shape) => void) {


    const keyDownFn = (e: KeyboardEvent) => {
        let newShape: Shape | undefined = undefined;
        const { key } = e;
        switch (key) {
            case "ArrowUp":
                newShape = shape.map(item => {
                    return {
                        x: item.x,
                        y: item.y - 1
                    }
                }) as Shape



                break;
            case "ArrowDown":
                newShape = shape.map(item => {
                    return {
                        x: item.x,
                        y: item.y + 1
                    }
                }) as Shape


                break;

            case "ArrowLeft":
                newShape = shape.map(item => {
                    return {
                        x: item.x - 1,
                        y: item.y,
                    }
                }) as Shape

                break;

            case "ArrowRight":
                newShape = shape.map(item => {
                    return {
                        x: item.x + 1,
                        y: item.y,
                    }
                }) as Shape

                break;
        }
        if (newShape && Rule.canImove(newShape as Shape)) {
            onChange(newShape as Shape)
        }
    }



    document.addEventListener('keydown', keyDownFn, true)
    return () => document.removeEventListener('keydown', keyDownFn, true)
}



export default controller;