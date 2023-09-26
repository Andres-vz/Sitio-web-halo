const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

// mostar y ocultar menus
bShowMobileLinks.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  moreMenu.classList.toggle("show");
});

const videos = [
  {
    id: "OkMY1hRAlfc",
  },

  {
    id: "XCbMVbeKlCg",
  },

  {
    id: "4i86Ckj8xKk",
  },

  {
    id: "lOthvD1rMbQ",
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videoContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click", (e) => {
  let changed = current;
  current = current + 1 < videos.length ? current + 1 : current;
  if (current != changed) {
    renderCurrentVideo(videos[current].id);
  }
});

bPrev.addEventListener("click", (e) => {
  let changed = current;
  current = current - 1 >= 0 ? current - 1 : current;

  if (current != changed) {
    renderCurrentVideo(videos[current].id);
  }
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id) {
  currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

function renderVideos() {
  const html = videos.map((video, index) => {
    return `<div class="item">
        <a href="#" data-id="${index}">
        <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" />
        </a>
        </div>`;
  });

  videoContainer.innerHTML = html.join("");
}

document.querySelectorAll('.item a').forEach(item =>{
    item.addEventListener('click', e =>{
        e.preventDefault();
        const id= +item.getAttribute('data-id');
        current = id;
        renderCurrentVideo(videos[current].id);
    });
});
