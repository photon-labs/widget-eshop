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
YUI.add('headerWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("HeaderWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "HeaderWidgetTest",
			"HeaderWidgetTest with same data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var headerWidget = new Y.Phresco.HeaderWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					var userId = 159;
					eshopAPI.set("userId", userId);
					var userData = {response:{username:"sathish"}};
					eshopAPI.set("userData", userData);
					headerWidget.createContent(widgetNode);
					output1 = headerWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var logoDiv = phresco.createElement('<div class="logo"/><!-- Defining the logo element -->');
					logoDiv.appendChild('<a href="#"><img src="images/eshop/logo.png" title="Phresco" alt="Phresco" /></a>');

					var searchSection = phresco.createElement('<section id="search"/>');

					var formElement = phresco.createElement('<form action="#" onsubmit="return false;" method="get">');
					formElement.appendChild('<input type="text" id="searchText" placeholder="Search" name="q">');
					
					
					var search = Y.Node.create('<input type="image" src="images/eshop/searchicon.png" width="20" height="20"  alt="searchicon" class="searchbtn"></a>');
					formElement.appendChild(search);


					searchSection.appendChild(formElement);
					
					if(userId > 0){
						var userData = eshopAPI.get("userData");
						var statusMsg = phresco.createElement('<div class="login_txt">Welcome : '+userData.response.username+' </div>');
						searchSection.appendChild(statusMsg);
					}
					
					targetNode.appendChild(logoDiv);
					targetNode.appendChild(searchSection);
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "HeaderWidgetTest Success case");
				});	
			},
			
			"HeaderWidgetTest with different data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var headerWidget = new Y.Phresco.HeaderWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					var userId = 159;
					eshopAPI.set("userId", userId);
					var userData = {response:{username:"sathish"}};
					eshopAPI.set("userData", userData);
					headerWidget.createContent(widgetNode);
					output1 = headerWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var logoDiv = phresco.createElement('<div class="logo"/><!-- Defining the logo element -->');
					logoDiv.appendChild('<a href="#"><img src="images/eshop/logo.png" title="Phresco" alt="Phresco" /></a>');

					var searchSection = phresco.createElement('<section id="search"/>');

					var formElement = phresco.createElement('<form action="#" onsubmit="return false;" method="get">');
					formElement.appendChild('<input type="text" id="searchText" placeholder="Search" name="q">');
					
					
					var search = Y.Node.create('<input type="image" src="images/eshop/searchicon.png" width="20" height="20"  alt="searchicon" class="searchbtn"></a>');
					formElement.appendChild(search);


					searchSection.appendChild(formElement);
					
					if(userId > 0){
						var userData = eshopAPI.get("userData");
						var statusMsg = phresco.createElement('<div class="login_txt">Welcome : '+userData.response.username+' </div>');
						searchSection.appendChild(statusMsg);
					}
					
					//targetNode.appendChild(logoDiv);
					targetNode.appendChild(searchSection);
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "HeaderWidgetTest Failure case");
				});	
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});