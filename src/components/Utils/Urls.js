export const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://etiquette-ecommerce-demo.herokuapp.com";

export const imageToUrl = (image) => {
  if (!image) {
    return "../../../public/favicon.jpg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
