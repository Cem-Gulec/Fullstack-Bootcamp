import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
    console.log(response);

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response.data;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((args) => console.log(args.name));

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const nameFilteredProducts = products.filter((product) =>
      product.name.includes("Şal")
    );

    const mappedProducts = nameFilteredProducts.map((item) => {
      const { name, image } = item;
      return { name, image };
    });

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish

    // This function creates necessary DOM elements
    // for a single product given as an argument
    // and embeds name and image information
    function appendElement(name, image) {
      let container = document.createElement("div");
      container.className = "child-holder";

      let newP = document.createElement("p");
      newP.className = "child";

      let newContent = document.createTextNode(name);
      let _image = document.createElement("img");
      _image.src = image;
      newP.appendChild(newContent);
      container.appendChild(newP);

      document
        .getElementsByClassName("flex-container")[0]
        .appendChild(container);

      container.appendChild(_image);
    }

    mappedProducts.forEach((product) =>
      appendElement(product.name, product.image)
    );
  });
