import React, { useRef, useEffect } from "react"
import { Shape, IPoint } from "@/core/types/shape";
import Rule from "@/core/rule";


function controller(shape: Shape, centerPoint: IPoint, onChange: (e: IPoint) => void) {



    const keyDownFn = (e: KeyboardEvent) => {
        let newPoint: IPoint = { ...centerPoint };
        const { key } = e;

        switch (key) {
            case "ArrowUp":
                newPoint = {
                    x: centerPoint.x,
                    y: centerPoint.y - 1
                }

                break;
            case "ArrowDown":
                newPoint = {
                    x: centerPoint.x,
                    y: centerPoint.y + 1
                }


                break;

            case "ArrowLeft":
                newPoint = {
                    x: centerPoint.x - 1,
                    y: centerPoint.y
                }

                break;

            case "ArrowRight":
                newPoint = {
                    x: centerPoint.x + 1,
                    y: centerPoint.y
                }

                break;
        }


        if (Rule.canImove(shape, newPoint) && !Rule.isTouchTop()) {
            onChange(newPoint)
        }

    }





    document.addEventListener('keydown', keyDownFn, true)
    return () => document.removeEventListener('keydown', keyDownFn, true)
}



export default controller;