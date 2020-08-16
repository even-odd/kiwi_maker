import React, { useState } from 'react';

import { makePersonalLevels } from '../../../const'; // TODO for even__odd: сделать alias для const

// TODO for qwekle: подключи стили  

const { stub } = makePersonalLevels('PickUpRecipe');

// Будет конролировать работу всегоо поиска. 
// Любая работа с данными будет здесь: 
// получение, "запрос" на изменение, кеширование. 
// Возможно получится вынести в хуки, пока не знаю как с ними работают.
const PickUpRecipe = () => {

    // Временная функция, в будущем заменить на хук serverRequest
    function getCategoryList () {
        const name = '.getCategoryList';
        // Пока будет заглушкой
        console.debug(`${stub}${name} - return stub data`);

        return {
            categories: {
                1: {
                    title: 'Супчики',
                    // Массив id-шников, либо просто сами категории.
                    // Возможно придется на сервере проверять id вложенных категорий 
                    // и отправлять только нужные
                    subCategories: [], 
                },
                2: {
                    title: 'На второе',
                    subCategories: [],
                },
            }
        };
    }

    // Временная функция, в будущем заменить на хук serverRequest
    function getKitchenList () {
        const name = '.getCategoryList';
        // Пока будет заглушкой
        console.debug(`${stub}${name} - return stub data`);

        return {
            kitchens: {
                1: {
                    title: 'Болгарская',
                },
                2: {
                    title: 'Русская',
                },
                3: {
                    title: 'Итальянская',
                },
            }
        };
    }

    // TODO for even_odd: Сделать хук для запроса на сервер
    // Используй axios
    // TODO for qwekle: почитай про axios и хуки для общего представления
    function serverRequest () {

    }

    return (
        <div class="find_recipes--form">
            {/* Идея по поводу полей ввода, поиск в каждом, 
            а при вводе снизу появляется список элементов удовлетворяющий поиску */}
            <div>
                <span>Название</span>
                <input type="text" />
            </div>

            {/* TODO for qwekle: вынести в Select и определить какие нужны будут пропсы.
             Select должен быть универсальным. Пока не нужно реализовывать */}
            <div>
                <span>Выберите категорию</span>
                <select name="" id="">
                    {/* Нужны подкатегории */}
                    <option value="">Супчики</option> 
                    <option value="">На второе</option>
                </select>
            </div>
            {/* TODO for qwekle: вынести в Select и определить какие нужны будут пропсы.
             Select должен быть универсальным. Пока не нужно реализовывать */}
            <div>
                <span>Выберите кухню</span>
                <select name="" id="">
                    <option value="">Болгарская</option>
                    <option value="">Русская</option>
                    <option value="">Итальянская</option>
                </select>
            </div>
            <IngredientInput />
        </div>
    )
};

export default PickUpRecipe;