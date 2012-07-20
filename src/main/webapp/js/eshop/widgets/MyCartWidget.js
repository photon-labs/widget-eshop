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
Event = YUI.event,
YUI.add("myCartWidget", function(Y) {
    function MyCartWidget(config) {
        MyCartWidget.superclass.constructor.apply(this, arguments);
    }

    MyCartWidget.NAME = "myCartWidget";

    MyCartWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(MyCartWidget, Y.Phresco.PhrescoWidget, {
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
            var jsonData = this.get("banner");
            this.createContent(this.getTargetNode(), null);
        },

        bindUI : function() {
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
            this.set("navigation", jsonData);
            this.createContent(this.getTargetNode(), jsonData);
        },

        createContent : function(targetNode, jsonData) {
			var apiRef = this.get("apiReference");
			var config = apiRef._getConfigData();
			var addToCartData = apiRef.get("addToCartData");
			
            var cashBanner = this.createElement('<div class="cashbanner"><img src="images/eshop/cashdelivery_banner.png" width="181" height="70" alt="Cash delivery"></div>');
            var myCartBDiv = this.createElement('<div class="mycartbg">');
            var carticonDiv = this.createElement('<div class="carticon"><img src="images/eshop/mycart_icon.png" width="28" height="21" alt="My Cart icon"> </div>');
			
            var cartheaderDiv = Y.Node.create('<a href="#"><div class="cartheader">My Cart </div></a>');
			cartheaderDiv.obj = this;
			Y.on('click' , this.showMyShoppingCart , cartheaderDiv);
			
            var splitDiv = this.createElement('<div class="split"></div>');
            var ItemDiv = this.createElement('<div class="mycarttext"> Item </div>');
            var split2Div = this.createElement('<div class="split2"></div>');
            var totalPriceDiv = this.createElement('<div class="mycarttext">Total Price </div>');
            var clearDiv = this.createElement('<div class="clear"></div>');
            var val1Div = this.createElement('<div class="mycarttextvalue1" id="totalItem"> 0 </div>');
            var val2Div = this.createElement('<div class="mycarttextvalue2" id="totalPrice" style="padding: 0 0 2px 35px;">0 </div>');

            myCartBDiv.appendChild(carticonDiv);
            myCartBDiv.appendChild(cartheaderDiv);
            myCartBDiv.appendChild(splitDiv);
            myCartBDiv.appendChild(ItemDiv);
            myCartBDiv.appendChild(split2Div);
            myCartBDiv.appendChild(totalPriceDiv);
            myCartBDiv.appendChild(clearDiv);
            myCartBDiv.appendChild(val1Div);
            myCartBDiv.appendChild(val2Div);

            
            targetNode.appendChild(cashBanner);
            targetNode.appendChild(myCartBDiv);
            this.bindUI();
        },
		 onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        }
    });

    Y.namespace("Phresco").MyCartWidget = MyCartWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
