export default (text = "Hello, World!", type = "h1") => {
    const element = document.createElement(type);
  
    element.innerHTML = text;
  
    return element;
  };