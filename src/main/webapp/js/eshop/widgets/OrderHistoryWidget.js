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
YUI.add("orderHistoryWidget", function(Y) {
    function OrderHistoryWidget(config) {
        OrderHistoryWidget.superclass.constructor.apply(this, arguments);
    }

    OrderHistoryWidget.NAME = "orderHistoryWidget";

    OrderHistoryWidget.ATTRS = {        
        targetNode : {
            value : []
        },
		orderhistory : {
			value : []
		}
    };

    Y.extend(OrderHistoryWidget, Y.Phresco.PhrescoWidget, {
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

        render : function() {
            /*
             * render is part of the lifecycle introduced by the
             * Widget class. Widget's renderer method invokes:
             *
             *     render()
             *     bind()
             *     sync()
             *
             * render is intended to be used by the Widget subclass
             * to create or insert new elements into the DOM. 
             */       
            var jsonData = this.get("newproducts");
            this.createContent(this.getTargetNode());
        },
        

        bind : function() {
            /*
             * bind is intended to be used by the Widget subclass 
             * to bind any event listeners which will drive the Widget UI.
             * 
             * It will generally bind event listeners for attribute change
             * events, to update the state of the rendered UI in response 
             * to attribute value changes, and also attach any DOM events,
             * to activate the UI.
             */
            $(document).ready(function(){
                var myScroll = new iScroll('scroller');
                document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
                document.addEventListener('DOMContentLoaded', myScroll, false);
            });
        },

        sync : function() {
            /*
             * sync is intended to be used by the Widget subclass to
             * update the UI to reflect the initial state of the widget,
             * after render. From there, the event listeners we bound above
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
            targetNode.empty();

            var apiRef = this.get("apiReference");
            var url = apiRef.get("wsURLWithoutContext");
            var config = apiRef._getConfigData();
            var webImage = config.web.web;
            
			var orderhistory = jsonData;
			/*var oh = this.createElement('<div class="order_history"> ');
			var h3 = this.createElement('<h3> Order History </h3>');
			oh.appendChild(h3);*/
			var contactus = this.createElement('<div id="maincontact">');
            var selection = this.createElement('<section id="contact">');
            var divleft = this.createElement('<div id="">');
			var h3 = this.createElement('<h3> Order History </h3>');
			var table = this.createElement('<table summary="Order History" id="newspaper-a">');
			
			for (i = 0; i < jsonData.product.length; i++) {
				var product = jsonData.product[i];
				var tr1 = this.createElement('<tr>');
				var td1 = this.createElement('<td><b>Order Id</b></td>');
				var td12 = this.createElement('<td ><b>'+ product.orderId +'</b></td>');
				tr1.appendChild(td1);
				tr1.appendChild(td12);
				var tbody = this.createElement('<tbody>');
				var tr2 = this.createElement('<tr>');	
				var td2 = this.createElement('<td>Prd Qty</td>');
				var td21 = this.createElement('<td>'+ product.totalqty +'</td>');
				tr2.appendChild(td2);
				tr2.appendChild(td21);
				
				var tr3 = this.createElement('<tr>');	
				var td3 = this.createElement('<td>Price</td>');
				var td31 = this.createElement('<td>'+ product.totalPrice +'</td>');
				tr3.appendChild(td3);
				tr3.appendChild(td31);
				
				var tr4 = this.createElement('<tr>');	
				var td4 = this.createElement('<td>DOP</td>');
				var td41 = this.createElement('<td>'+ product.orderDate +'</td>');
				tr4.appendChild(td4);
				tr4.appendChild(td41);
				
				tbody.appendChild(tr1);
				tbody.appendChild(tr2);
				tbody.appendChild(tr3);
				tbody.appendChild(tr4);
				table.appendChild(tbody);
			}
			divleft.appendChild(h3);
			divleft.appendChild(table);
			selection.appendChild(divleft);
			contactus.appendChild(selection);
			targetNode.appendChild(contactus);
			

            if ($('#container').is(":visible")) {
                    this.renderWidgets();
                }
        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        
    });

    Y.namespace("Phresco").OrderHistoryWidget = OrderHistoryWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
