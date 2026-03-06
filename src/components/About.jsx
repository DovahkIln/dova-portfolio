import "./About.css";

const SKILLS = [
    "Project Management (PMO)",
    "Negotiation & Sales",
    "Workflow Optimization",
    "Blender & 3D Modeling",
    "Creative Direction",
    "Minecraft Architecture",
    "Roblox Studio",
    "Environment Design",
    "Product Owner",
    "Collaborative Leadership",
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about__glow" />
            <div className="container about__inner">
                <div className="about__text">
                    <h2 className="section-title">About Me</h2>
                    <p>
                        I am a professional with a hybrid background in <strong>Project Management (PMO)</strong>,
                        creative direction, and technical game development, with a strong focus
                        on the Minecraft and Roblox ecosystems.
                    </p>
                    <p>
                        My career began as a builder, evolved into 3D modeling and audiovisual production,
                        and expanded into strategic project management and commercial negotiation. I help
                        structure processes, lead creative teams, optimize workflows with customized
                        tools, and transform great ideas into structured products.
                    </p>

                    <div className="about__skills">
                        {SKILLS.map((skill) => (
                            <span key={skill} className="about__skill-badge">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="about__stats">
                    <div className="about__stat">
                        <div className="about__stat-number">PMO</div>
                        <div className="about__stat-label">Project Management</div>
                    </div>
                    <div className="about__stat">
                        <div className="about__stat-number">3D</div>
                        <div className="about__stat-label">Modeling & Direction</div>
                    </div>
                    <div className="about__stat">
                        <div className="about__stat-number">PO</div>
                        <div className="about__stat-label">Product Owner</div>
                    </div>
                    <div className="about__stat">
                        <div className="about__stat-number">B2B</div>
                        <div className="about__stat-label">Negotiation & Sales</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
