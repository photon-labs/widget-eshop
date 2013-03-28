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
YUI.add('footerWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("footerWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "footerWidgetTest",
			"footerWidgetTest with same data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var footerWidget = new Y.Phresco.FooterWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					footerWidget.createContent(widgetNode);
					output1 = footerWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var copyRight = phresco.createElement('<strong> E-Shop Phresco 2012 </strong>');
					var privacyPolicy = phresco.createElement('<a class="link" href="#">Privacy Policy</a><br />');
					var poweredBy = phresco.createElement('<a class="link" href="#">powered by Photon</a>');

					targetNode.appendChild(copyRight);
					targetNode.appendChild(privacyPolicy);
					targetNode.appendChild(poweredBy);
					output2 = targetNode.get('innerHTML');
					Y.Assert.areNotEqual(output1, output2, "footerWidgetTest Success case");
				});
			},
			
			"footerWidgetTest with different data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
					var phresco = new Y.Phresco.PhrescoWidget();
					var footerWidget = new Y.Phresco.FooterWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					footerWidget.createContent(widgetNode);
					output1 = footerWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var copyRight = phresco.createElement('<strong> E-Shop Phresco © 2012 </strong>');
					var privacyPolicy = phresco.createElement('<a class="link" href="#">Privacy Policy</a><br />');
					var poweredBy = phresco.createElement('<a class="link" href="#">powered by Photon</a>');

					targetNode.appendChild(copyRight);
					//targetNode.appendChild(privacyPolicy);
					targetNode.appendChild(poweredBy);
					output2 = targetNode.get('innerHTML');
				
					Y.Assert.areNotEqual(output1, output2, "footerWidgetTest Failure case");
				});
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});