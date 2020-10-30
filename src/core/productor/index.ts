import React, { useState, useEffect, useRef, useMemo } from "react"

import Controller from "@/core/controller"
import Container from "@/core/container";

import { Shapes, Shape as ShapeType, IPoint, } from "@/core/types/shape";

import Rule from '../rule';

const Productor = function () {

    let start: number = new Date().getTime()
    let id = useRef<number>()

    const [centerPoint, setCenterPoint] = useState<IPoint>({ x: 4, y: 0 })
    const [shape, setShape] = useState<ShapeType>(Shapes[0])

    const removeEvent = useRef<() => void>()
    removeEvent.current && removeEvent.current()
    removeEvent.current = Controller(shape, centerPoint, setCenterPoint)


    const createShape = () => {
        let shapeIndex = Math.floor(Math.random() * (Shapes.length - 1));;

        setShape(Shapes[shapeIndex])

        setCenterPoint({ x: 4, y: 0 })
    }

    useEffect(() => {
        createShape()
    }, [])

    const dropDown = function () {
        if (id.current) {
            window.cancelAnimationFrame(id.current)
        }
        console.log('掉落')
        let now = new Date().getTime()
        if (now - start >= 1000) {
            setCenterPoint(pre => ({
                x: pre.x,
                y: pre.y + 1
            }))
            start = now
        }
        id.current = window.requestAnimationFrame(dropDown)

    }

    useEffect(() => {

        // id = window.requestAnimationFrame(dropDown)
        dropDown()
        return () => {
            id.current && window.cancelAnimationFrame(id.current)
        }
    }, [])

    useEffect(() => {
        if (Rule.isTouch(shape, centerPoint) && !Rule.isTouchTop()) {

            newShape.forEach(item => {
                Container.set(item.y, item.x, 1)
            })
            createShape()
        }
        if (Rule.isTouchTop()) {

            id.current && window.cancelAnimationFrame(id.current)
        }
    }, [shape, centerPoint])



    const newShape = useMemo(() => {
        return shape.map(item => ({
            x: item.x + centerPoint.x,
            y: item.y + centerPoint.y
        }))
    }, [shape, centerPoint]) as ShapeType

    return newShape;
}

export default Productor