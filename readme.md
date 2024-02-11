## Установка зависимостей
```
npm i
cd /server
npm i - на бэке
```

## Запуск

```
npm run start-server
npm run dev
```

node -v18.18.2

### Задача
Необходимо разработать конфигуратор кофемашины на Vue3 Composition API, состоящии‌ из двух страниц.

Первая страница предоставит возможность выбрать необходимые опции. Пользователи смогут выбрать размер устрои‌ства - стандартныи‌ или увеличенныи‌. При выборе любого из вариантов изображение автоматически изменится. Другая опция позволит выбрать количество напитков, доступных для выбора - 6, 8 или 12. Выбранные опции будут отображаться в заголовке конфигурации. Кроме того, на этои‌ странице необходима кнопка «Добавить в хранилище», которая позволит сохранить выбранные пользователем параметры.

Вторая страница будет содержать список добавленных пользователем позиции‌, разделенных на модели. Каждая позиция имеет элемент увеличения/ уменьшения количества (сче‌тчик).

В дополнение написать nodeJS сервер, с которого по API будут запрашиваться данные на усмотрение исполнителя (например, конфигурации для опций)