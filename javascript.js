const container = document.querySelector(".container");
const button = document.querySelector(".button");
const totalSize = 500;

function createGrid(size) {

    container.textContent = "";

    container.style.display = "flex";
    container.style.flexwrap = "wrap";
    container.style.width = `${totalSize}px`;
    container.style.height = `${totalSize}px`;

    const squareSize = totalSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.background = "burlywood";
        square.style.border = "1px solid black";

        container.appendChild(square);
    }
}

function changeGrid() {
    let newSize = prompt ("Enter number of square per side (1-100):");
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100!");
        return;
    }

    createGrid(newSize);
}


button.addEventListener("click", changeGrid);

createGrid(16);






console.log (container);