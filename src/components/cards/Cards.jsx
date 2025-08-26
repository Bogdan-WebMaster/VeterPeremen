import Photo from "./../../Photo"
const Cards = () => {
    return (
        <>
            <section className={cl.main}>
                <div className={cl.key}>
                    Реализуем ваши желания под ключ с доставкой и установкой
                </div>
                <section className={cl.cards}>
                    <div className={cl.card}>
                        <img className={cl.photo} src="src\Photo\sofa.jpg" alt="" />
                        <img className={cl.photo} src="src\Photo\bed.jpg" alt="" />
                        <img className={cl.photo} src="src\Photo\Kitchen.jpg" alt="" />
                    </div>
                </section>
            </section>
        </>
    );
};

export default Cards;