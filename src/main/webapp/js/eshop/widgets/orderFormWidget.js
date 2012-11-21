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
YUI.add("orderFormWidget", function(Y) {
    function OrderFormWidget(config) {
        OrderFormWidget.superclass.constructor.apply(this, arguments);
    }

    OrderFormWidget.NAME = "orderFormWidget";

    OrderFormWidget.ATTRS = {        
        targetNode : {
            value : []
        },
        onSelectedListeners : {
            value : []
        }
    };

    Y.extend(OrderFormWidget, Y.Phresco.PhrescoWidget, {
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
            this.createContent(this.getTargetNode(), jsonData);
            var target = this.get("targetNode");
            //$(target).unmask();
        },

        createContent : function(targetNode, jsonData) {
             if (true) {
                targetNode.empty();
				
                var apiRef = this.get("apiReference");
                var url = apiRef.get("wsURLWithoutContext");
                var config = apiRef._getConfigData();
				var productQty = apiRef.get("productQty");
				var productDetails = productQty.productDetail;
				var cartTotal = productQty.cartTotal;
				var totalItem = productQty.totalItem;

			
				var productName;
				var orderDetailback = apiRef.get("orderDetail"); 
				apiRef.set("orderDetailback", orderDetailback);
				
				var orderDetail = apiRef.get("orderDetail", orderDetail); 
				
				var orderdetailReform = {};
				orderdetailReform.firstName = orderDetail.firstName;
				orderdetailReform.lastName  =  orderDetail.lastName;
				orderdetailReform.company =  orderDetail.company;
				orderdetailReform.address1 =  orderDetail.address1;
				orderdetailReform.address2 =  orderDetail.address2;
				orderdetailReform.state =  orderDetail.state;
				orderdetailReform.country =  orderDetail.country;
				orderdetailReform.postcode =  orderDetail.postcode;
				orderdetailReform.phonenumber =  orderDetail.phonenumber;
					
				var orderDetailget = apiRef.set("orderDetail", orderdetailReform); // for inserting purpose
				var productDetails = apiRef.set("productDetails", productDetails);// for inserting purpose
				var cartTotalget = apiRef.set("cartTotal", cartTotal);// for inserting purpose
				var totalItemget = apiRef.set("totalItem", totalItem);// for inserting purpose
				var customerEmail = apiRef.set("customerEmail", orderDetail.email);
				var comment = apiRef.set("comments", orderDetail.comments);
                var productContainer = this.createElement('<div class="productcontainer">');

                var productFieldeHolder = this.createElement('<div class="fieldholder">');
                var fieldeHolderh5 = this.createElement('<h5> Customer Information</h5>');
                
                var formDiv1 = this.createElement('<div class="formrow">');
                
                    var colDiv1 = this.createElement('<div class="col1">');
                    var col1Position1 = this.createElement('<div class="col1position1">Email:</div>');
                    colDiv1.appendChild(col1Position1);
                
                    var colDiv2 = this.createElement('<div class="col2">');
                    var col1Position2 = this.createElement(' <div class="col1position2">'+ orderDetail.email +'</div>');
                    colDiv2.appendChild(col1Position2);
                    
                formDiv1.appendChild(fieldeHolderh5);
                formDiv1.appendChild(colDiv1);
                formDiv1.appendChild(colDiv2);
                
                var billh5 = this.createElement(' <h5> Billing / Delivery Informations</h5>');
                var formDiv2 = this.createElement('<div class="formrow">');
                
                    var label20 = this.createElement('<div class="col1">');
                    var firstNamelabel = this.createElement('<div class="col1position1">First name:</div>');
                    label20.appendChild(firstNamelabel);
                
                    var label21 = this.createElement('<div class="col2">');
                    var firstNameValue = this.createElement(' <div class="col1position2">'+ orderDetail.firstName +'</div>');
                    label21.appendChild(firstNameValue);
                formDiv2.appendChild(billh5);
                formDiv2.appendChild(label20);
                formDiv2.appendChild(label21);
                
                
                var formDiv3 = this.createElement('<div class="formrow">');
                    var label30 = this.createElement('<div class="col1">');
                    var lastNamelabel = this.createElement('<div class="col1position1">Last name:</div>');
                    label30.appendChild(lastNamelabel);
                
                    var label31 = this.createElement('<div class="col2">');
                    var lastNameValue = this.createElement(' <div class="col1position2">'+ orderDetail.lastName +'</div>');
                    label31.appendChild(lastNameValue);
                
                formDiv3.appendChild(label30);
                formDiv3.appendChild(label31);
                
                var formDiv4 = this.createElement('<div class="formrow">');
                var label40 = this.createElement('<div class="col1">');
                var companyNamelabel = this.createElement('<div class="col1position1">Company:</div>');
                label40.appendChild(companyNamelabel);
                
                var label41 = this.createElement('<div class="col2">');
                var companyNameValue = this.createElement(' <div class="col1position2">'+ orderDetail.company +'</div>');
                label41.appendChild(companyNameValue);
                
                formDiv4.appendChild(label40);
                formDiv4.appendChild(label41);
                
                
                var formDiv5 = this.createElement('<div class="formrow">');
                var label50 = this.createElement('<div class="col1">');
                var Address1label = this.createElement('<div class="col1position1">Address1:</div>');
                label50.appendChild(Address1label);
                
                var label51 = this.createElement('<div class="col2">');
                var Address1Value = this.createElement(' <div class="col1position2">'+ orderDetail.address1 +'</div>');
                label51.appendChild(Address1Value);
                
                formDiv5.appendChild(label50);
                formDiv5.appendChild(label51);
                
                
                var formDiv6 = this.createElement('<div class="formrow">');
                var label60 = this.createElement('<div class="col1">');
                var Address2label = this.createElement('<div class="col1position1">Address2:</div>');
                label60.appendChild(Address2label);
                
                var label61 = this.createElement('<div class="col2">');
                var Address2Value = this.createElement(' <div class="col1position2">'+ orderDetail.address2 +'</div>');
                label61.appendChild(Address2Value);
                
                formDiv6.appendChild(label60);
                formDiv6.appendChild(label61);
                
                var formDiv7 = this.createElement('<div class="formrow">');
                var label70 = this.createElement('<div class="col1">');
                var citylabel = this.createElement('<div class="col1position1">City</div>');
                label70.appendChild(citylabel);
                
                var label71 = this.createElement('<div class="col2">');
                var cityValue = this.createElement(' <div class="col1position2">'+ orderDetail.city +'</div>');
                label71.appendChild(cityValue);
                
                formDiv7.appendChild(label70);
                formDiv7.appendChild(label71);
                
                
                var formDiv8 = this.createElement('<div class="formrow">');
                var label80 = this.createElement('<div class="col1">');
                var statelabel = this.createElement('<div class="col1position1">State / Province:</div>');
                label80.appendChild(statelabel);
                
                var label81 = this.createElement('<div class="col2">');
                var stateValue = this.createElement(' <div class="col1position2">'+ orderDetail.state +'</div>');
                label81.appendChild(stateValue);
                
                formDiv8.appendChild(label80);
                formDiv8.appendChild(label81);
                
                
                var formDiv9 = this.createElement('<div class="formrow">');
                var label90 = this.createElement('<div class="col1">');
                var countrylabel = this.createElement('<div class="col1position1">Country:</div>');
                label90.appendChild(countrylabel);
                
                var label91 = this.createElement('<div class="col2">');
                var countryValue = this.createElement(' <div class="col1position2">'+ orderDetail.country +'</div>');
                label91.appendChild(countryValue);
                
                formDiv9.appendChild(label90);
                formDiv9.appendChild(label91);
                
                
                var formDiv10 = this.createElement('<div class="formrow">');
                var label200 = this.createElement('<div class="col1">');
                var postcodelabel = this.createElement('<div class="col1position1">Postcode:</div>');
                label200.appendChild(postcodelabel);
                
                var label201 = this.createElement('<div class="col2">');
                var postcodeValue = this.createElement(' <div class="col1position2">'+ orderDetail.postcode +'</div>');
                label201.appendChild(postcodeValue);
                
                formDiv10.appendChild(label200);
                formDiv10.appendChild(label201);
                
                var formDiv11 = this.createElement('<div class="formrow">');
                var label300 = this.createElement('<div class="col1">');
                var phonenumberlabel = this.createElement('<div class="col1position1">Phonenumber:</div>');
                label300.appendChild(phonenumberlabel);
                
                var label301 = this.createElement('<div class="col2">');
                var phonenumberValue = this.createElement(' <div class="col1position2">'+ orderDetail.phonenumber +'</div>');
                label301.appendChild(phonenumberValue);
                
                formDiv11.appendChild(label300);
                formDiv11.appendChild(label301);
                
                var paymenth5 = this.createElement('<h5> Payment Method</h5>');
                var formDiv12 = this.createElement('<div class="formrow">');
                var label400 = this.createElement('<div class="col1">');
                var subtotallabel = this.createElement('<div class="col1position1">Subtotal:</div>');
                label400.appendChild(subtotallabel);
                
                var label401 = this.createElement('<div class="col2">');
                var subtotalValue = this.createElement(' <div class="col1position2">$3750</div>');
                label401.appendChild(subtotalValue);
                
                formDiv12.appendChild(paymenth5);
                formDiv12.appendChild(label400);
                formDiv12.appendChild(label401);
                
                
                var formDiv13 = this.createElement('<div class="formrow">');
                var label500 = this.createElement('<div class="col1">');
                var orderlabel = this.createElement('<div class="col1position1">Ordertotal:</div>');
                label500.appendChild(orderlabel);
                
                var label501 = this.createElement('<div class="col2">');
                var orderValue = this.createElement(' <div class="col1position2">$3750</div>');
                label501.appendChild(orderValue);
                
                formDiv13.appendChild(label500);
                formDiv13.appendChild(label501);
                
                var formDiv14 = this.createElement('<div class="formrow">');
                var label600 = this.createElement('<div class="col1">');
                var paymentlabel = this.createElement('<div class="col1position1">Payment method:</div>');
                label600.appendChild(paymentlabel);
                
                var label601 = this.createElement('<div class="col2">');
                var paymentValue = this.createElement(' <div class="col1position2">Cheque</div>');
                label601.appendChild(paymentValue);
                
                formDiv14.appendChild(label600);
                formDiv14.appendChild(label601);
                
                
                var formDiv15 = this.createElement('<div class="formrow">');
                var label700 = this.createElement('<div class="col1">');
                var maillabel = this.createElement('<div class="col1position1">Mail to:</div>');
                label700.appendChild(maillabel);
                
                var label701 = this.createElement('<div class="col2">');
                var mailValue = this.createElement(' <div class="col1position2">Phresco</div>');
                label701.appendChild(mailValue);
                
                formDiv15.appendChild(label700);
                formDiv15.appendChild(label701);
                
                var orderth5 = this.createElement('<h5>Order Comments</h5>');
                var formDiv16 = this.createElement('<div class="formrow">');
                var comment = this.createElement(' <div class="col_comments">Phresco products are nice and cool .....</div> ');
                formDiv16.appendChild(orderth5);
                formDiv16.appendChild(comment);
                
                var buttonDiv = this.createElement(' <div class="buttonposition2">');
                var backButton = Y.Node.create('<input type="submit" value="Back" class="buttonstyle"/>');

                backButton.obj = this;
                backButton.data = "back";
				backButton.orderdata = orderDetail;
                Y.on('click' , this.showProductOrder , backButton);
                
                var submitButton = Y.Node.create('<input type="button" value="Submit Order" class="buttonstyle"/>');
				submitButton.obj = this;
				
				
                Y.on('click' , this.showOrderSuccess , submitButton);
                buttonDiv.appendChild(backButton);
                buttonDiv.appendChild(submitButton);
                
                productFieldeHolder.appendChild(formDiv1);
                productFieldeHolder.appendChild(formDiv2);
                productFieldeHolder.appendChild(formDiv3);
                productFieldeHolder.appendChild(formDiv4);
                productFieldeHolder.appendChild(formDiv5);
                productFieldeHolder.appendChild(formDiv6);
                productFieldeHolder.appendChild(formDiv7);
                productFieldeHolder.appendChild(formDiv8);
                productFieldeHolder.appendChild(formDiv9);
                productFieldeHolder.appendChild(formDiv10);
                productFieldeHolder.appendChild(formDiv11);
                productFieldeHolder.appendChild(formDiv12);
                productFieldeHolder.appendChild(formDiv13);
                productFieldeHolder.appendChild(formDiv14);
                productFieldeHolder.appendChild(formDiv15);
                productFieldeHolder.appendChild(formDiv16);
                productFieldeHolder.appendChild(buttonDiv);
                
                productContainer.appendChild(productFieldeHolder);
                targetNode.appendChild(productContainer);
              } else {
                var loading = this.createElement('<label>Loading...</label>');
                targetNode.appendChild(loading);
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

    Y.namespace("Phresco").OrderFormWidget = OrderFormWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute", "phrescoWidget"]
});
