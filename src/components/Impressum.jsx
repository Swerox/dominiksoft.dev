import { Link } from "react-router-dom";

const Impressum = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen lg:mb-35 px-20 py-20">
      <div className="flex flex-col h-full">
        <div className="w-full">
          <nav className="mb-20 flex items-center justify-between px-6 py-6">
            <div className="text-3xl">
              <button onClick={handleGoHome} className="text-3xl">
                dominiksoft.dev
              </button>
            </div>
          </nav>

          <h1 className="my-20 text-center text-4xl pt-11 font-semibold">
            Impressum
          </h1>

          <div className="px-6">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Impressum</h2>
              <p>
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
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Hinweiß gemäß Online-Streitbeilgeungs-Verordnung
              </h2>
              <p>
                Online-Streitbeilegung: Die Europäische Kommission stellt unter
                http://ec.europa.eu/consumers/odr/ eine Plattform zur
                Online-Streitbeilegung (nach Art. 14 Abs. 1 ODR-Verordnung)
                bereit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Hinweiß gemäß Verbraucherstreitbeilegungsgesetz (VSBG)
              </h2>
              <p>
                Wir sind nicht bereit, und auch nicht verpflichtet, an einem
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Datenschutzerklärung</h2>
              <Link to="/Datenschutz">zur Datenschutzerklärung (Link)</Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
