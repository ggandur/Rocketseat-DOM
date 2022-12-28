const openButton = document.getElementById("openModal");
const closeButton = document.getElementById("closeModal");
const modalWrapper = document.getElementById("modalWrapper");

openButton.onclick = () => {
  console.log("open click");
  modalWrapper.classList.remove("invisible");
  // modalWrapper.setAttribute(
  //   "class",
  //   "modal-wrapper fixed bg-gray-500 w-screen h-screen flex items-center justify-center"
  // );
};

document.addEventListener("keypress", (e) => {
  console.log("Tecla pressionada " + e.key);
  e.key === "q"
    ? modalWrapper.classList.add("invisible")
    : // modalWrapper.setAttribute(
      //   "class",
      //   "modal-wrapper invisible fixed bg-gray-500 w-screen h-screen flex items-center justify-center"
      // )
      null;
});
