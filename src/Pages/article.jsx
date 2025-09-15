import React from 'react'
import cl from "./article.module.css"

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
                                <a href="https://nonton.ru/?ysclid=mfbceqouss856404059&city_confirm=Y"> <label for="menuCheckbox" onclick="this.parentNode.click();">Католог</label> </a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>

            <main>
                <section className={cl.contactForm} >
                    <h2>
                        подать заявку
                    </h2>
                    <p>
                        оставьте свои контактные данные для подробной консультации
                    </p>
                    <form>
                        <label for="name">имя:</label>
                        <input name="name" type="text" />
                           <label for="email">почта:</label>
                        <input name="email" type="email" />
                           <label for="phone">телефон:</label>
                        <input name="phone" type="number" />
                           <label for="message">сообщение:</label>
                           <textarea name="message" rows={5}></textarea>
                        <button type="submit">отправить</button> 
                    </form>
                </section>
            </main>


            <footer className={cl.footer}>
                <div className={cl.footer__icon}>
                    <img className={cl.icon} src="src\Photo\mail.jpg" alt="" />
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