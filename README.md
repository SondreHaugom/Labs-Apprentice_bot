# 🤖 Utvikler Bot – SvelteKit Chatbot

En moderne chatbot bygget med SvelteKit og OpenAI, med støtte for markdown-formaterte svar, kodeeksempler, overskrifter og avsnitt.

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---
[![Svelte](https://img.shields.io/badge/Svelte-5%2B-ff3e00?logo=svelte)](https://svelte.dev)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2%2B-ff3e00?logo=svelte)](https://kit.svelte.dev)
[![Status](https://img.shields.io/badge/status-under%20arbeid-yellow)](#)

## 📘 Innholdsfortegnelse

- [🎯 Funksjoner](#-funksjoner)
- [📖 Om prosjektet](#-om-prosjektet)
- [🏗️ Prosjektstruktur](#️-prosjektstruktur)
- [⚙️ Biblioteker og begrunnelse](#️-biblioteker-og-begrunnelse)
- [🧰 Installasjon og oppsett](#-installasjon-og-oppsett)
- [🚀 Bruk](#-bruk)
- [🔒 Sikkerhet og personvern](#-sikkerhet-og-personvern)
- [🤝 Bidrag](#-bidrag)
- [📄 Lisens](#-lisens)

---

## 🎯 Funksjoner

- ✨ **Moderne chatgrensesnitt** med Svelte
- 📝 **Markdown-formaterte svar** med overskrifter, avsnitt og lister
- 💻 **Kodeblokker** med syntax highlighting
- ⚡ **Streaming av bot-svar** for bedre brukeropplevelse
- 🔗 **OpenAI-integrasjon** med Responses API
- 🎨 **Responsivt design** med gradient-bakgrunner
- 🔄 **Samtalekontekst** som bevares gjennom samtalen

---

## 📖 Om prosjektet

Utvikler Bot er en avansert chatbot bygget med OpenAI sitt Responses API og SvelteKit. Botten gir strukturerte, markdown-formaterte svar som gjør det enkelt å lese kode, dokumentasjon og forklaringer. Prosjektet demonstrerer moderne web-utvikling med focus på brukeropplevelse og læring.

---

## 🏗️ Prosjektstruktur

```
src/
├── routes/
│   ├── +page.svelte         # 💬 Hovedchat-grensesnitt
│   └── server/
│       └── +server.js       # 🔧 API-endepunkt for OpenAI
├── lib/
│   ├── index.js            # 📚 Delte moduler
│   └── assets/             # 🎨 Statiske ressurser
└── app.html                # 🏠 Svelte hoved-HTML

static/
└── robots.txt              # 🤖 SEO-konfigurasjon

Konfigurasjonsfiler:
├── package.json            # 📦 Prosjektavhengigheter
├── svelte.config.js        # ⚙️ Svelte-konfigurasjon
├── vite.config.js          # ⚡ Vite build-konfigurasjon
└── jsconfig.json           # 🔧 JavaScript-konfigurasjon
```

---

## ⚙️ Biblioteker og begrunnelse

| Import / Bibliotek           | Formål                                                                 |
|------------------------------|------------------------------------------------------------------------|
| `$env/dynamic/private`       | 🔐 Henter miljøvariabler (API-nøkler) som ikke skal være synlige for klienten |
| `@sveltejs/kit` (`json`)     | 📤 Returnerer JSON-responser fra server-endepunkter på standardisert måte |
| `path`                       | 📁 Node.js-modul for håndtering av filstier på serveren               |
| `openai`                     | 🤖 OpenAI-klient for kommunikasjon med Responses API og AI-generering |
| `marked`                     | 📝 Konverterer markdown til HTML for formaterte chat-meldinger        |

### Frontend-teknologier
- **SvelteKit**: Moderne web-framework med server-side rendering
- **Vite**: Rask build-tool og dev-server
- **CSS3**: Custom styling med gradients og animasjoner

### Backend-teknologier  
- **Node.js**: Server-runtime
- **OpenAI Responses API**: AI-modell for chatbot-funksjonalitet

---

## 🧰 Installasjon og oppsett

### 📋 Forutsetninger

- ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
- OpenAI API-nøkkel

### 1️⃣ Kloning av repository

```bash
git clone https://github.com/ditt-brukernavn/utvikler-bot.git
cd utvikler-bot
```

### 2️⃣ Installer avhengigheter

```bash
npm install
```

### 3️⃣ Opprett miljøvariabler

Lag en `.env`-fil i prosjektroten:

```env
OPENAI_API_KEY=din_openai_api_nokkel
VECTOR_STORE_ID=din_vector_store_id  
INSTRUCTIONS=instruksjoner_til_botten
```

### 4️⃣ Start utviklingsserver

```bash
npm run dev
```

Åpne nettleseren på `http://localhost:5173`

### 5️⃣ Bygg for produksjon

```bash
npm run build
npm run preview
```

---

## 🚀 Bruk

1. **Skriv meldinger** i chat-grensesnittet
2. **Motta formaterte svar** med overskrifter, kodeblokker og lister  
3. **Streaming-effekt** viser svarene i sanntid
4. **Markdown-støtte** gjør svarene lettere å lese

### Eksempel på bot-svar:

```markdown
# JavaScript Funksjoner

## Definere en funksjon

Du kan definere en funksjon på denne måten:

```javascript
function hilsen(navn) {
    return `Hei, ${navn}!`;
}
```

**Viktige punkter:**
- Bruk `function`-nøkkelordet
- *Parametere* defineres i parenteser
- Return-verdier bruker `return`
```

---

## 🔒 Sikkerhet og personvern

- 🔐 **API-nøkler**: Lagres sikkert i `.env` og eksponeres ikke til klienten
- 🚫 **Ingen lagring**: Prosjektet lagrer ikke personopplysninger lokalt
- ⚠️ **OpenAI-data**: Meldinger sendes til OpenAI for prosessering
- 🔒 **Anbefaling**: Del aldri sensitiv informasjon når du tester botten
- 📝 **Logget data**: Kun feilmeldinger logges til konsoll

### Miljøvariabel-sikkerhet

```bash
# Legg til i .gitignore
.env
.env.*
!.env.example
```

---

## � Bidrag

Bidrag er velkomne! Her er hvordan du kan hjelpe:

1. 🍴 **Fork** repositoryet  
2. 🌿 **Opprett** en feature branch (`git checkout -b feature/AmazingFeature`)
3. ✏️ **Commit** endringene dine (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** til branchen (`git push origin feature/AmazingFeature`)
5. 🔄 **Åpne** en Pull Request

### � Rapporter bugs

Bruk [Issues](../../issues) for å rapportere bugs eller foreslå forbedringer.

---

## 📄 Lisens

Dette prosjektet er lisensiert under MIT-lisensen - se [LICENSE](LICENSE) filen for detaljer.

```
MIT License

Copyright (c) 2025 Utvikler Bot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🎉 Takk til

- **OpenAI** for deres fantastiske API
- **Svelte-teamet** for det moderne web-rammeverket  
- **Vite** for lynrask utvikling

---

*Made with ❤️ by developers, for developers*

---

**� Nyttige lenker:**
- [SvelteKit Dokumentasjon](https://kit.svelte.dev/)
- [OpenAI API Dokumentasjon](https://platform.openai.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

---

> **💡 Tips:** For best resultat, gi botten tydelige spørsmål og eksperimenter med ulike formateringstyper!
