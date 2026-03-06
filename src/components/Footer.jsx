import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container footer__inner">
                <div className="footer__contact">
                    <h2>
                        Let's create something{" "}
                        <span className="section-title" style={{ display: "inline" }}>
                            awesome
                        </span>
                        ?
                    </h2>
                    <p>
                        I am available for freelance projects, collaborations, and animation
                        or 3D modeling commissions.
                    </p>
                    <a
                        href="mailto:lucasbpoletto@hotmail.com"
                        className="footer__contact-cta"
                    >
                        ✉ Send Email
                    </a>
                </div>

                <div className="footer__socials">
                    {/*
                    <a
                        href="#"
                        className="footer__social-link"
                        aria-label="ArtStation"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🎨
                    </a>
                    <a
                        href="#"
                        className="footer__social-link"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        𝕏
                    </a>
                    <a
                        href="#"
                        className="footer__social-link"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        in
                    </a>
                    */}

                    <a
                        href="https://discord.com/users/272473154301984768"
                        className="footer__social-link"
                        aria-label="Discord"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}Discord-Symbol-Blurple.svg`}
                            alt="Discord Logo"
                            style={{ width: "22px", height: "22px" }}
                        />
                    </a>
                </div>

                <div className="footer__divider" />

                <p className="footer__bottom">
                    © {new Date().getFullYear()} Dova 3D — All rights reserved.
                </p>
            </div>
        </footer>
    );
}
