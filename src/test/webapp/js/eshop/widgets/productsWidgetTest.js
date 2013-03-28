YUI.add('productsWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("productsWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var configuration = undefined;
		var AsyncTestCase = new Y.Test.Case({

			name: "ProductsWidgetTest",
			"ProductsWidgetTest with same data": function () {
				var output1, output2, jsonData;
			
				var productsNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					configuration = response;
				});
				
			
				this.wait(function(){
					var eshopAPI = new Y.Phresco.EShopAPI(configuration);
					var productsWidget = new Y.Phresco.ProductsWidget({
						targetNode : productsNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var categoryId =1;
					var config = {web:{web:"images/web/"}};
					eshopAPI.set("config", config);
					eshopAPI.getProducts(productsWidget, categoryId, productsWidget, function(jsonData){
						productsWidget.createContent(productsNode, jsonData)
					output1 = productsWidget.getTargetNode().get('innerHTML');	
					if (jsonData !== null) {
						var url = eshopAPI.wsURLWithoutContext;
						var config = eshopAPI._getConfigData();
						var webImage = config.web.web;
						var title = eshopAPI.get("title"); 
						var titleh3 = (title === undefined || title === "" ) ? "Products" : title;
						var targetNode = phresco.createElement('<div></div>');
						var h3 = phresco.createElement('<h3>'+ titleh3 +'</h3>');
						var newProductsUL = phresco.createElement('<ul>');
						var norecord = jsonData.successMessage; // for search record not found
						if(norecord !== "no item found"){
						for (i = 0; i < jsonData.product.length; i++) {
							var product = jsonData.product[i];
							if (product !== undefined) {
								var imageURL = url + '/' + webImage + product.image;
								var detailImageURL = url + '/' + webImage + product.detailImage;

								var li = Y.Node.create('<li>');

								var divImg = phresco.createElement('<div class="img"><a href="#"><img alt="" src="' + imageURL + '"></a></div>');
								var divInfo = phresco.createElement('<div class="info">');

								var productA = phresco.createElement('<a class="title" href="#">' + product.name + '</a>');

								var priceDiv = phresco.createElement('<div class="price">');
								var priceSpan = phresco.createElement('<span class="st">Our price:</span><strong>' + phresco.getAmountByCurrency(product.listPrice) + '</strong><br>');
								var sellSpan = phresco.createElement('<span class="st2">Sell at:</span><span class="st3">' + phresco.getAmountByCurrency(product.sellPrice) + '</span>');
								priceDiv.appendChild(priceSpan);
								priceDiv.appendChild(sellSpan);
								
								var actionsDiv = phresco.createElement('<div class="actions">');
								var details = Y.Node.create('<a href="#">Details</a>');

								var addToCart = Y.Node.create('<a href="#">Add to cart</a>');
								
								addToCart.obj = phresco;
								var data = {};
								data.productId = product.id;
								data.name = product.name;
								data.quantity = 1;
								data.price = product.sellPrice;
								data.imageURL = imageURL;
								data.detailImageURL = detailImageURL;
								data.totalPrice = (data.quantity * product.sellPrice);
								addToCart.data = data;

								actionsDiv.appendChild(details);
								actionsDiv.appendChild(addToCart);						
								
								li.appendChild(divImg);
								
								
								divInfo.appendChild(productA);
								divInfo.appendChild(priceDiv);
								divInfo.appendChild(actionsDiv);

								li.appendChild(divInfo);
								newProductsUL.appendChild(li);
							}
						}

						targetNode.appendChild(h3);
						}
						else{
							var productsUnavailable = phresco.createElement('<div id="norecord">No products available</div>');
								targetNode.empty();
								targetNode.appendChild(productsUnavailable);
						}
							if (jsonData.length === 0) {
								var productsUnavailable = phresco.createElement('<div id="norecord"><strong>No products available</div>');
								targetNode.empty();
								targetNode.appendChild(productsUnavailable);
							} else {
								targetNode.appendChild(newProductsUL);
							}
					
					}
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "Produsts success");
					
					});
					
				}, 800);
			},
			
			"ProductsWidgetTest with different data": function () {
				var output1, output2, jsonData;
			
				var productsNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					configuration = response;
				});
			
				this.wait(function(){
						var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
					var productsWidget = new Y.Phresco.ProductsWidget({
						targetNode : productsNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var categoryId =1;
					var config = {web:{web:"images/web/"}};
					eshopAPI.set("config", config);
					eshopAPI.getProducts(productsWidget, categoryId, productsWidget, function(jsonData){
						productsWidget.createContent(productsNode, jsonData)
						output1 = productsWidget.getTargetNode().get('innerHTML');	
						if (jsonData !== null) {
							var url = eshopAPI.wsURLWithoutContext;
							var config = eshopAPI._getConfigData();
							var webImage = config.web.web;
							var title = eshopAPI.get("title"); 
							var titleh3 = (title === undefined || title === "" ) ? "Products" : title;
							var targetNode = phresco.createElement('<div></div>');
							var h3 = phresco.createElement('<h3>'+ titleh3 +'</h3>');
							var newProductsUL = phresco.createElement('<ul>');
							var norecord = jsonData.successMessage; // for search record not found
							if(norecord !== "no item found"){
							for (i = 0; i < jsonData.product.length; i++) {
								var product = jsonData.product[i];
								if (product !== undefined) {
									var imageURL = url + '/' + webImage + product.image;
									var detailImageURL = url + '/' + webImage + product.detailImage;

									var li = Y.Node.create('<li>');

									var divImg = phresco.createElement('<div class="img"><a href="#"><img alt="" src="' + imageURL + '"></a></div>');
									var divInfo = phresco.createElement('<div class="info">');

									var productA = phresco.createElement('<a class="title" href="#">' + product.name + '</a>');

									var priceDiv = phresco.createElement('<div class="price">');
									var priceSpan = phresco.createElement('<span class="st">Our price:</span><strong>' + phresco.getAmountByCurrency(product.listPrice) + '</strong><br>');
									var sellSpan = phresco.createElement('<span class="st2">Sell at:</span><span class="st3">' + phresco.getAmountByCurrency(product.sellPrice) + '</span>');
									priceDiv.appendChild(priceSpan);
									priceDiv.appendChild(sellSpan);
									
									var actionsDiv = phresco.createElement('<div class="actions">');
									var details = Y.Node.create('<a href="#">Details</a>');

									var addToCart = Y.Node.create('<a href="#">Add to cart</a>');
									
									addToCart.obj = phresco;
									var data = {};
									data.productId = product.id;
									data.name = product.name;
									data.quantity = 1;
									data.price = product.sellPrice;
									data.imageURL = imageURL;
									data.detailImageURL = detailImageURL;
									data.totalPrice = (data.quantity * product.sellPrice);
									addToCart.data = data;

									actionsDiv.appendChild(details);
									actionsDiv.appendChild(addToCart);						
									
									li.appendChild(divImg);
									
									
									//divInfo.appendChild(productA);
									divInfo.appendChild(priceDiv);
									divInfo.appendChild(actionsDiv);

									li.appendChild(divInfo);
									newProductsUL.appendChild(li);
								}
							}

							targetNode.appendChild(h3);
							}
							else{
								var productsUnavailable = phresco.createElement('<div id="norecord">No products available</div>');
									targetNode.empty();
									targetNode.appendChild(productsUnavailable);
							}
								if (jsonData.length === 0) {
									var productsUnavailable = phresco.createElement('<div id="norecord"><strong>No products available</div>');
									targetNode.empty();
									targetNode.appendChild(productsUnavailable);
								} else {
									targetNode.appendChild(newProductsUL);
								}
						
						}
						output2 = targetNode.get('innerHTML');
						Y.Assert.areNotEqual(output1, output2, "Produsts success");
					});		
				}, 800);
			}
			
		});
		suite.add(AsyncTestCase);
		Y.Test.Runner.add(suite);
		
	});