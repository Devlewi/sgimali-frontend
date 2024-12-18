import Link from 'next/link';

const Copyright = () => {
  return (
    <div className="copyright-warp cr-1">
      <div className="copyright-list-link">
        <ul style={{ marginBottom: -20 }}>
          <li>
            <Link
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 14,
              }}
              href="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 14,
              }}
              href="/notre-actualite"
            >
              Notre Actualité
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 14,
              }}
              href="/foire-aux-questions"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="copyright-text"
        style={{ color: "white", fontWeight: 600 }}
      >
        <p
          style={{ color: "white", fontSize: 13, fontWeight: 600 }}
        >
          © 2024 -{" "}
          <span style={{ color: "white", fontWeight: 600 }}>
            Développé par CYNOMEDIA
          </span>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
