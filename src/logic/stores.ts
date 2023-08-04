import { writable } from "svelte/store";

interface IActivityLog{
    total: number,
    completed: number,
}

const defaultValue:IActivityLog = {
    total: 0,
    completed: 0,
}

const habits = writable<IActivityLog>(defaultValue)
const tasks = writable<IActivityLog>(defaultValue)

export {
    habits, tasks
}
