# Async File-Based Task Manager

A command-line task manager built with Node.js that uses asynchronous file system operations to store tasks in a JSON file.

## How to Run

Ensure Node.js is installed on your system. Execute the script from your terminal using the `node index.js` command followed by your desired action and its required arguments.

## Commands and Examples

**1. Add a Task**
Creates a new task with a unique ID and timestamp.

- Example Input: `node index.js add "Complete JS assignment"`
- Output: A new task object is appended to `tasks.json`.

**2. List Tasks**
Shows all available tasks.

- Example Input: `node index.js list`
- Output: Prints the full array of tasks to the terminal console.

**3. Get a Task**
Shows a specific task by its ID.

- Example Input: `node index.js get 1`
- Output: Prints the single task object containing `"id": 1` to the console.

**4. Update a Task**
Renames the title of an existing task.

- Example Input: `node index.js update 1 "New Title"`
- Output: Updates the `title` property of task 1 and saves the changes to `tasks.json`.

**5. Complete a Task**
Marks a specific task as completed.

- Example Input: `node index.js done 1`
- Output: Changes the `completed` property of task 1 to `true` in `tasks.json`.

**6. Delete a Task**
Removes a task entirely[cite: 1].

- Example Input: `node index.js delete 1`[cite: 2]
- Output: Removes task 1 from the array and saves the updated list to `tasks.json`[cite: 2].
