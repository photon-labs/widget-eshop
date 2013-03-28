YUI.add('categoryWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("categoryWidgetTest");
		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var configuration = undefined;
		var AsyncTestCase = new Y.Test.Case({

			name: "CategoryWidgetTest",
			"CategoryWidgetTest with same data": function () {
				var output1, output2, jsonInfo;
				var categoryNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					configuration = response;
				});
				this.wait(function(){
					var eshopAPI = new Y.Phresco.EShopAPI(configuration);
					var categoryWidget = new Y.Phresco.CategoryWidget({
						targetNode : categoryNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					
					eshopAPI.getCategories(categoryWidget, function(jsonData){
						categoryWidget.createContent(categoryNode, jsonData)
						output1 = categoryWidget.getTargetNode().get('innerHTML');
						var targetNode = phresco.createElement('<div></div>');
						if (jsonData !== null) {
							var navUL = phresco.createElement('<ul>');
							var totalCategories = jsonData.category.length;

							if (totalCategories >= 9) {
								totalCategories = 9;
							}
							for (var i = 0; i < totalCategories; i++) {
								var category = jsonData.category[i];
								var navLI = phresco.createElement('<li>');
								var navLIA = Y.Node.create('<span id=' + category['id'] + '"><a id="displayProducts" href="javascript:void(0);">' + category['name'] + '</a></span>');
								if (totalCategories >= 9) {
									var divmenu_class = phresco.createElement('<div class="menu_class"><a href="#" >More</a>');
									var navULTwo = phresco.createElement('<ul class="the_menu">');
									 for (var j = 9 ; j < jsonData.category.length; j++) {
										var category1 = jsonData.category[j];
										var navlIchild = Y.Node.create('<li><a id="displayProducts" href="javascript:void(0);">' + category1['name'] + '</a></li>');
										navULTwo.appendChild(navlIchild);
										divmenu_class.appendChild(navULTwo);
									 }
								}
								navLI.appendChild(navLIA);
								navUL.appendChild(navLI);
							}
							
							targetNode.appendChild(navUL);
							targetNode.appendChild(divmenu_class);
						}

						output2 = targetNode.get('innerHTML');
						Y.Assert.areEqual(output1, output2, "Category success");
					});
				}, 1000);
			},
			
			"CategoryWidgetTest with different data": function () {
				var output1, output2, jsonInfo;
				var categoryNode = Y.Node.create('<div></div>');
			
				wsConfig.getWsConfig(function(response){
					configuration = response;
				});
				
				this.wait(function(){
					var eshopAPI = new Y.Phresco.EShopAPI(configuration);
					var categoryWidget = new Y.Phresco.CategoryWidget({
						targetNode : categoryNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					
					eshopAPI.getCategories(categoryWidget, function(jsonData){
						
					jsonData = eshopAPI.get("categories");
					categoryWidget.createContent(categoryNode, jsonData)
					output1 = categoryWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					if (jsonData !== null) {
						var navUL = phresco.createElement('<ul>');
						var totalCategories = jsonData.category.length;

						if (totalCategories >= 9) {
							totalCategories = 9;
						}
						for (var i = 0; i < 8; i++) {
							var category = jsonData.category[i];
							var navLI = phresco.createElement('<li>');
							var navLIA = Y.Node.create('<span id=' + category['id'] + '"><a id="displayProducts" href="javascript:void(0);">' + category['name'] + '</a></span>');
							if (totalCategories >= 9) {
								var divmenu_class = phresco.createElement('<div class="menu_class"><a href="#" >More</a>');
								var navULTwo = phresco.createElement('<ul class="the_menu">');
								 for (var j = 9 ; j < jsonData.category.length; j++) {
									var category1 = jsonData.category[j];
									var navlIchild = Y.Node.create('<li><a id="displayProducts" href="javascript:void(0);">' + category1['name'] + '</a></li>');
									navULTwo.appendChild(navlIchild);
									divmenu_class.appendChild(navULTwo);
								 }
							}
							navLI.appendChild(navLIA);
							navUL.appendChild(navLI);
						}
						
						targetNode.appendChild(navUL);
						targetNode.appendChild(divmenu_class);
					}

					output2 = targetNode.get('innerHTML');
					Y.Assert.areNotEqual(output1, output2, "Category success");
					});
				}, 1000);
			}
		});
		suite.add(AsyncTestCase);
		Y.Test.Runner.add(suite);
		
	});