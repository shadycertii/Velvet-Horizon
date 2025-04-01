document.addEventListener("DOMContentLoaded", function () {
        // Insert Rooms Only If #room-container Exists
        const roomContainer = document.getElementById('room-container');
        if (roomContainer) {
            const rooms = [
                { name: 'Standard Room', price: 30000, image: './images/room1.jpg' },
                { name: 'Standard Room 2', price: 30000, image: 'images/room2.jpg' },
                { name: 'Standard Room 3', price: 30000, image: 'images/room3.jpg' },
                { name: 'Standard Room 4', price: 30000, image: 'images/room4.jpg' },
                { name: 'Deluxe Room', price: 100000, image: 'images/room5.jpg'},
                { name: 'Deluxe Room 2', price: 120000, image: 'images/bigroom2.jpg'},
                { name: 'Deluxe Room 3', price: 150000, image: 'images/bigroom3.jpg'}
            ];
    
            rooms.forEach(room => {
                roomContainer.innerHTML += `
                    <div class="room-card">
                        <img src="${room.image}" alt="${room.name}" class="img-fluid">
                        <h3>${room.name}</h3>
                        <p>Comfortable and luxurious stay.</p>
                        <p><strong>&#8358;${room.price.toLocaleString()} / Night</strong></p>
                        <button class="btn btn-book" onclick="selectRoom('${room.name}', ${room.price})">Select Room</button>
                    </div>
                `;
            });
        } else {
            console.warn("⚠ room-container not found. Skipping room insertion.");
        }
    });




const galleryData = {
            gallery1: [
                "./images/hotel1.jpg",
                "./images/felipepelaquim-1qvUsVrKrMI-unsplash.jpg",
                "./images/reisetopia-oukA5uMuALg-unsplash (1).jpg",
                "./images/hotel1.jpg",
                "./images/isaac-quesada-xc4oxgAbDmw-unsplash.jpg",
                "./images/hotel1.jpg",
                "./images/room1.jpg",
                "./images/room2.jpg",
                "./images/room4.jpg",
                "./images/room7.jpg",
                "./images/room3.jpg",
                "./images/room5.jpg",
            ],
            gallery2: [
             "./images/guestroom1.jpg",
                "./images/bigroom2.jpg",
                "./images/bigroom3.jpg",
                "./images/bigroom4.jpg",
                "./images/guestroom1.jpg",
                "./images/guestroom2.jpg",
                "./images/guestroom3.jpg",
                "./images/guestroom4.jpg",
            ]
        };


document.addEventListener("DOMContentLoaded", function () {
    // Check if the div #restaurantC exists before running the script
    const restaurantC = document.getElementById('restaurantC');
    
    if (restaurantC) {
        const foods = [
            { name: 'Amala', Price: '4000 Per Meal', images: './images/amala.png' },
            { name: 'Jollof Rice', Price: '3000 Per Meal', images: './images/jollof.jpg' },
            { name: 'Chicken and Chips', Price: '3000 Per Meal', images: './images/chips.jpg' },
            { name: 'Baken Egg and Cheese', Price: '6000 Per Meal', images: './images/baken.jpg' },
            { name: 'Fried Rice', Price: '7000 Per Meal', images: './images/fried.jpg' },
            { name: 'Pasta', Price: '3000 Per Meal', images: './images/pasta.jpg' },
            { name: 'Full chicken', Price: '10000', images: './images/turkey.jpg' },
            { name: 'Turkey', Price: '13000', images: './images/chicked.jpg' },
        ];

        foods.forEach(food => {
            restaurantC.innerHTML += `
                <div class="col-md-3 restcard gallery-img item-1">
                    <img src="${food.images}" class="card-img border-rounded" alt="${food.name}">
                    <h3>${food.name}</h3>
                    <h4>&#8358;${food.Price.toLocaleString()}</h4>
                </div>
            `;
        });
    } else {
        console.warn("⚠ Warning: <div id='restaurantC'> not found. Skipping food list injection.");
    }
});
 

document.addEventListener("DOMContentLoaded", function () {

    const guestsec = document.getElementById('guests');

    if (guestsec) {
        const guests = [
            { name: "Luxury Haven", special: "Bobby's Special (3 days stay)", price: 150000, images: "images/guestroom1.jpg" },
            { name: "Serene Suite", special: "A luxurious stay for business and leisure", price: 250000, images: "images/guestroom2.jpg" },
            { name: "Regal Retreat", special: "Designed for guests who appreciate sophistication", price: 100000, images: "images/guestroom3.jpg" },
            { name: "Tranquil Escape", special: "A calm and refreshing atmosphere", price: 350000, images: "images/guestroom4.jpg" },
            { name: "Royal Elegance", special: "Fit for those who love grandeur", price: 200000, images: "images/deluxee.jpg" },
            { name: "Opulent Oasis", special: "A premium room with top-tier amenities", price: 170000, images: "images/guestroom6.jpg" },
            { name: "Skyline View Room", special: "A lavish getaway with the finest comforts", price: 300000, images: "images/guestex2.jpg" }
        ];

        guests.forEach(guest => {
            guestsec.innerHTML += `
                <div class="room-card">
                    <img src="${guest.images}" alt="${guest.name}" class="img-fluid">
                    <h3>${guest.name}</h3>
                    <p style="color: #cc8c2b;">${guest.special}</p>
                    <p><strong>&#8358;${guest.price.toLocaleString()}</strong></p>
                    <button class="btn btn-book" onclick="selectRoom('${guest.name}', ${guest.price})">Select Room</button>
                </div>
            `;
        });
    } else {
        console.warn("⚠ Warning: <div id='guests'> not found. Skipping guest room injection.");
    }
});


function selectRoom(roomName, roomPrice) {
    document.getElementById('room-name').textContent = roomName;
    document.getElementById('room-price').textContent = `₦${roomPrice.toLocaleString()}`;
    document.getElementById('selected-room').style.display = 'block';
}

// const divsContainer = document.getElementById('divsContainer');

// const divsContainers = [
//     {head: "What do Velvet Horizon Offers?", para : ""},
// ]


document.addEventListener("DOMContentLoaded", function () {
    const divsContainer = document.getElementById("divsContainer");

    if (divsContainer) {
        // Detect the page URL and assign different content
        let pageTitle = "What does Velvet Horizon Offer?";
        let breadcrumb = "Home / Offers";

        if (window.location.pathname.includes("meetings.html")) {
            pageTitle = "Meetings and Events";
            breadcrumb = "Home / Meetings";
        } else if (window.location.pathname.includes("recreateservice.html")) {
            pageTitle = "Recreational service";
            breadcrumb = "Home / Recreational service";
        } else if (window.location.pathname.includes("events.html")) {
            pageTitle = "Plan Your Events With Us";
            breadcrumb = "Home / Events";
        } else if (window.location.pathname.includes("conser.html")) {
            pageTitle = "Contact Services";
            breadcrumb = "Home / Contact Services";
        }
        else if (window.location.pathname.includes("gallery.html")) {
            pageTitle = "Welcome to Velvet Horizon' Gallery";
            breadcrumb = "Home / Gallery";
        }
        else if (window.location.pathname.includes("feedback.html")) {
            pageTitle = "Your feedback is really important to Us";
            breadcrumb = "Home / Feedback";
        }


        divsContainer.innerHTML = `
            <div class="divsContainer">
                <div class="divsC col-md-6 text-left">
                    <h1 class="py-2">${pageTitle}</h1>
                    <i class="py-2" style="color: #cc8c2b;">${breadcrumb}</i>
                </div>
            </div>
        `;
    } else {
        console.warn("⚠ Warning: <section id='divsContainer'> not found. Skipping section injection.");
    }
});








        function loadGallery(galleryName) {
            const galleryContent = document.getElementById('galleryContent');
            galleryContent.innerHTML = '';
        
            galleryData[galleryName].forEach(imageSrc => {
                const col = document.createElement('div');
                col.className = 'col-lg-2 col-md-3 col-sm-6 col-12';
                col.innerHTML = `<img src="${imageSrc}" alt="Gallery Image" onclick="openLightbox('${imageSrc}')">`;
                galleryContent.appendChild(col);
            });
        
            document.getElementById('fullscreenGallery').style.display = 'flex';
        }

        var errormsg = document.getElementById("errormsg")
        var notsuc = document.getElementById("notsuc");
        var paycon = document.getElementById("paycon");
        var container = document.getElementById("container");
        function payWithPaystack() {
            let name = document.getElementById("full-name").value;
            let amountText = document.getElementById("amount").value;
            let email = document.getElementById("email").value;
            let emailC = document.getElementById('emailC').value;
    
     // Remove non-numeric characters from amount (e.g., ₦150,000 → 150000)
     let amount = amountText.replace(/[^\d]/g, ''); 

     // Ensure amount is a valid number
     if (!amount || isNaN(amount)) {
         alert("Error: Invalid amount.");
         return;
     }
 
     // Convert amount to kobo
     let amountInKobo = parseInt(amount) * 100;

             if (!email || !name) {
            errormsg.style.display = "block";
            errormsg.innerHTML = "Please enter your email and full name"
                 return;
             } else if (email != emailC) {
                errormsg.style.display = "block";
                errormsg.innerHTML = "Your Email does not match"
              }   else if (!email.includes("@") || !emailC.includes("@") ) {
                errormsg.style.display = "block";
                errormsg.innerHTML = "Enter a valid email address";
                return;
            }  else{
                errormsg.style.display = "none";
                errormsg.innerHTML = " "
             }
             
    
            let handler = PaystackPop.setup({
                key: 'pk_test_7056dc958a65c6a7ead2c5fa6471ea99be18d009',
                email: email,
                amount: amountInKobo, // Convert to kobo
                currency: "NGN",
                ref: "TXN_" + Math.floor((Math.random() * 1000000000) + 1), // Unique transaction ref
                callback: function(response) {
                    let payconDiv = document.getElementById("paycon");
                    payconDiv.innerHTML = `
                        <h2>Payment Successful!</h2>
                        <p>Your payment was successful. We will contact you as soon as possible to confirm your reservation.</p>
                        <p><strong>Transaction Reference:</strong> ${response.reference}</p>
                        <button onclick="closePayment()" class="btn w-100" style="background-color: #cc8c2b; color: #fff;">Close</button>
                    `;
        
                    saveTransaction(response.reference);

                },
            });
            handler.openIframe();
        }
        function closePayment() {
            document.getElementById("paycon").style.display = "none";
            document.getElementById("selected-room").style.display = "none";
            location.reload();
        }

         document.getElementById("mrright").addEventListener('click',()=>{
         notsuc.style.display = "none";
         document.getElementById("allb").classList.remove('blur');
       })

       function viewpay() {
        paycon.style.display = "block";
        document.getElementById("allb").classList.add('blur')
        // container.classList.add('blur')
       };
       function mrright2() {
           paycon.style.display = "none";
           notsuc.style.display = "block";
           document.getElementById('selected-room').style.display = "none"
       }
       
       function mrright() {
        document.getElementById('navbardis').style.display = 'none';
           document.getElementById("allb").classList.remove('blur')
           notsuc.style.display = "none";
       }

       function openGallery() {
            document.getElementById('fullscreenGallery').style.display = 'flex';
        }

        function closeGallery() {
            document.getElementById('fullscreenGallery').style.display = 'none';
        }
        function openLightbox(imageSrc) {
            document.getElementById('lightbox').style.display = 'flex';
            document.getElementById('lightbox-img').src = imageSrc;
        }

        function closeLightbox() {
            document.getElementById('lightbox').style.display = 'none';
        }



        const checkinInput = document.getElementById("checkin");
        const checkoutInput = document.getElementById("checkout");
if (checkinInput) {
    
    document.addEventListener("DOMContentLoaded", function () {
    
        // Function to get today's date in YYYY-MM-DD format
        function getTodayDate() {
            const today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1; // January is 0!
            const yyyy = today.getFullYear();
    
            if (dd < 10) dd = "0" + dd;
            if (mm < 10) mm = "0" + mm;
    
            return `${yyyy}-${mm}-${dd}`;
        }
    
        // Set the minimum date for check-in and check-out
        const todayDate = getTodayDate();
        checkinInput.min = todayDate;
        checkoutInput.min = todayDate;
    
        // Update checkout minimum date when check-in is selected
        checkinInput.addEventListener("change", function () {
            checkoutInput.min = checkinInput.value;
            if (checkoutInput.value < checkinInput.value) {
                checkoutInput.value = checkinInput.value;
            }
        });
    });
    
}     console.warn("⚠ Warning: Date div not found. Skipping.");

// Function to validate form and check availability
function checkaval() {
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const rooms = document.getElementById("rooms").value;
    const errorMsg = document.getElementById("erroraval");


    const todayDate = new Date().toISOString().split('T')[0];


    // Validate inputs
    if (!checkout) {
        errorMsg.textContent = "Please select both check-in and check-out dates.";
        errorMsg.style.color = "red";
        return;
    }
    if (checkout <= checkin) {
        errorMsg.textContent = "Check-out date must be later than check-in.";
        errorMsg.style.color = "red";
        return;
    }
    if (!checkin || checkin < todayDate) {
        errorMsg.textContent = "Please enter a correct date.";
        errorMsg.style.color = "red";
        return;
    }
    if (rooms === "") {
        errorMsg.textContent = "Please select a room type.";
        errorMsg.style.color = "red";
        return;
    }


    errorMsg.style.color = "green";
    errorMsg.textContent = `Rooms are available from ${checkin} to ${checkout} for the ${rooms} room.`;
}







// document.getElementById('navtar').addEventListener('click',()=>{
//     document.getElementById('navbarNav').style.display = "block";
//     document.getElementById('navtar').style.display = "none";
//     document.getElementById('canC').style.display = "block";
// })

// document.getElementById('canC').addEventListener('click', ()=>{
//     document.getElementById('navbarNav').classList.add('canC');

//     setTimeout(()=>{
//         document.getElementById('navbarNav').style.display = "none";
//     document.getElementById('navtar').style.display = "Block";
//     document.getElementById('canC').style.display = "none";
//     document.getElementById('navbarNav').classList.remove('canC');
//     }, 800);
// })

    function confirmBooking() {
        const roomName = document.getElementById('room-name').textContent;
        const roomPriceText = document.getElementById('room-price').textContent;
        const roomPrice = roomPriceText.replace(/[^\d]/g, ''); // Extracts numeric value
    
        alert(`You have selected ${roomName} at ${roomPrice}. Redirecting to payment...`);
        document.getElementById('paycon').style.display = "block";
        if (!roomPrice) {
            alert("Error: Room price not found.");
            return;
        }


        document.getElementById('amount').value = `₦${parseInt(roomPrice).toLocaleString()}`;
        document.getElementById('allb').classList.add('blur');
        document.getElementById('selected-room').style.display = 'none';
        document.getElementById('navbardis').style.display = 'block'
    };

function mrright3() {
    document.getElementById('selected-room').style.display = 'none';
}


function exploreButton() {
    document.getElementById('guestHouseSection').style.display = 'block';
    document.getElementById('navbardis').style.display = 'none';
}

function closeButton() {
    document.getElementById('guestHouseSection').style.display = 'none';
      document.getElementById('standarddiv').style.display = 'none';
      document.getElementById('navbardis').style.display = 'block';
      document.getElementById('gorr').style.display = 'block';
}

function booknoww() {
    document.getElementById('gorr').style.display = 'block';
}


function mrright4() {
    document.getElementById('gorr').style.display = 'none'; 
}


function soption() {
    document.getElementById('standarddiv').style.display = 'block';
    document.getElementById('gorr').style.display = 'none';
    document.getElementById('navbardis').style.display = 'none';
    document.getElementById('allb').classList.remove('blur');
}

function guestbook() {
    document.getElementById('guestHouseSection').style.display = 'block';
    document.getElementById('gorr').style.display = 'none';
    document.getElementById('navbardis').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    var faqQuestions = document.getElementsByClassName("faq-question");

    for (var i = 0; i < faqQuestions.length; i++) {
        faqQuestions[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove('active');
            if (idx === index) {
                item.classList.add('active');
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    showItem(currentIndex);
    setInterval(nextItem, 1000); // Change slide every 3 seconds
});



document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item2');
    const totalItems = items.length;

    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove('active');
            if (idx === index) {
                item.classList.add('active');
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    showItem(currentIndex);
    setInterval(nextItem, 3000);
});


// window.onload = function() {
//     var loader = document.getElementById('loader');
//     var content = document.getElementById('content');
    
//     setTimeout(function() {
//         loader.style.display = 'none';
//         content.style.display = 'block';
//     }, 3000); // Change the duration as needed
// };



const loading = `
<div id="pageLoader" class="loader-wrapper">
    <div class="loader loader-17">
        <div class="css-square square1"></div>
        <div class="css-square square2"></div>
        <div class="css-square square3"></div>
        <div class="css-square square4"></div>
        <div class="css-square square5"></div>
        <div class="css-square square6"></div>
        <div class="css-square square7"></div>
        <div class="css-square square8"></div>
    </div>
</div>
`

const navbar = `
    <header class="header" id="header">
<nav class="navbar-light bg-dark top-navbar" id="top-navbar">
    <div class="container d-flex justify-content-between">
        <div class="firstbtns">
            <a class="btnnn" style="background: #c9a062; color: #fff; cursor : pointer;" onclick = "soption()">STANDARD ROOMS</a>
            <a class="btnnn" style="background: #cc8c2b; color: #fff; cursor : pointer;" onclick = "guestbook()">GUEST HOUSE</a>
        </div>
     

            <p style="color: #c9a062; margin: 0;" class="dnone upnaavp">
                <i class="fas fa-envelope"></i> info@velvethorizon.com
            </p>


        <div class="middle-section text-center smnone">
            <p style="color: #c9a062; margin: 0; font-size: 14px;">
                <i class="fas fa-phone-alt"></i> +234 123 456 789 | 
                <i class="fas fa-envelope"></i> info@velvethorizon.com
            </p>
        </div>
        <div class="middle-section text-center">
            <a class="btnnn" style="border-top: 1px solid #c9a062;border-bottom: 1px solid #c9a062; color: #fff;" href="./events.html">Book Events</a>
        </div>
<div id="spinicon">
    <a href="#" class="me-2" style="color: #c9a062;"><i class="fab fa-facebook"></i></a>
    <a href="#" class="me-2" style="color: #c9a062;"><i class="fab fa-twitter"></i></a>
    <a href="#" class="me-2" style="color: #c9a062;"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
</div>
    </div>
</nav>
</header>


  <nav class="nav" id="mnav">
        <div class="nav-left">
               <a href="./whtweoffer.html">What velvet Offers</a>
               <a href="./recreateservice.html">Recreational Services</a>
               <a href="./gallery.html">Gallery</a>
               <a href="./meetings.html">Meetings</a>
        </div>

          <div class="nav-center">
        <a class="logo" href="./index.html">
            <img src="./images/logo.png" height="80px" width="80px" alt="Hotel Logo">
        </a>
          </div>

               <div class="nav-right">
                        <a href="./conser.html">Contact Services</a>
              <a href="./feedback.html">Feedback</a>
                    <a href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
                        Velvet
                    <span style="padding-down:20px;"><i class="fa fa-angle-down text-light"></i></span></a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="index.html#blog">Our History</a></li>
                        <li><a class="dropdown-item" href="index.html#team">Meet the Team</a></li>
                        <li><a class="dropdown-item" href="./feedback.html">Testimonials & Feedbacks</a></li>
                </li>
            </ul>
            </div>
            
            <button class="btn navB" style="border-radius: 0px; background: #c9a062; color: #fff;" onclick="booknoww()">Book Now</button>


     <button class="menu-toggle" onclick="toggleMenu()">☰</button>
</nav>

    <div class="mobile-menu" id="mobileMenu">

       <span class="close-btn" id="closebtn" onclick="toggleMenu()">&times;</span>

        <a class="logo text-center" href="./index.html">
            <img src="./images/logo.png" style="border-radius:10px;" height="80px" width="80px" alt="Hotel Logo">
        </a>
        
        <div class="borderr"></div>

<a href="./index.html" style="padding-top:30px;"> <span><i class="fa fa-home pe-2"></i></span>Home</a>
               <a href="./whtweoffer.html">  <span><i class="fa fa-tags pe-2"></i></span>What velvet Offers</a>
               <a href="./recreateservice.html"><span><i class="fa fa-swimmer pe-2"></i></span>Recreational Services</a>
               <a href="./gallery.html"><span><i class="fa fa-images pe-2"></i></span>Gallery</a>
               <a href="./meetings.html"><span><i class="fa fa-users pe-2"></i></span>Meetings</a>
            <a href="./conser.html"><span><i class="fa fa-phone pe-2"></i></span>Contact Services </a>
            
                                <a href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
                                <span><i class="fa fa-hotel pe-2"></i></span>
                        Velvet
                    <span style="padding-down:20px;"><i class="fa fa-angle-down text-light"></i></span></a>
            <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="index.html#blog">Our History</a></li>
                        <li><a class="dropdown-item" href="index.html#team">Meet the Team</a></li>
                        <li><a class="dropdown-item" href="./feedback.html">Testimonials & Feedbacks</a></li>
                </li>
            </ul>
              <a href="./feedback.html"><span><i class="fa fa-comments pe-2"></i></span>Feedback</a>

            <p style="color: #c9a062; padding-top:10px; font-size: 13px;">
                <i class="fas fa-phone-alt"></i> +234 123 456 789</i>
            </p>
            <p style="color: #c9a062; margin: 0; padding: 10px 0px; font-size: 13px;">
                <i class="fas fa-envelope"></i> info@velvethorizon.com</i>
            </p>

<div class="pt-3">
    <a href="#" class="me-2" style="color: #c9a062;"><i class="fab fa-facebook"></i></a>
    <a href="#" class="me-2" style="color: #c9a062;"><i class="fab fa-twitter"></i></a>
    <a href="#" class="me-2" style="color: #c9a062;"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
</div>

<button class="book-btn" onclick="booknoww()">Book Now</button>
    </div>    
    `;
        
const eventB = `
    <section class="offers-section eventsec">
        <h2>Host Your Events With Us</h2>
        <a href="./events.html" class="btn btn-success" style="border-radius: 0px; padding: 15px;">Plan Your Event</a>
    </section>
`

const footer = `
<footer class="footer bg-dark text-light pt-4 pb-2">
    <div class="container">
        <div class="py-5">
          <a href="./index.html"> <img src="./images/logo.png" style="border-radius: 20px;" alt=""> </a>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h5 class="text-uppercase">Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="./events.html" class="text-light text-decoration-none">Events</a></li>
                    <li><a href="./whtweoffer.html" class="text-light text-decoration-none">What velvet offers</a></li>
                    <li><a href="./gallery.html" class="text-light text-decoration-none">Gallery</a></li>
                    <li><a href="./conser.html" class="text-light text-decoration-none">Contact Us</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h5 class="text-uppercase">Contact Us</h5>
                <p><i class="fas fa-map-marker-alt"></i> 123 Luxury Street, Lagos, Nigeria</p>
                <p><i class="fas fa-phone"></i> +234 123 456 789</p>
                <p><i class="fas fa-envelope"></i> info@alothotel.com</p>
            </div>
            <div class="col-md-4 text-md-end">
                <h5 class="text-uppercase py-2">Follow Us</h5>
                <a href="#" class="text-light me-3"><i class="fab fa-facebook fa-lg"></i></a>
                <a href="#" class="text-light me-3"><i class="fab fa-twitter fa-lg"></i></a>
                <a href="#" class="text-light me-3"><i class="fab fa-instagram fa-lg"></i></a>
                <a href="#" class="text-light"><i class="fab fa-linkedin fa-lg"></i></a>
                <h5 class="text-uppercase mt-3">Newsletter</h5>
                <input type="email" class="newsletter-input" placeholder="Enter your email">
                <button class="newsletter-btn">Subscribe</button>
            </div>
        </div>
        <hr>
        <div class="text-center mt-3">
            <p class="mb-0">&copy; 2025 Alot Hotel. All Rights Reserved.</p>
        </div>
    </div>
</footer>
`;
const cookies = `
<div class="cookie-consent-banner" id="cookieban">
  <div class="cookie-consent-banner__inner">
    <div class="cookie-consent-banner__copy">
      <div class="cookie-consent-banner__header">THIS WEBSITE USES COOKIES</div>
      <div class="cookie-consent-banner__description">This website uses cookies to enhance user experience, analyze site traffic, and personalize content. By continuing to browse, you agree to our use of cookies for improved functionality and seamless interaction.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequuntur esse doloribus voluptate et vel iusto ea tenetur hic deleniti!</div>
    </div>

    <div class="cookie-consent-banner__actions">
      <button onclick="revCookies()" class="border-0 cookie-consent-banner__cta">
        Accept
      </button>
      
      <button onclick="revCookies()" class="cookie-consent-banner__cta cookie-consent-banner__cta--secondary">
        Decline
      </button>
    </div>
  </div>
</div>
`

if (    document.getElementById('eventb')) {
    
    document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('eventb').innerHTML = eventB
    })
    
} else {
    console.warn('Event div not found, Skipping ts')
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pageload").innerHTML = loading;
    document.getElementById("navbardis").innerHTML = navbar;
    document.getElementById("footer-section").innerHTML = footer;
    document.getElementById('cook').innerHTML = cookies;
});

// $(document).on("click", '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
//   });

// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".filter-btn");
//     const images = document.querySelectorAll(".image-card");

//     buttons.forEach(button => {
//         button.addEventListener("click", function () {
//             const category = this.getAttribute("data-category");

//             images.forEach(img => {
//                 img.classList.remove("show"); // Hide all images
//                 if (img.classList.contains(category)) {
//                     img.classList.add("show"); // Show the selected category
//                 }
//             });

//             // Update active button styling
//             buttons.forEach(btn => btn.classList.remove("btn-primary"));
//             this.classList.add("btn-primary");
//         });
//     });
// });
"use strict";
const obj = document.querySelector("#gallery");
if (obj) {
    (function () {
        window.onload = () => {
    
            function animStart() {
                obj.classList.add("active"); // Add animation class
            }
    
            animStart(); // Start the loop immediately
        };
    })();   
} else {
    console.warn("⚠ Warning: Gallery not found. Skipping.");
}


if ($(".slider").owlCarousel) {
    $(".slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
      });    
}else {
    console.warn("⚠ Warning: carousel not found. Skipping.");
}


  document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carou-item");
    const totalItems = items.length;

    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove("active");
            if (idx === index) {
                item.classList.add("active");
            }
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }, 2000);
});


//   document.getElementById("feedback-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     let isValid = true;
//     let comments = document.getElementById("comments").value.trim();
//     let commentWords = comments.split(/\s+/).filter(word => word.length > 0).length;
//     let errorMsg = document.getElementById("error-msg");

//     // Validate that at least one radio button is checked
//     let radioGroups = ["experience"];
//     for (let group of radioGroups) {
//         let checkedOption = document.querySelector(`input[name="${group}"]:checked`);
//         if (!checkedOption) {
//             isValid = false;
//             alert("Please answer all questions before submitting.");
//             return;
//         }
//     }

//     // Validate text area (at least 10 words)
//     if (commentWords < 10) {
//         errorMsg.style.display = "block";
//         isValid = false;
//         return;
//     } else {
//         errorMsg.style.display = "none";
//     }

//     // If everything is valid, show pop-up and reset form
//     if (isValid) {
//         document.getElementById("popup").style.display = "block";
//         document.getElementById("overlay").style.display = "block";

//         setTimeout(() => {
//             document.getElementById("feedback-form").reset();
//         }, 500);
//     }
// });

// function closePopup() {
//     document.getElementById("popup").style.display = "none";
//     document.getElementById("overlay").style.display = "none";
// }



// Contact & Feedback






//     document.getElementById("Csubmit").addEventListener("click", ()=> {


//         // Validate fields
//         if (!namee || !emaill || !subjectt || !messagee) {
//             errorMsgg.style.display = "block";
//             errorMsgg.innerHTML = "All fields are required!";
//         } else if (messagee < 10 ){

    
//         } else if (!emaill.includes("@")) {
//             errorMsgg.style.display = "block";
//             errorMsgg.innerHTML = "Enter a valid email address!";
//         } else {
//             errorMsgg.style.display = "none";
//             popupp.style.display = "flex";
//         }

//         // Hide popup after 3 seconds if the user doesn't close it manually
//         setTimeout(function () {
//             closePopup();
//         }, 3000);

//         // Reset form fields
//         document.getElementById("contactForm").reset();
//     });



// document.getElementById('csubmit').addEventListener("click", (e)=>{
//     e.preventDefault();
//         let namee = document.getElementById("conName");
//         let emaill = document.getElementById("conEmail");
//         let subjectt = document.getElementById("conSub");
//         let messagee = document.getElementById("conMsg");
//         let contactError = document.getElementById("contactError");
//         let popupp = document.getElementById("contactPopup");

// if (!namee || !emaill || !subjectt || !messagee){
//             contactError.style.display = "block";
//             contactError.innerHTML = "All fields are required!";
// } else if (messagee < 10){
//             contactError.style.display = "block";
//             contactError.innerHTML = "Your mesage should be at least 10 words";
// }    else if (!emaill.includes("@")) {
//             contactError.style.display = "block";
//             contactError.innerHTML = "Enter a valid email address!";
//         } else {
//             contactError.style.display = "none";
//             popupp.style.display = "flex";
//         }

// })

var cform = document.getElementById('Contactform');

if (cform) {
    document.getElementById('csubmit').addEventListener("click", function () {
    
            event.preventDefault();
    
            var conName = document.getElementById('conName');
            var conEmail = document.getElementById('conEmail');
            var conSub = document.getElementById('conSub');
            var conMsg = document.getElementById('conMsg');
            var contactError = document.getElementById('contactError');
            var popupp = document.getElementById('contactPopup');
    
            // Trim input values to remove spaces
            let nameValue = conName.value.trim();
            let emailValue = conEmail.value.trim();
            let subValue = conSub.value.trim();
            let msgValue = conMsg.value.trim();
    
            // Validate fields
            if (!nameValue || !emailValue || !subValue || !msgValue) {
                contactError.style.display = "block";
                contactError.innerHTML = "All fields are required!";
                return;
            } if (!emailValue.includes("@")) {
                contactError.style.display = "block";
                contactError.innerHTML = "Enter a valid email address!";
                return;
            } if (msgValue.split(" ").length < 10) {
                contactError.style.display = "block";
                contactError.innerHTML = "Your message should be at least 10 words.";
                return;
            } else {
                contactError.style.display = "none"; // Hide error message
                popupp.style.display = "flex"; // Show popup
                document.getElementById('contactForm').reset();
            }
        });
    
} else {
    console.warn('Div not found, Skipping')
}


// Function to close the popup
function closePopup() {
    document.getElementById("contactPopup").style.display = "none";
}


var Bform = document.getElementById('bookingform');

if (Bform) {
    
    document.getElementById('Eclick').addEventListener("click", ()=>{

     event.preventDefault();

        var Ename = document.getElementById('Ename');
        var Eemail = document.getElementById('Eemail');
        var Ehall = document.getElementById('Ehall');
        var Eevent = document.getElementById('Eevent');
        var Edate = document.getElementById('Edate');

    
        let EnameValue = Ename.value.trim()
        let EemailValue = Eemail.value.trim()
        let EhallValue = Ehall.value.trim()
        let EeventValue = Eevent.value.trim()
        let EdateValue = Edate.value.trim()
    
        if (!EnameValue || !EemailValue || !EhallValue || !EeventValue || !EdateValue) {
            contactError.style.display = "block";
            contactError.innerHTML = "All fields are required!";
            return;
        } else {
            contactError.style.display = "none"; // Hide error message
            let popupp = document.getElementById('contactPopup');
            popupp.style.display = "flex"; // Show popup
            let popuppDiv = document.getElementById('popD');
            popuppDiv.innerHTML = `
                <i class="fa fa-xmark close-popup" onclick="closePopup()"></i>
                <h2>Booking Confirmed!</h2>
                <div class="borderr"></div>
                <p>We've got your booking, we'll contact you ASAP!</p>
                <p style="color: #b07b1f;">If you have any further questions, contact us at +1234567890</p>
            `;
            document.getElementById('bookingform').reset(); 
        }
    
    })
    
} else {
    console.warn('Div not found here, Skipping')
}
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const content = document.getElementById("allb"); // Main content area

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        content.classList.add("blur"); // Add blur when menu opens
    } else {
        content.classList.remove("blur"); // Remove blur when menu closes
    }
}


document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobileMenu");
    const toggleBtn = document.querySelector(".menu-toggle");
    const content = document.getElementById("allb");

    if (!menu.contains(event.target) && event.target !== toggleBtn) {
        menu.classList.remove("active");
        content.classList.remove("blur"); // Ensure blur is removed when clicking outside
    }
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("pageLoader").classList.add("fade-out");
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("cookieban").style.bottom = "0px";
    }, 3000); // Delay before popup appears
});

function revCookies() {
    document.getElementById("cookieban").style.bottom = "-500px";
    setTimeout(() => {
        document.getElementById("cookieban").style.display = "none";
    }, 1000);
}


$(document).ready(function () {
    let lastScrollTop = 0;

    $(window).on("scroll", function () {
        let currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop + 60) { 
            $("#header").css("display", "none")
            $("#mnav").css("top", "0px");
        } else if (currentScroll < lastScrollTop - 50) { 
            $("#header").css("display", "block")
            $("#mnav").css("top", "80px");
        }

        lastScrollTop = currentScroll;
    });
});