/*API Endpoint: /comments
Problem: Get all comments from the API and return an array of unique email addresses of users who posted the comments.*/

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/comments";

async function getData() {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();
  const limitedData = data.slice(0, 20);
  return limitedData;
}

async function uniqueEmails() {
  const comments = await getData();

  let uniqueEmails = [];

  comments.forEach(comment => {
    if (!uniqueEmails.includes(comment.email)) {
      uniqueEmails.push(comment.email);
    }
  });

  return uniqueEmails;
}

uniqueEmails()
  .then(data => console.log(data))
  .catch(err => console.error(err));

