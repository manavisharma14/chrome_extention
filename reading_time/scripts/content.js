function renderReadingTime(article) {

  console.log("Article:", article);

  if (!article) {
    console.log("No article found");
    return;
  }

  const text = article.textContent;

  const wordMatchRegExp = /[^\s]+/g;

  const words = text.matchAll(wordMatchRegExp);

  const wordCount = [...words].length;

  const readingTime = Math.round(wordCount / 200);

  console.log("Word count:", wordCount);

  const badge = document.createElement("p");

  badge.textContent = `⏱️ ${readingTime} min read`;

  const heading = document.querySelector("h1");

  console.log("Heading:", heading);

  const date = document.querySelector("time")?.parentNode;

  console.log("Date:", date);

  (date ?? heading).insertAdjacentElement("afterend", badge);
}

setTimeout(() => {

renderReadingTime(document.querySelector(".body.markup"));
}, 3000);