import Image from 'next/image';
import Link from 'next/link';

const Copyright = () => {
  const currentYear = new Date().getFullYear(); // Récupère l'année actuelle

  return (
    <div className="copyright-warp cr-1 d-flex flex-column justify-content-center align-items-center text-center">
      {/* Section Copyright */}
      <div className="mb-3">
        <p
          style={{
            color: "white",
            fontWeight: 600,
            fontSize: 14,
            margin: 0,
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Copyright © 2024
            {currentYear !== 2024 && ` - ${currentYear}`} SGI-MALI tous droits réservés
          </Link>
        </p>
      </div>

      {/* Section Développé par */}
      <div>
        <p
          style={{
            color: "white",
            fontSize: 13,
            fontWeight: 600,
            margin: 0,
            marginTop:-30
          }}
        >
          <span style={{color:"white"}}>
            Développé par &nbsp;
            <a
              target="_blank"
              href="https://cynomedia.com/"
              style={{ textDecoration: "none" }}
            >
              <Image
                src={"/images/logo-cynomedia.webp"}
                width={90}
                height={31}
                alt="logo cynomedia"
                style={{ marginTop: -10 }}
              />
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
