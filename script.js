document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio website loaded.");

  const projectTitles = document.querySelectorAll(".project h3");

  projectTitles.forEach((title) => {
    title.style.cursor = "pointer";
    title.addEventListener("click", () => {
      alert("This project is called: " + title.textContent);
    });
  });
});
