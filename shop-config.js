/* ═══════════════════════════════════════════════════
   MOONLIGHT ACCESSORIES — SHOP CONFIG
   Shared by index.html and the policy pages.
   ═══════════════════════════════════════════════════ */

/* The shop's WhatsApp number in international form, digits only, no + or
   spaces. Example: 0300 1234567 becomes '923001234567'.

   While this is empty, every WhatsApp button and link on the site stays
   hidden, so customers are never shown a number that does not answer.
   Set it here once and it applies everywhere.                            */
const WHATSAPP = '';

/* Delivery. These are what the customer is shown; the server recalculates
   the real figures on every order, so change them in both places.        */
const SHIP_FEE  = 200;
const FREE_SHIP = 5000;

function waLink(text) {
  return 'https://wa.me/' + WHATSAPP + (text ? '?text=' + encodeURIComponent(text) : '');
}

/* Points every [data-wa] link at WhatsApp and reveals every .wa-only
   element — or leaves them all hidden when no number is configured. */
function applyWhatsAppLinks() {
  if (!WHATSAPP) return;
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = waLink(a.dataset.wa || 'Assalam o Alaikum! I would like to ask about your hair extensions.');
  });
  document.querySelectorAll('.wa-only').forEach(function (el) {
    el.style.display = el.classList.contains('wa-float') ? 'flex' : '';
  });
}

document.addEventListener('DOMContentLoaded', applyWhatsAppLinks);
