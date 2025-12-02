const GROUPS_DB = [
    {
        "city": "Красноармейск",
        "type": "AA",
        "communityName": "Вместе",
        "address": "Московская обл., г. Красноармейск, мкр. Северный, д. 31",
        "time": "10:00, 11:00, 21:00",
        "contact": "+79629292238",
        "displayContact": "+7 962 929 22 38"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Крылья",
        "address": "Крылатские холмы, 12",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79166291808",
        "displayContact": "+7 916 629 18 08"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Раменки",
        "address": "ул. Раменки, д. 2",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79160800669",
        "displayContact": "+7 916 080 06 69"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Любовь",
        "address": "ул. Багрицкого, д.10, к. 3, стр. 1",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79261696857",
        "displayContact": "+7 (926) 169-68-57"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Центр",
        "address": "Селиверстов пер., 10 стр.2",
        "time": "Ежедневно (разное время)",
        "contact": "+74991307113",
        "displayContact": "+7 499 130 71 13"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Дома",
        "address": "Медовый переулок, 6",
        "time": "Ежедневно (разное время)",
        "contact": "+79585547434",
        "displayContact": "+7 958 554-74-34"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Радость",
        "address": "Большая Никитская, 22 стр.2",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79160915707",
        "displayContact": "+7 916 091 57 07"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Навигатор",
        "address": "площадь Верещагина, д.1, МДЦ \"Мост\", комн. 6.",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79261533896",
        "displayContact": "+7 926 153 38 96"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Надежда на Академической",
        "address": "Винокурова,2",
        "time": "10:00, 18:00, 21:00",
        "contact": "+79859742470",
        "displayContact": "+7 985 974 24 70"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Радуга",
        "address": "ул. Николоямская улица, 59",
        "time": "10:00, 17:30, 21:00",
        "contact": "89637705960",
        "displayContact": "8 (963) 770-59-60"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "В начале дня",
        "address": "Волгоградский проспект д. 85, стр.1",
        "time": "Ежедневно (разное время)",
        "contact": "+79260313270",
        "displayContact": "+7 926 031 3270"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Маяк (Раменки)",
        "address": "ул. Раменки, дом 1 (на территории Храма преподобного Андрея Рублева в Раменках)",
        "time": "10:00, 19:00, 19:15, 20:15, 21:00",
        "contact": "+79265320870",
        "displayContact": "+7 926 532 08 70"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Центр (женское собрание)",
        "address": "Селиверстов пер., 10стр2",
        "time": "10:00, 11:00, 19:30, 21:00",
        "contact": "+79067664669",
        "displayContact": "+7 906 766-46-69"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Восточный Экспресс",
        "address": "Свободный проспект, 4Ас8",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79017158463",
        "displayContact": "+7 901 715-84-63"
    },
    {
        "city": "Одинцово",
        "type": "AA",
        "communityName": "Шанс (Одинцово)",
        "address": "Можайское шоссе, д. 72",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79629850500",
        "displayContact": "+7 962 985 05 00"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Надежда",
        "address": "ул. Шереметьевская д.9 корп.1.",
        "time": "10:00, 13:30, 18:30, 21:00",
        "contact": "+79361409504",
        "displayContact": "+7 936 140 95 04"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "DOWN TOWN (english speaking)",
        "address": "Вознесенский переулок, 8/5с3",
        "time": "10:00, 17:00, 18:00, 19:30, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "ВНЕзависимости (Тelegram)",
        "address": "www.vnezavisimosty.wordpress.com",
        "time": "Ежедневно (разное время)",
        "contact": "79169312211",
        "displayContact": "7 916 931-22-11"
    },
    {
        "city": "Звенигород",
        "type": "AA",
        "communityName": "Звено",
        "address": "Проезд ветеранов, 8б",
        "time": "10:00, 18:00, 21:00",
        "contact": "+79653052579",
        "displayContact": "+7 965 305 25 79"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Переделки",
        "address": "Боровское шоссе, 46",
        "time": "10:00, 18:30, 21:00",
        "contact": "+79164882286",
        "displayContact": "+7 (916) 488-22-86"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Ильинская",
        "address": "Авиаторов, 9/1",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79250375137",
        "displayContact": "+7 925 037 51 37"
    },
    {
        "city": "Химки",
        "type": "AA",
        "communityName": "Сходня",
        "address": "Первомайская, 9",
        "time": "10:00, 19:30, 20:00, 21:00",
        "contact": "+79858544613",
        "displayContact": "+7 985 854 46 13"
    },
    {
        "city": "Голицыно",
        "type": "AA",
        "communityName": "Голицыно",
        "address": "Петровское шоссе, д.33",
        "time": "10:00, 11:00, 19:00, 21:00",
        "contact": "+79684210500",
        "displayContact": "+7 968 421-05-00"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Авангард",
        "address": "поселок Коммунарка, микрорайон Эдальго, 7",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79683326537",
        "displayContact": "+7(968)332-65-37"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Альтернатива",
        "address": "ул. Чистова. д. 3к1 (МНПЦ 19)",
        "time": "10:00, 16:00, 19:00, 20:15, 21:00",
        "contact": "+79255046453",
        "displayContact": "+7 925 504-64-53 Сергей"
    },
    {
        "city": "Орехово-Зуево",
        "type": "AA",
        "communityName": "Крепкий орешек",
        "address": "Саввы Морозова, 2",
        "time": "10:00, 17:00, 19:00, 21:00",
        "contact": "+79256324618",
        "displayContact": "+7 925 632 46 18"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Такси (ОНЛАЙН)",
        "address": "",
        "time": "00:00, 10:00, 15:00, 21:00, 22:00",
        "contact": "+79778844145",
        "displayContact": "+7 977 884-41-45"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "АА Мамы (ZOOM)",
        "address": "https://us02web.zoom.us/j/3120754477",
        "time": "10:00, 11:00, 20:00, 21:00",
        "contact": "+79050100733",
        "displayContact": "+7 905 010 0733 (есть Ватсапп)"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Околица",
        "address": "16-я Парковая, д.13",
        "time": "10:00, 14:00, 18:30, 21:00",
        "contact": "+79154108710",
        "displayContact": "+7 915 410 87 10"
    },
    {
        "city": "рабочий посёлок Тучково",
        "type": "AA",
        "communityName": "Берега (Тучково)",
        "address": "Комсомольская улица, 3.",
        "time": "10:00, 10:15, 21:00",
        "contact": "+79257718913",
        "displayContact": "+7 925 771 89 13"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Выжившие",
        "address": "",
        "time": "08:30, 10:00, 10:30, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Такси",
        "address": "ул. Октябрьская, 36",
        "time": "10:00, 16:30, 20:00, 20:30, 21:00",
        "contact": "+79778844145+74952200969",
        "displayContact": "+7 977 884-41-45  +7 (495) 220-09-69"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Московские начинающие",
        "address": "г. Москва, ул. Тайнинская, 8",
        "time": "Ежедневно (разное время)",
        "contact": "+79175510071",
        "displayContact": "+7 917 551 0071"
    },
    {
        "city": "Лобня",
        "type": "AA",
        "communityName": "Взлёт",
        "address": "Циолковского, 6",
        "time": "10:00, 17:30, 19:30, 21:00",
        "contact": "+79686077644",
        "displayContact": "+7 968 607 7644"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Рехавит",
        "address": "Садовническая ул., 73 стр. 2",
        "time": "10:00, 18:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Марьина Роща",
        "address": "ул. Октябрьская, д. 36",
        "time": "10:00, 12:00, 16:00, 21:00",
        "contact": "+79262866135",
        "displayContact": "+7 926 286 61 35"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Мы (Покровка)",
        "address": "улица Покровка, дом 13, стр. 1 (2-ой этаж, трапезная Храма)",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79060278697",
        "displayContact": "+7 906 027 86 97"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Петрович",
        "address": "улица Мясницкая, д. 24/7, стр. 3",
        "time": "10:00, 19:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "пгт Белоозерский",
        "type": "AA",
        "communityName": "Плюс",
        "address": "улица Российская, д. 3",
        "time": "10:00, 18:00, 20:00, 21:00",
        "contact": "89850290446",
        "displayContact": "8(985)029-04-46"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Воскресение",
        "address": "Столешников переулок, 2-4",
        "time": "10:00, 19:00, 21:00",
        "contact": "89153647869",
        "displayContact": "8 915 364 78 69"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Источник (СКАЙП)",
        "address": "",
        "time": "10:00, 18:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Электросталь",
        "type": "AA",
        "communityName": "Дело",
        "address": "улица Горького, д. 20, кв. 1",
        "time": "10:00, 18:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Вопрос - ответ",
        "address": "Перовская ул. дом 66 корпус 3",
        "time": "10:00, 19:00, 21:00",
        "contact": "89104874173",
        "displayContact": "8 910 487 41 73"
    },
    {
        "city": "Истра",
        "type": "AA",
        "communityName": "Истра",
        "address": "Академика Иосифьяна, 18а",
        "time": "10:00, 18:00, 20:15, 21:00",
        "contact": "+79850968111",
        "displayContact": "+7 985 096-8-111"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Посошок",
        "address": "Красноярская ул. 22с2",
        "time": "10:00, 17:00, 18:15, 19:15, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Бронницы",
        "type": "AA",
        "communityName": "Бронницы",
        "address": "ул. Советская, 61а",
        "time": "10:00, 17:00, 18:00, 21:00",
        "contact": "+79263458155",
        "displayContact": "+7 926 345-81-55"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Фили",
        "address": "улица Кастанаевская, д. 26",
        "time": "10:00, 18:30, 21:00",
        "contact": "+79268634508",
        "displayContact": "+7 926 863 45 08"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Ясень",
        "address": "ул. Тарусская, д. 14, корп. 2",
        "time": "10:00, 18:00, 19:00, 19:50, 21:00",
        "contact": "+79169865041",
        "displayContact": "+7 916 986 50 41"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Земляне (ZOOM)",
        "address": "https://aazemlyane.ru/",
        "time": "10:00, 11:00, 20:00, 21:00, 22:00",
        "contact": "",
        "displayContact": "Ссылка на мессенджер на сайте"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "После полудня (Telegram)",
        "address": "",
        "time": "10:00, 16:15, 20:00, 21:00",
        "contact": "+79643335061",
        "displayContact": "+7 964 333 50 61"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "нААша группа",
        "address": "ул. Дубининская, д. 11, стр. 1.",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79516181543",
        "displayContact": "+79516181543"
    },
    {
        "city": "Клин",
        "type": "AA",
        "communityName": "VITA",
        "address": "Московская, 31",
        "time": "10:00, 18:00, 19:00, 21:00",
        "contact": "+79997181119",
        "displayContact": "+7 999 718-11-19"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Искра",
        "address": "Газетный пер., д.15",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79060677165",
        "displayContact": "+7 (906) 067-71-65"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Время Жить",
        "address": "2-ая Владимирская, 58",
        "time": "10:00, 18:00, 19:00, 21:00",
        "contact": "+79258460449",
        "displayContact": "+7 925 846 04 49"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Спас в Митино",
        "address": "Пятницкое шоссе, 5а",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79150077675",
        "displayContact": "+7 915 007 76 75"
    },
    {
        "city": "Шатура",
        "type": "AA",
        "communityName": "Мещера",
        "address": "ул.Проспект Борзова.д 4/34",
        "time": "10:00, 16:00, 17:30, 21:00",
        "contact": "+79099054170",
        "displayContact": "+7 909 905 41 70"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Путь",
        "address": "ул Высокая, 12",
        "time": "10:00, 19:00, 19:45, 21:00",
        "contact": "+79167484406",
        "displayContact": "+7 916 748 44 06"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Берега (Тучково) Telegram",
        "address": "https://t.me/+ENH6-9gzNyliYTEy",
        "time": "10:00, 21:00",
        "contact": "+79257718913",
        "displayContact": "+7 925 771 89 13"
    },
    {
        "city": "Лобня",
        "type": "AA",
        "communityName": "Вне суеты",
        "address": "ул. Лейтенанта Бойко, 41а",
        "time": "10:00, 17:00, 21:00",
        "contact": "+79250543524+79264490081",
        "displayContact": "+7 925 054 35 24, +7 926 449 00 81"
    },
    {
        "city": "пос. Андреевка",
        "type": "AA",
        "communityName": "Горизонт",
        "address": "ул. Староандреевская, д. 73",
        "time": "10:00, 19:00, 19:45, 20:00, 21:00",
        "contact": "+79852511095",
        "displayContact": "+7 985 251 1095"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Родник",
        "address": "Суздальская улица, 8Бс2",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79258460449+79032988493",
        "displayContact": "+7 925 846 04 49, +7 903 298 84 93"
    },
    {
        "city": "Одинцовский район",
        "type": "AA",
        "communityName": "Николина гора",
        "address": "с. Аксиньино, 20В",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79261816361",
        "displayContact": "+7926 181 63 61"
    },
    {
        "city": "Луховицы",
        "type": "AA",
        "communityName": "Новый Путь",
        "address": "Ул. Гагарина, д. 14",
        "time": "10:00, 17:00, 18:15, 21:00",
        "contact": "+79257813997",
        "displayContact": "+ 7 925 781 39 97"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Станция Мир (ZOOM)",
        "address": "",
        "time": "10:00, 11:00, 20:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Лампа (Тelegram)",
        "address": "https://t.me/+g2e56YfsqCwyZWMy",
        "time": "10:00, 12:00, 21:00",
        "contact": "+79153194105",
        "displayContact": "+7 915 319 41 05"
    },
    {
        "city": "Протвино",
        "type": "AA",
        "communityName": "Полярная звезда",
        "address": "Фестивальный проезд, 11",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79154137061",
        "displayContact": "+7 915 413-70-61"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Успокойся",
        "address": "Кутузовский проспект, 36 строение 3",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79262250969",
        "displayContact": "+7 926 225 09 69"
    },
    {
        "city": "Химки",
        "type": "AA",
        "communityName": "Мы вместе",
        "address": "Первомайская, д. 5",
        "time": "10:00, 15:00, 19:30, 21:00",
        "contact": "+79154313803",
        "displayContact": "+7 915 431 38 03"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "День Рождения",
        "address": "Чароитовая, строение 1",
        "time": "10:00, 18:00, 19:30, 21:00",
        "contact": "+79261533896",
        "displayContact": "+7 926 153 38 96"
    },
    {
        "city": "Сергиев Посад",
        "type": "AA",
        "communityName": "Благовест-Правильный выбор",
        "address": "ул. Валовая д.21/5",
        "time": "10:00, 17:00, 18:00, 19:00, 21:00",
        "contact": "79263479276",
        "displayContact": "7 926 347-92-76"
    },
    {
        "city": "Волоколамск",
        "type": "AA",
        "communityName": "АА Волоколамск",
        "address": "улица Возмище, 16",
        "time": "10:00, 17:00, 21:00",
        "contact": "+79017824569",
        "displayContact": "+7 901 782 45 69"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Кофе",
        "address": "Островитянова вл 2а",
        "time": "08:00, 10:00, 21:00",
        "contact": "+79296401299",
        "displayContact": "+7 (929)640-12-99"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Хорошевка (ZOOM)",
        "address": "",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79165925142",
        "displayContact": "+7 916 592 5142"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Солнечная",
        "address": "Троицк, Солнечная улица, 1",
        "time": "10:00, 18:30, 19:30, 21:00",
        "contact": "+79268737219",
        "displayContact": "+7 926 873-72-19  (также можно писать в WhatsApp и Telegram)"
    },
    {
        "city": "Жуковский",
        "type": "AA",
        "communityName": "Большая Перемена",
        "address": "улица Гагарина, д. 77а",
        "time": "10:00, 18:00, 19:00, 21:00",
        "contact": "+79261017112",
        "displayContact": "+7 926 101-71-12"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Небо",
        "address": "Борисовский проезд, 15к4с1",
        "time": "10:00, 18:00, 19:00, 21:00",
        "contact": "+79916003238",
        "displayContact": "+7 991 600 32 38"
    },
    {
        "city": "Зеленоград",
        "type": "AA",
        "communityName": "Городок",
        "address": "Академика Валиева 8с1",
        "time": "10:00, 18:30, 21:00",
        "contact": "+79852511095",
        "displayContact": "+7 985 251 1095"
    },
    {
        "city": "Лотошино",
        "type": "AA",
        "communityName": "Лотошино",
        "address": "улица Центральная, д. 57a",
        "time": "10:00, 17:00, 21:00",
        "contact": "+79152187320",
        "displayContact": "+7 (915) 218 73 20"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Правда",
        "address": "мкр. Северное Чертаново, 2к207, Библиотека 151",
        "time": "10:00, 18:45, 21:00",
        "contact": "89261542185",
        "displayContact": "8 926 154 21 85"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "ТЕПЛЫЙ ВЕТЕР",
        "address": "Кронштадтский бул., вл24к1 (территория Храма святого праведного Иоанна Кронштадтского в Головине)",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79680030055",
        "displayContact": "+7 968 003 00 55"
    },
    {
        "city": "Ногинск",
        "type": "AA",
        "communityName": "Путь к жизни",
        "address": "ул. Рабочая, д16А",
        "time": "10:00, 18:00, 21:00",
        "contact": "+79162080036",
        "displayContact": "+7 916 208 0036"
    },
    {
        "city": "Реутов",
        "type": "AA",
        "communityName": "Реутов",
        "address": "ул. Октября, 10, ТЦ ЭКВАТОР",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79153508435",
        "displayContact": "+7 915 350-84-35"
    },
    {
        "city": "Королёв",
        "type": "AA",
        "communityName": "Королёв",
        "address": "Пионерская 41а",
        "time": "10:00, 20:30, 21:00",
        "contact": "+79013343512",
        "displayContact": "+7 901 334-35-12"
    },
    {
        "city": "Подольск",
        "type": "AA",
        "communityName": "Верное русло",
        "address": "Почтовая ул., 2А (Церковь священномученика Александра Подольского)",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79268331752",
        "displayContact": "+7 926 833 17 52"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Ромашка",
        "address": "Южнобутовская улица, 6с2",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79776802270",
        "displayContact": "+7 977 680-22-70"
    },
    {
        "city": "Рабочий поселок Монино",
        "type": "AA",
        "communityName": "Странник",
        "address": "Храм Александра Невского",
        "time": "10:00, 14:30, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Щелково",
        "type": "AA",
        "communityName": "Щелчок",
        "address": "Пролетарский проспект, 8с2",
        "time": "10:00, 17:00, 19:00, 21:00",
        "contact": "+79680777807",
        "displayContact": "+7 968 077 78 07"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Хорошевка (LIVE)",
        "address": "улица Куусинена, 4 корпус 3",
        "time": "10:00, 18:30, 21:00",
        "contact": "+79936108875",
        "displayContact": "+7 993 610-88-75"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Прозрение",
        "address": "Брюсов переулок, д.15/2 стр. 1",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79152500624",
        "displayContact": "+7 (915) 250 06 24"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Семь-сорок (ZOOM)",
        "address": "",
        "time": "07:30, 10:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Шаг за Шагом",
        "address": "улица Чертановская, дом 27 корп. 2",
        "time": "10:00, 12:00, 19:00, 21:00",
        "contact": "+79168245445",
        "displayContact": "+7 916 824 54 45"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Лоза",
        "address": "Ремизова, 18Ас2 (комната 31)",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79858994685",
        "displayContact": "+7 985 899 46 85"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Свет",
        "address": "Измайловское шоссе, 55",
        "time": "10:00, 15:00, 18:00, 19:00, 21:00",
        "contact": "+79296604057",
        "displayContact": "+7 929 660 40 57"
    },
    {
        "city": "Павловский Посад",
        "type": "AA",
        "communityName": "Содружество",
        "address": "Ул.Мира, 1",
        "time": "10:00, 17:00, 21:00",
        "contact": "+79154534565",
        "displayContact": "+7 915 453 45 65"
    },
    {
        "city": "Серпухов",
        "type": "AA",
        "communityName": "Дорога",
        "address": "Верхние гончары, 19",
        "time": "10:00, 15:00, 19:00, 21:00",
        "contact": "+79152796449",
        "displayContact": "+7 915 279-6449"
    },
    {
        "city": "Кимры",
        "type": "AA",
        "communityName": "Преображение (Кимры)",
        "address": "Кимры, Горького, 37б",
        "time": "10:00, 19:15, 21:00",
        "contact": "+79611414170",
        "displayContact": "+7 961 141 41 70"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Ежедневная отсрочка",
        "address": "Переулок Ружейный, дом 4, стр. 1",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79663042678",
        "displayContact": "+7 966 304 26 78"
    },
    {
        "city": "Воскресенск",
        "type": "AA",
        "communityName": "Союз",
        "address": "ул. Новлянская 14",
        "time": "10:00, 11:00, 21:00",
        "contact": "+79256009330",
        "displayContact": "+7 925 600-93-30"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Рубикон",
        "address": "ул. Болотниковская, д. 16",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79264207889",
        "displayContact": "+79264207889"
    },
    {
        "city": "пос.Ильинский",
        "type": "AA",
        "communityName": "Ильинка-Спасение (Раменский р-н)",
        "address": "ул. Московская, д.30",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79857711638",
        "displayContact": "+7 985 771-16-38"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Бухта",
        "address": "Луговой проезд д. 5 стр. 1",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79261092753",
        "displayContact": "+7 926 109 27 53"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Статус",
        "address": "Фортунатовская, 14",
        "time": "10:00, 12:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Трезвая Точка",
        "address": "ул. Восточная, 6, стр. 3",
        "time": "10:00, 18:00, 19:00, 21:00",
        "contact": "+79660273606",
        "displayContact": "+7 (966) 027 36 06"
    },
    {
        "city": "Красногорск",
        "type": "AA",
        "communityName": "Зенит",
        "address": "ул. Первомайская дом 11",
        "time": "10:00, 14:00, 17:00, 20:15, 21:00",
        "contact": "+79660761481",
        "displayContact": "+7 966 076 1481"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Благодать",
        "address": "Мичуринский проспект, 68к2",
        "time": "10:00, 20:00, 20:15, 21:00",
        "contact": "+79167386198",
        "displayContact": "+7 916 738 61 98"
    },
    {
        "city": "Котельники",
        "type": "AA",
        "communityName": "Бумеранг",
        "address": "Малая Колхозная улица, 62А",
        "time": "10:00, 18:30, 21:00",
        "contact": "+79151401649",
        "displayContact": "+7 915 140-16-49"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Щука",
        "address": "улица Маршала Новикова, 5 Коворкинг центр МДОО",
        "time": "10:00, 19:00, 20:30, 21:00",
        "contact": "+79031604383",
        "displayContact": "+7 903 160 43 83 (Вадим),"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "ТЕМА",
        "address": "2-й Саратовский проезд, 8к2",
        "time": "10:00, 19:15, 21:00",
        "contact": "+79966695288",
        "displayContact": "+7 996 669 5288"
    },
    {
        "city": "Апрелевка",
        "type": "AA",
        "communityName": "Освобождение (Апрелевка)",
        "address": "Февральская, 2с1",
        "time": "10:00, 15:00, 19:00, 21:00",
        "contact": "+79653705647",
        "displayContact": "+7 965 370 5647"
    },
    {
        "city": "Чехов",
        "type": "AA",
        "communityName": "Чехов",
        "address": "ул. Полиграфистов, д.1, каб. 417Г",
        "time": "10:00, 18:30, 21:00",
        "contact": "+79153051513",
        "displayContact": "+7 915 305 1513"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Благо",
        "address": "ул. Фортунатовская, д.14",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79164878165",
        "displayContact": "+7 (916) 487 81 65"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Путевка в жизнь (ZOOM)",
        "address": "",
        "time": "10:00, 20:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Новый день",
        "address": "ул. Молдагуловой, 12к3",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79859629773",
        "displayContact": "+7 985 962 9773"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Весть",
        "address": "Вознесенский переулок, 8/5с3",
        "time": "10:00, 12:00, 21:00",
        "contact": "+79918856678",
        "displayContact": "+7 991 885 66 78"
    },
    {
        "city": "Можайск",
        "type": "AA",
        "communityName": "Можайские ворота",
        "address": "ул. Бородинская д. 8",
        "time": "10:00, 17:00, 19:00, 21:00",
        "contact": "+79804790654+79160104684",
        "displayContact": "+7 980 479 06 54, +7 916 010 46 84"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Обновление",
        "address": "Средний Староданиловский переулок, д. 3, стр. 2",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79891932463",
        "displayContact": "+7 989 193 24 63"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Птица счастья",
        "address": "ул. Вересковая, дом 5",
        "time": "10:00, 18:00, 19:00, 21:00",
        "contact": "+79686704899",
        "displayContact": "+7 968 670 4899"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "12",
        "address": "улица Маршала Новикова, д.5",
        "time": "10:00, 17:30, 19:00, 21:00",
        "contact": "+79104434961",
        "displayContact": "+7 910 443-49-61"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Петрович (ZOOM)",
        "address": "",
        "time": "10:00, 19:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Домодедово, микрорайон Барыбино",
        "type": "AA",
        "communityName": "Преображение (Домодедово)",
        "address": "1-я Вокзальная ул., 5",
        "time": "10:00, 15:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Одинцово",
        "type": "AA",
        "communityName": "Жизнь",
        "address": "Можайское шоссе, 55с1",
        "time": "10:00, 19:00, 20:00, 21:00",
        "contact": "+79629850500",
        "displayContact": "+7 962 985 0500"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Океан (СКАЙП)",
        "address": "",
        "time": "10:00, 21:00, 22:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Компас",
        "address": "Алтуфьевское ш., д. 91",
        "time": "10:00, 19:00, 21:00",
        "contact": "89263209600",
        "displayContact": "8 (926)320-96-00"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Черемушки",
        "address": "Шверника, 10А, 2 этаж, каб. 19",
        "time": "10:00, 15:00, 18:30, 21:00",
        "contact": "+79160701061",
        "displayContact": "+7 916 070-10-61"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Коломенская",
        "address": "ул. Высокая, д. 12, помещение МНПЦ наркологии, комната 3",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79269992671",
        "displayContact": "+7 926 999 26 71"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Берег (Москва)",
        "address": "Проспект Маршала Жукова, д.64, корп.2",
        "time": "10:00, 18:30, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Мытищи",
        "type": "AA",
        "communityName": "Пять с плюсом",
        "address": "Силикатная ул., 12Б",
        "time": "10:00, 14:00, 17:00, 19:00, 21:00",
        "contact": "+79055055946",
        "displayContact": "+7 905 505 5946"
    },
    {
        "city": "Ивантеевка",
        "type": "AA",
        "communityName": "Ивантеевка",
        "address": "ул. Трудовая, д. 7",
        "time": "10:00, 19:00, 20:00, 21:00",
        "contact": "+79629292238",
        "displayContact": "+7 962 929 22 38"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Радио",
        "address": "Октябрьская д.36",
        "time": "10:00, 19:30, 21:00, 21:15",
        "contact": "+79663260225",
        "displayContact": "+7 966 326-02-25"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Счастье",
        "address": "Вознесенский переулок, 8/5с3",
        "time": "10:00, 17:00, 21:00",
        "contact": "+79912885011",
        "displayContact": "+7 (991) 288-50-11"
    },
    {
        "city": "ДНТ Бутово",
        "type": "AA",
        "communityName": "Бутовский полигон",
        "address": "рабочий посёлок Боброво, Юбилейная ул., 2",
        "time": "Ежедневно (разное время)",
        "contact": "+79689184103",
        "displayContact": "+7 968 918-41-03"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Преодоление",
        "address": "4-й Вешняковский пр., 1, корп. 1",
        "time": "10:00, 18:15, 21:00",
        "contact": "+79160315773",
        "displayContact": "+7 916 0315773"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Выбор",
        "address": "Проезд Кирова, дом 6, стр. 2",
        "time": "Ежедневно (разное время)",
        "contact": "+79266750019",
        "displayContact": "+7 (926) 675 00 19"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Девчата (женская группа)",
        "address": "Столешников пер. д.2-4",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79160783943",
        "displayContact": "+7 916 078 39 43"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Путилково",
        "address": "Воротынская улица, 14/1",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79099852037",
        "displayContact": "+7 909 985 20 37"
    },
    {
        "city": "село Долматово",
        "type": "AA",
        "communityName": "Долматово",
        "address": "Территория Подворья Свято-Данилова монастыря",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79636906639",
        "displayContact": "+7 963 690 66 39"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Круг",
        "address": "ул. Тимура Фрунзе, д.20, кв.63, под.3",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79035684267",
        "displayContact": "+7 903 568 42 67"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Солнце",
        "address": "Лётчика Грицевца, д. 3,  стр.2",
        "time": "10:00, 18:00, 21:00",
        "contact": "+79096235614",
        "displayContact": "+7 909 623 56 14"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Удача",
        "address": "2-й Автозаводский проезд, 4с1",
        "time": "10:00, 11:00, 18:30, 21:00",
        "contact": "+79266952615",
        "displayContact": "+7 926 695 2615"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Первым Делом",
        "address": "г. Московский, пос. Института Полиомиелита, 4",
        "time": "10:00, 15:00, 20:00, 21:00",
        "contact": "+79802175767",
        "displayContact": "+7 980 217 57 67"
    },
    {
        "city": "Дзержинский",
        "type": "AA",
        "communityName": "Феникс",
        "address": "ул. Дзержинского д. 44",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79255267789",
        "displayContact": "+7 925 526 7 789"
    },
    {
        "city": "Мытищи",
        "type": "AA",
        "communityName": "Бомонд",
        "address": "Ул. Рабочая, с18/1, помещение при храме Иоанна Кронштадтского (воскресная школа)",
        "time": "10:00, 19:00, 20:00, 21:00",
        "contact": "+79154865276",
        "displayContact": "+7 915 486 52 76"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Дар (СКАЙП)",
        "address": "",
        "time": "10:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Во́время",
        "address": "Херсонская, дом 1, библиотека № 168",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79152757544",
        "displayContact": "+7 (915) 275-75-44"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Чеховская",
        "address": "Садовая Триумфальная ул., д.16, стр.3.",
        "time": "10:00, 18:30, 19:00, 21:00",
        "contact": "+79269359327",
        "displayContact": "+7 926 935 93 27"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Преображение (Кимры) ZOOM",
        "address": "",
        "time": "10:00, 19:15, 21:00",
        "contact": "+79611414170",
        "displayContact": "+7 961 141 41 70"
    },
    {
        "city": "Пушкино",
        "type": "AA",
        "communityName": "Возрождение",
        "address": "ул. Тургенева, д. 24",
        "time": "10:00, 16:00, 19:00, 21:00",
        "contact": "+79629292238",
        "displayContact": "+7 962 929 2238"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "АА Аэропорт",
        "address": "ул. Черняховского, 14 Центр Московского Долголетия (ЦМД)",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79850992831",
        "displayContact": "+7 985 099 28 31"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Бакенщики",
        "address": "Рублёвское шоссе д. 81, корп. 1",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79687097086+79851207182",
        "displayContact": "+7 968 709-70-86, +7 985 120 71 82"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Утро",
        "address": "ул. Шаболовка, д.21 (территория Храма Живоначальной Троицы)",
        "time": "09:00, 10:00, 16:00, 21:00",
        "contact": "+79645704749",
        "displayContact": "+7 964 570 47 49"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "На Мосфильмовской",
        "address": "Мосфильмовская улица, 2В",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79060825769",
        "displayContact": "+ 7 906 082 57 69"
    },
    {
        "city": "Дмитров",
        "type": "AA",
        "communityName": "Васильки",
        "address": "ул. Космонавтов, д. 52",
        "time": "10:00, 18:30, 19:00, 21:00",
        "contact": "+79680643739",
        "displayContact": "+7 968 064 3739"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "АврорА",
        "address": "ул. Суздальская 24 к.3",
        "time": "10:00, 12:00, 20:00, 21:00",
        "contact": "+79161457414",
        "displayContact": "+7 (916) 145-74-14"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Сентябрь",
        "address": "Мартеновская ул. д. 30",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79859629773",
        "displayContact": "+7 985 962 97 73"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Воздвиженка (ZOOM)",
        "address": "https://t.me/+DumWdYCc9GViOTBi",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79778316412",
        "displayContact": "+7 977 831 64 12"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Жулебино",
        "address": "Жулебинский бульвар, дом 5",
        "time": "10:00, 19:00, 19:15, 21:00",
        "contact": "+79933583446",
        "displayContact": "+7 993 358 34 46"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "НекрАсовкА",
        "address": "ул. Покровская улица, 24",
        "time": "10:00, 14:00, 18:30, 21:00",
        "contact": "+79057004901",
        "displayContact": "+7 905 700 49 01"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Новая Свобода",
        "address": "ул. Докукина, 15, стр. 2",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79801463701",
        "displayContact": "+79801463701"
    },
    {
        "city": "Долгопрудный",
        "type": "AA",
        "communityName": "Островок",
        "address": "Парковая д.1",
        "time": "10:00, 17:00, 19:30, 21:00",
        "contact": "+79670358873",
        "displayContact": "+7 967 035-88-73"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Рассвет",
        "address": "Малый Песчаный переулок, 2",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79963695870",
        "displayContact": "+7 996 369-58-70"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Улитка",
        "address": "Бумажный проезд, д. 2/2, стр. 6",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79031972373",
        "displayContact": "+7 903 197 23 73"
    },
    {
        "city": "Нахабино",
        "type": "AA",
        "communityName": "Кактус",
        "address": "Советская д.4А",
        "time": "10:00, 19:15, 20:00, 21:00",
        "contact": "+79153578212",
        "displayContact": "+7 915 357 82 12 (Наталья)"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Новый Cвет",
        "address": "Вознесенский переулок, д. 8/5 стр.3",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79152310355",
        "displayContact": "+7 (915) 231-03-55"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Приняли решение",
        "address": "Милютинский переулок, дом 18 с.4",
        "time": "10:00, 19:00, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Электросталь",
        "type": "AA",
        "communityName": "Маяк",
        "address": "Николаева, 36А",
        "time": "10:00, 17:00, 21:00",
        "contact": "+79162080036",
        "displayContact": "+7 916 208-00-36"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Под крылышком",
        "address": "Измайловское шоссе, дом 2",
        "time": "10:00, 13:00, 21:00",
        "contact": "+79933489618+79652801907",
        "displayContact": "+7 (993) 348 96 18 Алена; +7 (965) 280 19 07 Олег"
    },
    {
        "city": "Брянск",
        "type": "AA",
        "communityName": "Единица",
        "address": "Грибоедова, 19",
        "time": "10:00, 17:00, 19:00, 21:00",
        "contact": "+79003729773",
        "displayContact": "+7 900 372 9773"
    },
    {
        "city": "Коломна",
        "type": "AA",
        "communityName": "Переправа",
        "address": "Шилова 9",
        "time": "10:00, 14:00, 18:30, 21:00",
        "contact": "+79167833320+79169853118",
        "displayContact": "+7 916 783 3320, +7 916 985 3118"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Проспект",
        "address": "Проспект Маршала Жукова, 64к2",
        "time": "10:00, 17:30, 18:30, 21:00",
        "contact": "+79777023898",
        "displayContact": "+7 977 702 38 98"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Новое начало",
        "address": "Большой Сухаревский пер., 16",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79055216945",
        "displayContact": "+79055216945"
    },
    {
        "city": "дер. Лемешово",
        "type": "AA",
        "communityName": "Лемешово",
        "address": "дер. Лемешово, д.30",
        "time": "10:00, 18:30, 19:30, 21:00",
        "contact": "89151343931",
        "displayContact": "8 915 134 39 31"
    },
    {
        "city": "Люберцы",
        "type": "AA",
        "communityName": "Трезвость (Люберцы)",
        "address": "ул. Урицкого, д.1",
        "time": "10:00, 19:00, 19:30, 21:00",
        "contact": "+79250409894",
        "displayContact": "+ 7 925 040-98-94"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Слишком молодыʔ",
        "address": "Малая Грузинская улица, 27/13с1",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79998929733",
        "displayContact": "+7 999 892 97 33"
    },
    {
        "city": "Хотьково",
        "type": "AA",
        "communityName": "Трезвость в радость",
        "address": "ул. Горбуновская, д. 42А",
        "time": "10:00, 12:00, 21:00",
        "contact": "+79853086216",
        "displayContact": "+7 (985) 308-62-16"
    },
    {
        "city": "Солнечногорск",
        "type": "AA",
        "communityName": "Подсолнух",
        "address": "улица Красная, д. 113",
        "time": "10:00, 18:00, 19:15, 21:00",
        "contact": "+79151435388",
        "displayContact": "+7 915 143 5388"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Девчата (женская группа) Telegram",
        "address": "",
        "time": "10:00, 20:00, 21:00",
        "contact": "89160783943",
        "displayContact": "8 916 078 39 43"
    },
    {
        "city": "Мытищи",
        "type": "AA",
        "communityName": "Ковчег",
        "address": "Ярославское шоссе, 93 (Церковь Владимирской иконы Божией Матери в Мытищах)",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79680687898",
        "displayContact": "+7 968 068-78-98"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Ярославка",
        "address": "Ярославское шоссе, 18к2",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79268876954",
        "displayContact": "+7 926 887 69 54"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Облачный Странник",
        "address": "ул. Островитянова, вл. 2А",
        "time": "06:00, 10:00, 21:00, 6:30, 7:30",
        "contact": "+79100483974",
        "displayContact": "+7 910 048 39 74"
    },
    {
        "city": "Балашиха",
        "type": "AA",
        "communityName": "Чудо Балашихи",
        "address": "мкр. Балашиха-1, ул. Советская, д.1/7",
        "time": "10:00, 18:00, 19:45, 21:00",
        "contact": "+79267298818",
        "displayContact": "+7 926 729 88 18"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Встреча",
        "address": "Хохловский пер., дом 14с2.",
        "time": "10:00, 18:30, 21:00",
        "contact": "89104750056",
        "displayContact": "8-910-475-00-56"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Здесь и сейчас",
        "address": "Бумажный проезд, д. 2/2, стр. 6",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79151131549",
        "displayContact": "+7 915 113 15 49"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Бегемот",
        "address": "Трехпрудный пер., 11/13с2",
        "time": "10:00, 19:30, 20:00, 20:30, 21:00",
        "contact": "+79772791262",
        "displayContact": "+7 (977) 279-12-62"
    },
    {
        "city": "Звенигород",
        "type": "AA",
        "communityName": "Дом",
        "address": "ул. Луначарского, дом 18",
        "time": "10:00, 19:00, 21:00",
        "contact": "89653052579",
        "displayContact": "8 965 305 25 79"
    },
    {
        "city": "Дубна",
        "type": "AA",
        "communityName": "Воскресенье (Дубна)",
        "address": "Свободы, 20",
        "time": "10:00, 16:30, 19:30, 21:00",
        "contact": "+79153772008",
        "displayContact": "+7 915 377 2008"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Пробуждение",
        "address": "ул. Подольских Курсантов, Влад. 7",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79687033903",
        "displayContact": "+7 968 703 39 03"
    },
    {
        "city": "Балашиха",
        "type": "AA",
        "communityName": "Локомотив",
        "address": "д. Павлино, 56",
        "time": "10:00, 15:00, 20:00, 21:00",
        "contact": "+79160743999",
        "displayContact": "+7 916 074 3999"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "ТЕМА (Telegram)",
        "address": "",
        "time": "10:00, 21:00",
        "contact": "+79966695288",
        "displayContact": "+7 996 669 5288"
    },
    {
        "city": "Зеленоград",
        "type": "AA",
        "communityName": "Экипаж",
        "address": "Центральный проспект, корп. 239",
        "time": "10:00, 19:15, 21:00",
        "contact": "+79852511095",
        "displayContact": "+7 985 251 1095"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "DOWN TOWN (english speaking) (ZOOM)",
        "address": "",
        "time": "10:00, 17:00, 18:00, 19:30, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Тропинка 2.0",
        "address": "Каширское ш. 43, к2 офис 7",
        "time": "10:00, 16:00, 20:00, 21:00, 21:15",
        "contact": "+79255622773",
        "displayContact": "+7 925 562 2773"
    },
    {
        "city": "Ступино",
        "type": "AA",
        "communityName": "Только сегодня",
        "address": "улица Горького, 23",
        "time": "10:00, 14:00, 19:00, 21:00",
        "contact": "+79164203415",
        "displayContact": "+7 916 420 34 15"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Юго-Запад  (Говорово)",
        "address": "поселение Московский, деревня Говорово, Полевая, д.1А",
        "time": "10:00, 15:00, 19:30, 21:00",
        "contact": "+79160192250",
        "displayContact": "+7 916 019 2250"
    },
    {
        "city": "Раменское",
        "type": "AA",
        "communityName": "Раменье",
        "address": "ул. Мира 12, корп 1",
        "time": "10:00, 10:30, 19:00, 21:00",
        "contact": "+79854428090",
        "displayContact": "+7 985 442 80 90"
    },
    {
        "city": "Одинцовский район, г.п. Кубинка",
        "type": "AA",
        "communityName": "Кубинка",
        "address": "Можайское шоссе, 89а.",
        "time": "10:00, 16:30, 21:00",
        "contact": "+79167296026",
        "displayContact": "+7 916 729 60 26"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "По Книге",
        "address": "1-й Котельнический переулок, д. 8",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79167943786",
        "displayContact": "+7(916)794 37 86."
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Пятница",
        "address": "Басманный пер., 4",
        "time": "10:00, 16:00, 21:00",
        "contact": "+79104904774",
        "displayContact": "+7 910 490 47 74"
    },
    {
        "city": "пгт Лесной",
        "type": "AA",
        "communityName": "Исцеление",
        "address": "ул. Титова, 7а",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79629292238",
        "displayContact": "+7 962 929-22-38"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "На Филаретовской",
        "address": "Москва, Зеленоград, ул. Филаретовская, д. 3",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79852511095",
        "displayContact": "+7 (985) 251-10-95"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "От Сердца к Сердцу",
        "address": "ул. Остафьевская, дом 8, корп. 2,Коворкинг центр.",
        "time": "10:00, 14:00, 19:00, 21:00",
        "contact": "+79259121052",
        "displayContact": "+7 925 912 10 52"
    },
    {
        "city": "Балашиха",
        "type": "AA",
        "communityName": "Горенки",
        "address": "ул. Парковая, 2",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79690380670",
        "displayContact": "+7 969 038 06 70"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Остоженка (СКАЙП)",
        "address": "",
        "time": "10:00, 18:30, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Группа по изучению Большой Книги",
        "address": "ул. Большая Татарская, д. 32",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79153194781",
        "displayContact": "+7 915 319 47 81"
    },
    {
        "city": "Мытищи",
        "type": "AA",
        "communityName": "Избушка",
        "address": "Новомытищинский проспект, 6",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79253551949",
        "displayContact": "+ 7 925 355 1949"
    },
    {
        "city": "Домодедово",
        "type": "AA",
        "communityName": "Освобождение (Домодедово)",
        "address": "Московская область, городской округ Домодедово, посёлок Государственного племенного завода Константиново, Парковая улица",
        "time": "10:00, 17:00, 19:00, 21:00",
        "contact": "+79686541422",
        "displayContact": "+7 968 654 1422"
    },
    {
        "city": "Королев",
        "type": "AA",
        "communityName": "Энергия",
        "address": "пр-т Космонавтов 34 б (ТЦ \"Юпитер\", 1 этаж , павильон 121 \"Лови момент»)",
        "time": "10:00, 13:00, 20:00, 21:00",
        "contact": "+79036710459",
        "displayContact": "+7 903 671 04 59"
    },
    {
        "city": "д. Ерино",
        "type": "AA",
        "communityName": "Ерино",
        "address": "Северная ул., 1А",
        "time": "10:00, 12:30, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Купола",
        "address": "ул. Большая Филевская, 57к1",
        "time": "10:00, 18:00, 19:30, 21:00",
        "contact": "+79254890908",
        "displayContact": "+7 925 489 09 08"
    },
    {
        "city": "Подольск",
        "type": "AA",
        "communityName": "Источник Силы",
        "address": "Комсомольская ул, д 67/56,",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79151343931",
        "displayContact": "+7(915)134-39-31"
    },
    {
        "city": "Дедовск",
        "type": "AA",
        "communityName": "Вера",
        "address": "площадь Святого Георгия, 1",
        "time": "10:00, 18:00, 19:00, 21:00",
        "contact": "89253586961",
        "displayContact": "8(925)358-69-61"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Основа",
        "address": "Нагатинская, 29 к. 3",
        "time": "10:00, 16:00, 19:30, 21:00",
        "contact": "+79165237675",
        "displayContact": "+7 916 523 76 75"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Отрада",
        "address": "Алтуфьевское шоссе, 102 к2 с1",
        "time": "10:00, 18:00, 19:30, 21:00",
        "contact": "+79850420992",
        "displayContact": "+7 985 042-09-92"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Свобода (Telegram)",
        "address": "https://t.me/+9EsZIXwGKQZlNzky",
        "time": "10:00, 21:00",
        "contact": "+79157195451+79268131827",
        "displayContact": "+7 (915) 719 54 51, +7 (926)813 18 27"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Мужская Группа",
        "address": "ул. Октябрьская, 36",
        "time": "10:00, 11:00, 12:15, 21:00",
        "contact": "+79652525946",
        "displayContact": "+7(965)252-59-46"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Слово",
        "address": "ул. Дубининская, д. 9, стр. 4",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79264805300",
        "displayContact": "+7 926 480 53 00"
    },
    {
        "city": "деревня Ваулово",
        "type": "AA",
        "communityName": "Живой Источник",
        "address": "Россия, Московская область, городской округ Чехов, деревня Ваулово",
        "time": "10:00, 16:00, 21:00",
        "contact": "+79152612860",
        "displayContact": "+7 915 261 2860"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Люлька",
        "address": "ул. Бориса Галушкина, д. 25",
        "time": "10:00, 14:00, 14:30, 21:00",
        "contact": "+79652801907",
        "displayContact": "+7 965 280 19 07"
    },
    {
        "city": "Мытищи",
        "type": "AA",
        "communityName": "Сёстры (женское собрание)",
        "address": "Ярославское шоссе, 93 (Церковь Владимирской иконы Божией Матери в Мытищах)",
        "time": "10:00, 19:00, 21:00",
        "contact": "+79037099776",
        "displayContact": "+7 903 709 97 76"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Чайка",
        "address": "Ходынский бульвар, д.6, стр.1",
        "time": "10:00, 11:30, 21:00",
        "contact": "+79309804292",
        "displayContact": "+7 930 980 42 92"
    },
    {
        "city": "Егорьевск",
        "type": "AA",
        "communityName": "ЕГОРЬЕВСК",
        "address": "Смычка, 52, офис 9а (административное здание бывшего завода АТИ)",
        "time": "10:00, 19:30, 20:30, 21:00",
        "contact": "+79099098250",
        "displayContact": "+7 909 909 82 50"
    },
    {
        "city": "Видное",
        "type": "AA",
        "communityName": "Видное",
        "address": "проспект Ленинского комсомола, д.64, к.1",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79858593969",
        "displayContact": "+7 985 859-39-69"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Воля",
        "address": "Селигерская д.14",
        "time": "10:00, 19:00, 21:00",
        "contact": "89639669806",
        "displayContact": "8(963)-966-98-06"
    },
    {
        "city": "Пушкино",
        "type": "AA",
        "communityName": "ЕСТЬ РЕШЕНИЕ",
        "address": "Мкр. Новая Деревня, ул. Институтская, дом 27 ТЦ «О'Пушкино» 2-й этаж, офис 7",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79629292238",
        "displayContact": "+7 962 929 22 38"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "БАлАган",
        "address": "Ул. Судакова, д. 11, строение 2, лофт «МОХ» (слева от Карсиллама Самса)",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79858738623",
        "displayContact": "+7 985 873 86 23"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Ходынка",
        "address": "Ходынский бульвар, 6 стр 1",
        "time": "09:00, 10:00, 21:00",
        "contact": "+79801450403",
        "displayContact": "+7 980 145 04 03"
    },
    {
        "city": "Дубна",
        "type": "AA",
        "communityName": "Золотая жила",
        "address": "Боголюбова проспект, 35",
        "time": "10:00, 18:45, 21:00",
        "contact": "+79255393011",
        "displayContact": "+7 925 539-30-11"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Вешняки",
        "address": "улица Юности, 17с3",
        "time": "10:00, 16:30, 19:00, 21:00",
        "contact": "+79859629773",
        "displayContact": "+7 985 962 97 73"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Московский Бит",
        "address": "Большая Семеновская , д. 42, стр. 15 (LOVELY LOFT) Флигель справа от входа в Loft , 2 этаж",
        "time": "10:00, 19:30, 21:00",
        "contact": "89269720122",
        "displayContact": "8 (926) 972-01-22"
    },
    {
        "city": "Наро-Фоминск",
        "type": "AA",
        "communityName": "Нара",
        "address": "ул Калинина, 21",
        "time": "10:00, 16:30, 21:00",
        "contact": "+79163095121",
        "displayContact": "+7 916 309 51 21"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Путевка в жизнь",
        "address": "Мосфильмовская, 2В",
        "time": "10:00, 18:30, 21:00",
        "contact": "+74952200969",
        "displayContact": "+7 (495) 22-00-969"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Верблюд",
        "address": "Колокольников пер., д.9, стр.1",
        "time": "10:00, 20:00, 20:30, 21:00",
        "contact": "+79652722742",
        "displayContact": "+7 965 272 27 42"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Петрашка",
        "address": "ул. Петрозаводская дом 18, корпус 1",
        "time": "10:00, 18:15, 19:15, 21:00",
        "contact": "+79175896559",
        "displayContact": "+7 917 589 65 59"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Выход есть",
        "address": "г. Московский, 1-й микрорайон, 50",
        "time": "10:00, 20:00, 21:00",
        "contact": "+79779675475",
        "displayContact": "+7 (977) 967 54 75"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Вечерний звон",
        "address": "Авиационная улица, 30, стр. 2, подвальное помещение",
        "time": "10:00, 17:40, 17:45, 18:00, 21:00",
        "contact": "+79253165828",
        "displayContact": "+7 925 316 58 28"
    },
    {
        "city": "Сергиев Посад",
        "type": "AA",
        "communityName": "Посад",
        "address": "ул. Проспект Красной Армии, д. 96/1",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79263513966",
        "displayContact": "+7 926 351-39-66"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Клуб 12",
        "address": "Вознесенский переулок, 8/5с3",
        "time": "10:00, 19:30, 21:00",
        "contact": "+79055516650",
        "displayContact": "+7 905 551 66 50"
    },
    {
        "city": "Щербинка",
        "type": "AA",
        "communityName": "Дар",
        "address": "Пушкинская, 10",
        "time": "10:00, 19:00, 20:00, 21:00",
        "contact": "+79771026177",
        "displayContact": "+7 977 102 61 77"
    },
    {
        "city": "Поселение Кленовское",
        "type": "AA",
        "communityName": "Вертикаль (Кленово)",
        "address": "село Клёново, Ул. Центральная, 6",
        "time": "10:00, 17:00, 19:30, 21:00",
        "contact": "+79153050335",
        "displayContact": "+7 915 305 0335"
    },
    {
        "city": "Пущино",
        "type": "AA",
        "communityName": "Все свои",
        "address": "Микрорайон В, д.1",
        "time": "10:00, 15:00, 19:00, 21:00",
        "contact": "89099558810",
        "displayContact": "8 909 955 8810"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Стромынка (в Сокольниках)",
        "address": "Сокольнический Вал, д. 48",
        "time": "10:00, 17:00, 20:00, 21:00",
        "contact": "+79163799129",
        "displayContact": "+7 916 379 9129"
    },
    {
        "city": "Онлайн",
        "type": "AA",
        "communityName": "Свои люди (Russian AA Online)",
        "address": "ZOOM",
        "time": "10:00, 18:30, 21:00",
        "contact": "+79017824569",
        "displayContact": "+7 901 782 45 69"
    },
    {
        "city": "Чехов",
        "type": "AA",
        "communityName": "Адаптация",
        "address": "Чехова, 45",
        "time": "10:00, 18:30, 21:00",
        "contact": "+79153051513",
        "displayContact": "+7 915 305-15-13"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Чемпионы",
        "address": "ул. Люблинская, д. 37/1",
        "time": "10:00, 14:00, 21:00",
        "contact": "+79067424064",
        "displayContact": "+7 (906) 742-40-64"
    },
    {
        "city": "Москва",
        "type": "AA",
        "communityName": "Зеркало",
        "address": "1-й Боткинский проезд, 7стр1",
        "time": "10:00, 19:30, 21:00",
        "contact": "89639905926",
        "displayContact": "8 963 990 59 26"
    },
    {
        "city": "Ногинск",
        "type": "AA",
        "communityName": "Дорога жизни",
        "address": "улица Краснослободская, д. 2Б",
        "time": "10:00, 15:00, 21:00",
        "contact": "+79162080036",
        "displayContact": "+7 916 208 0036"
    }
];
