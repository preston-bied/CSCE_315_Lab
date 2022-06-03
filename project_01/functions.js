var style1 = document.getElementById("style");
var style2 = document.getElementById("style2");
var no_style = document.getElementById("no_style");

function swap_style_sheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function no_css() {
    style1.onclick = swap_style_sheet("no_style.css");
    style2.onclick = swap_style_sheet("no_style.css");
}

function show_css() {
    no_style.onclick = swap_style_sheet("style.css");
    style2.onclick = swap_style_sheet("style1.css");
}

function show_new_css() {
    no_style.onclick = swap_style_sheet("style2.css");
    style1.onclick = swap_style_sheet("style2.css");
}