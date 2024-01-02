console.log("Let's get this party started!");

async function searchGiphy(term) {
  const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=z1BYC8tEEKkbNuHxRkIpCLOtBwSWGoqM`;
  const res = await axios.get(url);

  console.log(res.data.data.length)
  const index = Math.floor(Math.random() * 50);
  const $column = $('<div>');
  const $gif = res.data.data[`${index}`].images.original.url;
  const $img = $('<img>');
  $column.addClass('col-md-5 col-lg-3 col-xl-2 mr-3 mb-3');
  $img.attr('src', $gif);
  $img.addClass('w-100');
  $column.append($img)
  $gifArea.append($column);
}

const $form = $('#giphy-search-form');
const $input = $('#giphy-search');
const $gifArea = $('#gif-area');
$form.on('submit', function (e) {
  e.preventDefault();

  if (e.originalEvent.submitter.innerText !== "Remove GIFs") {
    searchGiphy($input.val());
    $input.val("");
  }
});

const $removeBtn = $('#remove-button');
$removeBtn.on('click', () => {
  $gifArea.empty();
});