Event = YUI.event,
YUI.add("productOrderFormWidget", function(Y) {
    function ProductOrderFormWidget(config) {
        ProductOrderFormWidget.superclass.constructor.apply(this, arguments);
    }

    ProductOrderFormWidget.NAME = "productOrderFormWidget";

    ProductOrderFormWidget.ATTRS = {        
        targetNode : {
            value : []
        },
        onSelectedListeners : {
            value : []
        }
    };

    Y.extend(ProductOrderFormWidget, Y.Phresco.PhrescoWidget, {
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
				var selfRef=this;
                var apiRef = this.get("apiReference");
                var url = apiRef.get("wsURLWithoutContext");
                var config = apiRef._getConfigData();
                // Product Container holds all the elements
               var productContainer = this.createElement('<div class="productcontainer">');
				var formdiv = this.createElement('<form id="contact" method="post" action="#">');
				var orderDetailback = apiRef.get("orderDetailback"); 
				if(orderDetailback !== undefined){
					var emailbk = orderDetailback.email;
					var firstNamebk = orderDetailback.firstName;
					var lastNamebk  =  orderDetailback.lastName;
					var companybk =  orderDetailback.company;
					var address1bk =  orderDetailback.address1;
					var address2bk =  orderDetailback.address2;
					var citybk =  orderDetailback.city;
					var statebk =  orderDetailback.state;
					var countrybk =  orderDetailback.country;
					var postcodebk =  orderDetailback.postcode;
					var phonenumberbk =  orderDetailback.phonenumber;
					var cardnumberbk =  orderDetailback.cardnumber;
					var securitynumberbk =  orderDetailback.securitynumber;
					var nameoncardbk =  orderDetailback.nameoncard;
					var commentsbk =  orderDetailback.comments;
				}
				var emailbk = (emailbk !== undefined)?orderDetailback.email : "";
				var firstNamebk = (firstNamebk !== undefined)?orderDetailback.firstName : "";
				var lastNamebk = (lastNamebk !== undefined)?orderDetailback.lastName : "";
				var companybk = (companybk !== undefined)?orderDetailback.company : "";
				var address1bk = (address1bk !== undefined)?orderDetailback.address1 : "";
				var address2bk = (address2bk !== undefined)?orderDetailback.address2 : "";
				var citybk = (citybk !== undefined)?orderDetailback.city : "";
				var statebk = (statebk !== undefined)?orderDetailback.state : "";
				var countrybk = (countrybk !== undefined)?orderDetailback.country : "";
				var postcodebk = (postcodebk !== undefined)?orderDetailback.postcode : "";
				var phonenumberbk = (phonenumberbk !== undefined)?orderDetailback.phonenumber : "";
				var cardnumberbk = (cardnumberbk !== undefined)?orderDetailback.cardnumber : "";
				var securitynumberbk = (securitynumberbk !== undefined)?orderDetailback.securitynumber : "";
				var nameoncardbk = (nameoncardbk !== undefined)?orderDetailback.nameoncard : "";
				var commentsbk = (commentsbk !== undefined)?orderDetailback.comments : "";
				
				var informationH5 = this.createElement('<h5> Customer Information</h5>');
				var backHref = Y.Node.create('<div class="backtocart"><a href="#" class="back_buttonstyle">BACK</a></div>');
				backHref.obj = this;
				Y.on('click' , this.showMyShoppingCart , backHref);
				var holderDiv1 = this.createElement('<div class="fieldholder1">');
				var emailfieldset = this.createElement('<fieldset>');
				
				var emailvalue = this.createElement('<div id="email_err_div" class="clearfix"><label for="Email"><span>Email *</span><input type="text" name="email" id="email" placeholder="Email" class="required email" value="'+ emailbk +'" /></label><span class="help-inline" id="email_err"></span></div>');
				
				emailfieldset.appendChild(emailvalue);
				holderDiv1.appendChild(emailfieldset);
				
				var billinginfoH5 = this.createElement('<h5> Billing / Delivery Informations</h5>');
				
				var holderDiv2 = this.createElement('<div class="fieldholder2">');
				var billfieldset = this.createElement('<fieldset>');
				
				var firstnamevalue = this.createElement('<div id="firstName_err_div" class="clearfix" ><label for="FirstName"> <span>FirstName *</span><input type="text" name="firstName"  id="firstName" placeholder="Firstname" class="required firstName" value="'+ firstNamebk +'"/></label><span class="help-inline" id="firstName_err" ></span></div>');
				var lastnamevalue = this.createElement('<div id="lastName_err_div" class="clearfix"><label for="Lastname"> <span>Lastname *</span><input type="text" name="lastName" id="lastName" placeholder="Lastname" class="required lastName" value="'+ lastNamebk +'" /></label><span class="help-inline" id="lastName_err"></span></div>');
				var companyvalue = this.createElement('<div id="company_err_div" class="clearfix"><label for="Company"> <span>Company *</span><input type="text" name="company" id="company" placeholder="Company" class="required company" value="'+ companybk +'" /></label><span class="help-inline" id="company_err"></span></div>');
				var address1value = this.createElement('<div id="address1_err_div" class="clearfix"><label for="Address1"> <span>Address1 *</span><input type="text" name="address1" id="address1" placeholder="Address1" class="required address1" value="'+ address1bk +'" /></label><span class="help-inline" id="address1_err"></span></div>');
				var address2value = this.createElement('<div id="address2_err_div" class="clearfix"><label for="Address2"> <span>Address2 *</span><input type="text" name="address2" id="address2" placeholder="Address2" class="required address2" value="'+ address2bk +'" /></label><span class="help-inline" id="address2_err"></span></div>');
				var cityvalue = this.createElement('<div id="city_err_div" class="clearfix"><label for="City"> <span>City *</span><input type="text" name="City" id="city" placeholder="city" class="required city" value="'+ citybk +'"/></label><span class="help-inline" id="city_err"></span></div>');
				

				
				var statelabel = this.createElement('<div id="state_err_div" class="clearfix"><label for="State"> <span>State *</span><input type="text" name="State" id="state" placeholder="state" class="required state" value="'+ statebk +'"/></label><span class="help-inline" id="state_err"></span></div>');
				
				var countryabel = this.createElement('<label for="Country"> <span >Country *</span>');
				var countryArray = new Array("USA","India","Australia","Canada","Bangladesh");				
				var countryselect = this.createElement('<select size="1" id="country" >');
				for(var i= 0; i < countryArray.length; i++) {
				var selected = (countrybk === countryArray[i])?"selected='selected'": "";
				var countryvalue1 = this.createElement('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
				countryselect.appendChild(countryvalue1);
				}
				
			
				countryabel.appendChild(countryselect);
				var postvalue = this.createElement('<div id="postCode_err_div" class="clearfix"><label for="Postcode"><span>Postcode *</span><input type="text" name="postCode" id="postCode" placeholder="postcode" class="required postcode" value="'+ postcodebk +'"  /></label><span class="help-inline" id="postCode_err"></span></div>');
				var phonevalue = this.createElement('<div id="phoneNumber_err_div" class="clearfix"><label for="Phonenumber"> <span>Phonenumber *</span><input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phonenumber" class="required phonenumber" value="'+ phonenumberbk +'" /></label><span class="help-inline" id="phoneNumber_err"></span></div>');
			
				
				billfieldset.appendChild(firstnamevalue);
				billfieldset.appendChild(lastnamevalue);
				billfieldset.appendChild(companyvalue);
				billfieldset.appendChild(address1value);
				billfieldset.appendChild(address2value);
				billfieldset.appendChild(cityvalue);
				billfieldset.appendChild(statelabel);
				billfieldset.appendChild(countryabel);
				billfieldset.appendChild(postvalue);
				billfieldset.appendChild(phonevalue);
				holderDiv2.appendChild(billfieldset);
				
				
				var paymentinfoH5 = this.createElement('<h5>Payment Method</h5>');
				var holderDiv3 = this.createElement(' <div class="fieldholder3">');
				var paymentfieldset = this.createElement('<fieldset>');
				var paymentSelect = this.createElement('<h6>Select a payment method from the following options *</h6>');
				var paymentType = this.createElement('<div class="payment_pos">');
				
					var div1 = this.createElement('<div>');
					var paymentvalue1 = this.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod" checked="checked">VISA CARD</label>');
					div1.appendChild(paymentvalue1);
					
					var div2 = this.createElement('<div>');
					var paymentvalue2 = this.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">AMX CARD</label>');
					div2.appendChild(paymentvalue2);
					
					var div3 = this.createElement('<div>');
					var paymentvalue3 = this.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">MASTER CARD</label>');
					div3.appendChild(paymentvalue3);
				
				paymentType.appendChild(div1);
				paymentType.appendChild(div2);
				paymentType.appendChild(div3);
				paymentfieldset.appendChild(paymentSelect);
				paymentfieldset.appendChild(paymentType);
				
				var cardfieldset = this.createElement('<fieldset>');
				var carddetails = this.createElement('<div class="carddetails">');
				var cardnumber = this.createElement('<div id="cardNumber_err_div" class="clearfix"><label for="Card Number"> <span>Card Number *</span><input type="text" name="cardNumber" id="cardNumber" placeholder="Card Number" class="required cardnumber" value="'+ cardnumberbk +'" /></label><span class="help-inline" id="cardNumber_err"></span></div>');
				var securitynumber = this.createElement('<div id="securityNumber_err_div" class="clearfix"><label for="Security Number"> <span>Security Code  *</span><input type="password" name="securityNumber" id="securityNumber" placeholder="Security Number" value="'+ securitynumberbk +'" class="required securitynumber"  /></label><span class="help-inline" id="securityNumber_err"></span></div>');
				var cardname = this.createElement('<div id="nameOnCard_err_div" class="clearfix"><label for="Name on card"> <span>Name on card *</span><input type="text" name="nameOnCard" id="nameOnCard" placeholder="Name On Card" class="required nameoncard" value="'+ nameoncardbk +'" /></label><span class="help-inline" id="nameOnCard_err"></span></div>');
				carddetails.appendChild(cardnumber);
				carddetails.appendChild(securitynumber);
				carddetails.appendChild(cardname);
				
				
				var pricetag = this.createElement('<div align="center" class="pricetag">');
				var priceblock = this.createElement('<div class="priceblock">');
				var totalprice = this.createElement('<div class="subtotal"> <span>Sub Total:</span> <span>$3750</span> </div>');
				var ordertotal = this.createElement('<div class="ordertotal"> <span>Order Total:</span> <span>$3750</span> </div>');
				priceblock.appendChild(totalprice);
				priceblock.appendChild(ordertotal);
				pricetag.appendChild(priceblock);
				cardfieldset.appendChild(carddetails);
				cardfieldset.appendChild(pricetag);
				var hint = this.createElement('<p class="hint">Cheque should be made to Phresco</p>');
				holderDiv3.appendChild(paymentfieldset);
				holderDiv3.appendChild(cardfieldset);
				holderDiv3.appendChild(hint);
				
				var comment = this.createElement('<h5> Order Comments</h5>');
				var holderDiv4 = this.createElement('<div class="fieldholder4">');
				var commentdesc = this.createElement('<fieldset><textarea name="comments" value="'+ commentsbk +'"  id="comment" cols="6" rows="5" placeholder="Your suggestion and comments"></textarea></fieldset>');
				holderDiv4.appendChild(commentdesc);
				
				var buttonDiv = this.createElement(' <div class="buttonposition">');
				
				var reviewOrder = Y.Node.create('<input type="button" value="Review Order" class="buttonstyle1" />');
				reviewOrder.obj = this;
				
				
                Y.on('click' , this.showSubmitOrder , reviewOrder);
				Y.on('blur', function(e) {
					orderFormFields = [this._node.attributes['id'].nodeValue];
					var apiRef = selfRef.get("apiReference");
					var validated = selfRef.validateFormFields(orderFormFields, apiRef);
				}, '.required');
				
				
				var submitButton = Y.Node.create('<input type="button" value="Cancel" class="buttonstyle1"/>');
				submitButton.obj = selfRef;
                submitButton.data = '1'; // need a category id i hardcode any one id
				Y.on('click' , this.showProducts , submitButton);
				
				buttonDiv.appendChild(reviewOrder);
				buttonDiv.appendChild(submitButton);

				formdiv.appendChild(informationH5);
				formdiv.appendChild(backHref);
				formdiv.appendChild(holderDiv1);
				formdiv.appendChild(billinginfoH5);
				formdiv.appendChild(holderDiv2);
				formdiv.appendChild(paymentinfoH5);
				formdiv.appendChild(holderDiv3);
				formdiv.appendChild(comment);
				formdiv.appendChild(holderDiv4);
				formdiv.appendChild(buttonDiv);
				productContainer.appendChild(formdiv);
				
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
        },
		addOrderSubmitListener : function(widget) {
            this.set("onOrderSubmitListener", widget);
        },
		addMycartviewListener : function(widget) {
            var listeners = this.get("onMycartviewListener");
            listeners = widget;
			this.set("widgets", widget);
            this.set("onMycartviewListener", listeners);
        },
		
    });

    Y.namespace("Phresco").ProductOrderFormWidget = ProductOrderFormWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute","phrescoWidget"]
});
