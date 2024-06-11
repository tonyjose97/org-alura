import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)" }}>
        <div className="redes">
           <a href="https://github.com/tonyjose97">
                 <img src="/img/github.svg" className="img"/>
           </a>

           <a href="www.linkedin.com/in/anthony-carmona-75807a23a">
                <img src="/img/linkedin.svg" alt="linkedin" className="img" />
           </a>

           <img src="/img/logoOrg.png"/>
        </div>
        <strong>Desarrollado por anthony Carmona</strong>
        <div className="contenedor_circulo">
            
        <div className="circulo">
        </div>

        <div className="circulo2">
        </div>

        </div>
    </footer>

}

export default Footer