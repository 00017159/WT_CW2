const editButtons = document.querySelectorAll(".edit-button");
const deleteButtons = document.querySelectorAll(".delete-button");

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const eventItem = button.closest(".event");
    const eventParagraph = eventItem.querySelector(".event-name p");
    const nameInput = eventItem.querySelector(".event-name input");
    const dateParagraph = eventItem.querySelector(".event-date p");
    const dateInput = eventItem.querySelector(".event-date input");
    const saveButton = eventItem.querySelector(".save-button");

    eventParagraph.style.display = "none";
    nameInput.style.display = "inline-block";
    dateParagraph.style.display = "none";
    dateInput.style.display = "inline-block";
    button.style.display = "none";
    saveButton.style.display = "inline-block";

    saveButton.addEventListener("click", () => {
      eventParagraph.textContent = nameInput.value;
      nameInput.style.display = "none";
      eventParagraph.style.display = "inline-block";
      dateParagraph.textContent = dateInput.value;
      dateInput.style.display = "none";
      dateParagraph.style.display = "inline-block";
      button.style.display = "inline-block";
      saveButton.style.display = "none";

      const id = eventItem.getAttribute("data-event-id");
      const event_name = nameInput.value;
      const event_date = dateInput.value;

      console.log("main:", id);

      fetch(`/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ event_name, event_date }),
      });
    });
  });
});

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const eventItem = button.closest(".event");
    const id = eventItem.getAttribute("data-event-id");

    fetch(`/delete/${id}`, {
      method: "DELETE",
    });

    eventItem.remove();
  });
});
