export interface IPoint {
    x: number,
    y: number
}

export type Shape = [IPoint, ...IPoint[]] & { length: 4 }



export const IShape: Shape = [
    {
        x: 0,
        y: 0,
    },
    {
        x: -1,
        y: 0,
    },
    {
        x: 1,
        y: 0,
    },
    {
        x: 2,
        y: 0
    }
]

export const JShape: Shape = [
    {
        x: 0,
        y: 0
    },
    {
        x: -1,
        y: 0,
    },
    {
        x: -1,
        y: -1,
    },
    {
        x: 1,
        y: 0
    }
]

export const LShape: Shape = [
    {
        x: 0,
        y: 0
    },
    {
        x: -1,
        y: 0,
    },
    {
        x: 1,
        y: 0,
    },
    {
        x: 1,
        y: -1
    }
]

export const OShape: Shape = [
    {
        x: 0,
        y: 0,
    },
    {
        x: -1,
        y: 0,
    },
    {
        x: -1,
        y: -1,
    },
    {
        x: 0,
        y: 1
    }
]

export const SShape: Shape = [
    {
        x: 0,
        y: 0,
    },
    {
        x: 0,
        y: -1
    },
    {
        x: -1,
        y: 0
    },
    {
        x: 1,
        y: -1
    }
]

export const TShape: Shape = [
    {
        x: 0,
        y: 0
    },
    {
        x: -1,
        y: 0
    },
    {
        x: 1,
        y: 0
    },
    {
        x: 0,
        y: -1
    }
]

export const ZShape: Shape = [
    {
        x: 0,
        y: 0
    },
    {
        x: 0,
        y: -1,
    },
    {
        x: -1,
        y: -1
    },
    {
        x: 1,
        y: 0
    }
]

export const Shapes: Shape[] = [
    IShape,
    JShape,
    LShape,
    OShape,
    SShape,
    TShape,
    ZShape
]