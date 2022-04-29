const url = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
];

const [posts, users, todos] = url;
const fetchNames = async () => {
  try {
    const res = await Promise.all([fetch(posts), fetch(users), fetch(todos)]);
    const data = await Promise.all(res.map((r) => r.json()));
    console.log(data);
  } catch (err) {
    console.log("Promise failed", err);
  }
};

fetchNames();
