console.log("Let's get this party started!");

async function searchGiphy(term) {
  const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=z1BYC8tEEKkbNuHxRkIpCLOtBwSWGoqM`;
  const res = await axios.get(url);
  // console.log(res);
  // console.log(res.data);
  console.log(res.data.data);
  // console.log(res.data.data[0].url);
  // console.log(res.data.data[0].images.original.url);
  console.log(Math.floor(Math.random() * 50));
  const $gif = res.data.data[`${Math.floor(Math.random() * 50)}`].images.original.url;
  const $img = $('<img>');
  $img.attr('src', $gif);
  // $img.attr('src', 'https://giphy.com/embed/26FPGI3ZgduhYYVTa');
  $gifArea.append($img);
}

const $form = $('#giphy-search-form');
const $input = $('#giphy-search');
const $gifArea = $('#gif-area');
$form.on('submit', function (e) {
  e.preventDefault();
  // console.log("SUBMIT!");
  // console.log($input.val());
  searchGiphy($input.val());
  $input.val("");
});

const $removeBtn = $('#remove-button');
$removeBtn.on('click', () => {
  // e.preventDefault();
  $gifArea.empty();
});

// 'http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

// async function getRandomDog() {
//   const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//   console.log(res.data);
//   const img = document.querySelector('#dog');
//   img.src = res.data.message;
// }

// async function getDogByBreed(breed) {
//   try {
//     const url = `https://dog.ceo/api/breed/${breed}/images/random`;
//     const res = await axios.get(url);
//     const img = document.querySelector('#dog');
//     img.src = res.data.message;
//   } catch (e) { //Could also put "error" or "err" in parentheses if we want
//     console.log(e); // this will let us know what kind of error we got, so we can make different solutions (whether that's giving a random dog image or letting the user know the error is because no internet)
//     alert('BREED NOT FOUND!');
//     getRandomDog();
//     // code will still run in this case, and if the specific breed isn't found, we just do a random dog
//   }
// }

// const form = document.querySelector('#searchform');
// const input = document.querySelector('#search')
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   // console.log("SUBMIT!");
//   // console.log(input.value);
//   getDogByBreed(input.value);
//   input.value = "";
// })