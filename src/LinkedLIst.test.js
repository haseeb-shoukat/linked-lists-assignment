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

test("Return correct size of list", () => {
  const list = new LinkedList();
  expect(list.size()).toBe(0);
  list.prepend("hello");
  list.append("bye");
  expect(list.size()).toBe(2);
});

test("Return head and tail", () => {
  const list = new LinkedList();
  list.append("item");
  list.prepend("first");
  expect(list.tail.value).toBe("item");
  expect(list.head.value).toBe("first");
});

test("at(index) returns correct node at index", () => {
  const list = new LinkedList();
  expect(list.at(0)).toBe("Invalid Index");
  expect(list.at(10)).toBe("Invalid Index");

  list.append("first");
  list.append("second");
  list.append("third");

  expect(list.at(0).value).toBe("first");
  expect(list.at(1).value).toBe("second");
  expect(list.at(2).value).toBe("third");
});

test("pop() removes last element from list", () => {
  const list = new LinkedList();
  list.append("first");
  list.append("second");
  list.append("third");

  expect(list.pop().value).toBe("third");
  expect(list.size()).toBe(2);
  list.pop();
  list.pop();
  expect(list.pop()).toBe(null);
});

test("pop() returns null if list is empty", () => {
  const list = new LinkedList();
  list.append("first");
  list.pop();

  expect(list.pop()).toBe(null);
});

test("contains returns true if item is inside list", () => {
  const list = new LinkedList();
  list.append("first");
  list.append("second");
  list.append("third");

  expect(list.contains("first")).toBe(true);
  expect(list.contains("second")).toBe(true);
  expect(list.contains("third")).toBe(true);
});

test("contains returns false if item is not inside list", () => {
  const list = new LinkedList();
  list.append("first");
  list.append("second");

  expect(list.contains("third")).toBe(false);
});

test("find returns correct index for values", () => {
  const list = new LinkedList();
  list.append("first");
  list.append("second");
  list.prepend("zero");

  expect(list.find("zero")).toBe(0);
  expect(list.find("first")).toBe(1);
  expect(list.find("second")).toBe(2);
});

test("find returns null for values not found", () => {
  const list = new LinkedList();
  list.append("first");

  expect(list.find("zero")).toBe(null);
  list.pop();
  expect(list.find("zero")).toBe(null);
});

test("toString works for list", () => {
  const list = new LinkedList();
  list.append("first");
  list.append("second");
  list.append("third");

  expect(list.toString()).toBe("( first ) -> ( second ) -> ( third ) -> null");
});

test("toString works for empty list", () => {
  const list = new LinkedList();
  list.append("first");
  list.pop();

  expect(list.toString()).toBe("null");
});

test("toString works for values which are numbers or boolean", () => {
  const list = new LinkedList();
  list.append(0);
  list.append(true);
  list.append(null)

  expect(list.toString()).toBe("( 0 ) -> ( true ) -> ( null ) -> null");
});

