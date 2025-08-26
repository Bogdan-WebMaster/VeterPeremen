import cl from "./footer.module.css"

const Footer = () => {


    return (


        <>

            <footer className={cl.footer}>
                <div className={cl.footer__icon}>
                    <img className={cl.icon} src="src\Photo\mail.jpg" alt=""/>
                    <img className={cl.icon} src="src\Photo\phone.png" alt="" />
                    <img className={cl.icon} src="src\Photo\telegram.png" alt="" />
                </div>
                <div className={cl.name}>
                    ИП | Хазов А.В.
                </div>
                <div className={cl.footer__connection}>
                    <a className={cl.connection} href="tel:+79811488860">
                        +79811488860
                    </a>
                    <a className={cl.connection} href="mailto:kunqur@inbox.ru">
                        kunqur@inbox.ru
                    </a>
                    <a className={cl.connection} href="https://web.telegram.org/k/#@Piramida_polet">
                        @Piramida_polet
                    </a>
                </div>
            </footer>

        </>

    )

}

export default Footer;
