document.getElementById("textField").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const textField = document.getElementById("textField");
      const newNote = textField.value.trim();
      if (newNote !== "") {
        textField.value = ""; // Clear the input field
        const notesContainer = document.getElementById("notes-container");
        const newNoteElement = document.createElement("h1");
        newNoteElement.textContent = newNote;
        notesContainer.appendChild(newNoteElement);
      }
    }
  });
  