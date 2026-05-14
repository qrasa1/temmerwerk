const phoneNumber = "0638088187";
const emailAddress = "smh755666@gmail.com";
const homeUrl = "/temmerwerk";


const routes = {
    [homeUrl]: {
        title: "Temmer Werk | Renovatie Specialist Randstad",
        render: () => `
            <section class="hero-section">
                <h1>Vakmanschap in de Randstad</h1>
                <p>Temmer Werk realiseert hoogwaardige badkamer- en keukenrenovaties in <strong>Amsterdam, Rotterdam, Utrecht en Den Haag</strong>.</p>
                <div class="cta-group">
                    <a href="/diensten" data-link class="btn-primary">Bekijk onze diensten</a>
                    <a href="/contact" data-link class="btn-secondary">Gratis offerte</a>
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
    [`${homeUrl}/over`]: {
        title: "Over Temmer Werk | Uw vakman in de regio",
        render: () => `
            <section class="content-page">
                <h2>Over Temmer Werk</h2>
                <p>Temmer Werk is de specialist voor iedereen die op zoek is naar kwaliteit in de vier grote steden. Wij combineren traditioneel vakmanschap met moderne technieken.</p>
                <p>Of u nu een extra berging wilt op een zolder in Amsterdam of uw badkamer in Den Haag wilt vernieuwen: wij leveren maatwerk dat past bij de stijl van uw woning.</p>
            </section>
        `
    },
    [`${homeUrl}/diensten`]: {
        title: "Diensten - Badkamers, Keukens & Tuinen",
        render: () => `
            <section class="content-page">
                <h2>Onze Specialisaties</h2>
                <div class="services-grid">
                    <article class="service-detail">
                        <h3>Badkamer & Sanitair</h3>
                        <p>Installatie van wastafels, douchecabines en ramen. Wij maken uw badkamer in Rotterdam of Utrecht weer als nieuw.</p>
                    </article>
                    <article class="service-detail">
                        <h3>Slimme Opslag</h3>
                        <p>In de stad is ruimte schaars. Wij bouwen kastenwanden op zolders en extra bergruimte in keukens door heel Amsterdam.</p>
                    </article>
                    <article class="service-detail">
                        <h3>Schilderwerk & Tuin</h3>
                        <p>Van strak schilderwerk in Den Haag tot een complete tuinrenovatie. Wij verzorgen het totale plaatje.</p>
                    </article>
                </div>
            </section>
        `
    },
    [`${homeUrl}/contact`]: {
        title: "Contact - Temmer Werk Randstad",
        render: () => `
            <section class="content-page">
                <h2>Neem contact op</h2>
                <div class="contact-grid">
                    <div class="contact-card">
                        <h4>Werkgebied</h4>
                        <p>Wij zijn dagelijks werkzaam in:</p>
                        <ul class="city-list">
                            <li>📍 Rotterdam</li>
                            <li>📍 Amsterdam</li>
                            <li>📍 Utrecht</li>
                            <li>📍 Den Haag</li>
                        </ul>
                        <p><em>Woon u net buiten deze steden? Neem gerust contact op voor de mogelijkheden.</em></p>
                    </div>
                    <div class="contact-card">
                        <h4>Contactgegevens</h4>
                        <p>📞 <a href="tel:${phoneNumber}">${phoneNumber}</a></p>
                        <p>📧 <a href="mailto:${emailAddress}">${emailAddress}</a></p>
                        <p>💬 <a href="https://wa.me/${phoneNumber}">WhatsApp ons direct</a></p>
                    </div>
                </div>
            </section>
        `
    }
};

const router = () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[homeUrl];
    
    document.title = route.title;
    document.getElementById("app").innerHTML = route.render();
};

window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        document.getElementById("menu-toggle").checked = false;
        history.pushState(null, null, e.target.href);
        router();
    }
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("footer-phone").href = `tel:${phoneNumber}`;
    document.getElementById("footer-email").href = `mailto:${emailAddress}`;
    document.getElementById("footer-whatsapp").href = `https://wa.me/${phoneNumber}`;
});