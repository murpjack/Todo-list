const TODO_LIST = "TODO_LIST";

export const initialState = {
  list: localStorage.getItem(TODO_LIST) === null ? [
    {
      id: 0,
      name: "Write TODO list",
      isComplete: true
    },
    {
      id: 1,
      name: "看电影",
      isComplete: false
    },
    {
      id: 2,
      name: "Make something",
      isComplete: false
    }
  ] : JSON.parse(localStorage.getItem(TODO_LIST))
};
export default initialState;
