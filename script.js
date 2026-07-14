document.addEventListener("DOMContentLoaded", () => {
    console.log("Zorvexa جاهزة");

    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("هذه ميزة تجريبية، وسيتم ربطها بالنظام الحقيقي لاحقًا.");
        });
    });
});
