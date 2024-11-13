//your JS code here. If required.
 document.getElementById('submit').addEventListener('click', function() {
            // Get input values
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;

            // Check if inputs are not empty
            if (title === '' || author === '' || isbn === '') {
                alert('Please fill in all fields');
                return;
            }

            // Create a new row
            const row = document.createElement('tr');

            // Add columns to the row
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
            `;

            // Append the row to the book list
            document.getElementById('book-list').appendChild(row);

            // Clear the input fields
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        });

        // Event delegation to remove book rows
        document.getElementById('book-list').addEventListener('click', function(e) {
            if (e.target.classList.contains('delete')) {
                e.target.parentElement.parentElement.remove();
            }
        });