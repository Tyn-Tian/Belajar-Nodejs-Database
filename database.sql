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

create table products (
    id varchar(100) not null,
    name varchar(100) not null,
    price int not null,
    stock int not null,
    category varchar(100) not null,
    primary key (id)
) engine innodb;

insert into
    products(id, name, price, stock, category) value ('P0001', 'A', 1000, 100, 'K1'),
    ('P0002', 'B', 2000, 200, 'K1'),
    ('P0003', 'C', 3000, 300, 'K1'),
    ('P0004', 'D', 4000, 400, 'K1'),
    ('P0005', 'E', 5000, 500, 'K1');

create table categories (
    id int not null auto_increment,
    name varchar(100) not null,
    primary key (id)
) engine innodb;

create table wallet (
    id varchar(100) not null,
    balance int not null,
    customer_id varchar(100) not null,
    primary key (id),
    constraint wallet_customer_id_fk foreign key (customer_id) references customers (id),
    constraint wallet_customer_id_unique unique (customer_id)
) engine innodb;

create table comments (
    id int not null auto_increment,
    customer_id varchar(100) not null,
    title varchar(100) not null,
    description text,
    primary key (id),
    constraint comments_customer_id_fk foreign key (customer_id) references customers (id)
) engine InnoDB;

insert into
    comments(customer_id, title, description)
values
    ('tian', 'Comment 1', 'Sample comment 1'),
    ('tian', 'Comment 2', 'Sample comment 2'),
    ('ebel', 'Comment 1', 'Sample comment 1'),
    ('ebel', 'Comment 3', 'Sample comment 3');

create table likes 
(
    customer_id varchar(100) not null,
    product_id varchar(100) not null,
    primary key (customer_id, product_id),
    constraint likes_customer_id_fk foreign key (customer_id) references customers (id),
    constraint likes_product_id_fk foreign key (product_id) references products (id)
) engine innodb;

create table _loves
(
    A varchar(100) not null,
    B varchar(100) not null,
    primary key (A, B),
    constraint customer_loves_fk foreign key (A) references customers (id),
    constraint product_loves_fk foreign key (B) references products (id)
) engine innodb;