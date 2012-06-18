/*
 * ###
 * PHR_HTML5YUIWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
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
Event = YUI.event,
YUI.add("topSellsWidget", function(Y) {
    function TopSellsWidget(config) {
        TopSellsWidget.superclass.constructor.apply(this, arguments);
    }

    TopSellsWidget.NAME = "topSellsWidget";

    TopSellsWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(TopSellsWidget, Y.Phresco.PhrescoWidget, {
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
             /* this.publish("myEvent", {
                defaultFn: this._defMyEventFn,
                bubbles:false
             }); */

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

            // this.after("attrAChange", this._afterAttrAChange);
        },

        syncUI : function() {
            /*
             * syncUI is intended to be used by the Widget subclass to
             * update the UI to reflect the initial state of the widget,
             * after renderUI. From there, the event listeners we bound above
             * will take over.
             */

            // this._uiSetAttrA(this.get("attrA"));
        },

        captureData : function(jsonData) {
            
			this.createContent(this.getTargetNode(), jsonData);
        },

        createContent : function(targetNode, jsonData) {
            var h3 = this.createElement('<h3>New Products</h3>');
            var topSellsUL = this.createElement('<ul>');
			if( jsonData != undefined ){
				var apiRef = this.get("apiReference");
				var url = apiRef.get("wsURLWithoutContext");
				var config = apiRef._getConfigData();
                var webImage = config.web.web;
				for (i = 1; i <= jsonData.product.length; i++) {
					 var product = jsonData.product[i];
					 if (product != undefined) {
						 
						var imageURL = url + '/' + webImage + product.image;
						var detailImageURL = url + '/' + webImage + product.detailImage;
						
						var li = this.createElement('<li>');
		
						var divImg = this.createElement('<div class="img"><a href="#"><img alt="" src="' + imageURL + '"></a></div>');
						var divInfo = this.createElement('<div class="info">');
		
						var productA = Y.Node.create('<a class="title2" href="#">' + product.name + '</a>');
						//var details = Y.Node.create('<a href="#">Details</a>');
                        productA.obj = this;
                        productA.data = product.id;
                        Y.on('click' , this.showProductDetails , productA);

						var priceDiv = this.createElement('<div class="price">');
						var sellAtSpan = this.createElement('<span class="special">Sell at:</span>');
						//var priceSpecialSpan = this.createElement('<span class="special">' + this.getAmountByCurrency(((i * 150) - 100), false) + '</span>');
						var priceSpecialSpan = this.createElement('<span class="special">$' + product.sellPrice + '</span>');
						priceDiv.appendChild(sellAtSpan);
						priceDiv.appendChild(priceSpecialSpan);
		
						var priceBtn = this.createElement('<div class="pricebtn">');
                        var addToCart = Y.Node.create('<a href="#" class = "addtocart_buttonstyle">Add to cart</a>');
                        
                        addToCart.obj = this;
                        var data = {};
                        data.productId = product.id;
                        data.name = product.name;
                        data.quantity = 1;
                        data.price = product.sellPrice;
                        data.imageURL = imageURL;
                        data.detailImageURL = detailImageURL;
                        data.totalPrice = (data.quantity * product.sellPrice);
                        //addToCart.data = product.id;
                        addToCart.data = data;
						console.info('data = ', data);
						Y.on('click' , this.addToShoppingCart , addToCart);
						priceBtn.appendChild(addToCart);
						
						li.appendChild(divImg);
						divInfo.appendChild(productA);
						divInfo.appendChild(priceDiv);
						divInfo.appendChild(priceBtn);
		
						li.appendChild(divInfo);
						topSellsUL.appendChild(li);
					 }
					 
					 if (i==8){
						break;
					}
				}            
            
            targetNode.appendChild(h3);
            targetNode.appendChild(topSellsUL);
            this.bindUI();
		}
        },
       addSelectedListener : function(widget) {
            var listeners = this.get("onSelectedListeners");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onSelectedListeners", listeners);
        },
 
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        }
    });

    Y.namespace("Phresco").TopSellsWidget = TopSellsWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
