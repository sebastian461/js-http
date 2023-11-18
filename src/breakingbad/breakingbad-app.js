/**
 * @returns {Promise<Object>}
 */
const fetchQuote = async () => {
  const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const [data] = await response.json();
  console.log(data);
  return data;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = (element) => {
  console.log("breakingbadApp");
  element.innerHTML = "Loading...";

  const quoteLabel = document.createElement("blockquote");
  const authorLabel = document.createElement("h3");
  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next quote";

  const renderQuote = ({ quote, author }) => {
    quoteLabel.innerText = quote;
    authorLabel.innerText = author;
    element.replaceChildren(quoteLabel, authorLabel, nextBtn);
  };

  fetchQuote().then((data) => renderQuote(data));
};
