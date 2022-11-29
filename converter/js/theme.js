function doTransition() {
    document.getElementById("themechange").classList.add("doTransition");
}

function darkTheme() {
    theme = "dark";
    document.getElementById("themechange").classList.add("dark-theme");
    document.getElementById("themechange").classList.remove("bright-theme");

    document.getElementById("theme-toggleimg").src="../assets/img/bright-dark/sun.svg";
}


function brightTheme() {
    theme = "bright";
    document.getElementById("themechange").classList.add("bright-theme");
    document.getElementById("themechange").classList.remove("dark-theme");

    document.getElementById("theme-toggleimg").src="../assets/img/bright-dark/moon.svg";
}

function themeToggle() {
    if (theme == "dark") {
        brightTheme()
        doTransition()
        document.cookie = "theme=bright";
    }
    else if (theme == "bright") {
        darkTheme()
        doTransition()
        document.cookie = "theme=dark";
    }
}

if (document.cookie.includes("theme=bright")) {
    brightTheme()
} else if (document.cookie.includes("theme=dark")) {
    darkTheme()
} else {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        darkTheme()
        document.cookie = "theme=dark";
    } else {
        brightTheme()
        document.cookie = "theme=bright";
    }
}




