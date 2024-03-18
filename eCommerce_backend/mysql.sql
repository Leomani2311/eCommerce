
-- Table crarion

-- Table names --
user
ecom_new_product

create table ecom_new_product (product_id int(11) not null auto_increment, 
                                sale_price varchar(20) default '', 
                                description varchar(255) default '', 
                                updatedby int(11) default 0, 
                                updateddate timestamp not null default current_timestamp, 
                                primary key(product_id));

create table user (user_id int(11) not null auto_increment,
                    name varchar(20) ,email varchar(255), 
                    password varchar(15), 
                    updatedby int(11) default 0, 
                    updateddate timestamp not null default 
                    current_timestamp, 
                    primary key(user_id));