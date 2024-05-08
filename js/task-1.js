const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const categorName = item.querySelector("h2").textContent;
  const categorItemNum = item.querySelectorAll("li");
  console.log(`Category: ${categorName}`);
  console.log(`Elements: ${categorItemNum.length}`);
});