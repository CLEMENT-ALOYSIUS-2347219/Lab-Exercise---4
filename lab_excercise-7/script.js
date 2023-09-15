document.addEventListener("DOMContentLoaded", function() {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookList = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function() {
        // Make an AJAX request to fetch JSON data
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Parse the JSON data
                const books = JSON.parse(xhr.responseText);

                // Display the books on the webpage
                displayBooks(books);
            }
        };

        xhr.send();
    });

    function displayBooks(books) {
        // Clear previous book list
        bookList.innerHTML = "";

        // Create a list element to display each book
        const ul = document.createElement("ul");

        books.forEach(function(book) {
            const li = document.createElement("li");
            li.textContent = `Title: ${book.title}, Author: ${book.author}`;
            ul.appendChild(li);
        });

        // Append the list of books to the bookList div
        bookList.appendChild(ul);
    }
});
