const fs = require("fs/promises");

const command = process.argv[2];
const argument = process.argv[3];

async function main() {
  const data = await fs.readFile("tasks.json", "utf-8");
  let tasks = JSON.parse(data);
  if (command === "add") {
    let newObject = {};
    newObject["id"] = tasks.length + 1;
    newObject["title"] = argument;
    newObject["completed"] = false;
    newObject["createdAt"] = new Date().toISOString();
    tasks.push(newObject);
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2));
  } else if (command === "list") {
    console.log(tasks);
  } else if (command === "get") {
    for (let i of tasks) {
      if (i.id == argument) {
        console.log(i);
      }
    }
  } else if (command === "update") {
    const newTitle = process.argv[4];
    for (let i of tasks) {
      if (i.id == argument) {
        i["title"] = newTitle;
      }
    }
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2));
  } else if (command === "done") {
    for (let i of tasks) {
      if (i.id == argument) {
        i.completed = true;
      }
    }
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2));
  } else if (command === "delete") {
    tasks = tasks.filter((task) => task.id != argument);
    await fs.writeFile("tasks.json", JSON.stringify(tasks, null, 2));
  }
}

main();
