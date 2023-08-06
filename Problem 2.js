/*API Endpoint: /albums
Problem: Retrieve all albums from the API and return an object where the keys are user IDs, and the values are the total number of albums created by each user.*/

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/albums";

async function getData() {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();
  const limitedData = data.slice(0, 20);
  return limitedData;
}

async function getTotalAlbumCount() {
  const albums = await getData();
  let albumCount = {};

  albums.forEach(album => {
    if (!albumCount[album.userId]) {
      albumCount[album.userId] = 1;
    }
    
    albumCount[album.userId]++;
  });

  return albumCount;
} 

getTotalAlbumCount()
  .then(data => console.log(data))
  .catch(err => console.error(err));

