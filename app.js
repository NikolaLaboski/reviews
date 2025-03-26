// local reviews data
const reviews = [
  {
    id: 1,
    name: "Dusan Tadic",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Luka Modric",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Ivan Perisic",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Edin Dzeko",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Select items from the DOM (HTML)
const img = document.getElementById("person-img"); // Select the image element where the person's image will be displayed
const author = document.getElementById("author"); // Select the element where the author's name will be displayed
const job = document.getElementById("job"); // Select the element where the person's job title will be displayed
const info = document.getElementById("info"); // Select the element where the person's information (e.g., description) will be displayed

// Select buttons from the DOM
const prevBtn = document.querySelector(".prev-btn"); // Select the "previous" button
const nextBtn = document.querySelector(".next-btn"); // Select the "next" button
const randomBtn = document.querySelector(".random-btn"); // Select the "random" button

// Set the starting index of the item to be displayed (currentItem is 0 initially, which means the first item in the list)
let currentItem = 0;

// Function to show the person based on the currentItem index
function showPerson() {
  const item = reviews[currentItem]; // Get the current review data
  img.src = item.img; // Set the img src to the current person's image
  author.textContent = item.name; // Set the author's name in the HTML element
  job.textContent = item.job; // Set the job title of the author
  info.textContent = item.text; // Set the information about the author
}

// Call the showPerson function to display the first person when the page loads
showPerson(currentItem);

// Event listener for the "next" button click
nextBtn.addEventListener("click", function () {
  currentItem++; // Increment the currentItem index to show the next person
  if (currentItem > reviews.length - 1) {
    // If currentItem exceeds the length of the reviews array
    currentItem = 0; // Reset currentItem to 0, so the first person is displayed again
  }
  showPerson(); // Call showPerson to update the displayed person
});

// Event listener for the "previous" button click
prevBtn.addEventListener("click", function () {
  currentItem--; // Decrement the currentItem index to show the previous person
  if (currentItem < 0) {
    // If currentItem becomes negative (before the first item)
    currentItem = reviews.length - 1; // Set currentItem to the last item (looping backwards)
  }
  showPerson(); // Call showPerson to update the displayed person
});

// Event listener for the "random" button click
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length); // Set currentItem to a random number between 0 and the length of the reviews array
  showPerson(); // Call showPerson to update the displayed person based on the random index
});

/*
  Commented-out code below is an alternative way to call the showPerson function on page load.
  It would execute once the DOM is fully loaded, ensuring that the function runs when the page is ready.
  
  window.addEventListener("DOMContentLoaded", function(){
      showPerson(currentItem); // This ensures the page content is rendered when the DOM is fully loaded
  });
*/
