const toggleTheme = () => {
  const body = document.body;
  const image = document.querySelector(".profile__image img");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    image.setAttribute("src", "./assets/dark-avatar.png");
  } else {
    image.setAttribute("src", "./assets/light-avatar.png");
  }
};
