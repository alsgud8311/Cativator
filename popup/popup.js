const cats = Array.from(document.querySelectorAll("img"));
cats.forEach((cat) => {
  cat.addEventListener("click", () => {
    chrome.storage.local.set({ image: cat.src });
  });
});
