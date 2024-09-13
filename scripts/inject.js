chrome.storage.local.get(["image"], async function (result) {
  if (result.image) {
    document.body.innerHTML += `<img id="catHeader" src="${result.image}" />`;
    const cat = document.getElementById("catHeader");
    cat.style.position = "absolute";
    cat.style.right = "0px";
    cat.style.top = "0px";
    cat.style.width = "48px";
    cat.style.height = "48px";
    cat.style.zIndex = 1;

    let rightPos = 0; // right position 초기값
    setInterval(() => {
      rightPos += 10; // 10px씩 증가
      cat.style.right = rightPos + "px"; // 새로운 right 값을 설정
    }, 500);
  }
});
