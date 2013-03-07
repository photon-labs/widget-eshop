YUI.add('myCartWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("MyCartWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "MyCartWidgetTest",
			"MyCartWidgetTest with same data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(responsedata){
					var eshopAPI = new Y.Phresco.EShopAPI(responsedata);
					var phresco = new Y.Phresco.PhrescoWidget();
					var myCartWidget = new Y.Phresco.MyCartWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
				   });
				   myCartWidget.renderUI();
				   output1 = myCartWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var cashBanner = phresco.createElement('<div class="cashbanner"><img src="images/eshop/cashdelivery_banner.png" width="181" height="70" alt="Cash delivery"></div>');
					var myCartBDiv = phresco.createElement('<div class="mycartbg">');
					var carticonDiv = phresco.createElement('<div class="carticon"><img src="images/eshop/mycart_icon.png" width="28" height="21" alt="My Cart icon"> </div>');
					
					var cartheaderDiv = Y.Node.create('<a href="#"><div class="cartheader">My Cart </div></a>');
					
					var splitDiv = phresco.createElement('<div class="split"></div>');
					var ItemDiv = phresco.createElement('<div class="mycarttext"> Item </div>');
					var split2Div = phresco.createElement('<div class="split2"></div>');
					var totalPriceDiv = phresco.createElement('<div class="mycarttext">Total Price </div>');
					var clearDiv = phresco.createElement('<div class="clear"></div>');
					var val1Div = phresco.createElement('<div class="mycarttextvalue1" id="totalItem"> 0 </div>');
					var val2Div = phresco.createElement('<div class="mycarttextvalue2" id="totalPrice" style="padding: 0 0 2px 35px;">0 </div>');

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
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "MyCartWidgetTest Success case");
				});
			},
			"MyCartWidgetTest with different data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(responsedata){
					var eshopAPI = new Y.Phresco.EShopAPI(responsedata);
					var phresco = new Y.Phresco.PhrescoWidget();
					var myCartWidget = new Y.Phresco.MyCartWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
				   });
				   myCartWidget.renderUI();
				   output1 = myCartWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var cashBanner = phresco.createElement('<div class="cashbanner"><img src="images/eshop/cashdelivery_banner.png" width="181" height="70" alt="Cash delivery"></div>');
					var myCartBDiv = phresco.createElement('<div class="mycartbg">');
					var carticonDiv = phresco.createElement('<div class="carticon"><img src="images/eshop/mycart_icon.png" width="28" height="21" alt="My Cart icon"> </div>');
					
					var cartheaderDiv = Y.Node.create('<a href="#"><div class="cartheader">My Cart </div></a>');
					
					var splitDiv = phresco.createElement('<div class="split"></div>');
					var ItemDiv = phresco.createElement('<div class="mycarttext"> Item </div>');
					var split2Div = phresco.createElement('<div class="split2"></div>');
					var totalPriceDiv = phresco.createElement('<div class="mycarttext">Total Price </div>');
					var clearDiv = phresco.createElement('<div class="clear"></div>');
					var val1Div = phresco.createElement('<div class="mycarttextvalue1" id="totalItem"> 0 </div>');
					var val2Div = phresco.createElement('<div class="mycarttextvalue2" id="totalPrice" style="padding: 0 0 2px 35px;">0 </div>');

					//myCartBDiv.appendChild(carticonDiv);
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
					output2 = targetNode.get('innerHTML');
					Y.Assert.areNotEqual(output1, output2, "MyCartWidgetTest Failure case");
				});
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});