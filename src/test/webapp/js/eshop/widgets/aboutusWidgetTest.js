YUI.add('aboutusWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("AboutusWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "AboutusWidgetTest",
			"AboutusWidgetTest with same data": function () {
				var output1, output2;
			
				var aboutusWidgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var aboutusWidget = new Y.Phresco.AboutusWidget({
						// place holder can be decided by specifying the attribute
						targetNode : aboutusWidgetNode,
						apiReference : eshopAPI
					});
					aboutusWidget.createContent(aboutusWidgetNode);
					output1 = aboutusWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var aboutus = phresco.createElement('<div id="maincontact">');
					var selection = phresco.createElement('<section id="contact">');
					var divleft = phresco.createElement('<div id="">');
					var h3title = phresco.createElement('<h3> About Us </h3>');            
					var contactdescrip = phresco.createElement('<div class="contactdescrip">');
					var h4title = phresco.createElement('<h4 class="descrip"> WELCOME TO PHRESCO ESHOP</h4>');
					var ptag =  phresco.createElement('<p>It is a product that builds e-commerce storefronts. The product is to provide distinguished e-Commerce solution to merchants, shop owners to create professional online shops easy, powerful and reliable. E-cart and E-Shop packages provide you with the ability to build your own online storefront quickly and easily along with the content management tool (Content Uploading). E-Shop is designed to enable clients to expand their activities through selling their products / services using an online storefront. E-Shop comes in three different editions: Standard, Professional and Advanced. E-Cart is designed to enable websites to move into the E-Commerce environment and start selling online. </p> <br>');
					contactdescrip.appendChild(h4title);
					contactdescrip.appendChild(ptag);
					var cleardiv = phresco.createElement('<div class="clear"></div>');         
					divleft.appendChild(h3title);
					divleft.appendChild(contactdescrip);
					divleft.appendChild(cleardiv);
					selection.appendChild(divleft);
					aboutus.appendChild(selection);
					targetNode.appendChild(aboutus);
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "AboutusWidgetTest Success case");
				});
			},
			
			"AboutusWidgetTest with different data": function () {
				var output1, output2;
			
				var aboutusWidgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
				var eshopAPI = new Y.Phresco.EShopAPI(response);
				var phresco = new Y.Phresco.PhrescoWidget();
				var aboutusWidget = new Y.Phresco.AboutusWidget({
					// place holder can be decided by specifying the attribute
					targetNode : aboutusWidgetNode,
					apiReference : eshopAPI
				});
				aboutusWidget.createContent(aboutusWidgetNode);
				output1 = aboutusWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var aboutus = phresco.createElement('<div id="maincontact">');
                var selection = phresco.createElement('<section id="contact">');
                var divleft = phresco.createElement('<div id="">');
                var h3title = phresco.createElement('<h3> About Us </h3>');            
                var contactdescrip = phresco.createElement('<div class="contactdescrip">');
                var h4title = phresco.createElement('<h4 class="descrip"> WELCOME TO PHRESCO ESHOP</h4>');
                var ptag =  phresco.createElement('<p>It is a product that builds e-commerce storefronts. The product is to provide distinguished e-Commerce solution to merchants, shop owners to create professional online shops easy, powerful and reliable. E-cart and E-Shop packages provide you with the ability to build your own online storefront quickly and easily along with the content management tool (Content Uploading). E-Shop is designed to enable clients to expand their activities through selling their products / services using an online storefront. E-Shop comes in three different editions: Standard, Professional and Advanced. E-Cart is designed to enable websites to move into the E-Commerce environment and start selling online. </p> <br>');
                contactdescrip.appendChild(h4title);
                contactdescrip.appendChild(ptag);
                var cleardiv = phresco.createElement('<div class="clear"></div>');         
                divleft.appendChild(h3title);
                divleft.appendChild(contactdescrip);
                divleft.appendChild(cleardiv);
                //selection.appendChild(divleft);
                aboutus.appendChild(selection);
                targetNode.appendChild(aboutus);
				output2 = targetNode.get('innerHTML');
			
				Y.Assert.areNotEqual(output1, output2, "AboutusWidgetTest Failure case");
			});
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});