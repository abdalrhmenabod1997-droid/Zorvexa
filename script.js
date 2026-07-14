document.addEventListener("DOMContentLoaded", () => {
    console.log("Zorvexa بدأ العمل بنجاح.");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            alert("مرحبًا بك في Zorvexa! هذه مجرد البداية 🚀");
        });
    }
});
