# Шаблон для верстки с использованием pug

## Обновление node-sass
Шаблон работает с npm v.6.1.0, node v.10.6.0, node-sass v.4.9.2, gulp-sass  v.4.0.1 
Перед тем, как устанавливать зависимости:
1. Обновите npm до последней версии **npm update**
2. Обновите node-sass до v.4.9.2  **npm uninstall node-sass** **npm i node-sass**


После обновления не работают старые проекты? 
1. Удалите package-lock.json
2. Удалите из package.json строку с "gulp-sass"
3. Удалите папку node-modules
4. Выполните **npm uninstall node-sass**  **npm install node-sass** **npm install gulp-sass --save-dev** **npm install**
                                                                 
## Установка зависимостей

1. Устанавливаем глобально  gulp **npm install --global gulp-cli**
2. Устанавливаем необходимые плагины **npm i**
3. Запускаем сборщик и наслаждаемся жизнью **gulp**

## Принцип генерации свг спрайтов

Все свг иконки, предназначенные для генерации спрайта, хранятся в **src/svg**,
при старте gulp или при изменении в каталоге происходит повторная сборка. 
В хтмл спрайт используется следующим образом - добавляется конструкция вида

`<svg class="menu ico">
     <use xlink:href="img/sprite.svg#menu"></use>
</svg>`

где *menu* - имя нужной иконки и имя свг файла одновременно.

## AOS

Fix build error
**rm -rf node_modules/aos/.babelrc**