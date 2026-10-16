import "./footer.css"

export const Footer = () => {
    return (
        <footer className="site-footer">
            <section className="footer-team">
                <div className="footer-heading">
                    <span className="footer-eyebrow">QUIENES SOMOS</span>
                    <h2>Nuestro equipo</h2>
                    <p>
                        Las personas detrás de la tecnologia, la gestion
                        y la experiencia de compra de MyWareTech.
                    </p>
                </div>

                <div className="targets">
                    <article className="target-person">
                        <span className="team-role">CEO</span>
                        <h3>Alex Morgan</h3>
                        <p className="team-position">Director ejecutivo</p>
                        <p className="team-description">
                            Responsable de la estrategia, la gestión
                            y el crecimiento de la empresa.
                        </p>
                    </article>

                    <article className="target-person">
                        <span className="team-role">CTO</span>
                        <h3>Daniel Foster</h3>
                        <p className="team-position">Director de tecnología</p>
                        <p className="team-description">
                            Encargado de la infraestructura tecnológica,
                            los sistemas y las soluciones informáticas.
                        </p>
                    </article>

                    <article className="target-person">
                        <span className="team-role">COO</span>
                        <h3>Sofia Bennett</h3>
                        <p className="team-position">Directora de operaciones</p>
                        <p className="team-description">
                            Coordina la logística, los pedidos y
                            las operaciones diarias de la tienda.
                        </p>
                    </article>
                </div>
            </section>

            <div className="footer-bottom">
                <div className="footer-brand">
                    <h2>MyWare<span>Tech</span></h2>
                    <p>Tecnología para dar el siguiente paso.</p>
                </div>

                <div className="footer-contact">
                    <span>CONTACTO</span>
                    <a href="mailto:MyWareTech@support.mywaretech.com">
                        MyWareTech@support.mywaretech.com
                    </a>
                </div>

                <p className="footer-copyright">
                    © 2026 MyWareTech. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};