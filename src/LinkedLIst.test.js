import { LinkedList } from "./LinkedList";

test("Appends an empty list", () => {
  const list = new LinkedList();
  list.append("hello");
  expect(list.head.value).toBe("hello");
  expect(list.tail.value).toBe("hello");
});

test("Appends a non-empty list", () => {
  const list = new LinkedList();
  list.append("hello");
  list.append("bye");
  expect(list.head.value).toBe("hello");
  expect(list.tail.value).toBe("bye");
});

test("Prepends an empty list", () => {
  const list = new LinkedList();
  list.prepend("hello");
  expect(list.head.value).toBe("hello");
  expect(list.tail.value).toBe("hello");
});

test("Prepends a non-empty list", () => {
  const list = new LinkedList();
  list.prepend("hello");
  list.prepend("bye");
  expect(list.head.value).toBe("bye");
  expect(list.tail.value).toBe("hello");
});
