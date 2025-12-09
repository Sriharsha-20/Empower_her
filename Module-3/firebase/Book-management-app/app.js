// Import Firebase (modular v9)
import { initializeApp } from "https://book-management-app-a832f-default-rtdb.asia-southeast1.firebasedatabase.app/Book Management app.json";
import {
    getFirestore, collection, addDoc, getDocs, doc,
    deleteDoc, updateDoc, onSnapshot
} from "https://book-management-app-a832f-default-rtdb.asia-southeast1.firebasedatabase.app/Book Management app.json";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to books collection
const booksRef = collection(db, "books");

// Add Book (C in CRUD)
async function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let price = document.getElementById("price").value;
    let imageUrl = document.getElementById("imageUrl").value;

    await addDoc(booksRef, {
        title,
        author,
        price,
        imageUrl
    });

    alert("Book Added!");
}

// Realtime Display Books (R in CRUD)
onSnapshot(booksRef, (snapshot) => {
    const container = document.getElementById("books");
    container.innerHTML = "";

    snapshot.forEach((docSnap) => {
        let book = docSnap.data();
        let id = docSnap.id;

        container.innerHTML += `
            <div class="book-card">
                <img src="${book.imageUrl}">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: ₹${book.price}</p>

                <button onclick="updateAuthor('${id}')">Update Author</button>
                <button onclick="deleteBook('${id}')">Delete</button>
            </div>
        `;
    });
});

// Delete Book (D in CRUD)
async function deleteBook(id) {
    await deleteDoc(doc(db, "books", id));
}

// Update Author (U in CRUD)
async function updateAuthor(id) {
    let newAuthor = prompt("Enter new author:");
    if (!newAuthor) return;

    await updateDoc(doc(db, "books", id), {
        author: newAuthor
    });
}

// Make functions global for onclick()
window.addBook = addBook;
window.deleteBook = deleteBook;
window.updateAuthor = updateAuthor;
