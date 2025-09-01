import cl from "./main.module.css"


const Main = () => {


    return (
        <>
            <div className={cl.main}>
                <div className={cl.key}>
                    Реализуем ваши желания под ключ с доставкой и установкой фурнитуры в наилучшем виде......
                </div>
                <div className={cl.cards}>
                    <div className={cl.card}>
                        <img className={cl.photo} src="src\Photo\sofa.jpg" alt="" />
                        <img className={cl.photo} src="src\Photo\bed.jpg" alt=""  />
                        <img className={cl.photo} src="src\Photo\Kitchen.jpg" alt=""  />
                    </div>
                </div>
<div>
    <h1 className={cl.customers}>
        Наши заказчики
    </h1>
</div>

                <div className={cl.customer__photo}>
                    <a className={cl.rossg} href="https://rosguard.gov.ru/?ysclid=mesq85e325831440969">
                        <img className={cl.customer} src="src\Photo\rossg.jpg" alt="" />
                    </a>

                    <a className={cl.sber} href="https://online.sberbank.ru/CSAFront/index.do?ysclid=mesq7nid4r677481064">
                        <img className={cl.customer} src="src\Photo\sber.jpg" alt="" />
                    </a>
                    
                    <a className={cl.mvd} href="https://78.мвд.рф/?page=67">
                        <img className={cl.customer} src="src\Photo\mvd.jpg" alt="" />
                    </a>
                </div>
<div>
    <h2 className={cl.buyer}>
        Наш поставщик
    </h2>
</div>

                <div className={cl.buyer__photo}>
                    <a className={cl.nonton} href="https://nonton.ru/?ysclid=mesq8v4bmq987686400">
                        <img className={cl.supplier} src="src\Photo\nonton.jpg" alt="" />
                    </a>
                </div>


            </div>

        </>
    )

}

export default Main;