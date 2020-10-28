import { Shape } from "@/core/types/shape";


function controller(shape: Shape, onChange: (e: Shape) => void) {
    const keyDownFn = (e: KeyboardEvent) => {
        console.log('点击')
        let newShape = [];
        const { key } = e;
        switch (key) {
            case "ArrowUp":
                newShape = shape.map(item => {
                    return {
                        x: item.x,
                        y: item.y - 1
                    }
                })
                onChange(newShape as Shape)

                break;
            case "ArrowDown":
                newShape = shape.map(item => {
                    return {
                        x: item.x,
                        y: item.y + 1
                    }
                })
                onChange(newShape as Shape)

                break;

            case "ArrowLeft":
                newShape = shape.map(item => {
                    return {
                        x: item.x - 1,
                        y: item.y,
                    }
                })
                onChange(newShape as Shape)
                break;

            case "ArrowRight":
                newShape = shape.map(item => {
                    return {
                        x: item.x + 1,
                        y: item.y,
                    }
                })
                onChange(newShape as Shape)
                break;
        }
    }

    document.addEventListener('keydown', keyDownFn, true)
    return () => document.removeEventListener('keydown', keyDownFn, true)
}



export default controller;