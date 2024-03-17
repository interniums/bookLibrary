const myLibrary = []	
let buttonYesValue = 0;
let buttonNoValue = 0;

	pages.addEventListener("keydown", function(event) {

		if (event.keyCode != 8 &&
			event.keyCode != 46 &&
			event.keyCode != 37 && 
			event.keyCode != 39 && 
			(event.keyCode < 48 || event.keyCode > 57)) {
			event.preventDefault()
		} else {
			return
		}
	})

	readYes.addEventListener("click", function (event){
		if (event) {
			buttonYesValue = 1
			buttonNoValue = 0
			checkOutline ()
		} else {
			return
		}
	})

	readNo.addEventListener("click", function (event){
		if (event) {
			buttonNoValue = 1
			buttonYesValue = 0
			checkOutline ()
		} else {
			return
		}
	})

	title.addEventListener("keydown", function (event) {
		checkOutline ()
	})

	author.addEventListener("keydown", function (event) {
		checkOutline ()
	})

	pages.addEventListener("keydown", function (event) {
		checkOutline ()
	})

	function checkOutline () {
		if (title.value !== "") {
			title.setAttribute("style", "outline: none")
			title.placeholder = "Add title."
		} 
		if (author.value !== "") {
			author.setAttribute("style", "outline: none")
			author.placeholder = "Add author."
		} 
		if (pages.value !== "") {
			pages.setAttribute("style", "outline: none")
			pages.placeholder = "Add pages count."
		} 
		if (buttonYesValue == 1 || buttonNoValue == 1) {
			readYes.setAttribute("style", "outline: none")
			readNo.setAttribute("style", "outline: none")
		}
	}

	function getValue() {

		const title = document.getElementById("title")
		let titleValue = title.value
		const author = document.getElementById("author")
		let authorValue = author.value
		const pages = document.getElementById("pages")
		let pagesValue = pages.value
		const readYes = document.getElementById("readYes")
		const readNo = document.getElementById("readNo")

		let buttonValue = ''

		if (buttonNoValue > 0) {
			buttonValue = "No"
		} else if (buttonYesValue > 0) {
			buttonValue = "Yes"
		}

			if (title.value === "") {
				title.setAttribute("style", "outline: 1.5px solid red;")
				title.placeholder = "Add title."
			} 
			if (author.value === "") {
				author.setAttribute("style", "outline: 1.5px solid red;")
				author.placeholder = "Add author."
			} 
			if (pages.value === "") {
				pages.setAttribute("style", "outline: 1.5px solid red;")
				pages.placeholder = "Add pages count."
			} 
			if (buttonValue === "") {
				readYes.setAttribute("style", "outline: 1.5px solid red;")
				readNo.setAttribute("style", "outline: 1.5px solid red;")
			} 

			let bookObject = {
				title: titleValue,
				author: authorValue,
				pages: pagesValue,
				read: buttonValue
			}

			if (title.value !== "" && author.value !== "" && pages.value !== "" && buttonValue !== "") {
				addBookToLibrary()
				appendLibrary()
			}

		function addBookToLibrary () {
			myLibrary.push(bookObject)
			console.log(myLibrary)
		}

		function appendLibrary () {
			const shelf = document.getElementById("shelf")
			const shelfDiv = document.createElement("div")
			shelfDiv.id = ("shelfDiv" + title.value)
			console.log(shelfDiv.id)
			shelf.appendChild(shelfDiv)

			document.getElementById("shelfDiv")
			const shelfTitle = document.createElement("h3")
			shelfTitle.textContent = titleValue
			shelfDiv.appendChild(shelfTitle)

			const shelfAuthor = document.createElement("p")
			shelfAuthor.textContent = authorValue
			shelfDiv.appendChild(shelfAuthor)

			const shelfPages = document.createElement("p")
			shelfPages.textContent = pagesValue
			shelfDiv.appendChild(shelfPages)

			const shelfRead = document.createElement("button")
			shelfDiv.appendChild(shelfRead)
			shelfRead.id = ("shelfRead" + title.value)
			let shelfReadId = document.getElementById("shelfRead" + title.value)
			shelfReadId.textContent = bookObject.read
			shelfReadId.addEventListener("click", function(event){
				if (event) {
					if (shelfReadId.textContent === "Yes") {
						shelfReadId.textContent = "No"
					} else if (shelfReadId.textContent === "No"){
						shelfReadId.textContent = "Yes"
					}
				} else {
					return
				}
			})

			const shelfRemove = document.createElement("button")
			shelfRemove.textContent = "Remove"
			shelfDiv.appendChild(shelfRemove)
			shelfRemove.id = ("shelfRemove" + title.value)	
			const elementRemove = document.getElementById("shelfRemove" + title.value)
			elementRemove.addEventListener("click", function(event){
				if (event) {
					let element = elementRemove.parentElement
					element.remove()
				} else {return}
			}) 
		}

		title.value = ''
		author.value = ''
		pages.value = ''
		buttonValue = ''
		buttonYesValue = 0
		buttonNoValue = 0
	}



