'use strict';
const settings = {
    gameContainerElement: document.getElementById('chess'),
    rowCount: 10,
    colCount: 10,
    rows: [0, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    cols: [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0]
};

const board = {
    cells() {
        for (let row = 0; row < settings.rowCount; row++){
            const trElement = document.createElement('tr');
            settings.gameContainerElement.appendChild(trElement);

            for (let col = 0; col < settings.colCount; col++){
                const tdElement = document.createElement('td');
                trElement.appendChild(tdElement);

                if (settings.rows[row] === 0 && settings.cols[col] !== 0){
                    tdElement.innerHTML = settings.cols[col];
                } else if (settings.cols[col] === 0 && settings.rows[row] !== 0) {
                    tdElement.innerHTML = settings.rows[row];
                }

                if (row !== 0 && col !== 0 && row !== 9 && col !== 9) {
                    if ((row % 2 === 1 && col % 2 === 0) || (row % 2 !== 1 && col % 2 !== 0)) {
                        tdElement.style.backgroundColor = 'black';
                    }

                }
            }
        }

    }
}

board.cells();

