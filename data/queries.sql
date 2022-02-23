
CREATE TABLE category (
  catId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  catIconId INT(11) UNSIGNED NOT NULL,
  catName VARCHAR(50) NOT NULL,
  catCount INT(3) NULL,
  catActive ENUM("Y", "N") NOT NULL DEFAULT "Y"
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE brand (
  braId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  braName VARCHAR(50) NOT NULL,
  braDescription VARCHAR(500) NULL,
  braCount INT(3) NULL,
  braActive ENUM("Y", "N") NOT NULL DEFAULT "Y"
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE icon (
  icoId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  icoName VARCHAR(50) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE product (
  proId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  proCategoryId INT(11) UNSIGNED NOT NULL,
  proBrandId INT(11) UNSIGNED NOT NULL,
  proPriceId INT(11) UNSIGNED NOT NULL,
  proCode CHAR(12) NULL,
  proName VARCHAR(50) NOT NULL,
  proDescription VARCHAR(500) NULL,
  proGender ENUM("M", "W", "U") NOT NULL DEFAULT "U",
  proDiscount INT(3) NOT NULL DEFAULT 0,
  proRating DECIMAL(1,1) NULL,
  proReviewCount INT(3) NULL,
  proComments VARCHAR(500) NULL,
  proSales ENUM("Y", "N") NOT NULL DEFAULT "N",
  proActive ENUM("Y", "N") NOT NULL DEFAULT "Y"
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE price (
  priId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  priAmount DECIMAL(4,2) NOT NULL DEFAULT 1.00
)

CREATE TABLE advert (
  advId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  advProductId INT(11) UNSIGNED,
  advOrder INT(2) UNSIGNED
) ENGINE=InnoDB DEFAULT CHARSET=utf8;






CREATE TABLE color (
  colId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  colName VARCHAR(50) NOT NULL
)

CREATE TABLE size (
  sizId INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  sizName VARCHAR(50) NOT NULL
)


CREATE TABLE bindProductToColor (
  bind1Id INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  bind1ProductId INT(11) UNSIGNED NOT NULL,
  bind1ColorId INT(11) UNSIGNED NOT NULL
)

CREATE TABLE bindProductToSize (
  bind2Id INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  bind2ProductId INT(11) UNSIGNED NOT NULL,
  bind2SizeId INT(11) UNSIGNED NOT NULL
)




# T*T -- ALTER TABLE

ALTER TABLE category ADD catOrder INT(3) UNSIGNED NULL
AFTER catActive; 

ALTER TABLE icon ADD icoUrl VARCHAR(500) NOT NULL
AFTER icoName; 

ALTER TABLE price ADD priDescription VARCHAR(50) NULL
AFTER priAmount; 

ALTER TABLE product ADD proSubcat VARCHAR(50) NULL
AFTER proDescription; 

ALTER TABLE advert ADD advGender ENUM("M", "W") NOT NULL
AFTER advProductId; 




# T*T -- CONSTRAINTS

ALTER TABLE category
ADD FOREIGN KEY (catIconId) REFERENCES icon(icoId) 
ON DELETE RESTRICT 
ON UPDATE CASCADE; 


ALTER TABLE product
ADD FOREIGN KEY (proCategoryId) REFERENCES category(catId) 
ON DELETE RESTRICT 
ON UPDATE CASCADE; 


ALTER TABLE product
ADD FOREIGN KEY (proBrandId) REFERENCES brand(braId) 
ON DELETE RESTRICT 
ON UPDATE CASCADE; 


ALTER TABLE product
ADD FOREIGN KEY (proPriceId) REFERENCES price(priId) 
ON DELETE RESTRICT 
ON UPDATE CASCADE; 



ALTER TABLE advert
ADD FOREIGN KEY (advProductId) REFERENCES product(proId) 
ON DELETE RESTRICT 
ON UPDATE CASCADE; 





ALTER TABLE bindProductToColor
ADD FOREIGN KEY (bind1ProductId) REFERENCES product(proId) 
ON DELETE RESTRICT
ON UPDATE CASCADE;
ALTER TABLE bindProductToColor
ADD FOREIGN KEY (bind1ColorId) REFERENCES color(colId) 
ON DELETE RESTRICT
ON UPDATE CASCADE;





ALTER TABLE bindProductToSize
ADD FOREIGN KEY (bind2ProductId) REFERENCES product(proId) 
ON DELETE RESTRICT
ON UPDATE CASCADE;
ALTER TABLE bindProductToSize
ADD FOREIGN KEY (bind2SizeId) REFERENCES size(sizId) 
ON DELETE RESTRICT
ON UPDATE CASCADE;





# MK -- DELETE CONSTRAINT
ALTER TABLE extra.category
DROP FOREIGN KEY category_ibfk_1







# T*T -- insertions

INSERT INTO category 
VALUES(NULL, 999, "t-shirts", 0, DEFAULT, 0)

INSERT INTO category 
VALUES
(NULL, 999, "vestes", 0, DEFAULT, 0),
(NULL, 999, "pantalons", 0, DEFAULT, 0),
(NULL, 999, "robes", 0, DEFAULT, 0)

INSERT INTO category 
VALUES
(NULL, 999, "robes", 0, DEFAULT, 0),
(NULL, 999, "sweats & pulls", 0, DEFAULT, 0),
(NULL, 999, "sportswear", 0, DEFAULT, 0),
(NULL, 999, "chaussures", 0, DEFAULT, 0),
(NULL, 999, "accessoires", 0, DEFAULT, 0)

INSERT INTO brand
VALUES
(NULL, 'Jewis', NULL, 0, DEFAULT),
(NULL, 'Five July', NULL, 0, DEFAULT),
(NULL, 'Hinterland', NULL, 0, DEFAULT);


INSERT INTO icon 
VALUES(NULL, "tshirt"), (NULL, "jacket"), (NULL, "pants"), (NULL, "access")


INSERT INTO size
VALUES
(NULL, "Taille Unique"),
(NULL, "XS"),
(NULL, "S"),
(NULL, "M"),
(NULL, "L"),
(NULL, "XL"),
(NULL, "XXL"),
(NULL, "empty"),
(NULL, "empty"),
(NULL, "empty"),
(NULL, "34"),
(NULL, "35"),
(NULL, "36"),
(NULL, "37"),
(NULL, "38"),
(NULL, "39"),
(NULL, "40"),
(NULL, "41"),
(NULL, "42"),
(NULL, "43"),
(NULL, "44"),
(NULL, "45"),
(NULL, "46"),
(NULL, "47")






# MK -- product creation

INSERT INTO product 
(`proId`, `proCategoryId`, `proBrandId`, `proPriceId`, `proCode`, `proName`, `proDescription`, `proSubcat`, `proGender`, `proDiscount`, `proRating`, `proReviewCount`, `proComments`, `proSales`, `proActive`) 
VALUES 
(NULL, '7', '1', '15', 'XXX.XXX.XXXX', 'Goal III', NULL, "survêtement", 'M', '0', '4.8', '7', NULL, 'N', 'Y'),
(NULL, '7', '4', '13', 'XXX.XXX.XXXX', 'Fast Fred', "sweat", NULL, 'U', '0', '4.7', '16', NULL, 'N', 'Y');





INSERT INTO `advert` (`advId`, `advProductId`, `advOrder`) 
VALUES 
(NULL, 25, 1),
(NULL, 45, 2),
(NULL, 14, 3),
(NULL, 12, 1),
(NULL, 34, 2),
(NULL, 24, 3),







INSERT INTO bindProductToColor
VALUES
(NULL, 55, 2),
(NULL, 55, 9),
(NULL, 55, 13)




INSERT INTO bindProductToSize
VALUES
(NULL, 55, 2),
(NULL, 55, 3),
(NULL, 55, 4),
(NULL, 55, 5),
(NULL, 55, 6)






# T*T -- SELECT




SELECT 
  p.proName AS p_name, 
  b.braName AS p_brand, 
  c.catName AS p_categ, 
  pr.priAmount AS p_price,
  p.proRating AS p_rat,
  p.proReviewCount AS p_revcount
FROM product p
INNER JOIN brand b
ON p.proBrandId = b.braId
INNER JOIN category c 
ON p.proCategoryId = c.catId
INNER JOIN price pr 
ON p.proPriceId = pr.priId


-- pantalons
SELECT 
  p.proName AS p_name, 
  b.braName AS p_brand, 
  c.catName AS p_categ, 
  pr.priAmount AS p_price,
  p.proRating AS p_rat,
  p.proReviewCount AS p_revcount
FROM product p
INNER JOIN brand b
ON p.proBrandId = b.braId
INNER JOIN category c 
ON p.proCategoryId = c.catId
INNER JOIN price pr 
ON p.proPriceId = pr.priId
WHERE c.catId = 3



-- liste produits
SELECT 
p.proId, 
c.catName,
p.proSubcat,
p.proGender,
b.braName, 
p.proName,
pr.priAmount
FROM product p
INNER JOIN brand b
ON p.proBrandId = b.braId
INNER JOIN category c 
ON p.proCategoryId = c.catId
INNER JOIN price pr 
ON p.proPriceId = pr.priId
ORDER BY c.catId



-- liste couleurs en fonction de l'id produit
SELECT cl.colName
FROM bindProductToColor bd
INNER JOIN color cl
ON bd.bind1ColorId = cl.colId
WHERE bd.bind1ProductId = 1 


-- liste couleurs pour plusieurs produits
SELECT DISTINCT 
  cl.colId, 
  cl.colName
FROM bindProductToColor bd
INNER JOIN color cl
ON bd.bind1ColorId = cl.colId
WHERE bd.bind1ProductId IN (11, 12, 13, 47, 54)
ORDER BY cl.colId