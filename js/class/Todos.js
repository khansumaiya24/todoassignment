import {Task} from "/js/class/Task.js";
class Todos {
    #tasks = [];
    #backend_url = '';

    constructor(url) {
        this.#backend_url = url;
    }

    


    getTasks = () => {
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url)
            .then((response) => response.json())
            .then((json) => {
                this.#readJson(json)
                resolve(this.#tasks)
            },
            (error) => {
                reject(error);
            });
        });
    }
    #readJson = (tasksAsJson) => {
        tasksAsJson.forEach(node => {
            const task = new Task(node.id, node.description);
            this.#tasks.push(task);
        });
    }

    // Method to add a new task to the list of tasks
#addToArray = (id, text) => {
    // Create a new Task object with the provided ID and text
    const task = new Task(id, text);
    
    // Add the new task to the array of tasks
    this.#tasks.push(task);
    
    // Return the newly added task
    return task;

}
}
    export {Todos};














