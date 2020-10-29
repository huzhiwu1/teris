import { useState } from "react"
import Shape from "@/core/shape";
import Controller from "@/core/controller"
import { IPoint } from "@/core/types/shape";

function productor() {
    const [points, setPoints] = useState<IPoint[]>([])

    return points;

}