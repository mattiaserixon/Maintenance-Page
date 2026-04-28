#!/bin/sh

cat > /usr/share/nginx/html/config.js << EOF
window.__MAINTENANCE_CONFIG__ = {
  status:    "${MAINTENANCE_STATUS:-Planerat underhåll}",
  returnDate:"${MAINTENANCE_RETURN_DATE:-04 maj}",
  contact:   "${MAINTENANCE_CONTACT:-Skriv till Mattias Erixon eller Olle Wikström}",
  kicker:    "${MAINTENANCE_KICKER:-Tillfälligt avbrott}",
  title:     "${MAINTENANCE_TITLE:-Vi uppdaterar tjänsten just nu}",
  intro:     "${MAINTENANCE_INTRO:-Vi genomför planerat underhåll för att förbättra stabilitet, säkerhet och tillgänglighet. Tjänsten är tillbaka så snart arbetet är klart.}",
  body:      "${MAINTENANCE_BODY:-Tack för din förståelse. Om du behöver hjälp under tiden, använd den ordinarie supportvägen för din verksamhet.}",
  note:      "${MAINTENANCE_NOTE:-Vi publicerar ingen ytterligare information på sidan medan arbetet pågår.}"
};
EOF

exec "$@"
