// main_functions.js
// developed by DaylanDStoica

const PERMANENT_RECORD = "dailytasklist.txt";
const TEMPORARY_RECORD = "todaystasklist.txt";

function readTxtFile(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(text => console.log(text))
        // outputs the content of the text file
}

function writeToTxtFile(filePath, content){
    // fetch(filePath, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'text/plain'
    //     },
    //     body: content
    // })
    
    console.log("Writing to file:", filePath, "Content:", content);
    // const fs = require('node.fs'); //TODO: find an appropriate substitute for node
    // fs.writeFile(filePath, content, {flag : 'a+'}, (err) => { if (err) {
    //         console.error(`Error writing to file ${filePath}:`, err);
    //     }
    // });

    /* Node example code:
    const fs = require('fs');

fs.writeFileSync('output.txt', 'Hello, world!');
    */
    // Idea: use Blob object to write to files
    // const blob = new Blob([content], { type: 'text/plain' });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = filePath;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);


    // TODO: the current framework for JavaScript file handling is limited
    // unable to write directly to a local file within a local environment
    // even though the text file is within the program. 
    // This is based on the security model of web browsers.
    // Therefore, I will be rewriting into a different approach.
}

// at the start of the day, load the tasks from the file
// TEMPORARY_RECORD.file_contents = PERMANENT_RECORD.file_contents
function resetTasks() {
    // code to reset today's tasks
    // code to read tasks from dailytasklist.txt into todaystasklist.txt
    // task_list = TEMPORARY_RECORD.file_contents;
    let temp_contents = readTxtFile(PERMANENT_RECORD);
    writeToTxtFile(TEMPORARY_RECORD, temp_contents);
}

function loadTasks() { //viewtasks_index
    // code to load today's tasks from todaystasklist.txt
    return readTxtFile(TEMPORARY_RECORD);
}

// when a new task is added, save it to the file
function addNewTask(task) { //addtask_index
    // code to append the new task to dailytasklist.txt
    // writeToTxtFile(PERMANENT_RECORD, task); // not currently writing to file
    // FileSystem.writeToTxtFile(PERMANENT_RECORD, task);
    // writeToTxtFile(PERMANENT_RECORD, task);
    writeToTxtFile(PERMANENT_RECORD, task + "\n");
    status_message.innerHTML = "Task added successfully!";
}

function markTaskProgress(taskId, units) { //markprogress_index
    // code to update the task progress in todaystasklist.txt as increments
    // check for when the task is completed, and run the markTaskComplete function
}

// when a task is marked as complete, update the file
function markTaskComplete(taskId) { //markprogress_index
    // code to update the task status in todaystasklist.txt
}

