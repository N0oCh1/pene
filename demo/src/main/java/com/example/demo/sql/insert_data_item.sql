INSERT INTO menu (categoria, plato_name, precio)
VALUES
("Pizza", "Pizza Pepperoni", 10.00),
("Pizza", "Pizza de Hamon", 10.00),
("Pasta", "Pasta a la carbonara", 12.00),
("Pasta", "lasadna", 12.5),
("Alcohol", "Cerveza", 4),
("Alcohol", "Vino tinto", 5.5),
("Topping", "papa fritas", 2.5),
("Topping", "Patacones",5.65);


ALTER TABLE `producto` DROP FOREIGN KEY `FK38ti4we63c57ubtu5yccyu63i`;

ALTER TABLE `producto` ADD FOREIGN KEY (`id_pedido`) REFERENCES `pedidos`(`id_pedido`) ON UPDATE CASCADE ON DELETE CASCADE;