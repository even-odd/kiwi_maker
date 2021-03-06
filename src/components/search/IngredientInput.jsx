
// Служит для поиска по ингредиентам
// Хотелка: автодолнение ингредиента по средствам выпадающего списка
const IngredientInput = () => {

    // TODO for qwekle: сделай функцию для валидации строки
    // Не должна пропускать цифры, пустые строки, разнообразные символы 
    // (№, %, *, &, _, и так далее);
    // Потом можно вынести в utils.js
    function validateString(str) {
        return /^[A-Za-zА-Яа-я]+$/g.test(str); // Возвращает true если в выражении нет ни одного символа или цифры (Думаю выносить нет смылса, так как функция очень маленькая)
    }

    // TODO for qwekle: сделай очистку для input поля по нажатию на Escape
    // Возможно у нас будет кнопка очистки, её поддержку тоже Желательно сделать.
    function clearField(e, input, buttonClear) { //Принимает в параметр инпут на котором держится фокус
        if (e.code === 'Escape') {
            input.value = ''; //Не знаю, нужно ли отслеживать фокус, или метод будет запускаться только при фокусе инпута
        }
        buttonClear.onclick = () => {
            input.value = '';
        }
    }

    return (
        <div>
            <span>Ингредиент</span>
            <input type="text" />
        </div>
    )
}

export default IngredientInput;