
import cl from "./header.module.css"

const Header = () => {

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
                <button className={cl.button}>
                    <a href="src\Pages\article.js">
                        стать клиентом

                    </a>
                </button>
            </header>
        </>

    )

}

export default Header;