let totalQuantity = document.getElementById("total-quantity")
    // Retrieve the add button by id
    let addCartButton1 = document.getElementById("add-to-cart-button1")
    let addCartButton2 = document.getElementById("add-to-cart-button2")
    let addCartButton3 = document.getElementById("add-to-cart-button3")
    let addCartButton4 = document.getElementById("add-to-cart-button4")
    let addCartButton5 = document.getElementById("add-to-cart-button5")
    let addCartButton6 = document.getElementById("add-to-cart-button6")
    let addCartButton7 = document.getElementById("add-to-cart-button7")

    // Retrieve the Product Image button by id
    let productImage1 = document.getElementById("product-image1")
    let productImage2 = document.getElementById("product-image2")
    let productImage3 = document.getElementById("product-image3")
    let productImage4 = document.getElementById("product-image4")
    let productImage5 = document.getElementById("product-image4")
    let productImage6 = document.getElementById("product-image6")  

    //Retrieve the products main products
    let productGroupHerbal = document.getElementById("product-group-image1")
    let productGroupFruits = document.getElementById("product-group-image2")
    let productGroupVegetables = document.getElementById("product-group-image3")
    let productGroupBread= document.getElementById("product-group-image4")

    // Retrieve Products tiile
    let productTitle1 = document.getElementById("product-title1")
    let productTitle2 = document.getElementById("product-title2")
    let productTitle3 = document.getElementById("product-title3")

    // Retrieve Product name
    let productName1 = document.getElementById("product-name1")
    let productName2 = document.getElementById("product-name2")
    let productName3 = document.getElementById("product-name3")

    // Retrieve Discount Price
    let discountPrice1 = document.getElementById("discount-price1")
    let discountPrice2 = document.getElementById("discount-price2")
    let discountPrice3 = document.getElementById("discount-price3")
    let discountPrice4 = document.getElementById("discount-price4")
    let discountPrice5 = document.getElementById("discount-price5")
    let discountPrice6 = document.getElementById("discount-price6")
    let discountPrice7 = document.getElementById("discount-price7")

    // Retrieve Main Price
    let mainPrice1 = document.getElementById("main-price1")
    let mainPrice2 = document.getElementById("main-price2")
    let mainPrice3 = document.getElementById("main-price3")

    let total = 0

    // Add Product
    addCartButton1.addEventListener("click", function(){
        let x = discountPrice1.textContent.replace("$", "")
        total += parseInt(x)
        totalQuantity.textContent = `$${total}`
        
    })
    addCartButton2.addEventListener("click", function(){
        let x = discountPrice2.textContent.replace("$", "")
        total += parseInt(x)
        totalQuantity.textContent = `$${total}`
    })
    addCartButton3.addEventListener("click", function(){
        let x = discountPrice3.textContent.replace("$", "")
        total += parseInt(x)
        totalQuantity.textContent = `$${total}`
    })
    addCartButton4.addEventListener("click", function(){
        let x = discountPrice4.textContent.replace("$", "")
        total += parseInt(x)
        totalQuantity.textContent = `$${total}`
    })
    addCartButton5.addEventListener("click", function(){
        let x = discountPrice5.textContent.replace("$", "")
        total += parseInt(x)
        totalQuantity.textContent = `$${total}`
    })
    addCartButton6.addEventListener("click", function(){
        let x = discountPrice6.textContent.replace("$", "")
        total += parseInt(x)
        totalQuantity.textContent = `$${total}`
    })
    addCartButton7.addEventListener("click", function(){
        let x = discountPrice7.textContent.replace("$", "")
        total += parseInt(x)
        totalQuantity.textContent = `$${total}`
    })

    // // Subtract Product
    // function subtractResult(){
    //     total -=1
    //     totalQuantity.textContent = total
    // }
    // subtractButton1.addEventListener("click", function(){
    //     subtractResult()
    // })
    // subtractButton2.addEventListener("click", function(){
    //     subtractResult()
    // })
    // subtractButton3.addEventListener("click", function(){
    //     subtractResult()
    // })
    // subtractButton4.addEventListener("click", function(){
    //     subtractResult()
    // })
    // subtractButton5.addEventListener("click", function(){
    //     subtractResult()
    // })
    // subtractButton6.addEventListener("click", function(){
    //     subtractResult()
    // })

// Product Herbs Select click function
productGroupHerbal.addEventListener("click", function(){
    //Display Product Image
    productImage1.src = "images/bears-garlic-leaves.jpg"
    productImage2.src = "images/nettle-leaves.webp"
    productImage3.src = "images/parsley-leaves.webp"

    //Display Product Title
    productTitle1.textContent = "Medical Herbs"
    productTitle2.textContent = "Medical Herbs"
    productTitle3.textContent = "Medical Herbs"
    
    // Display Product Name
    productName1.textContent = "Bears Garlic"
    // productName1.classList.add(h2)
    productName2.textContent = "Nettle"
    productName3.textContent = "Parsley"

    // Display Product Main Price
    mainPrice1.textContent = "$100"
    mainPrice2.textContent = "$10"
    mainPrice3.textContent = "$50"

    // Display Discount Price
    discountPrice4.textContent = "$20"
    discountPrice5.textContent = "$5"
    discountPrice6.textContent = "$23"
})

// Product Fruits Select click function
productGroupFruits.addEventListener("click", function(){
    //Display Product Image
    productImage1.src = "images/mandarine.jpg"
    productImage2.src = "images/cherry-icon.png"
    productImage3.src = "images/oranges.jpg"

    //Display Product Title
    productTitle1.textContent = "Fruits"
    productTitle2.textContent = "Fruits"
    productTitle3.textContent = "Fruits"
    
    // Display Product Name
    productName1.textContent = "Mandarin"
    // productName1.classList.add(h2)
    productName2.textContent = "Cherry"
    productName3.textContent = "Oranges"

    // Display Product Main Price
    mainPrice1.textContent = "$10"
    mainPrice2.textContent = "$10"
    mainPrice3.textContent = "$8"

    // Display Discount Price
    discountPrice4.textContent = "$12"
    discountPrice5.textContent = "$9"
    discountPrice6.textContent = "$5"
})

// Product Vegetables Select click function
productGroupVegetables.addEventListener("click", function(){
    //Display Product Image
    productImage1.src = "images/beans-vegetables.jpg"
    productImage2.src = "images/carrot.jpg"
    productImage3.src = "images/green-pepper.jpg"

    //Display Product Title
    productTitle1.textContent = "Vegetables"
    productTitle2.textContent = "Vegetables"
    productTitle3.textContent = "Vegetables"
    
    // Display Product Name
    productName1.textContent = "Beans Vegetables"
    // productName1.classList.add(h2)
    productName2.textContent = "Carrot"
    productName3.textContent = "Green Pepper"

    // Display Product Main Price
    mainPrice1.textContent = "$500"
    mainPrice2.textContent = "$150"
    mainPrice3.textContent = "$243"

    // Display Discount Price
    discountPrice4.textContent = "$402"
    discountPrice5.textContent = "$123"
    discountPrice6.textContent = "$240"
})

// Product Bread Select click function
productGroupBread.addEventListener("click", function(){
    //Display Product Image
    productImage1.src = "images/bread-grain.webp"
    productImage2.src = "images/bread-icon.png"
    productImage3.src = "images/crispy-bread.webp"

    //Display Product Title
    productTitle1.textContent = "Bread"
    productTitle2.textContent = "Bread"
    productTitle3.textContent = "Bread"
    
    // Display Product Name
    productName1.textContent = "Bread Grains"
    // productName1.classList.add(h2)
    productName2.textContent = "Grandpa Bread"
    productName3.textContent = "Crispy Bread"

    // Display Product Main Price
    mainPrice1.textContent = "$40"
    mainPrice2.textContent = "$35"
    mainPrice3.textContent = "$50"

    // Display Discount Price
    discountPrice4.textContent = "$38"
    discountPrice5.textContent = "$30"
    discountPrice6.textContent = "$45"
})

// Enlarge Image On Click
// document.addEventListener('DOMContentLoaded', function() {
//     const enlargeableImages = document.querySelectorAll('img[data-enlargeable]');
//     const displayButton = document.getElementById('displayButton');
  
//     displayButton.addEventListener('click', function() {
//       // Loop through each enlargeable image
//       enlargeableImages.forEach(function(img) {
//         img.classList.add('img-enlargeable');
//         img.addEventListener('click', function() {
//           const src = img.getAttribute('src');
  
//           const overlay = document.createElement('div');
//           overlay.style.cssText = `
//             background: rgba(0, 0, 0, 0.5) url(${src}) no-repeat center;
//             background-size: contain;
//             width: 100%;
//             height: 100%;
//             position: fixed;
//             z-index: 10000;
//             top: 0;
//             left: 0;
//             cursor: zoom-out;
//           `;
  
//           overlay.addEventListener('click', function() {
//             overlay.remove();
//           });
  
//           document.body.appendChild(overlay);
//         });
//       });
//     });
//   });
  

function openFullscreen(elementId) {
    var elem = document.getElementById(elementId);
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
  }
  
// Toggle menu
function myFunction() {
    var x = document.getElementById("nav-ul");
    var windowWidth = window.innerWidth;
  
    if (windowWidth >= 0 && windowWidth <= 644) {
        // if (windowWidth >= 645 && windowWidth <= 994) {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    } else {
      // For window widths outside the specified range, leave the menu as is
    }
  }
  
  