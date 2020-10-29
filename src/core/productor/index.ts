import React, { useState, useEffect, useRef } from "react"
import Shape from "@/core/shape"; 4
import Controller from "@/core/controller"
import Container from "@/core/container";

import { Shapes, Shape as ShapeType, } from "@/core/types/shape";
import Rule from '../rule';

const Productor = function () {

    const [shape, setShape] = useState<ShapeType>(Shape({ shape: Shapes[0], centerPoint: { x: 4, y: 0 } }))

    const removeEvent = useRef<() => void>()
    removeEvent.current && removeEvent.current()
    removeEvent.current = Controller(shape, setShape)
    const createShape = () => {
        let shapeIndex = Math.floor(Math.random() * (Shapes.length - 1));
        let info = Shape({ shape: Shapes[shapeIndex], centerPoint: { x: 4, y: 0 } });

        setShape(info)
    }
    useEffect(() => {
        if (Rule.isTouch(shape) && !Rule.isTouchTop()) {
            shape.forEach(item => {
                Container.set(item.y, item.x, 1)
            })
            createShape()

        }
    }, [shape])

    // useEffect(() => {
    //     createShape()
    // }, [])
    // useEffect(() => {
    //     removeEvent.current = Controller(shape, setShape)
    //     return removeEvent.current
    // })

    return shape;
}

export default Productor