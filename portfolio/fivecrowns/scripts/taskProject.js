// Get ID for table from HTML file
let table = document.getElementById('tbody');

function addPerson() {
    // Insert a new Row
    let row = table.insertRow(-1);
    // Get Row Count
    let rowCount = table.getElementsByTagName('tr');
    let totalRowCount = 0;
    for (let l = 0; l < rowCount.length; l++) {
        totalRowCount++;
    }
    // Insert new Cell in the first column
    let cell1 = row.insertCell(0);
    cell1.className = 'name-value';
    // Get Name from User
    let name = document.getElementById('name').value;
    // Add cell content to first column
    if (name == '') {
        cell1.innerHTML = 'Player';
    }
    else {
        cell1.innerHTML = name;
    }
    // Add cell content for input columns
    for (let i = 1; i < 12; i ++) {
        let inputCell = document.createElement('input');
        inputCell.type = 'text';
        inputCell.value = '';
        inputCell.maxLength = 2;
        inputCell.onblur = function() {computeTotal()};
        inputCell.className = `score${totalRowCount}`;
        row.insertCell(i).appendChild(inputCell);
    }
    // Add cell content for last column
    let cell2 = row.insertCell(12);
    cell2.id = `total${totalRowCount}`;
    cell2.className = 'total-value';
    // Clear Input Box
    document.getElementById('name').value = '';
}

function computeTotal() {
    // Get Row Count
    let rowCount = table.getElementsByTagName('tr');
    for (j = 1; j < rowCount.length + 1; j++) {
        let sum = 0;
        index = j;
        // Get Values
        let values = document.querySelectorAll(`.score${index}`);
        for (i = 0; i < values.length; i++) {
            if (values[i].value) {
                sum += parseInt(values[i].value);
            }
            document.querySelector(`#total${index}`).innerHTML = sum;
        }
    }
}

// Reset the Scores
function resetScores() {
    // Get Row Count
    let rowCount = table.getElementsByTagName('tr');
    for (j = 1; j < rowCount.length + 1; j++) {
        index = j;
        // Get Values
        let values = document.querySelectorAll(`.score${index}`);
        for (i = 0; i < values.length; i++) {
            if (values[i].value) {
                values[i].value = '';
            }
            document.querySelector(`#total${index}`).innerHTML = '';
        }
    }
}

// Clear the Whole Table (reset)
function clearTable() {
    table.innerHTML = '';
}