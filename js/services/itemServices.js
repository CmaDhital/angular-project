angular.module('app').service("itemService", function() {
    this.itemList = [{"itemType": "Sims", "itemNo": 1},
        {"itemType": "CellPhones", "itemNo": 2},
        {"itemType": "Televisions", "itemNo": 3},
        {"itemType": "Speakers", "itemNo": 4},
        {"itemType": "Computers", "itemNo": 5},
        {"itemType": "Headphones", "itemNo": 6}];

    this.items = [
        {
            "src": "/angular-project/styles/images/At&T.jpg",
            "price": "$20.00",
            "itemName": "AT&T sim",

            "itemType": this.itemList[0].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
        "src": "/angular-project/styles/images/lycamobile.jpg",
            "price": "$15.00",
        "itemName": "Lyca Mobile sim",

        "itemType": this.itemList[0].itemNo,
        "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/sprint.jpg",
            "price": "$15.00",
            "itemName": "Sprint sim",

            "itemType": this.itemList[0].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/tmobile.jpg",
            "price": "$25.00",
            "itemName": "T Mobile sim",
            "itemType": this.itemList[0].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/ncell.jpg",
            "price": "$18.00",
            "itemName": "Ncell sim",

            "itemType": this.itemList[0].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/verizon.jpg",
            "price": "$5.00",
            "itemName": "Verizon sim",

            "itemType": this.itemList[0].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },


        {
            "src": "/angular-project/styles/images/se.jpg",
            "price": "$200.00",
            "itemName": "Sony Erricson",

            "itemType": this.itemList[1].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/iphone.jpg",
            "price": "$650.00",
            "itemName": "Iphone",

            "itemType": this.itemList[1].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/motorolla.jpg",
            "price": "$550.00",
            "itemName": "Motorolla",

            "itemType": this.itemList[1].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/blu.jpg",
            "price": "$250.00",
            "itemName": "BLU",
            "itemType": this.itemList[1].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/samsung.jpg",
            "price": "$180.00",
            "itemName": "Samsung",

            "itemType": this.itemList[1].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/phone1.jpg",
            "price": "$5.00",
            "itemName": "Verizon sim",

            "itemType": this.itemList[1].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },



        {
            "src": "/angular-project/styles/images/At&T.jpg",
            "price": "$20.00",
            "itemName": "AT&T sim",

            "itemType": this.itemList[2].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/lycamobile.jpg",
            "price": "$15.00",
            "itemName": "Lyca Mobile sim",

            "itemType": this.itemList[2].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/sprint.jpg",
            "price": "$15.00",
            "itemName": "Sprint sim",

            "itemType": this.itemList[2].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/tmobile.jpg",
            "price": "$25.00",
            "itemName": "T Mobile sim",
            "itemType": this.itemList[2].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/ncell.jpg",
            "price": "$18.00",
            "itemName": "Ncell sim",

            "itemType": this.itemList[2].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/verizon.jpg",
            "price": "$5.00",
            "itemName": "Verizon sim",

            "itemType": this.itemList[2].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },


        {
            "src": "/angular-project/styles/images/At&T.jpg",
            "price": "$20.00",
            "itemName": "AT&T sim",

            "itemType": this.itemList[3].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/lycamobile.jpg",
            "price": "$15.00",
            "itemName": "Lyca Mobile sim",

            "itemType": this.itemList[3].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/sprint.jpg",
            "price": "$15.00",
            "itemName": "Sprint sim",

            "itemType": this.itemList[3].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/tmobile.jpg",
            "price": "$25.00",
            "itemName": "T Mobile sim",
            "itemType": this.itemList[3].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/ncell.jpg",
            "price": "$18.00",
            "itemName": "Ncell sim",

            "itemType": this.itemList[3].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/verizon.jpg",
            "price": "$5.00",
            "itemName": "Verizon sim",

            "itemType": this.itemList[3].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/At&T.jpg",
            "price": "$20.00",
            "itemName": "AT&T sim",

            "itemType": this.itemList[4].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/lycamobile.jpg",
            "price": "$15.00",
            "itemName": "Lyca Mobile sim",

            "itemType": this.itemList[4].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/sprint.jpg",
            "price": "$15.00",
            "itemName": "Sprint sim",

            "itemType": this.itemList[4].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/tmobile.jpg",
            "price": "$25.00",
            "itemName": "T Mobile sim",
            "itemType": this.itemList[4].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/ncell.jpg",
            "price": "$18.00",
            "itemName": "Ncell sim",

            "itemType": this.itemList[4].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/verizon.jpg",
            "price": "$5.00",
            "itemName": "Verizon sim",

            "itemType": this.itemList[4].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },


        {
            "src": "/angular-project/styles/images/At&T.jpg",
            "price": "$20.00",
            "itemName": "AT&T sim",

            "itemType": this.itemList[5].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/lycamobile.jpg",
            "price": "$15.00",
            "itemName": "Lyca Mobile sim",

            "itemType": this.itemList[5].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/sprint.jpg",
            "price": "$15.00",
            "itemName": "Sprint sim",

            "itemType": this.itemList[5].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/tmobile.jpg",
            "price": "$25.00",
            "itemName": "T Mobile sim",
            "itemType": this.itemList[5].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/ncell.jpg",
            "price": "$18.00",
            "itemName": "Ncell sim",

            "itemType": this.itemList[5].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },

        {
            "src": "/angular-project/styles/images/verizon.jpg",
            "price": "$5.00",
            "itemName": "Verizon sim",

            "itemType": this.itemList[5].itemNo,
            "description": "This is the latest product available in market. This is available in reasonable price in our store."
        },
    ];
    });