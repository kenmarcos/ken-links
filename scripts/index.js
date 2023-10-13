const setProfileImage = () => {
  const body = document.body;
  const image = document.querySelector(".profile__image img");

  if (body.classList.contains("dark")) {
    image.setAttribute("src", "./assets/dark-avatar.png");
  } else {
    image.setAttribute("src", "./assets/light-avatar.png");
  }
};

setProfileImage();
