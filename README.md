# nosql_template
## Прототип - Хранение
### Скринкаст работы с приложением
Ссылка на Яндекс.Диск: https://disk.yandex.ru/i/e47OiqEt1jYFng

### Запуск
Для установки всех необходимых зависимостей необходим NodeJS major версии >= 20
1. Открываем один терминал в корне проекта, выполняем следующие команды:
```bash
cd marketplace/frontend
npm install
npm start
```
Производится переход в директорию React-приложения, установка всех необходимых зависимостей и запуск приложения.
Откроется страница сайта, но без рабочего бекенда.

2. Открываем другой терминал в корне проекта, выполняем следующие команды:
```bash
sudo systemctl start mongod
cd marketplace/backend
npm install
npm run devStart
```
Производится запуск MongoDB, переход в директорию бекенда проекта, установка всех необходимых зависимостей и запуск сервера.

3. Веб-приложение готово к эксплуатации.

## Предварительная проверка заданий

<a href=" ./../../../actions/workflows/1_helloworld.yml" >![1. Установка и настройка выбранной БД + ЯП]( ./../../actions/workflows/1_helloworld.yml/badge.svg)</a>

<a href=" ./../../../actions/workflows/2_usecase.yml" >![2. Usecase]( ./../../actions/workflows/2_usecase.yml/badge.svg)</a>

<a href=" ./../../../actions/workflows/3_data_model.yml" >![3. Модель данных]( ./../../actions/workflows/3_data_model.yml/badge.svg)</a>

<a href=" ./../../../actions/workflows/4_prototype_store_and_view.yml" >![4. Прототип хранение и представление]( ./../../actions/workflows/4_prototype_store_and_view.yml/badge.svg)</a>

<a href=" ./../../../actions/workflows/5_prototype_analysis.yml" >![5. Прототип анализ]( ./../../actions/workflows/5_prototype_analysis.yml/badge.svg)</a> 

<a href=" ./../../../actions/workflows/6_report.yml" >![6. Пояснительная записка]( ./../../actions/workflows/6_report.yml/badge.svg)</a>

<a href=" ./../../../actions/workflows/7_app_is_ready.yml" >![7. App is ready]( ./../../actions/workflows/7_app_is_ready.yml/badge.svg)</a>
