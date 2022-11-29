function german() {
    lang = "de";
    document.getElementById("Header-Privacy").textContent = "Privatsphäre ist mir wichtig."
    document.getElementById("Content-Privacy").textContent = "Privatsphäre und Datenschutz sind für mich sehr wichtige Themen. Das ist auch, wieso ich aufgehört habe, verdächtige und unseriöse proprietäre Software, wie das Windows Betriebssystem zum Beispiel, zu nutzen. Ich glaube daran, dass die Privatsphäre ein fundamentelles Menschenrecht ist, dass niemals von irgendwem verletzt werden sollte. Einer der wichtigsten Dinge, die jemand tun kann, um seine Daten für sich zu behalten, ist, Open Source Software zu verwenden, welcher man vertrauen kann."

    document.getElementById("Header-Linux").textContent = "Ich nutze Linux (btw)"
    document.getElementById("Content-Linux").textContent = "Seit ungefähr 1.5 Jahren verwende ich Linux als meinen Daily Driver und würde auch nie zu Windows zurückgehen wollen. Auch wenn es manchmal ein paar kleine Kompatibilitätsprobleme gibt, war meine Erfahrung mit Linux bisher sehr angenehm. Linux zu nutzen ist auch ein wichtiger Teil meines Privatsphäreschutzes."

    document.getElementById("Header-Selfhosting").textContent = "Ich hoste selbst."
    document.getElementById("Content-Selfhosting").textContent = "Schon bevor ich Linux auf dem Desktop verwendet habe, hatte ich mir einen Raspberry Pi 4B zugelegt, welchen ich zuerst als Minecraft Server nutzte und danach, um sämtliche Services zu hosten. Dieser Pi hatte mein Interesse für Selfhosting geweckt. Seitdem habe ich mir einen Homeserver/NAS zugelegt, auf welchem Proxmox läuft. Dieser Server erlaubt es mir, Services zu nutzen, wie YouTube oder Google, und Daten zu speichern, ohne meine Seele an einen dubiosen Tech Konzern zu verkaufen. Demächst möchte ich Ansible lernen, um das Aufsetzen und Konfigurieren meines kleinen Homelabs zu automatisieren."

    document.getElementById("Header-Mail").textContent = "Falls noch Fragen offen sind.."
    document.getElementById("Content-Mail").innerHTML = "..dann schreib mir doch eine E-Mail: <a href='mailto:yohzu@sigmacorp.agency'>yohzu@sigmacorp.agency</a>."

    document.getElementById("p-footer").innerHTML = "<a href='https://github.com/' target='_blank'>Quelle</a> • Entworfen von <a href='https://github.com/yohzu/' target='_blank'>yohzu</a>";

    document.getElementById("lang-toggleimg").src = "./assets/img/flags/uk.svg";

    document.getElementById("lang-toggleimg").title = "Sprache ändern";
    document.getElementById("theme-toggleimg").title = "Heller/dunkler Modus";
}

function english() {
    lang = "en";
    document.getElementById("Header-Privacy").textContent = "Privacy advocate"
    document.getElementById("Content-Privacy").textContent = "Privacy and data security are very important topics for me. That's why I stopped using suspicious and untrustworthy proprietary software like the Windows operating system for example. My belief is that privacy is a fundamental human right that should never be violated by anyone. One of the most important things to do when trying to keep your data for yourself is using open source applications, that you can trust."

    document.getElementById("Header-Linux").textContent = "Linux user (btw)"
    document.getElementById("Content-Linux").textContent = "I've been daily driving Linux for about 1.5 years now and would never go back Windows, which I had used beforehand. Even though there might be some compatibility issues sometimes, it has been a very pleasant experience for me. This is also a very important part of keeping my privacy in my everyday life."

    document.getElementById("Header-Selfhosting").textContent = "I self-host"
    document.getElementById("Content-Selfhosting").textContent = "Even before I had been using Linux on the Desktop, I had bought a Raspberry Pi 4B which I first used as a Minecraft server and then to host multiple services myself. This has started my homelabbing journey. I now have my own Homeserver/NAS which runs Proxmox. This allows me to use services like YouTube or Google and store data without having to sell my soul to some ominous tech company. Right now I'm looking forward to learn Ansible to automate setting up my small homelab."

    document.getElementById("Header-Mail").textContent = "If you have any questions.."
    document.getElementById("Content-Mail").innerHTML = "..just send me an e-mail at <a href='mailto:yohzu@sigmacorp.agency'>yohzu@sigmacorp.agency</a>."

    document.getElementById("p-footer").innerHTML = "<a href='https://github.com/' target='_blank'>Source</a> • Designed by <a href='https://github.com/yohzu/' target='_blank'>yohzu</a>";

    document.getElementById("lang-toggleimg").src = "./assets/img/flags/de.svg";

    document.getElementById("lang-toggleimg").title = "change language";
    document.getElementById("theme-toggleimg").title = "dark/white mode";
}

function langToggle() {
    if (lang == "de") {
        english()
        document.cookie = "lang=en";
    }
    else if (lang == "en") {
        german()
        document.cookie = "lang=de";
    }
}


if (document.cookie.includes("lang=de")) {
    german()
} else if (document.cookie.includes("lang=en")) {
    english()
} else {
    if (navigator.language == "de-DE" || navigator.userLanguage == "de-DE") {
        german()
        document.cookie = "lang=de";
        const lang = "de";
    } else {
        english()
        document.cookie = "lang=en";
        const lang = "en";
    }
}
