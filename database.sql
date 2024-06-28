create table sample (
    id varchar(100) not null,
    name varchar(100) not null,
    primary key (id)
) engine innodb;

create table customers (
    id varchar(100) not null,
    name varchar(100) not null,
    email varchar(100) not null,
    phone varchar(100) not null,
    primary key (id),
    constraint customers_email_unique unique (email),
    constraint customers_phone_unique unique (phone)
) engine innodb;

create table products
(
    id varchar(100) not null,
    name varchar(100) not null,
    price int not null,
    stock int not null,
    category varchar(100) not null,
    primary key (id)
) engine innodb;

insert into products(id, name, price, stock, category)
    value ('P0001', 'A', 1000, 100, 'K1'),
    ('P0002', 'B', 2000, 200, 'K1'),
    ('P0003', 'C', 3000, 300, 'K1'),
    ('P0004', 'D', 4000, 400, 'K1'),
    ('P0005', 'E', 5000, 500, 'K1')