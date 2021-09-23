"use strict";

const saleCheckboxHandler = () => {
  const checkbox = document.querySelector("input[type=checkbox][class=sale]");

  checkbox.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    const products = document.querySelectorAll(".product");
    const data = document.querySelectorAll(".product-data");

    if (isChecked) {
      data.forEach((d) => {
        if (d.lastElementChild.className === "product-old-price") {
          d.parentNode.style.display = "";
        } else {
          d.parentNode.style.display = "none";
        }
      });
    } else {
      products.forEach((p) => (p.style.display = ""));
    }
  });
};

const sortByPrice = (value) => {
  var i, switching, price, shouldSwitch;
  switching = true;

  while (switching) {
    switching = false;
    price = document.querySelectorAll(".product-price");
    for (i = 0; i < price.length - 1; i++) {
      shouldSwitch = false;
      const currentPrice = price[i].innerHTML.split(" ")[0].split(".").join("");
      const nextPrice = price[i + 1].innerHTML
        .split(" ")[0]
        .split(".")
        .join("");
      if (value === "0") {
        if (Number(currentPrice) > Number(nextPrice)) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (Number(currentPrice) < Number(nextPrice)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      price[i].parentNode.parentNode.parentNode.insertBefore(
        price[i + 1].parentNode.parentNode,
        price[i].parentNode.parentNode
      );
      switching = true;
    }
  }
};

const sortByName = (value) => {
  let i, switching, productData, shouldSwitch;
  switching = true;

  while (switching) {
    switching = false;
    productData = document.querySelectorAll(".product-data");
    for (i = 0; i < productData.length - 1; i++) {
      shouldSwitch = false;
      if (value === "2") {
        if (
          productData[i].firstElementChild.innerHTML.toLowerCase() >
          productData[i + 1].firstElementChild.innerHTML.toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (
          productData[i].firstElementChild.innerHTML.toLowerCase() <
          productData[i + 1].firstElementChild.innerHTML.toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      productData[i].parentNode.parentNode.insertBefore(
        productData[i + 1].parentNode,
        productData[i].parentNode
      );
      switching = true;
    }
  }
};

const ddlHandler = (e) => {
  const value = e.currentTarget.value;
  if (value === "0" || value === "1") {
    sortByPrice(value);
  } else if (value === "2" || value === "3") {
    sortByName(value);
  }
};

document.querySelector(".order").addEventListener("change", ddlHandler);
document.documentElement.addEventListener("click", saleCheckboxHandler);
