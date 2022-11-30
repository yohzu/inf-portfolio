function german() {
    lang = "de";
    document.getElementById("nav-projects").textContent = "Projekte";
    document.getElementById("nav-converter").textContent = "Umwandler";

    document.getElementById("about-short").textContent = "16-jähriger Schüler, Deutschland";

    document.getElementById("Header-Privacy").textContent = "Privatsphäre ist mir wichtig.";
    document.getElementById("Content-Privacy").textContent = "Privatsphäre und Datenschutz sind für mich sehr wichtige Themen. Das ist auch, wieso ich aufgehört habe, verdächtige und unseriöse proprietäre Software, wie das Windows Betriebssystem zum Beispiel, zu nutzen. Ich glaube daran, dass die Privatsphäre ein fundamentelles Menschenrecht ist, dass niemals von irgendwem verletzt werden sollte. Ich bin ein großer Unterstützer von Free und Open Source Software (FOSS) und veröffentliche meinen Code ausschließlich unter Open Source Lizensen.";

    document.getElementById("Header-Linux").textContent = "Ich nutze Linux (btw).";
    document.getElementById("Content-Linux").textContent = "Seit ungefähr 1.5 Jahren verwende ich Linux als meinen Daily Driver und würde auch nie zu Windows zurückgehen wollen. Linux garantiert mir ein stabil laufendes System, welches ich nach Belieben anpassen kann und ich vertrauen kann. Ein Open Source Betriebssystem zu nutzen bietet mir Freiheit und volle Kontrolle über meine Daten.";

    document.getElementById("Header-Selfhosting").textContent = "Ich hoste selbst.";
    document.getElementById("Content-Selfhosting").textContent = "Schon bevor ich Linux auf dem Desktop verwendet habe, hatte ich mir einen Raspberry Pi 4B zugelegt, welchen ich zuerst als Minecraft Server nutzte und danach, um sämtliche Services zu hosten. Dieser Pi hatte mein Interesse für Selfhosting geweckt. Seitdem habe ich mir einen Homeserver/NAS zugelegt, auf welchem Proxmox läuft. Dieser Server erlaubt es mir, Services zu nutzen, wie YouTube oder Google, und Daten zu speichern, ohne meine Seele an einen dubiosen Tech Konzern zu verkaufen. Demächst möchte ich Ansible lernen, um das Aufsetzen und Konfigurieren meines kleinen Homelabs zu automatisieren.";

    document.getElementById("Header-Mail").textContent = "Falls noch Fragen offen sind.."
    document.getElementById("Content-Mail").innerHTML = "..dann schreib mir doch eine E-Mail: <a href='mailto:yohzu@sigmacorp.agency'>yohzu@sigmacorp.agency</a>.";

    document.getElementById("p-footer").innerHTML = "<a href='https://github.com/yohzu/inf-portfolio' target='_blank'>Quelle</a> • Entworfen von <a href='https://github.com/yohzu/' target='_blank'>yohzu</a>";

    document.getElementById("lang-toggleimg").src = "./assets/img/flags/uk.svg";

    document.getElementById("lang-toggleimg").title = "Sprache ändern";
    document.getElementById("theme-toggleimg").title = "Heller/dunkler Modus";
}

function english() {
    lang = "en";
    document.getElementById("nav-projects").textContent = "Projects";
    document.getElementById("nav-converter").textContent = "Converter";

    document.getElementById("about-short").textContent = "16 y/o student, Germany";

    document.getElementById("Header-Privacy").textContent = "Privacy advocate";
    document.getElementById("Content-Privacy").textContent = "Privacy and data security are very important topics for me. That's why I stopped using suspicious and untrustworthy proprietary software like the Windows operating system for example. My belief is, that privacy is a fundamental human right that should never be violated by anyone. I am a huge supporter of Free and Open Source Software (FOSS) and release all my code under open source licenses.";

    document.getElementById("Header-Linux").textContent = "Linux user (btw)";
    document.getElementById("Content-Linux").textContent = "I've been daily driving Linux for about 1.5 years now and would never go back Windows, which I had used beforehand. Linux guarantees me a stable system, which I can customize however I want and that I can trust. Using an open source operating system grants me freedom and full control over my data.";

    document.getElementById("Header-Selfhosting").textContent = "I self-host";
    // Do teachers actually read the full code? 🤔
    document.getElementById("Content-Selfhosting").textContent = "Even before I had been using Linux on the Desktop, I had bought a Raspberry Pi 4B which I first used as a Minecraft server and then to host multiple services myself. This has started my homelabbing journey. I now have my own Homeserver/NAS which runs Proxmox. This allows me to use services like YouTube or Google and store data without having to sell my soul to some ominous tech company. Right now I'm looking forward to learn Ansible to automate setting up my small homelab.";

    document.getElementById("Header-Mail").textContent = "If you have any questions..";
    document.getElementById("Content-Mail").innerHTML = "..just send me an e-mail at <a href='mailto:yohzu@sigmacorp.agency'>yohzu@sigmacorp.agency</a>.";

    document.getElementById("p-footer").innerHTML = "<a href='https://github.com/yohzu/inf-portfolio' target='_blank'>Source</a> • Designed by <a href='https://github.com/yohzu/' target='_blank'>yohzu</a>";

    document.getElementById("lang-toggleimg").src = "./assets/img/flags/de.svg";

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
    if (navigator.language == "de-DE" || navigator.userLanguage == "de-DE") {
        german()
        document.cookie = "lang=de; path=/";
    } else {
        english()
        document.cookie = "lang=en; path=/";
    }
}