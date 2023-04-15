// Now to make it work. Let’s define what we’re trying to achieve with pagination:

// 1.Only display a specific number of items on each page
// 2.Display page numbers based on how many times the total items are broken down
// 3.When a page number is clicked, change the display to that page
// 4.Allow navigating to previous and next pages
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// Calculate the pageCount by dividing the total number of items (listItems.length)
//  by the paginationLimit and rounding to the highest whole number using the Math.ceil function.
// So if we have 50 items and we only want to display
//  10 items per page, our page count will be 50/10 = 5
//  pages. Likewise, if we have 55 items and we want to
//  display 10 items per page, our page count will be
//  55/10 = 5.5 which rounds up to 6 pages.
const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

// Add Page Numbers
// Now that we know how many pages
//  we’ll need, we can define a function to
//  create a new button for the page number
//  and then add the buttons to the paginationNumbers
//   container.

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  paginationNumbers.appendChild(pageNumber);
};
const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};
//And then we’ll call the getPaginationNumbers function when the web page loads using the window.load() event:

// Display Active Page
// We want to define a function to only display as many items are
//allowed in the paginationLimit on each page. Here’s how we’ll implement it:

// Set the value of the currentPage variable to the pageNum value:

// Set Active Page Number
// We also want to define a function to
// add the active class to the page number
// we just clicked. We reset all buttons on
//  the page by removing the active class.
//  Then, if the page-index of the button
//  matches the currentPage global variable,
//  we add the active class to that button.

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");

    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });
  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

// Next and Previous Buttons
// Let’s extend this functionality to include the next and previous buttons.
//  We can use the same implementation in the setCurrentPage() function, and update the logic:

// for the previous button, we change the page using setCurrentPage(currentPage - 1)
// for the next button, we change the page using setCurrentPage(currentPage + 1)
// Include the event listeners for next and previous buttons in window.load():

// Disable Page Navigation Buttons
// We also want to include a disabling feature on the next and previous buttons.

// disable the previous button if we’re on the first page (if current page is 1)
// disable the next button if we're on the last page (if current page is total number of pages)

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};
const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};
const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};
