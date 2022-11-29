function german() {
    lang = "de";
    document.getElementById("bin").textContent = "Binär";
    document.getElementById("dec").textContent = "Dezimal";
    document.getElementById("hex").textContent = "Hexadezimal";

    document.getElementById("bin2").textContent = "Binär";
    document.getElementById("dec2").textContent = "Dezimal";
    document.getElementById("hex2").textContent = "Hexadezimal";

    document.getElementById("to").textContent = "zu";

    document.getElementById("convert-button").textContent = "--umwandeln->";


    document.getElementById("p-footer").innerHTML = "<a href='https://github.com/' target='_blank'>Quelle</a> • Entworfen von <a href='https://github.com/yohzu/' target='_blank'>yohzu</a>";

    document.getElementById("lang-toggleimg").src = "../assets/img/flags/uk.svg";

    document.getElementById("lang-toggleimg").title = "Sprache ändern";
    document.getElementById("theme-toggleimg").title = "Heller/dunkler Modus";
}

function english() {
    lang = "en";
    document.getElementById("bin").textContent = "Binary";
    document.getElementById("dec").textContent = "Decimal";
    document.getElementById("hex").textContent = "Hexadecimal";

    document.getElementById("bin2").textContent = "Binary";
    document.getElementById("dec2").textContent = "Decimal";
    document.getElementById("hex2").textContent = "Hexadecimal";

    document.getElementById("to").textContent = "to";

    document.getElementById("convert-button").textContent = "--convert->";

    document.getElementById("p-footer").innerHTML = "<a href='https://github.com/yohzu/inf-portfolio' target='_blan'>Source</a> • Designed by <a href='https://github.com/yohzu/' target='_blank'>yohzu</a>"

    document.getElementById("lang-toggleimg").src = "../assets/img/flags/de.svg";

    document.getElementById("lang-toggleimg").title = "change language";
    document.getElementById("theme-toggleimg").title = "dark/white mode";
}

function langToggle() {
    if (lang == "de") {
        english()
        document.cookie = "lang=en; path=/";
    }
    else if (lang == "en") {
        german()
        document.cookie = "lang=de; path=/";
    }
}


if (document.cookie.includes("lang=de")) {
    german()
} else if (document.cookie.includes("lang=en")) {
    english()
} else {
    if (navigator.language.includes("de") || navigator.userLanguage.includes("de")) {
        german()
        document.cookie = "lang=de; path=/";
    } else {
        english()
        document.cookie = "lang=en; path=/";
    }
}

