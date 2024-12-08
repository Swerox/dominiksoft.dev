import { Link } from "react-router-dom";

const Impressum = () => {
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
            Impressum
          </h1>

          <div className="px-4 sm:px-6">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Impressum</h2>
              <p className="text-sm sm:text-base">
                Dominik Dittrich
                <br />
                Lentinger Straße 14A
                <br />
                85092 Kösching
                <br />
                <a href="mailto:mail@iamdominik.dev">mail@dominiksoft.dev</a>
                <br />
                (+49) 01525 1010670
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Hinweis gemäß Online-Streitbeilegungs-Verordnung
              </h2>
              <p className="text-sm sm:text-base">
                Online-Streitbeilegung: Die Europäische Kommission stellt unter
                <a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> http://ec.europa.eu/consumers/odr/ </a> eine Plattform zur
                Online-Streitbeilegung (nach Art. 14 Abs. 1 ODR-Verordnung)
                bereit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Hinweis gemäß Verbraucherstreitbeilegungsgesetz (VSBG)
              </h2>
              <p className="text-sm sm:text-base">
                Wir sind nicht bereit, und auch nicht verpflichtet, an einem
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Datenschutzerklärung</h2>
              <Link to="/Datenschutz" className="text-sm sm:text-base text-blue-600 hover:underline">
                zur Datenschutzerklärung (Link)
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
