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
YUI.add("productsWidget", function(Y) {
    function ProductsWidget(config) {
        ProductsWidget.superclass.constructor.apply(this, arguments);
    }

    ProductsWidget.NAME = "productsWidget";

    ProductsWidget.ATTRS = {
        onSelectedListeners : {
            value : []
        }
    };

    Y.extend(ProductsWidget, Y.Phresco.PhrescoWidget, {
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
            var target = this.get("targetNode");
            $(target).unmask();
        },

        createContent : function(targetNode, jsonData) {
            if (jsonData != null) {
                targetNode.empty();
                var apiRef = this.get("apiReference");
                apiRef.set("selectedMenu", "homeLI");
                
                // For shopping cart back functionality
                apiRef.set("currentProductId", 0);
                
                var url = apiRef.get("wsURLWithoutContext");
                var config = apiRef._getConfigData();
                var webImage = config.web.web;
                var title = apiRef.get("title"); 
                var titleh3 = (title == undefined || title == "" ) ? "Products" : title;
                var h3 = this.createElement('<h3>'+ titleh3 +'</h3>');
                var newProductsUL = this.createElement('<ul>');
				var norecord = jsonData.successMessage; /// for search record not found
                if(norecord != "no item found"){
                for (i = 0; i < jsonData.product.length; i++) {
                    var product = jsonData.product[i];
                    if (product != undefined) {
                        var imageURL = url + '/' + webImage + product.image;
                        var detailImageURL = url + '/' + webImage + product.detailImage;

                        var li = Y.Node.create('<li>');

                        var divImg = this.createElement('<div class="img"><a href="#"><img alt="" src="' + imageURL + '"></a></div>');
                        var divInfo = this.createElement('<div class="info">');

                        var productA = this.createElement('<a class="title" href="#">' + product.name + '</a>');
                        //var productDesc = this.createElement('<p>' + product.description + '</p>');

                        var priceDiv = this.createElement('<div class="price">');
                        var priceSpan = this.createElement('<span class="st">Our price:</span><strong>' + this.getAmountByCurrency(product.listPrice) + '</strong><br>');
                        var sellSpan = this.createElement('<span class="st2">Sell at:</span><span class="st3">' + this.getAmountByCurrency(product.sellPrice) + '</span>');
                        priceDiv.appendChild(priceSpan);
                        priceDiv.appendChild(sellSpan);
                        
                        var actionsDiv = this.createElement('<div class="actions">');
                        var details = Y.Node.create('<a href="#">Details</a>');
                        details.obj = this;
                        details.data = product.id;
                        Y.on('click' , this.showProductDetails , details);

                        var addToCart = Y.Node.create('<a href="#">Add to cart</a>');
                        
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

                        Y.on('click' , this.showShoppingCart , addToCart);

                        actionsDiv.appendChild(details);
                        actionsDiv.appendChild(addToCart);						
						
						li.obj = this;
                        li.data = product.id;
                        Y.on('click' , this.showProductDetails , li);
                        li.appendChild(divImg);
						
						
                        divInfo.appendChild(productA);
                        //divInfo.appendChild(productDesc);
                        divInfo.appendChild(priceDiv);
                        divInfo.appendChild(actionsDiv);

                        li.appendChild(divInfo);
                        newProductsUL.appendChild(li);
                    }
                }

                targetNode.appendChild(h3);
				}
				else{
					var productsUnavailable = this.createElement('<div id="norecord">No products available</div>');
						targetNode.empty();
						targetNode.appendChild(productsUnavailable);
				}
					if (jsonData.length == 0) {
						var productsUnavailable = this.createElement('<div id="norecord"><strong>No products available</div>');
						targetNode.empty();
						targetNode.appendChild(productsUnavailable);
					} else {
						targetNode.appendChild(newProductsUL);
					}
				
            } else {
                //var loading = this.createElement('<label>Loading...</label>');
                //targetNode.appendChild(loading);
            }

            this.bindUI();
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

    Y.namespace("Phresco").ProductsWidget = ProductsWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
