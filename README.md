<h1>Movies explorer api</h1>

Проект Movies explorer - это интерактивный веб-сайт, разработанный с использованием технологий React и JavaScript. Это веб-сайт портфолио предназначен для поиска и сохранения интересных фильмов. 

## Основной функционал

Проект Movies explorer api (backend) предоставляет следующий функционал:

1. **Регистрация и авторизация пользователя:** Пользователи могут зарегистрировать новый аккаунт, предоставив свою электронную почту и пароль. Зарегистрированные пользователи могут также войти в систему с использованием своих учетных данных. Для обеспечения безопасности используется JSON Web Token (JWT).

2. **Редактирование данных пользователя:** Зарегистрированные пользователи имеют возможность изменять свои данные, такие как имя и почту, для актуализации своего профиля.

3. **Добавление фильма в сохраненные:** Зарегистрированные пользователи могут сохранять фильмы, чтобы впоследствии вернуться к ним для просмотра.

4. **Удаление фильма из сохраненных:** Зарегистрированные пользователи могут удалять свои сохраненные фильмы, если они больше не являются интересными. Это обеспечивает удобное управление списком сохраненных фильмов.

Весь этот функционал позволяет пользователям взаимодействовать с приложением, сохранять фильмы и настраивать свой профиль по своему усмотрению.

## Технологии

Проект использует следующие технологии и библиотеки:

1. **Node.js:** JavaScript-среда выполнения, используемая для создания серверной части приложения.
2. **Express:** Фреймворк для Node.js, облегчающий создание API и обработку HTTP-запросов.
3. **MongoDB:** Документоориентированная NoSQL база данных, используемая для хранения данных о пользователях и сохраненных фильмах.
4. **Nginx:** Прокси-сервер, который обеспечивает балансировку нагрузки и обеспечивает безопасность приложения.
5. **Nodemon:** Утилита для автоматической перезагрузки сервера при изменениях в коде в режиме разработки.
6. **Logger Middlewares:** Промежуточное ПО для регистрации логов HTTP-запросов и ответов, что помогает отслеживать работу сервера.
7. **Helmet:** Библиотека для обеспечения безопасности Express-приложения путем установки различных HTTP-заголовков.
8. **Limiter:** Используется для установления ограничений на определенные действия или операции, такие как ограничение скорости запросов или доступа к ресурсам.
9. **CORS (Cross-Origin Resource Sharing):** Механизм, который позволяет определенным источникам запросов получать доступ к ресурсам на сервере с другого источника (домена), что обеспечивает безопасное взаимодействие между разными доменами веб-приложений.
10. **PM2:** Продукт для управления приложениями Node.js и запуска их в продакшн-окружении.

## Установка и запуск

Для запуска проекта локально, выполните следующие шаги:

1. Склонируйте репозиторий на свой компьютер: 🔗 https://github.com/ZykovRuslan/movies-explorer-api.git
2. Перейдите в папку проекта: cd movies-explorer-api
3. Установите зависимости: npm i
4. Запустить приложение в режиме разработчика: npm run dev
5. Запустите проект: npm run start

## Тестирование API

Вы можете легко протестировать функциональность бэкенда, используя Postman или любой другой инструмент для отправки HTTP-запросов.

#### Базовый URL API

Для всех запросов к нашему бэкенду используйте следующий базовый URL: 🔗 https://movies-explorer-api.nomoredomains.xyz

#### Регистрация
POST https://movies-explorer-api.nomoredomains.xyz/signup
Заполнить обязательные поля:
{
    "name": "TestName",
    "email": "TestName@mail.ru",
    "password": "TestName"
}

#### Авторизация
POST https://movies-explorer-api.nomoredomains.xyz/signin
Заполнить обязательные поля:
{
    "email": "TestName@mail.ru",
    "password": "TestName"
}

#### Текущий пользователь 
GET https://movies-explorer-api.nomoredomains.xyz/users/me

#### Изменить данные пользователя
POST https://movies-explorer-api.nomoredomains.xyz/users/me
Заполнить обязательные поля:
{
    "name": "TestName",
    "email": "TestName@mail.ru"
}

#### Получить сохраненные фильмы
GET https://movies-explorer-api.nomoredomains.xyz/movies

#### Добавить сохраненный фильм
POST https://movies-explorer-api.nomoredomains.xyz/movies
Заполнить обязательные поля:
{
    "country": "TestCountry",
    "director": "TestDirector",
    "duration": "TestDuration",
    "year": "TestYear",
    "description": "TestDescription",
    "image": "https://avatars.mds.yandex.net/i?id=6eee69d0abc5f1ddbbd9246eaffe3a4df5ef3116-8497538-images-thumbs&n=13",
    "trailerLink": "https://avatars.mds.yandex.net/i?id=6eee69d0abc5f1ddbbd9246eaffe3a4df5ef3116-8497538-images-thumbs&n=13",
    "thumbnail": "https://avatars.mds.yandex.net/i?id=6eee69d0abc5f1ddbbd9246eaffe3a4df5ef3116-8497538-images-thumbs&n=13",
    "movieId": "TestMovieId",
    "nameRU": "TestNameRU",
    "nameEN": "TestNameEN"
}

#### Удалить сохраненный фильм
DELETE https://movies-explorer-api.nomoredomains.xyz/movies/:id

## Для связи
  <a href="https://linkedin.com/in/ruslan-zykov/">
    <img src="https://img.shields.io/badge/Linkedin-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" width="120"/>
  </a>
  <a href="https://vk.com/r_u_sl_i_k">
    <img src="https://img.shields.io/badge/Vkontakte-blue?style=for-the-badge&logo=vk&logoColor=white" alt="VKontakte Badge" width="130"/>
  </a>

