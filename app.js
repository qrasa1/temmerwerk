const phoneNumber = "0638088187";
const emailAddress = "smh755666@gmail.com";

const projectImages = [
    "images/image01.jpg",
    "images/image02.jpg",
    "images/image03.jpg",
    "images/image04.jpg",
];

const injectLocalBusinessSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Temmer Werk",
        "description": "Gespecialiseerd in timmerwerk, badkamer- en keukenrenovatie in Amsterdam, Rotterdam, Utrecht en Den Haag.",
        "telephone": phoneNumber,
        "email": emailAddress,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rotterdam",
            "addressRegion": "Zuid-Holland",
            "addressCountry": "NL"
        },
        "areaServed": [
            { "@type": "City", "name": "Rotterdam" },
            { "@type": "City", "name": "Amsterdam" },
            { "@type": "City", "name": "Utrecht" },
            { "@type": "City", "name": "Den Haag" }
        ],
        "priceRange": "$$"
    };

    let scriptTag = document.getElementById('seo-schema');
    if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'seo-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schema);
};


const gallery = `
        <div class="gallery-grid">
            ${projectImages.map(src => `
                <div class="gallery-item">
                    <img src="${src}" alt="Gerealiseerd werk Temmer Werk" loading="lazy">
                </div>
            `).join('')}
        </div>
    `;

const routes = {
    "home": {
        title: "Temmer Werk | Timmer & Renovatie Specialist Randstad",
        description: "Op zoek naar een vakkundige timmer- of renovatiespecialist? Temmer Werk realiseert badkamers, keukens en schilderwerk in Rotterdam, Amsterdam, Utrecht en Den Haag.",
        render: () => `
            <section class="hero-section">
                <h1>Vakmanschap & Timmerwerk in de Randstad</h1>
                <p>Temmer Werk is uw ervaren partner voor hoogwaardig <strong>timmerwerk</strong>, badkamerinstallaties en keukenrenovaties in <strong>Amsterdam, Rotterdam, Utrecht en Den Haag</strong>.</p>
                <div class="cta-group">
                    <a href="?page=diensten" data-link class="btn-primary">Bekijk onze diensten</a>
                    <a href="?page=contact" data-link class="btn-secondary">Gratis offerte</a>
                </div>
            </section>
            
            <section class="city-badges">
                <div class="badge">Rotterdam</div>
                <div class="badge">Amsterdam</div>
                <div class="badge">Utrecht</div>
                <div class="badge">Den Haag</div>
            </section>

            <section class="features">
                <div class="feature">
                    <h3>Allround Timmerwerk</h3>
                    <p>Van kasten op maat tot complete zolderbergingen. Wij leveren strak timmerwerk dat perfect past.</p>
                </div>
                <div class="feature">
                    <h3>Ervaring in de Stad</h3>
                    <p>Wij zijn bekend met de specifieke uitdagingen van stadswoningen, van monumentale panden in Utrecht tot moderne appartementen in Rotterdam.</p>
                </div>
                <div class="feature">
                    <h3>Snelle Service</h3>
                    <p>Door onze focus op de regio Randstad kunnen we snel schakelen en zijn we altijd bij u in de buurt.</p>
                </div>
            </section>
        `
    },
    "over": {
        title: "Over Temmer Werk | Professioneel Timmerbedrijf",
        description: "Maak kennis met Temmer Werk. Wij combineren traditioneel timmerwerk met moderne renovatietechnieken voor uw badkamer, keuken of zolder.",
        render: () => `
            <section class="content-page">
                <h2>Over Temmer Werk</h2>
                <p>Temmer Werk is de specialist voor iedereen die op zoek is naar kwaliteit en betrouwbaar <strong>timmerwerk</strong> in de vier grote steden. Wij combineren traditioneel vakmanschap met moderne technieken.</p>
                <p>Of u nu een extra berging wilt op een zolder in Amsterdam of uw badkamerraam en wastafel in Den Haag wilt vernieuwen: wij leveren maatwerk dat past bij de stijl van uw woning.</p>
            </section>
        `
    },
    "diensten": {
        title: "Onze Diensten | Timmerwerk, Badkamers & Keukens",
        description: "Ontdek onze specialisaties: van op maat gemaakte opslagruimtes en timmerwerk op zolder tot complete badkamerrenovaties, schilderwerk en tuinen.",
        render: () => `
            <section class="content-page">
                <h2>Onze Specialisaties & Timmerwerk</h2>
                <div class="services-grid">
                    <article class="service-detail">
                        <h3>Badkamer & Sanitair</h3>
                        <p>Professionele installatie van wastafels, douchecabines en ramen. Wij maken uw badkamer in Rotterdam of Utrecht weer als nieuw.</p>
                    </article>
                    <article class="service-detail">
                        <h3>Maatwerk Timmerwerk & Opslag</h3>
                        <p>In de stad is ruimte schaars. Wij voeren strak <strong>timmerwerk</strong> uit voor kastenwanden op zolders (knieschotten) en extra slimme bergruimte in keukens door heel Amsterdam.</p>
                    </article>
                    <article class="service-detail">
                        <h3>Schilderwerk & Tuinrenovatie</h3>
                        <p>Van strak binnenschilderwerk en buitenschilderwerk in Den Haag tot een complete tuinrenovatie met houtbouw en bestrating.</p>
                    </article>
                </div>
            </section>
        `
    },
    "werk": {
        title: "Gerealiseerd Werk & Projecten | Temmer Werk",
        description: "Bekijk foto's van ons gemaakte werk. Hoogwaardig timmerwerk, schilderwerk en badkamerinstallaties in de praktijk.",
        render: () => `
            <section class="content-page">
                <h2>Ons Gerealiseerde Werk</h2>
                <p class="section-desc">Bekijk hieronder foto's van recente timmer- en renovatieprojecten die wij met trots hebben afgerond in de regio.</p>
                ${gallery}
            </section>
        `
    },
    "contact": {
        title: "Contact & Offerte | Temmer Werk Timmerbedrijf",
        description: "Neem direct contact op met Temmer Werk voor een vrijblijvende offerte voor timmerwerk of renovatie in de Randstad.",
        render: () => `
            <section class="content-page">
                <h2>Neem contact op voor een offerte</h2>
                <div class="contact-grid">
                    <div class="contact-card">
                        <h4>Werkgebied</h4>
                        <p>Wij zijn dagelijks actief als timmerman en renovatiespecialist in:</p>
                        <ul class="city-list">
                            <li>📍 Rotterdam</li>
                            <li>📍 Amsterdam</li>
                            <li>📍 Utrecht</li>
                            <li>📍 Den Haag</li>
                        </ul>
                        <p><em>Woont u net buiten deze steden? Neem gerust contact op voor de mogelijkheden.</em></p>
                    </div>
                    <div class="contact-card">
                        <h4>Contactgegevens</h4>
                        <p>📞 <a href="tel:${phoneNumber}">${phoneNumber}</a></p>
                        <p>📧 <a href="mailto:${emailAddress}">${emailAddress}</a></p>
                        <p>💬 <a href="https://wa.me/31${phoneNumber.substring(1)}">WhatsApp ons direct</a></p>
                    </div>
                </div>
            </section>
        `
    }
};

const router = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || 'home';
    const route = routes[page] || routes['home'];

    document.title = route.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = route.description;

    document.getElementById("app").innerHTML = route.render();
    window.scrollTo(0, 0);
};

window.addEventListener("click", e => {
    const link = e.target.closest("[data-link]");
    if (link) {
        e.preventDefault();

        const menuToggle = document.getElementById("menu-toggle");
        if (menuToggle) menuToggle.checked = false;

        history.pushState(null, null, link.getAttribute("href"));
        router();
    }
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", () => {
    router();
    injectLocalBusinessSchema();
    document.getElementById("footer-phone").href = `tel:${phoneNumber}`;
    document.getElementById("footer-email").href = `mailto:${emailAddress}`;
    document.getElementById("footer-whatsapp").href = `https://wa.me/${phoneNumber}`;
    injectLocalBusinessSchema();
});