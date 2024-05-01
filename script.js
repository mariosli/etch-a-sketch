let container;

function setGrid() {
    if (container) {
        container.remove();
    }
    const gridSize = prompt("Enter grid size (number of squares per side): ");
    if (gridSize <= 100) {
        drawGrid(gridSize);
    }
    else {
        alert("Please enter a number up to 100")
    }
}

function randomColor() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
        code += hexArray[Math.floor(Math.random()*16)];
    }      
    return `#${code}`
}

function drawGrid(gridSize) {
    container = document.createElement("div");
    container.setAttribute("class", "container")
    document.body.appendChild(container);
    // container.style.border = "solid 1px red";

    for (let i=1; i<=gridSize;i++){
        const rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        rowDiv.style.flexDirection = "column";
        rowDiv.style.width = "100%";
        rowDiv.style.height = "100%";
        // rowDiv.style.gap = "1px";
        // rowDiv.style.border = "solid 1px red";

        container.appendChild(rowDiv);
        for (let j=1; j<=gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "grid-div");
            newDiv.style.height = "100%";
            newDiv.style.width = "100%";
            newDiv.style.border = "solid 1px black";
            newDiv.addEventListener("mouseenter", (e) => {
                newDiv.style.backgroundColor = randomColor();
            });
            newDiv.addEventListener("mouseleave", (e)=> {
                newDiv.style.backgroundColor = "transparent";
            });
            
            rowDiv.appendChild(newDiv);
        }
    }
}
