// Блочный вид представления карточки (на многих интернет магазинах есть примеры)

const blockCard = (props) => {
    return (
        <div className='blockCard'>
            <div className='blockCard_title'>Название</div>
            <div className='blockCard_box'>
                <div className='blockCard_item'>
                    <img src='' alt='Фото рецепта'></img>
                    <div className='blockCard_item--info'>
                        <div className='blockCard_item_time--preparing'>
                            {/* Время приготовления */}
                            <span></span>
                            <span></span>
                        </div>
                        <span className='blockCard_item_complexity--recipe'>
                            {/* Сложность рецепта */}
                        </span>
                    </div>
                </div>
                <div className='blockCard_info'>
                    {/* Список ингридиентов */}
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    {/* Описание */}
                    <div className='blockCard_info--description'>
                        тра-ла-ла
                    </div>
                </div>
            </div>
        </div>
    )
}