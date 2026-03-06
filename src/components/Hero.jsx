import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__bg-glow hero__bg-glow--purple" />
            <div className="hero__bg-glow hero__bg-glow--cyan" />

            <div className="hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-dot" />
                    Available for freelance
                </div>

                <h1 className="hero__title">
                    Creating worlds in{" "}
                    <span className="hero__title-gradient">3D</span>
                </h1>

                <p className="hero__subtitle">
                    3D modeling, environments, characters, and objects with attention to
                    every detail. I turn ideas into stunning renders.
                </p>

                <div className="hero__cta-group">
                    <a href="#gallery" className="hero__cta hero__cta--primary">
                        View Work ↓
                    </a>
                    <a href="#contact" className="hero__cta hero__cta--secondary">
                        Get in Touch
                    </a>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <span>scroll</span>
                <div className="hero__scroll-arrow" />
            </div>
        </section>
    );
}
