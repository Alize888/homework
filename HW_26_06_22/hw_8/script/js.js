const btn = document.getElementById("btn");


btn.onclick = () => {
    const input = document.createElement("input");
    input.setAttribute("placeholder", "введите диаметр круга");
    document.body.append(input);

    const btnCircle = document.createElement("button");
    btnCircle.innerText = "нарисовать";
    document.body.append(btnCircle);
    
    const boxCircles = document.createElement("div");
    boxCircles.setAttribute("id", "boxCircles");
    document.body.append(boxCircles);

    btnCircle.onclick = () => {
        for (let i = 0 ; i<100 ; i++) {
            const circle = document.createElement("div");
            circle.style.width = `${input.value}px`;
            circle.style.height = `${input.value}px`;
            circle.style.borderRadius = `${input.value}px`;
            circle.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100) + '%'} ,${Math.floor(Math.random() * 60) + '%'})`;
            boxCircles.append(circle);

            circle.onclick = (element) =>{
                element.target.remove();
            }
        }

        const getRandomColor = () => {
            const h = Math.floor(Math.random() * 360),
                  s = Math.floor(Math.random() * 100) + '%',
                  l = Math.floor(Math.random() * 60) + '%';// выборка темных тонов.
                                                         
            return `hsl(${h},${s},${l})`;
        };

    }
    
}

