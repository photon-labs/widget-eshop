/*
 * ###
 * PHR_HTML5YUIWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
/** 
 * Base widget, All widgets should extends this Phresco widget and implement captureData and createContent methods.
 */
YUI.add("phrescoWidget", function(Y) {
    function PhrescoWidget(config) {
        PhrescoWidget.superclass.constructor.apply(this, arguments);
    }
    var productQty = {};
    var productArray = new Array();
    var totalItem = 0;
    var cartTotal = 0;  

    PhrescoWidget.NAME = "phrescoWidget";
    PhrescoWidget.ATTRS = {
        targetNode : {
            value : Y.Node.one(document.body)
        },
        config : {
            value : null
        },
        apiReference : {
            value : null
        },
        onSelectedListeners : {
            value : []
        },
        onBackButtonListener : {
            value : []
        },
        onCartListeners : {
            value : []
        },
        onOrderListener : {
            value : []
        },
        onOrderSubmitListener : {
            value : []
        },
        onOrderSuccessListener : {
            value : []
        },
        onSelectedMenuListener : {
            value : []
        },
        onReviewListener : {
            value : []
        },
        onTestListener : {
            value : []
        },
        onRegisterListener : {
            value : []
        },
		onMycartviewListener : {
            value : []
        },
        widgets: {
            value : []
        },
        hideWidgets: {
            value : []
        },
        showWidgets: {
            value : []
        }
    };
    Y.extend(PhrescoWidget, Y.Widget, {
        
        initializer: function() {},
        
        destructor : function() {},
        
        captureData : function(jsonData) {},
        
        createContent : function(jsonSrc) {},
        
        getTargetNode : function() {
            var targetNodeName  =   this.get("targetNode");
            return Y.Node.one(targetNodeName);
        },
        setAppConfigData : function (configJSON) {
            this.set("config", configJSON);
        },
        getAppConfigData : function () {
            return this.get("config");
        },
        getAPIReference : function () {
            var ref = this.get("apiReference");
            return ref;
        },        
        getAmountByCurrency : function (rate, fromNeeded) {
            var currency = "$";
            var result = "";

            if (fromNeeded) {
                result = "From " + currency + rate;
            } else {
                result = currency + rate;
            }

           return result;
       },
       _getValueFromSession : function (key, dflt) {
            if (!dflt){
                dflt = 0;
			}	
            var val = (this.getSessionValue(key) !== null && this.getSessionValue(key) !== undefined) ? this.getSessionValue(key) : dflt;
            return val;
       },
       _getParamValueFromSession : function (key, param) {
            var val = (this.getSessionValue(key) !== null && this.getSessionValue(key) !== undefined) ? this.getSessionValue(key) : 0;
            if (val === 0){
                return "";
			}	
            return "&" + param + "=" + val;
       },
       _isEmpty : function(str) {
            return (str === "" || str === null);
       },
        createElement : function (contentHTML) {
            var element = Y.Node.create(contentHTML);
            if (element === null) {
                element = Y.Node.create(this.getHTML4Content(contentHTML));
            }
            return element;
        },
        getHTML4Content : function (contentHTML5) { 
            var contentHTML4 = contentHTML5.replace('<nav', '<div');
            contentHTML4 = contentHTML4.replace('</nav', '</div');
            contentHTML4 = contentHTML4.replace('<header', '<div');
            contentHTML4 = contentHTML4.replace('</header', '</div');
            contentHTML4 = contentHTML4.replace('<section', '<div');
            contentHTML4 = contentHTML4.replace('</section', '</div');
            contentHTML4 = contentHTML4.replace('<aside', '<div');
            contentHTML4 = contentHTML4.replace('</aside', '</div');
            return contentHTML4;
        },
		loading : function(target){
			/* purpose for loading image. */
			$(target).mask(" "); 
		},
        showProducts : function() {
            var widgetObj = this.obj;

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            widgetObj._hideWidgets();

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onSelectedListeners");
            var selectedMenu = apiRef.get("selectedMenu");
            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                
                if (this.data === "specialsLI") {
                    var title = "Special Products";
                    apiRef.set("title", title);
                    apiRef.set("selectedMenu", this.data);
                    if (selectedMenu !== undefined) {
                        $('#' + selectedMenu).removeClass("selected");
                    }
                    $('#specialsLI').addClass("selected");
                    $('#productsLI').removeClass("selected");
                    $('#wrapper').hide();
                    widgetObj._showWidgets();
                    $('#main').show();
                    apiRef.getSpecialProducts([listeners[i]], this.data, listeners[i]);
                }
                else if(this.data === "productsLI") {
                    var title = "All Products";
                    apiRef.set("title", title);
                    apiRef.set("selectedMenu", this.data);
                    if (selectedMenu !== undefined) {
                        $('#' + selectedMenu).removeClass("selected");
                    }
                    $('#productsLI').addClass("selected");
                    $('#specialsLI').removeClass("selected");
                    $('#wrapper').hide();
                    widgetObj._showWidgets();
                    $('#main').show();
                    apiRef.getAllProducts([listeners[i]], this.data, listeners[i]);
                }
                else if(this.data === "homeLI") {
                    var title = "E-Shop | Phresco";
                    apiRef.set("title", title);
                    apiRef.set("selectedMenu", this.data);
                    if (selectedMenu !== undefined) {
                        $('#' + selectedMenu).removeClass("selected");
                    }
                    $('#homeLI').addClass("selected");
					$('#productsLI').removeClass("selected");
                    $('#wrapper').hide();
                    widgetObj._showWidgets();
                    $('#main').show();

                    apiRef.getNewProducts([listeners[i]]);
                }
                else {
                    if (selectedMenu !== undefined) {
                        $('#' + selectedMenu).removeClass("selected");
                    }
                    $('#wrapper').hide();
                    widgetObj._showWidgets();
                    $('#main').show();
                    
                    var title = "Products";
                    apiRef.set("title", title);
                    apiRef.getProducts(listeners, this.data, listeners[i]);
                }
                
            }

        },
        
        showProductsFromCache : function() {
            var widgetObj = this.obj;

            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onSelectedListeners");

            for (var i = 0; i < listeners.length; i++) {
                var data = apiRef.get("products");
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                if (data !== "") {
                    listeners[i].onUpdateListener(data);
                } else{
                    apiRef.getProducts(listeners[i], this.data, listeners[i]);
                }
            }

        },
		
       addTestListener : function(widget) {
            var listeners = this.get("onTestListener");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onTestListener", listeners);
        },
        addSelectedListener : function(widget) {
            var listeners = this.get("onSelectedListeners");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onSelectedListeners", listeners);
        },
        addBackButtonListener : function(widget) {
            var listeners = this.get("onBackButtonListener");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onBackButtonListener", listeners);
        },
        addReviewListener : function(widget) {
            var listeners = this.get("onReviewListener");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onReviewListener", listeners);
        },
        addRegisterListener : function(widget) {
            var listeners = this.get("onRegisterListener");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onRegisterListener", listeners);
        },
        addCartListener : function(widget) {
            var listeners = this.get("onCartListeners");
            listeners = widget;
            this.set("cartWidget", widget);
            this.set("onCartListeners", listeners);
        },
		addMycartviewListener : function(widget) {
            var listeners = this.get("onMycartviewListener");
            listeners = widget;
			this.set("widgets", widget);
            this.set("onMycartviewListener", listeners);
        },
        addOrderListener : function(widget) {
            var listeners = this.get("onOrderListener");
            listeners = widget;
            this.set("orderWidget", widget);
            this.set("onOrderListener", listeners);
        },
        
         addOrderSuccessListener : function(widget) {
            var listeners = this.get("onOrderSuccessListener");
            listeners = widget;
            this.set("onOrderSuccessListener", listeners);
        },
       
        showShoppingCart : function() {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var totalproductQty = apiRef.get("productQty");
			console.info('showShoppingCart =' , this.data.quantity);
            if(totalproductQty){
                totalItem = totalproductQty.totalItem;
                cartTotal = totalproductQty.cartTotal;
            }   

            var productDetail = {};
            var detailsPageQuantity = $("#input_text").val();
            if(detailsPageQuantity){
                this.data.quantity = detailsPageQuantity;
                this.data.totalPrice = this.data.quantity * this.data.price;
            }
            var updateProduct = 0;
            if (productArray.length !== 0) {
                for (var i = 0; i < productArray.length; i++) {
                    var product = productArray[i];
                    if (product.productId === this.data.productId) {
						console.info('product.quantity ', product.quantity);
                        product.quantity =  Number(product.quantity) + Number(this.data.quantity);
                        product.totalPrice = (product.quantity * this.data.price);
                        updateProduct = 1;
                    }
                }
            }
            
            totalItem = Number(totalItem) + Number(this.data.quantity);
            cartTotal = Number(cartTotal) + Number(this.data.totalPrice);
            
            if (updateProduct === 0) {
                productArray.push(this.data);
			}
			
            $("#totalItem").html(totalItem);
            $("#totalPrice").html(cartTotal.toFixed(2));
    
            productQty.productDetail = productArray;    
            productQty.totalItem = totalItem;
            productQty.cartTotal = cartTotal;
            
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onCartListeners");
            apiRef.set("productQty", productQty);     
            
            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                listeners[i].onUpdateListener(null);
            }
        },
		
		// Add products to cart from New products widget
        addToShoppingCart : function() {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var totalproductQty = apiRef.get("productQty");

            if(totalproductQty){
                totalItem = totalproductQty.totalItem;
                cartTotal = totalproductQty.cartTotal;
            }   
			var quantity = 1;
            var productDetail = {};

			var updateProduct = 0;
            if (productArray.length !== 0) {
                for (var i = 0; i < productArray.length; i++) {
                    var product = productArray[i];
                    if (product.productId === this.data.productId) {
                        product.quantity =  Number(product.quantity) + Number(quantity);
                        product.totalPrice = (product.quantity * this.data.price);
                        updateProduct = 1;
                    }
                }
            }
            
            totalItem = Number(totalItem) + Number(quantity);
            cartTotal = Number(cartTotal) + Number(this.data.totalPrice);
            
            if (updateProduct === 0) {
                productArray.push(this.data);
			}
			
            $("#totalItem").html(totalItem);
            $("#totalPrice").html(cartTotal.toFixed(2));
    
            productQty.productDetail = productArray;    
            productQty.totalItem = totalItem;
            productQty.cartTotal = cartTotal;
            
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onCartListeners");
            apiRef.set("productQty", productQty);     
            
            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                listeners[i].onUpdateListener(null);
            }
        },
				
        removeProduct : function() {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var productQty = apiRef.get("productQty");
			
            var productArray = productQty.productDetail;

            if (productArray.length !== 0) {
                for (var i = 0; i < productArray.length; i++) {
                    var product = productArray[i];
                    if (product.productId === this.productId) {
                        var productIndex = i;
						product.quantity = 1;
						product.totalPrice = product.price;
					}
                }
            }
            var removedItem = productArray.splice(productIndex,1);
            var totalItem = 0; 
            var cartTotal = 0;
            if (productArray.length !== 0) {
                for (var j = 0; j < productArray.length; j++) {
                    var product = productArray[j];
                    totalItem = Number(totalItem) + Number(product.quantity);
                    var addTotal = (Number(product.quantity) * Number(product.price));
                    cartTotal = Number(cartTotal) + Number(addTotal);
                }
            }

            productQty.productDetail = productArray;
            productQty.totalItem = totalItem;    
            productQty.cartTotal = cartTotal;    
            
            $("#totalItem").html(totalItem);
            $("#totalPrice").html(cartTotal.toFixed(2));
            
         var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onCartListeners");
            apiRef.set("productQty", productQty);     
            widgetObj.onUpdateListener(null);
        },

		showMyShoppingCart : function() {
			var widgetObj = this.obj;
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }
            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onMycartviewListener");
            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                listeners[i].captureData();
            }
		},

        showProductOrder : function() {

            var widgetObj = this.obj;
			//if($("#totalItem").html() > 0 ){
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onOrderListener");
            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                listeners[i].captureData(this.data);
            }
			//}
        },
		
        showSubmitOrder : function() {
            var widgetObj = this.obj;
            var orderFormFields = ["email", "firstName", "lastName","company", "address1", "address2","city", "postcode", "phonenumber", "paymentmethod", "cardnumber", "securitynumber", "nameoncard"]; 
            var apiRef = widgetObj.get("apiReference");
            var validated = widgetObj.validateFormFields(orderFormFields, apiRef);
            if (validated) {
                
                var orderDetail = {};
                orderDetail.email = $("#email").val();
                orderDetail.firstName =$("#firstName").val();
                orderDetail.lastName = $("#lastName").val();
                orderDetail.company = $("#company").val();
                orderDetail.address1 =  $("#address1").val();
                orderDetail.address2 =  $("#address2").val();
                orderDetail.city = $("#city").val();
                orderDetail.state = $("#state").val();
                orderDetail.country =  $("#country").val();
                orderDetail.postcode = $("#postCode").val();
                orderDetail.phonenumber =  $("#phoneNumber").val();
				orderDetail.cardnumber =  $("#cardNumber").val();
				orderDetail.securitynumber =  $("#securityNumber").val();
				orderDetail.nameoncard =  $("#nameOnCard").val();
                orderDetail.comments =  $("#comment").val();
                
                var apiRef = widgetObj.get("apiReference");
                apiRef.set("orderDetail", orderDetail);
                
                
                var hideWidgets = widgetObj.get("hideWidgets");
                for (var i = 0; i < hideWidgets.length; i++) {
                    $(hideWidgets[i]).hide();
                }
    
                var apiRef = widgetObj.get("apiReference");
                var listeners = widgetObj.get("onOrderSubmitListener");
                for (var i = 0; i < listeners.length; i++) {
                  listeners[i].captureData(null);
                }
            }
        },
		
        showOrderSuccess : function() {
            var widgetObj = this.obj;
            var hideWidgets = widgetObj.get("hideWidgets");
            var apiRef = widgetObj.get("apiReference");
			var productQty = apiRef.get("productQty");			
            var orderDetailget = apiRef.get("orderDetail", orderDetailget);
            var productDetails = apiRef.get("productDetails", productDetails);
            var cartTotal = apiRef.get("cartTotal");// for inserting purpose
            var totalItem = apiRef.get("totalItem");// for inserting purpose
            var customerEmail = apiRef.get("customerEmail", customerEmail);// for inserting purpose 
			var userId = apiRef.get("userId", userId);// for inserting purpose 
            var comments = apiRef.get("comments", comments);// for inserting purpose
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            
            var listeners = widgetObj.get("onOrderSuccessListener");
            for (var i = 0 ;i < listeners.length; i++) {
               apiRef.postOrder(orderDetailget, customerEmail, comments, productDetails, cartTotal, totalItem, userId);
               listeners[i].captureData(null);
            }
			apiRef.set("orderDetailback", "");
			apiRef.set("productQty", "");
			// My cart widget
	        $("#totalItem").html('0');
            $("#totalPrice").html('0.00');
			
			// To empty the productQty json
			var productArray = productQty.productDetail;
            if (productArray.length !== 0) {
                for (var i = 0; i <= productArray.length; i++) {
                    var product = productArray[i];
					productArray.splice(product,1);
                }
            }
			productQty.productDetail = productArray;
			productQty.totalItem = 0;    
            productQty.cartTotal = 0;    

			apiRef.set("productQty", productQty);   
        },
		
        showUs : function() {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            $('#wrapper').show();
            $('#main').hide();
            widgetObj._hideWidgets();

            var listeners = widgetObj.get("onSelectedMenuListener");
            var selectedMenu = apiRef.get("selectedMenu");
            for (var i = 0 ;i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                if ((listeners[i] instanceof Y.Phresco.ContactusWidget) && (this.data === "contactUsLI")) {
                    this.addClass("selected");
                    $('#' + selectedMenu).removeClass("selected");
                    $('#productsLI').removeClass("selected");
                    $('#specialsLI').removeClass("selected");
                    apiRef.set("selectedMenu", this.data);
                    listeners[i].onUpdateListener("");
                } else if ((listeners[i] instanceof Y.Phresco.AboutusWidget) && (this.data === "aboutUsLI")) {
                    this.addClass("selected");
                    $('#' + selectedMenu).removeClass("selected");
                    $('#specialsLI').removeClass("selected");
                    $('#contactUsLI').removeClass("selected");
                    apiRef.set("selectedMenu", this.data);
                    listeners[i].captureData(this.data);
                } else if ((listeners[i] instanceof Y.Phresco.RegisterWidget) && (this.data === "signupLI")) {
                    this.addClass("selected");
                    $('#' + selectedMenu).removeClass("selected");
                    $('#specialsLI').removeClass("selected");
                    $('#contactUsLI').removeClass("selected");
                    apiRef.set("selectedMenu", this.data);
                    listeners[i].captureData(this.data);
                } else if ((listeners[i] instanceof Y.Phresco.LoginWidget) && (this.data === "LoginLi")) {
                    this.addClass("selected");
                    $('#' + selectedMenu).removeClass("selected");
                    $('#specialsLI').removeClass("selected");
                    $('#contactUsLI').removeClass("selected");
                    apiRef.set("selectedMenu", this.data);
                    listeners[i].captureData(this.data);
                }  else if ((listeners[i] instanceof Y.Phresco.OrderHistoryWidget) && (this.data === "myorderLI")) {
                    this.addClass("selected");
                    $('#' + selectedMenu).removeClass("selected");
                    $('#specialsLI').removeClass("selected");
                    $('#contactUsLI').removeClass("selected");
                    apiRef.set("selectedMenu", this.data);
					apiRef.getOrderHistory([listeners[i]], this.userid, listeners[i]);
                }
            }
        },
        
        addSelectedMenuListener : function(widgets) {
            this.set("onSelectedMenuListener", widgets);
        },
        
        validateFormFields : function (validateFormFields, apiRef) {
            var fieldSet = apiRef.getFieldset();
            var fieldsLength = fieldSet.length;
            var errAllids;
            for (var i = 0; i < validateFormFields.length; i++)  {  
                    var field = validateFormFields[i];
                    var jsonField = "$." + field + "";
                    var fieldObj = jsonPath(fieldSet, jsonField);
                    
                    if (fieldObj[0] !== undefined && "TRUE" === fieldObj[0].mandatory) {
                        var id = fieldObj[0].fieldId;
                        var type = fieldObj[0].type;                        
                        var value = $(id).val();
                        var errMessage = id+"_err";
                        var errId = id+"_err_div";
                        
                        if (value === "") {
                            var text = id.split("#");
                            $(errMessage).html("please enter "+ text[1]);
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        }
                        else{
                            if((value !== "") && (type === "EMAIL")) {
                                var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                                if (!regex.test(value)) {
                                    $(errMessage).html("please enter valid email id ");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                  return false;
                                } 
								$(errMessage).html('');
								$(errId).removeClass("error");
                            }
                            else if((value !== "") && (type === "TEXT")){ 
                                var character =  /^[a-zA-Z\s]+$/;
                                if (!character.test(value)) {
                                    $(errMessage).html("please enter character only");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                    return false;
                                }
								$(errMessage).html('');
								$(errId).removeClass("error");
                            }
							 else if((value !== "") && (type === "STRING")){ 
                                var character =  /^[a-zA-Z0-9\s^,^.,^#,^(,^)]+$/;
                                if (!character.test(value)) {
                                    $(errMessage).html("please enter character and number only");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                    return false;
                                }
								$(errMessage).html('');
								$(errId).removeClass("error");
                            }
                            else if((value !== "") && (type === "NUMBER")){
                                var character =  /^[0-9\s^+^-]+$/;; 
                                if (!character.test(value)) {
                                    $(errMessage).html("please enter correct format");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                    return false;
                                }
							$(errMessage).html('');
                        	$(errId).removeClass("error");
                            }                    
                        }
                        
                    }
            }
            return true;
        },

         showProductDetails : function() {
            var widgetObj = this.obj;
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onSelectedListeners");

            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                apiRef.getProductDetails([listeners[i]], this.data, listeners[i]);
            }
        },
         showPreviousProduct : function() {
            var widgetObj = this.obj;
            var hideWidgets = widgetObj.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }

            var apiRef = widgetObj.get("apiReference");
            var listeners = widgetObj.get("onBackButtonListener");

            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                apiRef.getProductDetails([listeners[i]], this.data, listeners[i]);
            }
        },
        
        reviewSubmitFn: function () {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            
            if(apiRef.get("userId")){
                    var userId = apiRef.get("userId");
            }
			
            var review = {};
            review.productId = $("#productId").val();
            review.userId = userId;
            review.rating = $("#starValue").val();
            review.comment = $("#comments").val();
				var currentTime = new Date();
				var currentYear = new Date(currentTime).getFullYear ();
				var currentMonth = new Date(currentTime).getMonth () + 1;
				var currentDate = new Date(currentTime).getDate ();
				
				var currentHours = currentTime.getHours ();
				var currentMinutes = currentTime.getMinutes ();
				var currentSeconds = currentTime.getSeconds ();
				currentHours = ( currentHours >= 10 ) ? currentHours : "0"+currentHours;
				currentMinutes = ( currentMinutes >= 10) ? currentMinutes : "0"+ currentMinutes;
				currentSeconds = ( currentSeconds >= 10) ? currentSeconds : "0"+ currentSeconds;
				var commentDate = currentYear+'-'+currentMonth+'-'+currentDate+' '+currentHours+':'+currentMinutes+':'+currentSeconds;
            review.commentDate = commentDate;
            var data = {};
            data.review = review;
            apiRef.set("data", data);
            
            var listeners = widgetObj.get("onReviewListener");
            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                apiRef.postReview(listeners, data, listeners);
            }
            popup('none');
            
            for (var i = 0; i < listeners.length; i++) {
                var target = listeners[i].get("targetNode");
                widgetObj.loading(target);
                apiRef.getProductDetails([listeners[i]], $("#productId").val(), listeners[i]);
            }
        },
        userLogin: function () {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var loginFields = ["logEmail","logpassword"];
            var validated = widgetObj.registerFormFields(loginFields, apiRef);
            if (validated) {
 
            var login = {};
            login.loginEmail = $("#logEmail").val();
            login.password = $("#logpassword").val();
           
            var data = {};
            data.login = login;
            
            var review = {};
            review.productId = $("#productId").val();
            review.userId = 1;
            review.rating = $("#starValue").val();
            review.comment = $("#comments").val();
            review.commentDate = "2010-12-26 00:00:00";
            var reviewData = {};
            reviewData.review = review;
            
            var listeners = widgetObj.get("onSelectedListeners");
                apiRef.doLogin(listeners, data, reviewData);
         }
        },
        userRegister: function () {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
            var registerFields = ["regfirstname", "reglastname","regemail","regpassword", "regphonenumber"]; 
            var validated = widgetObj.registerFormFields(registerFields, apiRef);
            if (validated) {
                var register = {};
                register.firstName = $("#regfirstname").val();
                register.lastName = $("#reglastname").val();
                register.email = $("#regemail").val();
                register.password = $("#regpassword").val();
                register.phoneNumber = $("#regphonenumber").val();
                var data = {};
                data.register = register;
                
                var review = {};
                review.productId = $("#productId").val();
                review.userId = 1;
                review.rating = $("#starValue").val();
                review.comment = $("#comments").val();
                review.commentDate = "2010-12-26 00:00:00";
                var reviewData = {};
                reviewData.review = review;
                
                var listeners = widgetObj.get("onSelectedListeners");
					apiRef.doRegister(listeners, data, reviewData);
            }
        },
		doLogout: function () {
            var widgetObj = this.obj;
            var apiRef = widgetObj.get("apiReference");
			console.info(this.data);
			apiRef.set("userId", 0);
			apiRef.set("userData", "");
			var listeners = widgetObj.get("onTestListener");
            apiRef.logoutUser(listeners,this.data);
        },
        registerFormFields : function (registerFields, apiRef) {
          if(registerFields[0] === "logEmail"){
                var fieldSet = apiRef.getLoginFieldset();
            }else {
                var fieldSet = apiRef.getregFieldset();
            } 
            var fieldsLength = fieldSet.length;
            var errAllids;
            for (var i = 0; i < registerFields.length; i++)  {  
                    var field = registerFields[i];
                    var jsonField = "$." + field + "";
                    var fieldObj = jsonPath(fieldSet, jsonField);
                    if ("TRUE" === fieldObj[0].mandatory) {
                        var id = fieldObj[0].fieldId;
                        var type = fieldObj[0].type;
                        var value = $(id).val();
                        var errMessage = id+"_err";
                        var errId = id+"_err_div";
                        if (value === "") {
                            var text = id.split("#");
                            var textmsg = text[1].split("g");
                            $(errMessage).html("Please enter " + textmsg[1]);
                            $(errId).addClass("error");
                            $(id).focus();
                            return false;
                        }
                        
                        else{
                            if((value !== "") && (type === "EMAIL")) {
                                var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                                if (!regex.test(value)) {
                                    $(errMessage).html("please enter valid email id ");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                  return false;
                                } 
                            }
                            else if((value !== "") && (type === "TEXT")){
                                var character =  /^[a-zA-Z\s]+$/;
                                if (!character.test(value)) {
                                    $(errMessage).html("please enter character only");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                    return false;
                                }
                            }
                            else if((value !== "") && (type === "NUMBER")){
                                var character =  /^[0-9\s]+$/;
                                if (!character.test(value)) {
                                    $(errMessage).html("please enter number only");
                                    $(errId).addClass("error");
                                    $(id).focus();
                                    return false;
                                }
                            }                    
                            
                        }
                        $(errMessage).html('');
                        $(errId).removeClass("error");
                    }
            }
            return true;
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        },
        _hideWidgets : function () {
            var hideWidgets = this.get("hideWidgets");
            for (var i = 0; i < hideWidgets.length; i++) {
                $(hideWidgets[i]).hide();
            }
        },
        showWidgets : function (showWidgets) {
            this.set("showWidgets", showWidgets);
        },
        _showWidgets : function () {
            var showWidgets = this.get("showWidgets");
            for (var i = 0; i < showWidgets.length; i++) {
                $(showWidgets[i]).show();
            }
        },
        // Beyond this point is the MyWidget specific application and rendering logic
        /* Attribute state supporting methods (see attribute config above) */       
        _defAttrAVal : function() {
        },

        _setAttrA : function(attrVal, attrName) {
        },

        _getAttrA : function(attrVal, attrName) {
        },

        _validateAttrA : function(attrVal, attrName) {
        },

        /* Listeners, UI update methods */

        _afterAttrAChange : function(e) {
            /* Listens for changes in state, and asks for a UI update (controller). */

        },

        _uiSetAttrA : function(val) {
            /* Update the state of attrA in the UI (view) */

        },

        _defMyEventFn : function(e) {
            // The default behavior for the "myEvent" event.
        }
    }); 

    Y.namespace("Phresco").PhrescoWidget = PhrescoWidget;
}, "3.3.0", {
    requires:["widget", "io", "json", "node", "substitute"]
});
