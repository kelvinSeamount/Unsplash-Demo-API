const searchForm = document.querySelector(".search-btn");
const serchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".btn-show");
const containerResult = document.querySelector(".container-result");

const key = "8MErfKrOOWVIBYtduJ0Vu6Cd0o_DPZlpQFywLQ5eq_0";
let word = "";
let page = 1;

const searchImage = async function () {
  word = serchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${word}&client_id=${key}`;

  const response = await fetch(url);

  const data = await response.json();

  data.results.map(function (arr) {
    //creating image tag
    const image = document.createElement("img");
    image.src = arr.urls.small;

    //add link to image tag
    const linkImg = document.createElement("a");
    linkImg.href = arr.links.html;

    //this opens the link in page
    linkImg.target = "_blank";

    // place img in the link
    linkImg.appendChild(image);
    containerResult.appendChild(linkImg);
  });
};

searchForm.addEventListener("click", function (e) {
  e.preventDefault();
  page = 1;
  searchImage();
});
