const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter

const width = 800
const height = 600
const engine = Engine.create() //Gives a world param
const { world } = engine
const render = Render.create({   //Render Object
    element: document.body, //Where you want to show the drawing in the DOM
    engine: engine,
    options: {
        wireframes: false, //to show filled in shapes with randomised colors
        width: width, //Height & Width of the canvas
        height: height
    }
})
Render.run(render) //Rendering the render object
Runner.run(Runner.create(), engine)

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}))

const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
    Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
    Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
]
World.add(world, walls)

//Random shapes

for (let i = 0; i < 50; i++) {
    if (Math.random() > 0.5) {
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50,))
    } else {
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 35,{
            render: {
                fillStyle: "red"
            }
        })
        )
    }
}



