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
YUI.add('orderSuccessTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("OrderSuccessTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "OrderSuccessTest",
			"OrderSuccessTest with same data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var orderSuccess = new Y.Phresco.OrderSuccess({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					orderSuccess.createContent(widgetNode);
					output1 = orderSuccess.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var h3 = phresco.createElement('<h3>Computers</h3> ');
					// Product Container holds all the elements
					var productContainer = phresco.createElement('<div class="productcontainer">');

					var divfirst = phresco.createElement('<div>');
					var msgh4 = phresco.createElement('<h4 class="descrip"> Success Messages</h4>');
					var message = phresco.createElement('<p> You have bought the product successfully, you can continue shopping. Thank you and Welcome once again.... </p>');
					divfirst.appendChild(msgh4);
					divfirst.appendChild(message);
					productContainer.appendChild(divfirst);
					targetNode.appendChild(h3);
					targetNode.appendChild(productContainer);
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "OrderSuccessTest Success case");
				});	
			},
			
			"OrderSuccessTest with different data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var orderSuccess = new Y.Phresco.OrderSuccess({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					orderSuccess.createContent(widgetNode);
					output1 = orderSuccess.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var h3 = phresco.createElement('<h3>Computers</h3> ');
					// Product Container holds all the elements
					var productContainer = phresco.createElement('<div class="productcontainer">');

					var divfirst = phresco.createElement('<div>');
					var msgh4 = phresco.createElement('<h4 class="descrip"> Success Messages</h4>');
					var message = phresco.createElement('<p> You have bought the product successfully, you can continue shopping. Thank you and Welcome once again.... </p>');
					divfirst.appendChild(msgh4);
					//divfirst.appendChild(message);
					productContainer.appendChild(divfirst);
					targetNode.appendChild(h3);
					targetNode.appendChild(productContainer);
					output2 = targetNode.get('innerHTML');
					Y.Assert.areNotEqual(output1, output2, "OrderSuccessTest Failure case");
				});	
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});