function showPopup() {
    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

window.onload = function() {
    showPopup();
};