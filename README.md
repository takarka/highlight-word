# AppExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## About exercise

1. Текст сообщения (texarea)
2. Индекс начала подсветки (input)
3. Индекс конца подсветки (input)
4. Цвет подсветки (select)
5. Область вывода результата

При изменении значений инпутов 1-4 в область 5 выводится текст сообщения 1 с подсветкой части, соответствующей параметрам 2-3, цвета 4.

Цвета и их количество (хотя бы два) на своё усмотрение. Содержимое области вывода сделать красиво, в остальной части стилей не надо. Валидацию не надо.

Пример:
пользователь вводит
1. I are here
2. 2
3. 5
4. красный
появляется
5. I are here (are красным)
