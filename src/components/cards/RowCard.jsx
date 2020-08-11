// Строчный вид представления карточки (на многих интернет магазинах есть примеры)

const rowCard = () => {
    return (
        <div className='rowCard'>
            <img src='' alt='Фото блюда'></img>
            <div className='rowCard_info'>
                <h3 className='rowCard_info--title'></h3>
                <div className='rowCard_time--preparing'>
                    {/* Время приготовления */}
                    <span></span>
                    <span></span>
                </div>
                <span className='rowCard_complexity--recipe'>
                    {/* Сложность рецепта */}
                </span>
            </div>
        </div>
    )
}