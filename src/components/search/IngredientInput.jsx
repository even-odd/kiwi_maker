
// Служит для поиска по ингредиентам
// Хотелка: автодолнение ингредиента по средствам выпадающего списка
const IngredientInput = () => {

    // TODO for qwekle: сделай функцию для валидации строки
    // Не должна пропускать цифры, пустые строки, разнообразные символы 
    // (№, %, *, &, _, и так далее);
    // Потом можно вынести в utils.js
    function validateString () {

    }

    // TODO for qwekle: сделай очистку для input поля по нажатию на Escape
    // Возможно у нас будет кнопка очистки, её поддержку тоже Желательно сделать.
    function clearField () {

    }

    return () {
        <div>
            <span>Ингредиент</span>
            <input type="text"/>
        </div>
    }
}

export default IngredientInput;