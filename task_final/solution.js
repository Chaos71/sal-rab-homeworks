// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

// Аргументы:
// name - string
// phone - string
// address - object  {street, house, entrance, floor, flat}
// goods  - object {id, title, count, price}
// sum - number
// Возврат: JSON

function sendRequest(name, phone, address, goods, sum) {
 //   console.log("sendRequest: name = " + name);
 //   console.log("sendRequest: phone = " + phone);
 //   console.log("sendRequest: address = " + JSON.stringify(address));
 //   console.log("sendRequest: sum = " + sum);
 //   console.log("sendRequest: goods = " + JSON.stringify(goods));

    let data = {client:Text, order: {address:Text, sum:Number}, goods: [{title:Text, count:Number}]};

    // Заполняем объект по очереди
    data.client = name + " " + phone;
    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
    data.order.sum = sum;

    let countOfGoods = goods.length;
 
    for (let i = 0; i <= countOfGoods - 1 ; i += 1) 
    {
        let localGoods = {title:"", count:0};
        localGoods.title = goods[i].title;
        localGoods.count = goods[i].count;
//        data.goods.push(localGoods);
        data.goods[i] = localGoods;
 //       console.log("sendRequest: конец цикла data.Goods(" + i +") = " + JSON.stringify(data.goods));
 //       console.log("sendRequest: конец цикла data(" + i + ") = " + JSON.stringify(data));
    } // for
    
 
//    let jsonData = JSON.stringify(data);
    let Dd = {data:{}};
    Dd.data = data;
    let jsonData = JSON.stringify(Dd);

    return jsonData;
}
