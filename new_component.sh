#!/bin/bash

if [ "$1" == "" ] ; then
    echo "error: argument component_name missing"
    exit
fi

if [ -d "./src/components/$1" ] ; then
    echo "error: component exist"
    exit
fi

#создаём католог для компонента
mkdir ./src/components/$1
mkdir ./src/components/$1/images
#создаём файл стилей
touch ./src/components/$1/style.scss

echo "@import \"../../scss/core\";" >> ./src/components/$1/style.scss
printf '%b%s' "\n.b-"$1" {\n\n}" >> ./src/components/$1/style.scss
printf '%b%s' "\n@import \"../components/"$1"/style\";" >> ./src/scss/components.scss

#создаём файл разметки
touch ./src/components/$1/mixin.pug
printf '%b%s' "mixin $1\n    .b-$1" >> ./src/components/$1/mixin.pug

#создаём демо компанента
touch ./src/components/$1/view.pug
echo "extends ../../template/components/layout" >> ./src/components/$1/view.pug
echo "include mixin" >> ./src/components/$1/view.pug
echo "\nblock head" >> ./src/components/$1/view.pug
echo "    - var pageTitle = 'Components of Likee.template';" >> ./src/components/$1/view.pug
echo "\nblock content" >> ./src/components/$1/view.pug
printf '%s' "    +$1" >> ./src/components/$1/view.pug