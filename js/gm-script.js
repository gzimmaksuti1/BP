/**
 * Funksioni që menaxhon dërgimin e formularit të kontaktit
 */
function gmSubmitContactForm(event) {
    // Ndalon rifreskimin e faqes kur dërgohet forma
    event.preventDefault();
    
    // =====================
    // Marrja e vlerave nga fusha e formularit
    // =====================
    const name = document.getElementById('gm-name').value;
    const email = document.getElementById('gm-email').value;
    const message = document.getElementById('gm-message').value;
    
    // =====================
    // Kontroll i thjeshtë nëse të gjitha fushat janë plotësuar
    // =====================
    if (name && email && message) {
        
        // Mesazh falënderimi për përdoruesin
        alert(
            'Faleminderit që na kontaktuat, ' + name +
            '! Do t\'ju përgjigjemi së shpejti në ' + email + '.'
        );
        
        // Resetimi (pastrimi) i formularit pas dërgimit
        document.getElementById('gm-contact-form').reset();
    } else {
        // Mesazh gabimi nëse ndonjë fushë është bosh
        alert('Ju lutem plotësoni të gjitha fushat.');
    }
}

// =====================
// Ekzekutohet kur faqja është ngarkuar plotësisht
// =====================
document.addEventListener('DOMContentLoaded', function() {
    
    // Marrja e formularit të kontaktit
    const contactForm = document.getElementById('gm-contact-form');
    
    // Kontrollo nëse formulari ekziston në faqe
    if (contactForm) {
        // Shto listener për submit të formularit
        contactForm.addEventListener('submit', gmSubmitContactForm);
    }
});
