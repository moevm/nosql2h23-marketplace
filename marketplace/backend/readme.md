# Запуск сервера
Сервер запущен корректно если вы увидели в консоли следующее:
        
        Server running on 8080 port
        Mongodb connected
Если Mongodb не подключилась выполните:

        sudo systemctl start mongod
Проверить статус mongod:

        sudo systemctl status mongod
__Включить автозапуск mongod на Ubuntu:__

        sudo systemctl enable mongod

# Временный способ добавление документов в дб

В папке routes находится файл с запросами к серверу routes для расширения REST Client (для VScode).
Скачав расширение вы сможете отправлять запросы к серверу перейдя в упомянутый выше файл.