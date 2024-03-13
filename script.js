const myLibrary = []

	function getValue() {
		const title = document.getElementById("title").value
		const author = document.getElementById("author").value
		const pages = document.getElementById("pages").value
		const read = document.getElementById("read").
		value

		let bookObject = {
			title: title,
			author: author,
			pages: pages,
			read: read
		}

		function addBookToLibrary () {
			myLibrary.push(bookObject)
			console.log(myLibrary)
		}

		addBookToLibrary()

		const shelf = document.getElementById("shelf")
		const shelfDiv = document.createElement("div")
		shelfDiv.id = "shelfDiv"
		shelf.appendChild(shelfDiv)

		document.getElementById("shelfDiv")
		const shelfTitle = document.createElement("h3")
		shelfTitle.textContent = title
		shelfDiv.appendChild(shelfTitle)

		const shelfAuthor = document.createElement("p")
		shelfAuthor.textContent = author
		shelfDiv.appendChild(shelfAuthor)

		const shelfPages = document.createElement("p")
		shelfPages.textContent = pages
		shelfDiv.appendChild(shelfPages)

		const shelfRead = document.createElement("button")
		shelfRead.textContent = read
		shelfDiv.appendChild(shelfRead)

		const shelfRemove = document.createElement("button")
		shelfRemove.textContent = "Remove"
		shelfDiv.appendChild(shelfRemove)

		const pagesRestrict = document.getElementById("pages")

		pagesRestrict.addEventListener("keydown",function(event) {

		if (event.key === "Backspace" || event.key==="Delete" || event.key === "Tab" || eventkey=== "Escape" || event.key === "Enter") {
		return;
		}

		if (event.key < "0" || event.key > "9") {
			event.preventDefault();
		}
		})
	}



