// model: not normally done in a front-end env. 
// just encapsulated here for convenience, since we don't have a back end in this project. 

export class TodoModel {
    constructor(name, done = false) {
        TodoModel.generaterId ++;
        this.id = TodoModel.generaterId;
        this.name = name;
        this.done = done;
    }
}

TodoModel.generaterId = 0;