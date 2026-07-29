const form = document.querySelector("form");

if (form)
{
    form.addEventListener("submit", function(event)
    {
        event.preventDefault();

        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector("textarea");

        if (email.value.trim() === "" || message.value.trim() === "")
        {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you! Your message has been received.");

        form.reset();
    });
}
const catButton = document.querySelector("#catButton");
const catSection = document.querySelector("#catSection");
const catText = document.querySelector("#catText");

if (catButton)
{
    catButton.addEventListener("click", function()
    {
        catSection.style.display = "block";

        catText.textContent =
        "🐱 This is my debugging assistant Amora. She usually watches me code... but sometimes she creates more bugs than she solves!";
    });
}
const cards = document.querySelectorAll(".card");

cards.forEach(function(card)
{
    card.addEventListener("click", function()
    {
        card.style.border = "2px solid #0d6efd";
    });
});
