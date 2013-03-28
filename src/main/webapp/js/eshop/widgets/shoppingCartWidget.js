/*
 * PHR_HTML5YUIWidget
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Event = YUI.event,
YUI.add("shoppingCartWidget", function(Y) {
    function ShoppingCartWidget(config) {
        ShoppingCartWidget.superclass.constructor.apply(this, arguments);
    }

    ShoppingCartWidget.NAME = "shoppingCartWidget";

    ShoppingCartWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(ShoppingCartWidget, Y.Phresco.PhrescoWidget, {
        initializer: function() {
            /*
             * initializer is part of the lifecycle introduced by 
             * the Base class. It is invoked during construction,
             * and can be used to setup instance specific state or publish events which
             * require special configuration (if they don't need custom configuration, 
             * events are published lazily only if there are subscribers).
             *
             * It does not need to invoke the superclass initializer. 
             * init() will call initializer() for all classes in the hierarchy.
             */
        },

        destructor : function() {
            /*
             * destructor is part of the lifecycle introduced by 
             * the Widget class. It is invoked during destruction,
             * and can be used to cleanup instance specific state.
             *
             * Anything under the boundingBox will be cleaned up by the Widget base class
             * We only need to clean up nodes/events attached outside of the bounding Box
             *
             * It does not need to invoke the superclass destructor. 
             * destroy() will call initializer() for all classes in the hierarchy.
             */
        },

        renderUI : function() {
            /*
             * renderUI is part of the lifecycle introduced by the
             * Widget class. Widget's renderer method invokes:
             *
             *     renderUI()
             *     bindUI()
             *     syncUI()
             *
             * renderUI is intended to be used by the Widget subclass
             * to create or insert new elements into the DOM. 
             */       
            var jsonData = this.get("newproducts");
            this.createContent(this.getTargetNode());
        },
        

        bindUI : function() {
            /*
             * bindUI is intended to be used by the Widget subclass 
             * to bind any event listeners which will drive the Widget UI.
             * 
             * It will generally bind event listeners for attribute change
             * events, to update the state of the rendered UI in response 
             * to attribute value changes, and also attach any DOM events,
             * to activate the UI.
             */

        },

        syncUI : function() {
            /*
             * syncUI is intended to be used by the Widget subclass to
             * update the UI to reflect the initial state of the widget,
             * after renderUI. From there, the event listeners we bound above
             * will take over.
             */

        },

        captureData : function(jsonData) {
            this.createContent(this.getTargetNode());
            var target = this.get("targetNode");
            $(target).unmask();
        },

        createContent : function(targetNode) {
			targetNode.empty();

			var apiRef = this.get("apiReference");
			var url = apiRef.get("wsURLWithoutContext");
			var config = apiRef._getConfigData();
			var webImage = config.web.web;
			var currentProductId = 0;
			if (apiRef.get("currentProductId")){
				currentProductId = apiRef.get("currentProductId");
			}
			
			var h3 = this.createElement('<h3> product Checkout</h3> ');
			 var backHref = Y.Node.create('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
                backHref.obj = this;
				if(currentProductId !== 0) {
               	 backHref.data = currentProductId;
				 Y.on('click' , this.showPreviousProduct , backHref);
				}else{
	                Y.on('click' , this.showProductsFromCache , backHref);
				}
				
                h3.appendChild(backHref);
			var productContainer = this.createElement('<div class="productcontainer">');
				var shoppingCarth5 = this.createElement('<h5> My Shopping Cart</h5>');

				var checkoutcol1Div = this.createElement('<div class="checkoutcol1"> ');
					var productsDiv = this.createElement('<div class="co_col1position1">Products</div> ');
					checkoutcol1Div.appendChild(productsDiv);
					
				var checkoutcol2Div = this.createElement(' <div class="checkoutcol2">');
					var quantityDiv = this.createElement('<div class="co_col1position2">Quantity</div> ');
					checkoutcol2Div.appendChild(quantityDiv);
			
				var checkoutcol3Div = this.createElement(' <div class="checkoutcol3">');
					var amountDiv = this.createElement('<div class="co_col1position2">Total Amount</div> ');
					checkoutcol3Div.appendChild(amountDiv);

				var checkoutcol4 = this.createElement(' <div class="checkoutcol4">');
					var removeDiv = this.createElement('<div class="co_col1position2">Remove Item</div> ');
					checkoutcol4.appendChild(removeDiv);
   
		productContainer.appendChild(shoppingCarth5);
		productContainer.appendChild(checkoutcol1Div);
		productContainer.appendChild(checkoutcol2Div);
		productContainer.appendChild(checkoutcol3Div);
		productContainer.appendChild(checkoutcol4);
		
		var productQty = apiRef.get("productQty");
			
		if(productQty){	
			var productDetails = productQty.productDetail;
			if(productQty.quantity){
				var quantity = productQty.quantity;
			}
			else { var quantity = 1; }
			
			var totalItem = productQty.totalItem;
			var currentProductId = 0;
			if(apiRef.get("currentProductId") !== 0 ){
				var currentProductId = apiRef.get("currentProductId");
			}
		
			var imageURL = url + '/' + webImage + productDetails.image;
			var detailImageURL = url + '/' + webImage + productDetails.detailImage;
			

		var subTotal = 0;
		   for (var j = 0; j < productDetails.length; j++) {
				var chectoutrow2 = this.createElement('<div class="chectoutrow2">');
					var checkoutvaluecol1 = this.createElement('<div class="checkoutvaluecol1">');
						var productImageFullDiv = this.createElement('<div class="co_col1position1">');
							var productImageDiv = this.createElement('<div class="co_product_image">');
								var productImage = this.createElement('<img src="'+productDetails[j].detailImageURL+'" width="120" height="120" alt="Apple Mac Laptop">');
								productImageDiv.appendChild(productImage);
							var productDesc = this.createElement('<div class="co_product_description">'+productDetails[j].name+'</div>');
							productImageFullDiv.appendChild(productImageDiv);
							productImageFullDiv.appendChild(productDesc);
							
					checkoutvaluecol1.appendChild(productImageFullDiv);
							
					
					var checkoutvaluecol2 = this.createElement('<div class="checkoutvaluecol2">');
						var productQuantityDiv = this.createElement('<div class="co_col1position2">');
							var co_inputDiv = this.createElement('<div class="co_input">');
								var co_inputBox = Y.Node.create('<input type="text" value="'+productDetails[j].quantity+'" name="productQuantity_'+productDetails[j].productId+'" id="productQuantity_'+productDetails[j].productId+'" size="3" maxlength="2" style="width:40px" />');
								
								co_inputBox.obj = this;
								co_inputBox.data = productDetails[j].price;
								co_inputBox.pid = productDetails[j].productId;
								
								Y.on('blur' , this.addTotal , co_inputBox);
								
							co_inputDiv.appendChild(co_inputBox);
							productQuantityDiv.appendChild(co_inputDiv);
						
						checkoutvaluecol2.appendChild(productQuantityDiv);
					
					var checkoutvaluecol3 = this.createElement('<div class="checkoutvaluecol3">');
						var productAmount = this.createElement('<div class="co_col1position2"><div class="co_input2"><span id="totalAmount_'+productDetails[j].productId+'">'+productDetails[j].totalPrice+'</span></div></div>');
						checkoutvaluecol3.appendChild(productAmount);
					
					var checkoutvaluecol4 = this.createElement('<div class="checkoutvaluecol4">');
						var removeButtonDiv = this.createElement('<div class="co_col1position2">');
							var removeButton = Y.Node.create('<input type="submit" value="Remove" class="remove_buttonstyle"/>');
							
							removeButton.obj = this;
							removeButton.productId = productDetails[j].productId;
							
							Y.on('click' , this.removeProduct , removeButton);

							removeButtonDiv.appendChild(removeButton);
					checkoutvaluecol4.appendChild(removeButton);
				
					chectoutrow2.appendChild(checkoutvaluecol1);
					chectoutrow2.appendChild(checkoutvaluecol2);
					chectoutrow2.appendChild(checkoutvaluecol3);
					chectoutrow2.appendChild(checkoutvaluecol4);
					
					productContainer.appendChild(chectoutrow2);
					
					subTotal = Number(subTotal) + Number(productDetails[j].totalPrice);
					
			  }
			
			var clearDiv =  this.createElement('<div class="clear"></div>');
			var subTotalHeightDiv =  this.createElement('<div class="subTotalHeight"></div>');
			var subTotalDiv = this.createElement('<div class="subtotal_pos">SubTotal: $<span id="subToal">'+subTotal.toFixed(2)+'</span></div>');
			var clearDiv2 = this.createElement('<div class="clear"></div>');
			var cartButtons = this.createElement('<div class="checkout_buttonposition2">');
					
			var updateCartButton = Y.Node.create('<input type="submit" value="Update Cart" class="checkout_buttonstyle" />');

			updateCartButton.obj = this;
			updateCartButton.pid = productDetails.id;
			Y.on('click' , this.addToMyCart , updateCartButton);


			var checkOutButton = Y.Node.create('<input type="submit" value="Check Out" class="checkout_buttonstyle"/>');
			checkOutButton.obj = this;
			checkOutButton.pid = productDetails.id;
			Y.on('click' , this.showProductOrder , checkOutButton);
			cartButtons.appendChild(updateCartButton);
			if(totalItem > 0){
				cartButtons.appendChild(checkOutButton);
			}
			productContainer.appendChild(clearDiv);
			productContainer.appendChild(subTotalHeightDiv);
			productContainer.appendChild(subTotalDiv);
			productContainer.appendChild(clearDiv2);
			productContainer.appendChild(cartButtons);
		}

			targetNode.appendChild(h3);
			targetNode.appendChild(productContainer);

            this.bindUI();
        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        addToMyCart:function(){
		 var widgetObj = this.obj;
		 var apiRef = widgetObj.get("apiReference");
         var productQty = apiRef.get("productQty");
		 var productArray = productQty.productDetail;
		 var totalItem = 0;
		 var cartTotal = 0;
	
			for(var j=0; j<productArray.length;j++){
				product = productArray[j];
				var quantity = $("#productQuantity_"+product.productId).val();
				var totalAmount = $("#totalAmount_"+product.productId).html();
				
				if(quantity !== product.quantity){
					product.quantity =  quantity;
				}	
				if(totalAmount !== product.totalPrice){
					product.totalPrice = totalAmount;
				}	
			}
			

			for(var i=0; i<productArray.length;i++){
				product = productArray[i];
				totalItem = Number(totalItem) + Number(product.quantity);
				cartTotal = Number(cartTotal) + Number(product.totalPrice);
			}
			
			$("#totalItem").html(totalItem);
			$("#totalPrice").html(cartTotal.toFixed(2));
			$("#subToal").html(cartTotal.toFixed(2));
			
			productQty.productDetail = productArray;
			productQty.totalItem = totalItem;
			productQty.cartTotal = cartTotal;
	
			
           var apiRef = widgetObj.get("apiReference");
           var listeners = widgetObj.get("onCartListeners");
           apiRef.set("productQty", productQty);
        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
		addSelectedListener : function(widget) {
            var listeners = this.get("onSelectedListeners");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onSelectedListeners", listeners);
        },

        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        },
        addTotal:function(){
			var widgetObj = this.obj;
			var apiRef = widgetObj.get("apiReference");
			var productQty = apiRef.get("productQty");
			var productArray = productQty.productDetail;
            var productId = this.pid;
            var total = this.data * $("#productQuantity_"+productId).val();
            $("#totalAmount_"+productId).html(total.toFixed(2));
        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        }
    });

    Y.namespace("Phresco").ShoppingCartWidget = ShoppingCartWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute", "phrescoWidget"]
});
