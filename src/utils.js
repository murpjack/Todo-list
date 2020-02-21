import TODO_LIST from "../constants";

export default function getListFromStorage(list) => {
  const listString = list.reduce((acc, curr, index) => {
    if (index === 0) {
      return (
        acc +
        `[{"id":${curr.id},"name":"${curr.name}","isComplete":${curr.isComplete}},`
      );
    } else if (index === list.length - 1) {
      return (
        acc +
        `{"id":${curr.id},"name":"${curr.name}","isComplete":${curr.isComplete}}]`
      );
    } else {
      // separate list objects with a comma
      return (
        acc +
        `{"id":${curr.id},"name":"${curr.name}","isComplete":${curr.isComplete}},`
      );
    }
  }, "");
  localStorage.setItem(TODO_LIST, listString);
}
