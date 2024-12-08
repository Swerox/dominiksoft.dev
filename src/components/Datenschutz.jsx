import { Link } from "react-router-dom";

const Datenschutz = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen px-6 py-6 lg:px-20 lg:py-20">
      <div className="flex flex-col h-full">
        <div className="w-full">
          <nav className="mb-10 flex items-center justify-between px-6 py-4">
            <div className="text-xl sm:text-3xl">
              <button onClick={handleGoHome} className="text-xl sm:text-3xl">
                dominiksoft.dev
              </button>
            </div>
          </nav>

          <h1 className="my-12 text-center text-3xl sm:text-4xl font-semibold">
            Datenschutzerklärung
          </h1>

          <div className="px-4 sm:px-6">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                1. Allgemeine Hinweise
              </h2>
              <p className="text-sm sm:text-base">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">2. Verantwortlicher</h2>
              <p className="text-sm sm:text-base">
                Verantwortlich für die Datenverarbeitung ist: Dominik Dittrich
                Lentinger Straße 14A 85092 Kösching mail@dominiksoft.dev
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                3. Hosting und Infrastruktur
              </h2>
              <p className="text-sm sm:text-base">
                Unsere Website wird auf Cloudflare Pages gehostet, einem Service
                der Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107,
                USA). Wir verwenden zudem Cloudflare Domains, um unsere Domain
                zu verwalten. Die Nutzung von Cloudflare erfolgt zur
                Bereitstellung und Optimierung der Website sowie zum Schutz
                gegen Sicherheitsbedrohungen (z. B. DDoS-Angriffe).
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse). Datenübermittlung in Drittländer: Cloudflare
                verarbeitet Daten auch in den USA. Cloudflare ist nach dem
                EU-U.S. Data Privacy Framework zertifiziert, wodurch ein
                angemessenes Datenschutzniveau gewährleistet wird. Weitere
                Informationen finden Sie in der Datenschutzerklärung von
                Cloudflare.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                4. Verwendung von Google Fonts
              </h2>
              <p className="text-sm sm:text-base">
                Diese Website nutzt Google Fonts, einen Service von Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                Die Einbindung der Schriftarten erfolgt lokal oder über die
                Server von Google. Dadurch kann es zur Übertragung Ihrer
                IP-Adresse an Google kommen. Rechtsgrundlage: Art. 6 Abs. 1 lit.
                f DSGVO (berechtigtes Interesse). Datenübermittlung in
                Drittländer: Google verarbeitet Daten auch in den USA. Google
                ist nach dem EU-U.S. Data Privacy Framework zertifiziert.
                Weitere Informationen finden Sie in der Datenschutzerklärung von
                Google.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                5. Erfassung und Verarbeitung personenbezogener Daten{" "}
              </h2>
              <p className="text-sm sm:text-base">Wir sammeln und verarbeiten keine personenbezogenen Daten.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                6. Änderungen der Datenschutzerklärung
              </h2>
              <p className="text-sm sm:text-base">
                Wir behalten uns vor, die Datenschutzerklärung zu ändern, um sie
                an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie
                der Datenverarbeitung anzupassen. Die Nutzer werden daher
                gebeten, sich regelmäßig über ihren Inhalt zu informieren.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">7. Impressum</h2>
              <Link to="/Impressum" className="text-sm sm:text-base text-blue-600 hover:underline">
                zum Impressum (Link)
              </Link>
            </section>

            <div className="text-center">
              <p className="text-sm sm:text-base">Stand: 07.12.2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
