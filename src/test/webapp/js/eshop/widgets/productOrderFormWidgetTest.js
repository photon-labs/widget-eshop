YUI.add('productOrderFormWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("ProductOrderFormWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({

			name: "ProductOrderFormWidgetTest",
			"ProductOrderFormWidgetTest with same data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget();
				var productOrderFormWidget = new Y.Phresco.ProductOrderFormWidget({
					// place holder can be decided by specifying the attribute
					targetNode : widgetNode,
					apiReference : eshopAPI
				});
				var orderDetail = {email:"sathish@gmail.com",firstName:"sathish", lastName:"s", company:"Tata", address1:"salem", address2:"chennai",city:"chennai", state:"TamilNadu", country:"India", postcode:"636141", phonenumber:"133244", cardnumber:"245566", securitynumber:"243565", nameoncard:"sathish", comments:"nice....."};
				eshopAPI.set("orderDetailback", orderDetail);
				productOrderFormWidget.renderUI();
				output1 = productOrderFormWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var productContainer = phresco.createElement('<div class="productcontainer">');
				var formdiv = phresco.createElement('<form id="contact" method="post" action="#">');
				var orderDetailback = eshopAPI.get("orderDetailback"); 
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
				
				var informationH5 = phresco.createElement('<h5> Customer Information</h5>');
				var backHref = Y.Node.create('<div class="backtocart"><a href="#" class="back_buttonstyle">BACK</a></div>');

				var holderDiv1 = phresco.createElement('<div class="fieldholder1">');
				var emailfieldset = phresco.createElement('<fieldset>');
				
				var emailvalue = phresco.createElement('<div id="email_err_div" class="clearfix"><label for="Email"><span>Email *</span><input type="text" name="email" id="email" placeholder="Email" class="required email" value="'+ emailbk +'" /></label><span class="help-inline" id="email_err"></span></div>');
				
				emailfieldset.appendChild(emailvalue);
				holderDiv1.appendChild(emailfieldset);
				
				var billinginfoH5 = phresco.createElement('<h5> Billing / Delivery Informations</h5>');
				
				var holderDiv2 = phresco.createElement('<div class="fieldholder2">');
				var billfieldset = phresco.createElement('<fieldset>');
				
				var firstnamevalue = phresco.createElement('<div id="firstName_err_div" class="clearfix" ><label for="FirstName"> <span>FirstName *</span><input type="text" name="firstName"  id="firstName" placeholder="Firstname" class="required firstName" value="'+ firstNamebk +'"/></label><span class="help-inline" id="firstName_err" ></span></div>');
				var lastnamevalue = phresco.createElement('<div id="lastName_err_div" class="clearfix"><label for="Lastname"> <span>Lastname *</span><input type="text" name="lastName" id="lastName" placeholder="Lastname" class="required lastName" value="'+ lastNamebk +'" /></label><span class="help-inline" id="lastName_err"></span></div>');
				var companyvalue = phresco.createElement('<div id="company_err_div" class="clearfix"><label for="Company"> <span>Company *</span><input type="text" name="company" id="company" placeholder="Company" class="required company" value="'+ companybk +'" /></label><span class="help-inline" id="company_err"></span></div>');
				var address1value = phresco.createElement('<div id="address1_err_div" class="clearfix"><label for="Address1"> <span>Address1 *</span><input type="text" name="address1" id="address1" placeholder="Address1" class="required address1" value="'+ address1bk +'" /></label><span class="help-inline" id="address1_err"></span></div>');
				var address2value = phresco.createElement('<div id="address2_err_div" class="clearfix"><label for="Address2"> <span>Address2 *</span><input type="text" name="address2" id="address2" placeholder="Address2" class="required address2" value="'+ address2bk +'" /></label><span class="help-inline" id="address2_err"></span></div>');
				var cityvalue = phresco.createElement('<div id="city_err_div" class="clearfix"><label for="City"> <span>City *</span><input type="text" name="City" id="city" placeholder="city" class="required city" value="'+ citybk +'"/></label><span class="help-inline" id="city_err"></span></div>');
				

				
				var statelabel = phresco.createElement('<div id="state_err_div" class="clearfix"><label for="State"> <span>State *</span><input type="text" name="State" id="state" placeholder="state" class="required state" value="'+ statebk +'"/></label><span class="help-inline" id="state_err"></span></div>');
				
				var countryabel = phresco.createElement('<label for="Country"> <span >Country *</span>');
				var countryArray = new Array("USA","India","Australia","Canada","Bangladesh");				
				var countryselect = phresco.createElement('<select size="1" id="country" >');
				for(var i= 0; i < countryArray.length; i++) {
				var selected = (countrybk === countryArray[i])?"selected='selected'": "";
				var countryvalue1 = phresco.createElement('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
				countryselect.appendChild(countryvalue1);
				}
				
			
				countryabel.appendChild(countryselect);
				var postvalue = phresco.createElement('<div id="postCode_err_div" class="clearfix"><label for="Postcode"><span>Postcode *</span><input type="text" name="postCode" id="postCode" placeholder="postcode" class="required postcode" value="'+ postcodebk +'"  /></label><span class="help-inline" id="postCode_err"></span></div>');
				var phonevalue = phresco.createElement('<div id="phoneNumber_err_div" class="clearfix"><label for="Phonenumber"> <span>Phonenumber *</span><input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phonenumber" class="required phonenumber" value="'+ phonenumberbk +'" /></label><span class="help-inline" id="phoneNumber_err"></span></div>');
			
				
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
				
				
				var paymentinfoH5 = phresco.createElement('<h5>Payment Method</h5>');
				var holderDiv3 = phresco.createElement(' <div class="fieldholder3">');
				var paymentfieldset = phresco.createElement('<fieldset>');
				var paymentSelect = phresco.createElement('<h6>Select a payment method from the following options *</h6>');
				var paymentType = phresco.createElement('<div class="payment_pos">');
				
					var div1 = phresco.createElement('<div>');
					var paymentvalue1 = phresco.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod" checked="checked">VISA CARD</label>');
					div1.appendChild(paymentvalue1);
					
					var div2 = phresco.createElement('<div>');
					var paymentvalue2 = phresco.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">AMX CARD</label>');
					div2.appendChild(paymentvalue2);
					
					var div3 = phresco.createElement('<div>');
					var paymentvalue3 = phresco.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">MASTER CARD</label>');
					div3.appendChild(paymentvalue3);
				
				paymentType.appendChild(div1);
				paymentType.appendChild(div2);
				paymentType.appendChild(div3);
				paymentfieldset.appendChild(paymentSelect);
				paymentfieldset.appendChild(paymentType);
				
				var cardfieldset = phresco.createElement('<fieldset>');
				var carddetails = phresco.createElement('<div class="carddetails">');
				var cardnumber = phresco.createElement('<div id="cardNumber_err_div" class="clearfix"><label for="Card Number"> <span>Card Number *</span><input type="text" name="cardNumber" id="cardNumber" placeholder="Card Number" class="required cardnumber" value="'+ cardnumberbk +'" /></label><span class="help-inline" id="cardNumber_err"></span></div>');
				var securitynumber = phresco.createElement('<div id="securityNumber_err_div" class="clearfix"><label for="Security Number"> <span>Security Code  *</span><input type="password" name="securityNumber" id="securityNumber" placeholder="Security Number" value="'+ securitynumberbk +'" class="required securitynumber"  /></label><span class="help-inline" id="securityNumber_err"></span></div>');
				var cardname = phresco.createElement('<div id="nameOnCard_err_div" class="clearfix"><label for="Name on card"> <span>Name on card *</span><input type="text" name="nameOnCard" id="nameOnCard" placeholder="Name On Card" class="required nameoncard" value="'+ nameoncardbk +'" /></label><span class="help-inline" id="nameOnCard_err"></span></div>');
				carddetails.appendChild(cardnumber);
				carddetails.appendChild(securitynumber);
				carddetails.appendChild(cardname);
				
				
				var pricetag = phresco.createElement('<div align="center" class="pricetag">');
				var priceblock = phresco.createElement('<div class="priceblock">');
				var totalprice = phresco.createElement('<div class="subtotal"> <span>Sub Total:</span> <span>$3750</span> </div>');
				var ordertotal = phresco.createElement('<div class="ordertotal"> <span>Order Total:</span> <span>$3750</span> </div>');
				priceblock.appendChild(totalprice);
				priceblock.appendChild(ordertotal);
				pricetag.appendChild(priceblock);
				cardfieldset.appendChild(carddetails);
				cardfieldset.appendChild(pricetag);
				var hint = phresco.createElement('<p class="hint">Cheque should be made to Phresco</p>');
				holderDiv3.appendChild(paymentfieldset);
				holderDiv3.appendChild(cardfieldset);
				holderDiv3.appendChild(hint);
				
				var comment = phresco.createElement('<h5> Order Comments</h5>');
				var holderDiv4 = phresco.createElement('<div class="fieldholder4">');
				var commentdesc = phresco.createElement('<fieldset><textarea name="comments" value="'+ commentsbk +'"  id="comment" cols="6" rows="5" placeholder="Your suggestion and comments"></textarea></fieldset>');
				holderDiv4.appendChild(commentdesc);
				
				var buttonDiv = phresco.createElement(' <div class="buttonposition">');
				
				var reviewOrder = Y.Node.create('<input type="button" value="Review Order" class="buttonstyle1" />');
				
				var submitButton = Y.Node.create('<input type="button" value="Cancel" class="buttonstyle1"/>');
				
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
				output2 = targetNode.get('innerHTML');
				Y.Assert.areEqual(output1, output2, "ProductOrderFormWidgetTest Success case");
			},
			
			"ProductOrderFormWidgetTest with different data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget();
				var productOrderFormWidget = new Y.Phresco.ProductOrderFormWidget({
					// place holder can be decided by specifying the attribute
					targetNode : widgetNode,
					apiReference : eshopAPI
				});
				var orderDetail = {email:"sathish@gmail.com",firstName:"sathish", lastName:"s", company:"Tata", address1:"salem", address2:"chennai",city:"chennai", state:"TamilNadu", country:"India", postcode:"636141", phonenumber:"133244", cardnumber:"245566", securitynumber:"243565", nameoncard:"sathish", comments:"nice....."};
				eshopAPI.set("orderDetailback", orderDetail);
				productOrderFormWidget.renderUI();
				output1 = productOrderFormWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var productContainer = phresco.createElement('<div class="productcontainer">');
				var formdiv = phresco.createElement('<form id="contact" method="post" action="#">');
				var orderDetailback = eshopAPI.get("orderDetailback"); 
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
				
				var informationH5 = phresco.createElement('<h5> Customer Information</h5>');
				var backHref = Y.Node.create('<div class="backtocart"><a href="#" class="back_buttonstyle">BACK</a></div>');

				var holderDiv1 = phresco.createElement('<div class="fieldholder1">');
				var emailfieldset = phresco.createElement('<fieldset>');
				
				var emailvalue = phresco.createElement('<div id="email_err_div" class="clearfix"><label for="Email"><span>Email *</span><input type="text" name="email" id="email" placeholder="Email" class="required email" value="'+ emailbk +'" /></label><span class="help-inline" id="email_err"></span></div>');
				
				emailfieldset.appendChild(emailvalue);
				holderDiv1.appendChild(emailfieldset);
				
				var billinginfoH5 = phresco.createElement('<h5> Billing / Delivery Informations</h5>');
				
				var holderDiv2 = phresco.createElement('<div class="fieldholder2">');
				var billfieldset = phresco.createElement('<fieldset>');
				
				var firstnamevalue = phresco.createElement('<div id="firstName_err_div" class="clearfix" ><label for="FirstName"> <span>FirstName *</span><input type="text" name="firstName"  id="firstName" placeholder="Firstname" class="required firstName" value="'+ firstNamebk +'"/></label><span class="help-inline" id="firstName_err" ></span></div>');
				var lastnamevalue = phresco.createElement('<div id="lastName_err_div" class="clearfix"><label for="Lastname"> <span>Lastname *</span><input type="text" name="lastName" id="lastName" placeholder="Lastname" class="required lastName" value="'+ lastNamebk +'" /></label><span class="help-inline" id="lastName_err"></span></div>');
				var companyvalue = phresco.createElement('<div id="company_err_div" class="clearfix"><label for="Company"> <span>Company *</span><input type="text" name="company" id="company" placeholder="Company" class="required company" value="'+ companybk +'" /></label><span class="help-inline" id="company_err"></span></div>');
				var address1value = phresco.createElement('<div id="address1_err_div" class="clearfix"><label for="Address1"> <span>Address1 *</span><input type="text" name="address1" id="address1" placeholder="Address1" class="required address1" value="'+ address1bk +'" /></label><span class="help-inline" id="address1_err"></span></div>');
				var address2value = phresco.createElement('<div id="address2_err_div" class="clearfix"><label for="Address2"> <span>Address2 *</span><input type="text" name="address2" id="address2" placeholder="Address2" class="required address2" value="'+ address2bk +'" /></label><span class="help-inline" id="address2_err"></span></div>');
				var cityvalue = phresco.createElement('<div id="city_err_div" class="clearfix"><label for="City"> <span>City *</span><input type="text" name="City" id="city" placeholder="city" class="required city" value="'+ citybk +'"/></label><span class="help-inline" id="city_err"></span></div>');
				

				
				var statelabel = phresco.createElement('<div id="state_err_div" class="clearfix"><label for="State"> <span>State *</span><input type="text" name="State" id="state" placeholder="state" class="required state" value="'+ statebk +'"/></label><span class="help-inline" id="state_err"></span></div>');
				
				var countryabel = phresco.createElement('<label for="Country"> <span >Country *</span>');
				var countryArray = new Array("USA","India","Australia","Canada","Bangladesh");				
				var countryselect = phresco.createElement('<select size="1" id="country" >');
				for(var i= 0; i < countryArray.length; i++) {
				var selected = (countrybk === countryArray[i])?"selected='selected'": "";
				var countryvalue1 = phresco.createElement('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
				countryselect.appendChild(countryvalue1);
				}
				
			
				countryabel.appendChild(countryselect);
				var postvalue = phresco.createElement('<div id="postCode_err_div" class="clearfix"><label for="Postcode"><span>Postcode *</span><input type="text" name="postCode" id="postCode" placeholder="postcode" class="required postcode" value="'+ postcodebk +'"  /></label><span class="help-inline" id="postCode_err"></span></div>');
				var phonevalue = phresco.createElement('<div id="phoneNumber_err_div" class="clearfix"><label for="Phonenumber"> <span>Phonenumber *</span><input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phonenumber" class="required phonenumber" value="'+ phonenumberbk +'" /></label><span class="help-inline" id="phoneNumber_err"></span></div>');
			
				
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
				
				
				var paymentinfoH5 = phresco.createElement('<h5>Payment Method</h5>');
				var holderDiv3 = phresco.createElement(' <div class="fieldholder3">');
				var paymentfieldset = phresco.createElement('<fieldset>');
				var paymentSelect = phresco.createElement('<h6>Select a payment method from the following options *</h6>');
				var paymentType = phresco.createElement('<div class="payment_pos">');
				
					var div1 = phresco.createElement('<div>');
					var paymentvalue1 = phresco.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod" checked="checked">VISA CARD</label>');
					div1.appendChild(paymentvalue1);
					
					var div2 = phresco.createElement('<div>');
					var paymentvalue2 = phresco.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">AMX CARD</label>');
					div2.appendChild(paymentvalue2);
					
					var div3 = phresco.createElement('<div>');
					var paymentvalue3 = phresco.createElement('<label class="paymentmethod" ><input type="radio" name="payment method" value="radio" id="paymentmethod_0" class="radiomethod">MASTER CARD</label>');
					div3.appendChild(paymentvalue3);
				
				paymentType.appendChild(div1);
				paymentType.appendChild(div2);
				paymentType.appendChild(div3);
				paymentfieldset.appendChild(paymentSelect);
				paymentfieldset.appendChild(paymentType);
				
				var cardfieldset = phresco.createElement('<fieldset>');
				var carddetails = phresco.createElement('<div class="carddetails">');
				var cardnumber = phresco.createElement('<div id="cardNumber_err_div" class="clearfix"><label for="Card Number"> <span>Card Number *</span><input type="text" name="cardNumber" id="cardNumber" placeholder="Card Number" class="required cardnumber" value="'+ cardnumberbk +'" /></label><span class="help-inline" id="cardNumber_err"></span></div>');
				var securitynumber = phresco.createElement('<div id="securityNumber_err_div" class="clearfix"><label for="Security Number"> <span>Security Code  *</span><input type="password" name="securityNumber" id="securityNumber" placeholder="Security Number" value="'+ securitynumberbk +'" class="required securitynumber"  /></label><span class="help-inline" id="securityNumber_err"></span></div>');
				var cardname = phresco.createElement('<div id="nameOnCard_err_div" class="clearfix"><label for="Name on card"> <span>Name on card *</span><input type="text" name="nameOnCard" id="nameOnCard" placeholder="Name On Card" class="required nameoncard" value="'+ nameoncardbk +'" /></label><span class="help-inline" id="nameOnCard_err"></span></div>');
				carddetails.appendChild(cardnumber);
				carddetails.appendChild(securitynumber);
				carddetails.appendChild(cardname);
				
				
				var pricetag = phresco.createElement('<div align="center" class="pricetag">');
				var priceblock = phresco.createElement('<div class="priceblock">');
				var totalprice = phresco.createElement('<div class="subtotal"> <span>Sub Total:</span> <span>$3750</span> </div>');
				var ordertotal = phresco.createElement('<div class="ordertotal"> <span>Order Total:</span> <span>$3750</span> </div>');
				priceblock.appendChild(totalprice);
				priceblock.appendChild(ordertotal);
				pricetag.appendChild(priceblock);
				cardfieldset.appendChild(carddetails);
				cardfieldset.appendChild(pricetag);
				var hint = phresco.createElement('<p class="hint">Cheque should be made to Phresco</p>');
				holderDiv3.appendChild(paymentfieldset);
				holderDiv3.appendChild(cardfieldset);
				holderDiv3.appendChild(hint);
				
				var comment = phresco.createElement('<h5> Order Comments</h5>');
				var holderDiv4 = phresco.createElement('<div class="fieldholder4">');
				var commentdesc = phresco.createElement('<fieldset><textarea name="comments" value="'+ commentsbk +'"  id="comment" cols="6" rows="5" placeholder="Your suggestion and comments"></textarea></fieldset>');
				holderDiv4.appendChild(commentdesc);
				
				var buttonDiv = phresco.createElement(' <div class="buttonposition">');
				
				var reviewOrder = Y.Node.create('<input type="button" value="Review Order" class="buttonstyle1" />');
				
				var submitButton = Y.Node.create('<input type="button" value="Cancel" class="buttonstyle1"/>');
				
				buttonDiv.appendChild(reviewOrder);
				buttonDiv.appendChild(submitButton);

				//formdiv.appendChild(informationH5);
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
				output2 = targetNode.get('innerHTML');
				Y.Assert.areNotEqual(output1, output2, "ProductOrderFormWidgetTest Failure case");
			}
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});