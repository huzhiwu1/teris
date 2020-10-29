import React from "react"
import Shape from "@/core/shape";
import Controller from "@/core/controller"
import { Shapes, Shape as ShapeType, } from "@/core/types/shape";
import Container from "@/core/container";
import Rule from "@/core/rule"




export default class Productor {
    static shape: ShapeType;
    static removeEvent: () => void;
    static onChange: (shape: ShapeType) => void;
    static getShape(): ShapeType {
        if (!Productor.shape) {
            Productor.createShape()
        }
        return Productor.shape;
    }

    static createShape() {

        Productor.removeEvent && Productor.removeEvent();
        let shapeIndex = Math.floor(Math.random() * Shapes.length + 1);
        let shape = Shape({ shape: Shapes[shapeIndex], centerPoint: { x: 4, y: 0 } });
        Productor.removeEvent = Controller(shape, Productor.setShape)

        Productor.shape = shape;
    }

    static setShape(shape: ShapeType) {
        // console.log(shape, 'shape')
        Productor.removeEvent && Productor.removeEvent()

        Productor.shape = shape
        Productor.removeEvent = Controller(shape, Productor.setShape,)

        Productor.onChange && Productor.onChange(Productor.shape)
        if (Rule.isTouch(Productor.shape)) {
            Productor.shape.forEach(item => {
                Container.set(item.y, item.x, 1)
            })
            Productor.createShape()
        }
    }


}

