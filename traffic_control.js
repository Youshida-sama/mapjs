ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [45.054, 38.980],
        zoom: 10,
        controls: ["zoomControl"],
    });

    // Создадим элемент управления "Пробки".
    var trafficControl = new ymaps.control.TrafficControl({
        state: {
            // Отображаются пробки "Сейчас".
            providerKey: "traffic#actual",
            // Начинаем сразу показывать пробки на карте.
            trafficShown: true,
        },
    });
    // Добавим контрол на карту.
    myMap.controls.add(trafficControl);
    // Получим ссылку на провайдер пробок "Сейчас" и включим показ инфоточек.
    trafficControl
        .getProvider("traffic#actual")
        .state.set("infoLayerShown", true);

    var data = ymaps.geoXml.load("https://raw.githubusercontent.com/Youshida-sama/mapjs/refs/heads/main/mObject_4d595e40-da01-44bb-b05b-2e70e7408ef4.xml");

    // Обработка полученного асинхронно ответа.
    data.then(function(res) {
        // Добавление объектов на карту.
        myMap.geoObjects.add(res.geoObjects);
    });
}