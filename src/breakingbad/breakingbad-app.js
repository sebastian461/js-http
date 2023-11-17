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
export const BreakingbadApp = async (element) => {
  console.log("breakingbadApp");
  element.innerHTML = "Loading...";

  const quote = await fetchQuote();

  element.innerHTML = "Data recibida";
};
