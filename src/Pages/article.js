
import cl from "./../Pages/article.module.css"

const Article = () => {

    return (
        <>
            <header className={cl.header}>
                <div className={cl.title}>
                    ветер перемен
                </div>
                <nav className={cl.header__navigation}>
                    <div className={cl.menuToggle}>
                        <input className={cl.menuCheckbox} type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className={cl.menu}>
                            <li>
                                <a href=""> <label for="menuCheckbox" onclick="this.parentNode.click();">О нас</label> </a>
                            </li>
                            <li>
                                <a href=""> <label for="menuCheckbox" onclick="this.parentNode.click();">Контакты</label> </a>
                            </li>
                            <li>
                                <a href=""> <label for="menuCheckbox" onclick="this.parentNode.click();">Католог</label> </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <button className={cl.button}>
                    <a href="">
                        стать клиентом

                    </a>
                </button> */}
            </header>

            <main>

            </main>

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

export default Article;