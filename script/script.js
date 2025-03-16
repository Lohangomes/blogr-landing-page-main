const links = document.querySelectorAll("[data-item='item']");
const dropdown = document.querySelectorAll(".dropdown");
const menu = document.querySelectorAll("[data-menu]");

menu.forEach((menu) => {
  menu.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("ativo");
    event.target.nextElementSibling.classList.toggle("ativo");
    const temAtivo = event.currentTarget.classList.contains("ativo");
    event.currentTarget.setAttribute("aria-expanded", temAtivo);
  });
});

function ativar(event) {
  event.preventDefault();

  event.target.classList.toggle("ativo");
  event.target.nextElementSibling.classList.toggle("ativo");
  const temAtivo = event.target.classList.contains("ativo");
  event.target.setAttribute("aria-expanded", temAtivo);
}

links.forEach((link) => {
  link.addEventListener("click", ativar);
});
