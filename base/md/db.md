# extra - DB

## tables

```
- (1) category
- (2) brand
- (3) product
- (4) item
- (5) feature
- (6) picture
- (7) price *
- (8) color
- (9) size
- (10) icon
- (11) user
- (12) order
- (13) line
- (14) advert √
```


```
- advert       'adv'
- brand        'bra'
- category     'cat'
- color        'col'
- feature      'fea'
- icon         'ico'
- item         'ite'
- line         'lin'
- order        'ord'
- picture      'pic'
- product      'pro'
- price        'pri' *
- size         'siz'
- user         'usr'
```



## structure


---
### 1 — category 'cat'
```
- ∆ catId INT UNS AI PK NN
- [] catIconId INT UNS
- catName VARCHAR(50)
- catCount INT(3)
- catActive [Y/N]
```

---
### 2 — brand 'bra'
```
- ∆ braId INT UNS AI PK NN
- braName VARCHAR(50)
- braDescription VARCHAR(500)
- braCount INT(3)
- braActive [Y/N]
```

---
### 3 — product 'pro'
```
- ∆ proId INT UNS AI PK NN
- [] proCategoryId
- [] proBrandId
- [] proPriceId
- proCode
- proName
- proGender
- proDescription
- proDiscount
- proRating
- proReviewCount
- proComments
- proSales
- proActive 
```

---
### 4 — item 'ite'
```
- ∆ iteId INT UNS AI PK NN
- [] iteProductId
- [] iteColorId
- [] iteSizeId
- iteStatus
- [] iteOrderId
```


---
### 5 — feature 'fea'
```
- ∆ feaId INT UNS AI PK NN
- [] feaProductId INT UNS
- feaDescription VARCHAR(500)
- feaActive [Y/N]
```


---
### 6 — picture 'pic'  
```
- ∆ picId INT UNS AI PK NN
- [] picProductId INT UNS
- picUrl VARCHAR(500)
- picAlt VARCHAR(50)
- picOrder INT(3)
- picComments VARCHAR(500)
- picActive [Y/N]
```


---
### 7 — price 'pri'  
```
- ∆ picId INT UNS AI PK NN
- priAmount DECIMAL(4,2)
```

---
### 8 — color 'col'  
```
- ∆ colId INT UNS AI PK NN
- colName VARCHAR(50)
```

---
### 9 — size 'siz'  
```
- ∆ sizId INT UNS AI PK NN
- sizeName VARCHAR(50)
- sizeCode VARCHAR(3)
```


---
### 10 — icon 'ico'  
```
- ∆ icoId INT UNS AI PK NN
- icoName VARCHAR(50)
- icoUrl VARCHAR(500)
```


---
### 11 — user 'usr'  
```
- ∆ usrId INT UNS AI PK NN
- usrLsName VARCHAR(50)
- usrFsName VARCHAR(50)
- usrMail VARCHAR(50)
- usrPass VARCHAR(50)
- usrAddress1 VARCHAR(300)
- usrAddress2 VARCHAR(300)
- usrPostalCode INT(5)
- usrCity VARCHAR(50)
- usrCountry VARCHAR(50)
```


---
### 12 — order 'ord'  
```
- ∆ ordId INT UNS AI PK NN
- [] ordUserId INT UNS
- ordDateTime DATETIME
- ordShipping [std/exp]
- ordDiscountCode VARCHAR(50)
- ordTotal DECIMAL(4,2)
```


---
### 13 — line 'lin'  
```
- ∆ linId INT UNS AI PK NN
- [] linOrderId INT UNS
- [] linItemId INT UNS
- lineQuantity INT
- linePrice DECIMAL(4,2)
```


---
### 9 — advert 'adv'  
```
- ∆ advId INT UNS AI PK NN
- [] advProductId INT UNS
- advOrder VARCHAR(3)
```

