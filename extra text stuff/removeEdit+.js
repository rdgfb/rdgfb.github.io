var element = document.getElementsByTagName("aa"), index;

for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}
document.getElementById("editPLUS").remove()
document.getElementById("editPLUSremoval").remove()
