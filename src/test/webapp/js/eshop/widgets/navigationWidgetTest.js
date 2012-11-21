YUI.add('navigationWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("NavigationWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({

			name: "NavigationWidgetTest",
			"NavigationWidgetTest without login same data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
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
			},
			
			"NavigationWidgetTest without different data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
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
			},
			"NavigationWidgetTest with login same data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
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
			},
			"NavigationWidgetTest with login different data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
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
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});