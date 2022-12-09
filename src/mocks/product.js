export const product = {
    id: '1',
    name: 'Смартфон Apple iPhone 13',
    images: ["img/image-1.jpg", "img/image-2.jpg", "img/image-3.jpg", "img/image-4.jpg", "img/image-5.jpg"],
    colors: [
      {
        name: 'Красный',
        src: 'img/color-1.webp',
        alt: 'Красный смартфон Apple iPhone 13',
      },
      {
        name: 'Зеленый',
        src: 'img/color-2.webp',
        alt: 'Зеленый смартфон Apple iPhone 13',
      },
      {
        name: 'Розовый',
        src: 'img/color-3.webp',
        alt: 'Розовый смартфон Apple iPhone 13',
      },
      {
        name: 'Синий',
        src: 'img/color-4.webp',
        alt: 'Синий смартфон Apple iPhone 13',
      },
      {
        name: 'Белый',
        src: 'img/color-5.webp',
        alt: 'Белый смартфон Apple iPhone 13',
      },
      {
        name: 'Черный',
        src: 'img/color-6.webp',
        alt: 'Черный смартфон Apple iPhone 13',
      },
    ],
    memory: ['128 ГБ', '256 ГБ', '512 ГБ'],
    features: {
      screen: '6.1',
      os: 'IOS 15',
      interfaces: ['NFC', 'Bluetooth', 'Wi-Fi'],
      core: 'Apple A15 Bionic',
      weight: '173 г',
    },
    description: 'Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере. Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков.',
    price: 67990,
    priceOld: 75990,
    currency: '₽',
    discount: 8,
    deliveryMethods: [
      {
        name: "Самовывоз",
        date: "1 сентября, четверг",
        cost: 0,
      }, 
      {
        name: "Курьером",
        date: "2 сентября, четверг",
        cost: 0,
      },
    ],
    reviews: [
      {
        author: {
          name: 'Марк Г.',
          photo: 'img/review-1.jpeg',
        },
        rating: 5,
        experienceOfUsage: 'менее месяца',
        advantages: 'это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.',
        disadvantages: 'к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное.',
      }, 
      {
        author: {
          name: 'Валерий Коваленко',
          photo: 'img/review-2.jpeg',
        },
        rating: 4,
        experienceOfUsage: 'менее месяца',
        advantages: 'OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго.',
        disadvantages: 'Плохая ремонтопригодность.',
      },
    ]
  };