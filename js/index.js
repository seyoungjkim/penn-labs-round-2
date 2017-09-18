// function toggles an elmenent, in this case the cart contents, to expand or be hidden
function changeVisibility(id) {
  element = document.getElementById(id)
  if (element.style.display == "none")
    element.style.display = "block";
  else element.style.display = "none";
}