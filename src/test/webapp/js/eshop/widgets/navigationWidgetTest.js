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
YUI.add('navigationWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("NavigationWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "NavigationWidgetTest",
			"NavigationWidgetTest without login same data": function () {
					wsConfig.getWsConfig(function(responsedata){
					var eshopapi = new Y.Phresco.EShopAPI(responsedata);
					var phresco = new Y.Phresco.PhrescoWidget(responsedata);
					var navigationNode = Y.Node.create('<div id="container"></div>');
					// instantiate NavigationWidget with the HTML
					var navigationWidget = new Y.Phresco.NavigationWidget({
						// place holder can be decided by specifying the attribute
						targetNode : navigationNode,
						apiReference : eshopapi
				   });
					//eshopapi.set("userId", 0);
					navigationWidget.render();
					var output1 = navigationWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					if(eshopapi.get("userId")) {
						var userId = eshopapi.get("userId");
					}
					var navUL = phresco.createElement('<ul>');
					
					var navLIAHome = Y.Node.create('<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>');
					
					var navLIProducts =  Y.Node.create('<li id="productsLI"><a href="#">Products</a></li>');
					
					var navLISpecials = Y.Node.create('<li id="specialsLI"><a href="#">Specials</a></li>');
					
					var contactUs = Y.Node.create('<li id="contactUsLI"><a href="#">Contact us</a></li>');
					
					var navLIAbout = Y.Node.create('<li id="aboutUsLI"><a href="#">About us</a></li>');
					
					var navLISignup = Y.Node.create('<li id="signupLI"><a href="#">Sign up</a></li>');
					
					var navLILogin = Y.Node.create('<li id="LoginLi"><a href="#">Login</a></li>');
					
					var navLIMyorder = Y.Node.create('<li id="myorderLI"><a href="#">My Order</a></li>');
					
					var navLIlogout = Y.Node.create('<li id="logoutLi"><a href="#">Log Out</a></li>');
					
					navUL.appendChild(navLIAHome);
					navUL.appendChild(navLIProducts);
					navUL.appendChild(navLISpecials);
					navUL.appendChild(contactUs);
					navUL.appendChild(navLIAbout);
					userId = 0;
					if (userId === 0) {
						navUL.appendChild(navLISignup);
						navUL.appendChild(navLILogin);
					} else {
						navUL.appendChild(navLIMyorder);
						navUL.appendChild(navLIlogout);
					}
					targetNode.appendChild(navUL);
					var output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "NavigationWidget Success case");
				});	
			},
			
			"NavigationWidgetTest without different data": function () {
				wsConfig.getWsConfig(function(responsedata){
					var eshopapi = new Y.Phresco.EShopAPI(responsedata);
						var phresco = new Y.Phresco.PhrescoWidget(responsedata);
						var navigationNode = Y.Node.create('<div id="container"></div>');
						// instantiate NavigationWidget with the HTML
						var navigationWidget = new Y.Phresco.NavigationWidget({
							// place holder can be decided by specifying the attribute
							targetNode : navigationNode,
							apiReference : eshopapi
					   });
						//eshopapi.set("userId", 0);
						navigationWidget.render();
						var output1 = navigationWidget.getTargetNode().get('innerHTML');
						var targetNode = phresco.createElement('<div></div>');
						if(eshopapi.get("userId")) {
							var userId = eshopapi.get("userId");
						}
						var navUL = phresco.createElement('<ul>');
						
						var navLIAHome = Y.Node.create('<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>');
						
						var navLIProducts =  Y.Node.create('<li id="productsLI"><a href="#">Products</a></li>');
						
						var navLISpecials = Y.Node.create('<li id="specialsLI"><a href="#">Specials</a></li>');
						
						var contactUs = Y.Node.create('<li id="contactUsLI"><a href="#">Contact us</a></li>');
						
						var navLIAbout = Y.Node.create('<li id="aboutUsLI"><a href="#">About us</a></li>');
						
						var navLISignup = Y.Node.create('<li id="signupLI"><a href="#">Sign up</a></li>');
						
						var navLILogin = Y.Node.create('<li id="LoginLi"><a href="#">Login</a></li>');
						
						var navLIMyorder = Y.Node.create('<li id="myorderLI"><a href="#">My Order</a></li>');
						
						var navLIlogout = Y.Node.create('<li id="logoutLi"><a href="#">Log Out</a></li>');
						
						navUL.appendChild(navLIAHome);
						navUL.appendChild(navLIProducts);
						//navUL.appendChild(navLISpecials);
						navUL.appendChild(contactUs);
						navUL.appendChild(navLIAbout);
						userId = 0;
						if (userId === 0) {
							navUL.appendChild(navLISignup);
							navUL.appendChild(navLILogin);
						} else {
							navUL.appendChild(navLIMyorder);
							navUL.appendChild(navLIlogout);
						}
						targetNode.appendChild(navUL);
						var output2 = targetNode.get('innerHTML');
						Y.Assert.areNotEqual(output1, output2, "NavigationWidget Failure case");
					});	
				},
				"NavigationWidgetTest with login same data": function () {
					wsConfig.getWsConfig(function(responsedata){
						var eshopapi = new Y.Phresco.EShopAPI(responsedata);
						var phresco = new Y.Phresco.PhrescoWidget(responsedata);
						var navigationNode = Y.Node.create('<div id="container"></div>');
						// instantiate NavigationWidget with the HTML
						var navigationWidget = new Y.Phresco.NavigationWidget({
							// place holder can be decided by specifying the attribute
							targetNode : navigationNode,
							apiReference : eshopapi
					   });
						eshopapi.set("userId", 1);
						navigationWidget.render();
						var output1 = navigationWidget.getTargetNode().get('innerHTML');
						var targetNode = phresco.createElement('<div></div>');
						if(eshopapi.get("userId")) {
							var userId = eshopapi.get("userId");
						}
						var navUL = phresco.createElement('<ul>');
						
						var navLIAHome = Y.Node.create('<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>');
						
						var navLIProducts =  Y.Node.create('<li id="productsLI"><a href="#">Products</a></li>');
						
						var navLISpecials = Y.Node.create('<li id="specialsLI"><a href="#">Specials</a></li>');
						
						var contactUs = Y.Node.create('<li id="contactUsLI"><a href="#">Contact us</a></li>');
						
						var navLIAbout = Y.Node.create('<li id="aboutUsLI"><a href="#">About us</a></li>');
						
						var navLISignup = Y.Node.create('<li id="signupLI"><a href="#">Sign up</a></li>');
						
						var navLILogin = Y.Node.create('<li id="LoginLi"><a href="#">Login</a></li>');
						
						var navLIMyorder = Y.Node.create('<li id="myorderLI"><a href="#">My Order</a></li>');
						
						var navLIlogout = Y.Node.create('<li id="logoutLi"><a href="#">Log Out</a></li>');
						
						navUL.appendChild(navLIAHome);
						navUL.appendChild(navLIProducts);
						navUL.appendChild(navLISpecials);
						navUL.appendChild(contactUs);
						navUL.appendChild(navLIAbout);
						userId = 1;
						if (userId === 0) {
							navUL.appendChild(navLISignup);
							navUL.appendChild(navLILogin);
						} else {
							navUL.appendChild(navLIMyorder);
							navUL.appendChild(navLIlogout);
						}
						targetNode.appendChild(navUL);
						var output2 = targetNode.get('innerHTML');
						Y.Assert.areEqual(output1, output2, "NavigationWidget success case");
					});	
				},
				"NavigationWidgetTest with login different data": function () {
					wsConfig.getWsConfig(function(response){
						var eshopapi = new Y.Phresco.EShopAPI(response);
						var phresco = new Y.Phresco.PhrescoWidget(response);
						var navigationNode = Y.Node.create('<div id="container"></div>');
						// instantiate NavigationWidget with the HTML
						var navigationWidget = new Y.Phresco.NavigationWidget({
							// place holder can be decided by specifying the attribute
							targetNode : navigationNode,
							apiReference : eshopapi
					   });
						eshopapi.set("userId", 1);
						navigationWidget.render();
						var output1 = navigationWidget.getTargetNode().get('innerHTML');
						var targetNode = phresco.createElement('<div></div>');
						if(eshopapi.get("userId")) {
							var userId = eshopapi.get("userId");
						}
						var navUL = phresco.createElement('<ul>');
						
						var navLIAHome = Y.Node.create('<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>');
						
						var navLIProducts =  Y.Node.create('<li id="productsLI"><a href="#">Products</a></li>');
						
						var navLISpecials = Y.Node.create('<li id="specialsLI"><a href="#">Specials</a></li>');
						
						var contactUs = Y.Node.create('<li id="contactUsLI"><a href="#">Contact us</a></li>');
						
						var navLIAbout = Y.Node.create('<li id="aboutUsLI"><a href="#">About us</a></li>');
						
						var navLISignup = Y.Node.create('<li id="signupLI"><a href="#">Sign up</a></li>');
						
						var navLILogin = Y.Node.create('<li id="LoginLi"><a href="#">Login</a></li>');
						
						var navLIMyorder = Y.Node.create('<li id="myorderLI"><a href="#">My Order</a></li>');
						
						var navLIlogout = Y.Node.create('<li id="logoutLi"><a href="#">Log Out</a></li>');
						
						//navUL.appendChild(navLIAHome);
						navUL.appendChild(navLIProducts);
						navUL.appendChild(navLISpecials);
						navUL.appendChild(contactUs);
						navUL.appendChild(navLIAbout);
						userId = 1;
						if (userId === 0) {
							navUL.appendChild(navLISignup);
							navUL.appendChild(navLILogin);
						} else {
							navUL.appendChild(navLIMyorder);
							navUL.appendChild(navLIlogout);
						}
						targetNode.appendChild(navUL);
						var output2 = targetNode.get('innerHTML');
						Y.Assert.areNotEqual(output1, output2, "NavigationWidget success case");
				});	
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});