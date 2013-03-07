YUI.add('orderFormWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("OrderFormWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "OrderFormWidgetTest",
			"OrderFormWidgetTest with same data": function () {
				var output1, output2;
			
				var WidgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var orderFormWidget = new Y.Phresco.OrderFormWidget({
						// place holder can be decided by specifying the attribute
						targetNode : WidgetNode,
						apiReference : eshopAPI
					});
					var productQty = {productDetail:[{detailImageURL: response.protocol+"://"+ response.host+":"+ response.port+"...uct/details/lg_tv_5.png", imageURL:response.protocol+"://"+ response.host+":"+ response.port+"//images/web/product/lg_tv_5.png",
					name:'LGElectronics\n47LW560047" 1080p 3D LED TV\n',price:1500,productId:5,quantity:"1",totalPrice:1500}],totalitem:1,cartTotal:1500};
					eshopAPI.set("productQty",productQty);
					
					var orderDetail = {email:"sathish@gmail.com",firstName:"sathish", lastName:"s", company:"Tata", address1:"salem", address2:"chennai",city:"chennai", state:"TamilNadu", country:"India", postcode:"636141", phonenumber:"133244"};
					eshopAPI.set("orderDetail",orderDetail);
					orderFormWidget.renderUI();
					output1 = orderFormWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var productContainer = phresco.createElement('<div class="productcontainer">');

					var productFieldeHolder = phresco.createElement('<div class="fieldholder">');
					var fieldeHolderh5 = phresco.createElement('<h5> Customer Information</h5>');
					
					var formDiv1 = phresco.createElement('<div class="formrow">');
					
						var colDiv1 = phresco.createElement('<div class="col1">');
						var col1Position1 = phresco.createElement('<div class="col1position1">Email:</div>');
						colDiv1.appendChild(col1Position1);
					
						var colDiv2 = phresco.createElement('<div class="col2">');
						var col1Position2 = phresco.createElement(' <div class="col1position2">'+ orderDetail.email +'</div>');
						colDiv2.appendChild(col1Position2);
						
					formDiv1.appendChild(fieldeHolderh5);
					formDiv1.appendChild(colDiv1);
					formDiv1.appendChild(colDiv2);
					
					var billh5 = phresco.createElement(' <h5> Billing / Delivery Informations</h5>');
					var formDiv2 = phresco.createElement('<div class="formrow">');
					
						var label20 = phresco.createElement('<div class="col1">');
						var firstNamelabel = phresco.createElement('<div class="col1position1">First name:</div>');
						label20.appendChild(firstNamelabel);
					
						var label21 = phresco.createElement('<div class="col2">');
						var firstNameValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.firstName +'</div>');
						label21.appendChild(firstNameValue);
					formDiv2.appendChild(billh5);
					formDiv2.appendChild(label20);
					formDiv2.appendChild(label21);
					
					
					var formDiv3 = phresco.createElement('<div class="formrow">');
						var label30 = phresco.createElement('<div class="col1">');
						var lastNamelabel = phresco.createElement('<div class="col1position1">Last name:</div>');
						label30.appendChild(lastNamelabel);
					
						var label31 = phresco.createElement('<div class="col2">');
						var lastNameValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.lastName +'</div>');
						label31.appendChild(lastNameValue);
					
					formDiv3.appendChild(label30);
					formDiv3.appendChild(label31);
					
					var formDiv4 = phresco.createElement('<div class="formrow">');
					var label40 = phresco.createElement('<div class="col1">');
					var companyNamelabel = phresco.createElement('<div class="col1position1">Company:</div>');
					label40.appendChild(companyNamelabel);
					
					var label41 = phresco.createElement('<div class="col2">');
					var companyNameValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.company +'</div>');
					label41.appendChild(companyNameValue);
					
					formDiv4.appendChild(label40);
					formDiv4.appendChild(label41);
					
					
					var formDiv5 = phresco.createElement('<div class="formrow">');
					var label50 = phresco.createElement('<div class="col1">');
					var Address1label = phresco.createElement('<div class="col1position1">Address1:</div>');
					label50.appendChild(Address1label);
					
					var label51 = phresco.createElement('<div class="col2">');
					var Address1Value = phresco.createElement(' <div class="col1position2">'+ orderDetail.address1 +'</div>');
					label51.appendChild(Address1Value);
					
					formDiv5.appendChild(label50);
					formDiv5.appendChild(label51);
					
					
					var formDiv6 = phresco.createElement('<div class="formrow">');
					var label60 = phresco.createElement('<div class="col1">');
					var Address2label = phresco.createElement('<div class="col1position1">Address2:</div>');
					label60.appendChild(Address2label);
					
					var label61 = phresco.createElement('<div class="col2">');
					var Address2Value = phresco.createElement(' <div class="col1position2">'+ orderDetail.address2 +'</div>');
					label61.appendChild(Address2Value);
					
					formDiv6.appendChild(label60);
					formDiv6.appendChild(label61);
					
					var formDiv7 = phresco.createElement('<div class="formrow">');
					var label70 = phresco.createElement('<div class="col1">');
					var citylabel = phresco.createElement('<div class="col1position1">City</div>');
					label70.appendChild(citylabel);
					
					var label71 = phresco.createElement('<div class="col2">');
					var cityValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.city +'</div>');
					label71.appendChild(cityValue);
					
					formDiv7.appendChild(label70);
					formDiv7.appendChild(label71);
					
					
					var formDiv8 = phresco.createElement('<div class="formrow">');
					var label80 = phresco.createElement('<div class="col1">');
					var statelabel = phresco.createElement('<div class="col1position1">State / Province:</div>');
					label80.appendChild(statelabel);
					
					var label81 = phresco.createElement('<div class="col2">');
					var stateValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.state +'</div>');
					label81.appendChild(stateValue);
					
					formDiv8.appendChild(label80);
					formDiv8.appendChild(label81);
					
					
					var formDiv9 = phresco.createElement('<div class="formrow">');
					var label90 = phresco.createElement('<div class="col1">');
					var countrylabel = phresco.createElement('<div class="col1position1">Country:</div>');
					label90.appendChild(countrylabel);
					
					var label91 = phresco.createElement('<div class="col2">');
					var countryValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.country +'</div>');
					label91.appendChild(countryValue);
					
					formDiv9.appendChild(label90);
					formDiv9.appendChild(label91);
					
					
					var formDiv10 = phresco.createElement('<div class="formrow">');
					var label200 = phresco.createElement('<div class="col1">');
					var postcodelabel = phresco.createElement('<div class="col1position1">Postcode:</div>');
					label200.appendChild(postcodelabel);
					
					var label201 = phresco.createElement('<div class="col2">');
					var postcodeValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.postcode +'</div>');
					label201.appendChild(postcodeValue);
					
					formDiv10.appendChild(label200);
					formDiv10.appendChild(label201);
					
					var formDiv11 = phresco.createElement('<div class="formrow">');
					var label300 = phresco.createElement('<div class="col1">');
					var phonenumberlabel = phresco.createElement('<div class="col1position1">Phonenumber:</div>');
					label300.appendChild(phonenumberlabel);
					
					var label301 = phresco.createElement('<div class="col2">');
					var phonenumberValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.phonenumber +'</div>');
					label301.appendChild(phonenumberValue);
					
					formDiv11.appendChild(label300);
					formDiv11.appendChild(label301);
					
					var paymenth5 = phresco.createElement('<h5> Payment Method</h5>');
					var formDiv12 = phresco.createElement('<div class="formrow">');
					var label400 = phresco.createElement('<div class="col1">');
					var subtotallabel = phresco.createElement('<div class="col1position1">Subtotal:</div>');
					label400.appendChild(subtotallabel);
					
					var label401 = phresco.createElement('<div class="col2">');
					var subtotalValue = phresco.createElement(' <div class="col1position2">$3750</div>');
					label401.appendChild(subtotalValue);
					
					formDiv12.appendChild(paymenth5);
					formDiv12.appendChild(label400);
					formDiv12.appendChild(label401);
					
					
					var formDiv13 = phresco.createElement('<div class="formrow">');
					var label500 = phresco.createElement('<div class="col1">');
					var orderlabel = phresco.createElement('<div class="col1position1">Ordertotal:</div>');
					label500.appendChild(orderlabel);
					
					var label501 = phresco.createElement('<div class="col2">');
					var orderValue = phresco.createElement(' <div class="col1position2">$3750</div>');
					label501.appendChild(orderValue);
					
					formDiv13.appendChild(label500);
					formDiv13.appendChild(label501);
					
					var formDiv14 = phresco.createElement('<div class="formrow">');
					var label600 = phresco.createElement('<div class="col1">');
					var paymentlabel = phresco.createElement('<div class="col1position1">Payment method:</div>');
					label600.appendChild(paymentlabel);
					
					var label601 = phresco.createElement('<div class="col2">');
					var paymentValue = phresco.createElement(' <div class="col1position2">Cheque</div>');
					label601.appendChild(paymentValue);
					
					formDiv14.appendChild(label600);
					formDiv14.appendChild(label601);
					
					
					var formDiv15 = phresco.createElement('<div class="formrow">');
					var label700 = phresco.createElement('<div class="col1">');
					var maillabel = phresco.createElement('<div class="col1position1">Mail to:</div>');
					label700.appendChild(maillabel);
					
					var label701 = phresco.createElement('<div class="col2">');
					var mailValue = phresco.createElement(' <div class="col1position2">Phresco</div>');
					label701.appendChild(mailValue);
					
					formDiv15.appendChild(label700);
					formDiv15.appendChild(label701);
					
					var orderth5 = phresco.createElement('<h5>Order Comments</h5>');
					var formDiv16 = phresco.createElement('<div class="formrow">');
					var comment = phresco.createElement(' <div class="col_comments">Phresco products are nice and cool .....</div> ');
					formDiv16.appendChild(orderth5);
					formDiv16.appendChild(comment);
					
					var buttonDiv = phresco.createElement(' <div class="buttonposition2">');
					var backButton = Y.Node.create('<input type="submit" value="Back" class="buttonstyle"/>');
					
					var submitButton = Y.Node.create('<input type="button" value="Submit Order" class="buttonstyle"/>');
					submitButton.obj = phresco;
					
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
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "OrderFormWidgetTest Success case");
				});	
			},
			
			"OrderFormWidgetTest with different data": function () {
				var output1, output2;
			
				var WidgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var orderFormWidget = new Y.Phresco.OrderFormWidget({
						// place holder can be decided by specifying the attribute
						targetNode : WidgetNode,
						apiReference : eshopAPI
					});
					
					var productQty = {productDetail:[{detailImageURL:	 response.protocol+"://"+ response.host+":"+ response.port+"...uct/details/lg_tv_5.png", imageURL:response.protocol+"://"+ response.host+":"+ response.port+"//images/web/product/lg_tv_5.png",
					name:'LGElectronics\n47LW560047" 1080p 3D LED TV\n',price:1500,productId:5,quantity:"1",totalPrice:1500}],totalitem:1,cartTotal:1500};
					eshopAPI.set("productQty",productQty);
					
					var orderDetail = {email:"sathish@gmail.com",firstName:"sathish", lastName:"s", company:"Tata", address1:"salem", address2:"chennai",city:"chennai", state:"TamilNadu", country:"India", postcode:"636141", phonenumber:"133244"};
					eshopAPI.set("orderDetail",orderDetail);
					orderFormWidget.renderUI();
					output1 = orderFormWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var productContainer = phresco.createElement('<div class="productcontainer">');

					var productFieldeHolder = phresco.createElement('<div class="fieldholder">');
					var fieldeHolderh5 = phresco.createElement('<h5> Customer Information</h5>');
					
					var formDiv1 = phresco.createElement('<div class="formrow">');
					
						var colDiv1 = phresco.createElement('<div class="col1">');
						var col1Position1 = phresco.createElement('<div class="col1position1">Email:</div>');
						colDiv1.appendChild(col1Position1);
					
						var colDiv2 = phresco.createElement('<div class="col2">');
						var col1Position2 = phresco.createElement(' <div class="col1position2">'+ orderDetail.email +'</div>');
						colDiv2.appendChild(col1Position2);
						
					formDiv1.appendChild(fieldeHolderh5);
					formDiv1.appendChild(colDiv1);
					formDiv1.appendChild(colDiv2);
					
					var billh5 = phresco.createElement(' <h5> Billing / Delivery Informations</h5>');
					var formDiv2 = phresco.createElement('<div class="formrow">');
					
						var label20 = phresco.createElement('<div class="col1">');
						var firstNamelabel = phresco.createElement('<div class="col1position1">First name:</div>');
						label20.appendChild(firstNamelabel);
					
						var label21 = phresco.createElement('<div class="col2">');
						var firstNameValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.firstName +'</div>');
						label21.appendChild(firstNameValue);
					formDiv2.appendChild(billh5);
					formDiv2.appendChild(label20);
					formDiv2.appendChild(label21);
					
					
					var formDiv3 = phresco.createElement('<div class="formrow">');
						var label30 = phresco.createElement('<div class="col1">');
						var lastNamelabel = phresco.createElement('<div class="col1position1">Last name:</div>');
						label30.appendChild(lastNamelabel);
					
						var label31 = phresco.createElement('<div class="col2">');
						var lastNameValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.lastName +'</div>');
						label31.appendChild(lastNameValue);
					
					formDiv3.appendChild(label30);
					formDiv3.appendChild(label31);
					
					var formDiv4 = phresco.createElement('<div class="formrow">');
					var label40 = phresco.createElement('<div class="col1">');
					var companyNamelabel = phresco.createElement('<div class="col1position1">Company:</div>');
					label40.appendChild(companyNamelabel);
					
					var label41 = phresco.createElement('<div class="col2">');
					var companyNameValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.company +'</div>');
					label41.appendChild(companyNameValue);
					
					formDiv4.appendChild(label40);
					formDiv4.appendChild(label41);
					
					
					var formDiv5 = phresco.createElement('<div class="formrow">');
					var label50 = phresco.createElement('<div class="col1">');
					var Address1label = phresco.createElement('<div class="col1position1">Address1:</div>');
					label50.appendChild(Address1label);
					
					var label51 = phresco.createElement('<div class="col2">');
					var Address1Value = phresco.createElement(' <div class="col1position2">'+ orderDetail.address1 +'</div>');
					label51.appendChild(Address1Value);
					
					formDiv5.appendChild(label50);
					formDiv5.appendChild(label51);
					
					
					var formDiv6 = phresco.createElement('<div class="formrow">');
					var label60 = phresco.createElement('<div class="col1">');
					var Address2label = phresco.createElement('<div class="col1position1">Address2:</div>');
					label60.appendChild(Address2label);
					
					var label61 = phresco.createElement('<div class="col2">');
					var Address2Value = phresco.createElement(' <div class="col1position2">'+ orderDetail.address2 +'</div>');
					label61.appendChild(Address2Value);
					
					formDiv6.appendChild(label60);
					formDiv6.appendChild(label61);
					
					var formDiv7 = phresco.createElement('<div class="formrow">');
					var label70 = phresco.createElement('<div class="col1">');
					var citylabel = phresco.createElement('<div class="col1position1">City</div>');
					label70.appendChild(citylabel);
					
					var label71 = phresco.createElement('<div class="col2">');
					var cityValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.city +'</div>');
					label71.appendChild(cityValue);
					
					formDiv7.appendChild(label70);
					formDiv7.appendChild(label71);
					
					
					var formDiv8 = phresco.createElement('<div class="formrow">');
					var label80 = phresco.createElement('<div class="col1">');
					var statelabel = phresco.createElement('<div class="col1position1">State / Province:</div>');
					label80.appendChild(statelabel);
					
					var label81 = phresco.createElement('<div class="col2">');
					var stateValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.state +'</div>');
					label81.appendChild(stateValue);
					
					formDiv8.appendChild(label80);
					formDiv8.appendChild(label81);
					
					
					var formDiv9 = phresco.createElement('<div class="formrow">');
					var label90 = phresco.createElement('<div class="col1">');
					var countrylabel = phresco.createElement('<div class="col1position1">Country:</div>');
					label90.appendChild(countrylabel);
					
					var label91 = phresco.createElement('<div class="col2">');
					var countryValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.country +'</div>');
					label91.appendChild(countryValue);
					
					formDiv9.appendChild(label90);
					formDiv9.appendChild(label91);
					
					
					var formDiv10 = phresco.createElement('<div class="formrow">');
					var label200 = phresco.createElement('<div class="col1">');
					var postcodelabel = phresco.createElement('<div class="col1position1">Postcode:</div>');
					label200.appendChild(postcodelabel);
					
					var label201 = phresco.createElement('<div class="col2">');
					var postcodeValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.postcode +'</div>');
					label201.appendChild(postcodeValue);
					
					formDiv10.appendChild(label200);
					formDiv10.appendChild(label201);
					
					var formDiv11 = phresco.createElement('<div class="formrow">');
					var label300 = phresco.createElement('<div class="col1">');
					var phonenumberlabel = phresco.createElement('<div class="col1position1">Phonenumber:</div>');
					label300.appendChild(phonenumberlabel);
					
					var label301 = phresco.createElement('<div class="col2">');
					var phonenumberValue = phresco.createElement(' <div class="col1position2">'+ orderDetail.phonenumber +'</div>');
					label301.appendChild(phonenumberValue);
					
					formDiv11.appendChild(label300);
					formDiv11.appendChild(label301);
					
					var paymenth5 = phresco.createElement('<h5> Payment Method</h5>');
					var formDiv12 = phresco.createElement('<div class="formrow">');
					var label400 = phresco.createElement('<div class="col1">');
					var subtotallabel = phresco.createElement('<div class="col1position1">Subtotal:</div>');
					label400.appendChild(subtotallabel);
					
					var label401 = phresco.createElement('<div class="col2">');
					var subtotalValue = phresco.createElement(' <div class="col1position2">$3750</div>');
					label401.appendChild(subtotalValue);
					
					formDiv12.appendChild(paymenth5);
					formDiv12.appendChild(label400);
					formDiv12.appendChild(label401);
					
					
					var formDiv13 = phresco.createElement('<div class="formrow">');
					var label500 = phresco.createElement('<div class="col1">');
					var orderlabel = phresco.createElement('<div class="col1position1">Ordertotal:</div>');
					label500.appendChild(orderlabel);
					
					var label501 = phresco.createElement('<div class="col2">');
					var orderValue = phresco.createElement(' <div class="col1position2">$3750</div>');
					label501.appendChild(orderValue);
					
					formDiv13.appendChild(label500);
					formDiv13.appendChild(label501);
					
					var formDiv14 = phresco.createElement('<div class="formrow">');
					var label600 = phresco.createElement('<div class="col1">');
					var paymentlabel = phresco.createElement('<div class="col1position1">Payment method:</div>');
					label600.appendChild(paymentlabel);
					
					var label601 = phresco.createElement('<div class="col2">');
					var paymentValue = phresco.createElement(' <div class="col1position2">Cheque</div>');
					label601.appendChild(paymentValue);
					
					formDiv14.appendChild(label600);
					formDiv14.appendChild(label601);
					
					
					var formDiv15 = phresco.createElement('<div class="formrow">');
					var label700 = phresco.createElement('<div class="col1">');
					var maillabel = phresco.createElement('<div class="col1position1">Mail to:</div>');
					label700.appendChild(maillabel);
					
					var label701 = phresco.createElement('<div class="col2">');
					var mailValue = phresco.createElement(' <div class="col1position2">Phresco</div>');
					label701.appendChild(mailValue);
					
					formDiv15.appendChild(label700);
					formDiv15.appendChild(label701);
					
					var orderth5 = phresco.createElement('<h5>Order Comments</h5>');
					var formDiv16 = phresco.createElement('<div class="formrow">');
					var comment = phresco.createElement(' <div class="col_comments">Phresco products are nice and cool .....</div> ');
					formDiv16.appendChild(orderth5);
					formDiv16.appendChild(comment);
					
					var buttonDiv = phresco.createElement(' <div class="buttonposition2">');
					var backButton = Y.Node.create('<input type="submit" value="Back" class="buttonstyle"/>');
					
					var submitButton = Y.Node.create('<input type="button" value="Submit Order" class="buttonstyle"/>');
					submitButton.obj = phresco;
					
					buttonDiv.appendChild(backButton);
					buttonDiv.appendChild(submitButton);
					
					//productFieldeHolder.appendChild(formDiv1);
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
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "OrderFormWidgetTest Failure case");
				});	
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});