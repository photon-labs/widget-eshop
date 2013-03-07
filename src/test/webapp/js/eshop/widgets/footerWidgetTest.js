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