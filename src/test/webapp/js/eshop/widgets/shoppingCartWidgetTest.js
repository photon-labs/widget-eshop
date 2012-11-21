YUI.add('shoppingCartWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("ShoppingCartWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({

			name: "ShoppingCartWidgetTest",
			"ShoppingCartWidget same data unit test case": function () {
				var output1, output2;
			
				var shoppingCartNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var shoppingWidget = new Y.Phresco.ShoppingCartWidget({
					targetNode : shoppingCartNode,
					apiReference : eshopAPI
				});
				var phresco = new Y.Phresco.PhrescoWidget();
				var config = {web:{web:"images/web/"}};
				eshopAPI.set("config", config);
				shoppingcard_data = {productDetail:[{detailImageURL:"product/details/bb_mobile_22.png", name:'BlackBerry Bold 9780', productId : 22, quantity : 1, price: 380, totalPrice:380},{detailImageURL:"product/details/coby_tv_4.png", name:'LED3DTV5586 55" Class 3D LED TV w/ 2 Pairs of 3D Glasses', productId : 4, quantity : 1, price: 1500, totalPrice:1500}]};
				eshopAPI.set("productQty", shoppingcard_data);
				shoppingWidget.render();
				output1 = shoppingWidget.getTargetNode().get('innerHTML');
				
				var url = eshopAPI.get("wsURLWithoutContext");
				var config = eshopAPI._getConfigData();
				var webImage = config.web.web;
				var targetNode = phresco.createElement('<div></div>');
				var h3 = phresco.createElement('<h3> product Checkout</h3> ');
				 var backHref = Y.Node.create('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
					
					h3.appendChild(backHref);
				var productContainer = phresco.createElement('<div class="productcontainer">');
					var shoppingCarth5 = phresco.createElement('<h5> My Shopping Cart</h5>');

					var checkoutcol1Div = phresco.createElement('<div class="checkoutcol1"> ');
						var productsDiv = phresco.createElement('<div class="co_col1position1">Products</div> ');
						checkoutcol1Div.appendChild(productsDiv);
						
					var checkoutcol2Div = phresco.createElement(' <div class="checkoutcol2">');
						var quantityDiv = phresco.createElement('<div class="co_col1position2">Quantity</div> ');
						checkoutcol2Div.appendChild(quantityDiv);
				
					var checkoutcol3Div = phresco.createElement(' <div class="checkoutcol3">');
						var amountDiv = phresco.createElement('<div class="co_col1position2">Total Amount</div> ');
						checkoutcol3Div.appendChild(amountDiv);

					var checkoutcol4 = phresco.createElement(' <div class="checkoutcol4">');
						var removeDiv = phresco.createElement('<div class="co_col1position2">Remove Item</div> ');
						checkoutcol4.appendChild(removeDiv);
	   
				productContainer.appendChild(shoppingCarth5);
				productContainer.appendChild(checkoutcol1Div);
				productContainer.appendChild(checkoutcol2Div);
				productContainer.appendChild(checkoutcol3Div);
				productContainer.appendChild(checkoutcol4);
				
				var productQty = eshopAPI.get("productQty");
					
				if(productQty){	
					var productDetails = productQty.productDetail;
					if(productQty.quantity){
						var quantity = productQty.quantity;
					}
					else { var quantity = 1; }
					
					var totalItem = productQty.totalItem;

					var imageURL = url + '/' + webImage + productDetails.image;
					var detailImageURL = url + '/' + webImage + productDetails.detailImage;
					

					var subTotal = 0;
				   for (var j = 0; j < productDetails.length; j++) {
						var chectoutrow2 = phresco.createElement('<div class="chectoutrow2">');
							var checkoutvaluecol1 = phresco.createElement('<div class="checkoutvaluecol1">');
								var productImageFullDiv = phresco.createElement('<div class="co_col1position1">');
									var productImageDiv = phresco.createElement('<div class="co_product_image">');
										var productImage = phresco.createElement('<img src="'+productDetails[j].detailImageURL+'" width="120" height="120" alt="Apple Mac Laptop">');
										productImageDiv.appendChild(productImage);
									var productDesc = phresco.createElement('<div class="co_product_description">'+productDetails[j].name+'</div>');
									productImageFullDiv.appendChild(productImageDiv);
									productImageFullDiv.appendChild(productDesc);
									
							checkoutvaluecol1.appendChild(productImageFullDiv);
									
							
							var checkoutvaluecol2 = phresco.createElement('<div class="checkoutvaluecol2">');
								var productQuantityDiv = phresco.createElement('<div class="co_col1position2">');
									var co_inputDiv = phresco.createElement('<div class="co_input">');
										var co_inputBox = Y.Node.create('<input type="text" value="'+productDetails[j].quantity+'" name="productQuantity_'+productDetails[j].productId+'" id="productQuantity_'+productDetails[j].productId+'" size="3" maxlength="2" style="width:40px" />');
										
									co_inputDiv.appendChild(co_inputBox);
									productQuantityDiv.appendChild(co_inputDiv);
								
								checkoutvaluecol2.appendChild(productQuantityDiv);
							
							var checkoutvaluecol3 = phresco.createElement('<div class="checkoutvaluecol3">');
								var productAmount = phresco.createElement('<div class="co_col1position2"><div class="co_input2"><span id="totalAmount_'+productDetails[j].productId+'">'+productDetails[j].totalPrice+'</span></div></div>');
								checkoutvaluecol3.appendChild(productAmount);
							
							var checkoutvaluecol4 = phresco.createElement('<div class="checkoutvaluecol4">');
								var removeButtonDiv = phresco.createElement('<div class="co_col1position2">');
									var removeButton = Y.Node.create('<input type="submit" value="Remove" class="remove_buttonstyle"/>');
									

									removeButtonDiv.appendChild(removeButton);
							checkoutvaluecol4.appendChild(removeButton);
						
							chectoutrow2.appendChild(checkoutvaluecol1);
							chectoutrow2.appendChild(checkoutvaluecol2);
							chectoutrow2.appendChild(checkoutvaluecol3);
							chectoutrow2.appendChild(checkoutvaluecol4);
							
							productContainer.appendChild(chectoutrow2);
							
							subTotal = Number(subTotal) + Number(productDetails[j].totalPrice);
							
					  }
					
					var clearDiv =  phresco.createElement('<div class="clear"></div>');
					var subTotalHeightDiv =  phresco.createElement('<div class="subTotalHeight"></div>');
					var subTotalDiv = phresco.createElement('<div class="subtotal_pos">SubTotal: $<span id="subToal">'+subTotal.toFixed(2)+'</span></div>');
					var clearDiv2 = phresco.createElement('<div class="clear"></div>');
					var cartButtons = phresco.createElement('<div class="checkout_buttonposition2">');
							
					var updateCartButton = Y.Node.create('<input type="submit" value="Update Cart" class="checkout_buttonstyle" />');

					var checkOutButton = Y.Node.create('<input type="submit" value="Check Out" class="checkout_buttonstyle"/>');

					cartButtons.appendChild(updateCartButton);
					if(totalItem > 0){
						cartButtons.appendChild(checkOutButton);
					}
					productContainer.appendChild(clearDiv);
					productContainer.appendChild(subTotalHeightDiv);
					productContainer.appendChild(subTotalDiv);
					productContainer.appendChild(clearDiv2);
					productContainer.appendChild(cartButtons);
				}

				targetNode.appendChild(h3);
				targetNode.appendChild(productContainer);
				output2 = targetNode.get('innerHTML');
				Y.Assert.areEqual(output1, output2, "ShoppingCartWidget Success case");
			},
			
			"ShoppingCartWidget different data unit test case": function () {
				var output1, output2;
			
				var shoppingCartNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var shoppingWidget = new Y.Phresco.ShoppingCartWidget({
					targetNode : shoppingCartNode,
					apiReference : eshopAPI
				});
				var phresco = new Y.Phresco.PhrescoWidget();
				var config = {web:{web:"images/web/"}};
				eshopAPI.set("config", config);
				shoppingcard_data = {productDetail:[{detailImageURL:"product/details/bb_mobile_22.png", name:'BlackBerry Bold 9780', productId : 22, quantity : 1, price: 380, totalPrice:380},{detailImageURL:"product/details/coby_tv_4.png", name:'LED3DTV5586 55" Class 3D LED TV w/ 2 Pairs of 3D Glasses', productId : 4, quantity : 1, price: 1500, totalPrice:1500}]};
				eshopAPI.set("productQty", shoppingcard_data);
				shoppingWidget.render();
				output1 = shoppingWidget.getTargetNode().get('innerHTML');
				
				var url = eshopAPI.get("wsURLWithoutContext");
				var config = eshopAPI._getConfigData();
				var webImage = config.web.web;
				var targetNode = phresco.createElement('<div></div>');
				var h3 = phresco.createElement('<h3> product Checkout</h3> ');
				 var backHref = Y.Node.create('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
					
					h3.appendChild(backHref);
				var productContainer = phresco.createElement('<div class="productcontainer">');
					var shoppingCarth5 = phresco.createElement('<h5> My Shopping Cart</h5>');

					var checkoutcol1Div = phresco.createElement('<div class="checkoutcol1"> ');
						var productsDiv = phresco.createElement('<div class="co_col1position1">Products</div> ');
						checkoutcol1Div.appendChild(productsDiv);
						
					var checkoutcol2Div = phresco.createElement(' <div class="checkoutcol2">');
						var quantityDiv = phresco.createElement('<div class="co_col1position2">Quantity</div> ');
						checkoutcol2Div.appendChild(quantityDiv);
				
					var checkoutcol3Div = phresco.createElement(' <div class="checkoutcol3">');
						var amountDiv = phresco.createElement('<div class="co_col1position2">Total Amount</div> ');
						checkoutcol3Div.appendChild(amountDiv);

					var checkoutcol4 = phresco.createElement(' <div class="checkoutcol4">');
						var removeDiv = phresco.createElement('<div class="co_col1position2">Remove Item</div> ');
						checkoutcol4.appendChild(removeDiv);
	   
				productContainer.appendChild(shoppingCarth5);
				productContainer.appendChild(checkoutcol1Div);
				productContainer.appendChild(checkoutcol2Div);
				productContainer.appendChild(checkoutcol3Div);
				productContainer.appendChild(checkoutcol4);
				
				var productQty = eshopAPI.get("productQty");
					
				if(productQty){	
					var productDetails = productQty.productDetail;
					if(productQty.quantity){
						var quantity = productQty.quantity;
					}
					else { var quantity = 1; }
					
					var totalItem = productQty.totalItem;

					var imageURL = url + '/' + webImage + productDetails.image;
					var detailImageURL = url + '/' + webImage + productDetails.detailImage;
					

					var subTotal = 0;
				   for (var j = 0; j < productDetails.length; j++) {
						var chectoutrow2 = phresco.createElement('<div class="chectoutrow2">');
							var checkoutvaluecol1 = phresco.createElement('<div class="checkoutvaluecol1">');
								var productImageFullDiv = phresco.createElement('<div class="co_col1position1">');
									var productImageDiv = phresco.createElement('<div class="co_product_image">');
										var productImage = phresco.createElement('<img src="'+productDetails[j].detailImageURL+'" width="120" height="120" alt="Apple Mac Laptop">');
										productImageDiv.appendChild(productImage);
									var productDesc = phresco.createElement('<div class="co_product_description">'+productDetails[j].name+'</div>');
									productImageFullDiv.appendChild(productImageDiv);
									productImageFullDiv.appendChild(productDesc);
									
							checkoutvaluecol1.appendChild(productImageFullDiv);
									
							
							var checkoutvaluecol2 = phresco.createElement('<div class="checkoutvaluecol2">');
								var productQuantityDiv = phresco.createElement('<div class="co_col1position2">');
									var co_inputDiv = phresco.createElement('<div class="co_input">');
										var co_inputBox = Y.Node.create('<input type="text" value="'+productDetails[j].quantity+'" name="productQuantity_'+productDetails[j].productId+'" id="productQuantity_'+productDetails[j].productId+'" size="3" maxlength="2" style="width:40px" />');
										
									co_inputDiv.appendChild(co_inputBox);
									productQuantityDiv.appendChild(co_inputDiv);
								
								checkoutvaluecol2.appendChild(productQuantityDiv);
							
							var checkoutvaluecol3 = phresco.createElement('<div class="checkoutvaluecol3">');
								var productAmount = phresco.createElement('<div class="co_col1position2"><div class="co_input2"><span id="totalAmount_'+productDetails[j].productId+'">'+productDetails[j].totalPrice+'</span></div></div>');
								checkoutvaluecol3.appendChild(productAmount);
							
							var checkoutvaluecol4 = phresco.createElement('<div class="checkoutvaluecol4">');
								var removeButtonDiv = phresco.createElement('<div class="co_col1position2">');
									var removeButton = Y.Node.create('<input type="submit" value="Remove" class="remove_buttonstyle"/>');
									

									removeButtonDiv.appendChild(removeButton);
							checkoutvaluecol4.appendChild(removeButton);
						
							chectoutrow2.appendChild(checkoutvaluecol1);
							chectoutrow2.appendChild(checkoutvaluecol2);
							chectoutrow2.appendChild(checkoutvaluecol3);
							chectoutrow2.appendChild(checkoutvaluecol4);
							
							productContainer.appendChild(chectoutrow2);
							
							subTotal = Number(subTotal) + Number(productDetails[j].totalPrice);
							
					  }
					
					var clearDiv =  phresco.createElement('<div class="clear"></div>');
					var subTotalHeightDiv =  phresco.createElement('<div class="subTotalHeight"></div>');
					var subTotalDiv = phresco.createElement('<div class="subtotal_pos">SubTotal: $<span id="subToal">'+subTotal.toFixed(2)+'</span></div>');
					var clearDiv2 = phresco.createElement('<div class="clear"></div>');
					var cartButtons = phresco.createElement('<div class="checkout_buttonposition2">');
							
					var updateCartButton = Y.Node.create('<input type="submit" value="Update Cart" class="checkout_buttonstyle" />');

					var checkOutButton = Y.Node.create('<input type="submit" value="Check Out" class="checkout_buttonstyle"/>');

					cartButtons.appendChild(updateCartButton);
					if(totalItem > 0){
						cartButtons.appendChild(checkOutButton);
					}
					productContainer.appendChild(clearDiv);
					productContainer.appendChild(subTotalHeightDiv);
					//productContainer.appendChild(subTotalDiv);
					productContainer.appendChild(clearDiv2);
					productContainer.appendChild(cartButtons);
				}

				targetNode.appendChild(h3);
				targetNode.appendChild(productContainer);
				output2 = targetNode.get('innerHTML');
				Y.Assert.areNotEqual(output1, output2, "ShoppingCartWidget Failure case");
			},
			"ShoppingCartWidget different length data unit test case": function () {
				var output1, output2;
			
				var shoppingCartNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var shoppingWidget = new Y.Phresco.ShoppingCartWidget({
					targetNode : shoppingCartNode,
					apiReference : eshopAPI
				});
				var phresco = new Y.Phresco.PhrescoWidget();
				var config = {web:{web:"images/web/"}};
				eshopAPI.set("config", config);
				shoppingcard_data = {productDetail:[{detailImageURL:"product/details/bb_mobile_22.png", name:'BlackBerry Bold 9780', productId : 22, quantity : 1, price: 380, totalPrice:380}]};
				eshopAPI.set("productQty", shoppingcard_data);
				shoppingWidget.render();
				output1 = shoppingWidget.getTargetNode().get('innerHTML');
				
				var url = eshopAPI.get("wsURLWithoutContext");
				var config = eshopAPI._getConfigData();
				var webImage = config.web.web;
				var targetNode = phresco.createElement('<div></div>');
				var h3 = phresco.createElement('<h3> product Checkout</h3> ');
				 var backHref = Y.Node.create('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
					
					h3.appendChild(backHref);
				var productContainer = phresco.createElement('<div class="productcontainer">');
					var shoppingCarth5 = phresco.createElement('<h5> My Shopping Cart</h5>');

					var checkoutcol1Div = phresco.createElement('<div class="checkoutcol1"> ');
						var productsDiv = phresco.createElement('<div class="co_col1position1">Products</div> ');
						checkoutcol1Div.appendChild(productsDiv);
						
					var checkoutcol2Div = phresco.createElement(' <div class="checkoutcol2">');
						var quantityDiv = phresco.createElement('<div class="co_col1position2">Quantity</div> ');
						checkoutcol2Div.appendChild(quantityDiv);
				
					var checkoutcol3Div = phresco.createElement(' <div class="checkoutcol3">');
						var amountDiv = phresco.createElement('<div class="co_col1position2">Total Amount</div> ');
						checkoutcol3Div.appendChild(amountDiv);

					var checkoutcol4 = phresco.createElement(' <div class="checkoutcol4">');
						var removeDiv = phresco.createElement('<div class="co_col1position2">Remove Item</div> ');
						checkoutcol4.appendChild(removeDiv);
	   
				productContainer.appendChild(shoppingCarth5);
				productContainer.appendChild(checkoutcol1Div);
				productContainer.appendChild(checkoutcol2Div);
				productContainer.appendChild(checkoutcol3Div);
				productContainer.appendChild(checkoutcol4);
				
				var productQty = eshopAPI.get("productQty");
					
				if(productQty){	
					var productDetails = productQty.productDetail;
					if(productQty.quantity){
						var quantity = productQty.quantity;
					}
					else { var quantity = 1; }
					
					var totalItem = productQty.totalItem;

					var imageURL = url + '/' + webImage + productDetails.image;
					var detailImageURL = url + '/' + webImage + productDetails.detailImage;
					

					var subTotal = 0;
				   for (var j = 0; j < productDetails.length; j++) {
						var chectoutrow2 = phresco.createElement('<div class="chectoutrow2">');
							var checkoutvaluecol1 = phresco.createElement('<div class="checkoutvaluecol1">');
								var productImageFullDiv = phresco.createElement('<div class="co_col1position1">');
									var productImageDiv = phresco.createElement('<div class="co_product_image">');
										var productImage = phresco.createElement('<img src="'+productDetails[j].detailImageURL+'" width="120" height="120" alt="Apple Mac Laptop">');
										productImageDiv.appendChild(productImage);
									var productDesc = phresco.createElement('<div class="co_product_description">'+productDetails[j].name+'</div>');
									productImageFullDiv.appendChild(productImageDiv);
									productImageFullDiv.appendChild(productDesc);
									
							checkoutvaluecol1.appendChild(productImageFullDiv);
									
							
							var checkoutvaluecol2 = phresco.createElement('<div class="checkoutvaluecol2">');
								var productQuantityDiv = phresco.createElement('<div class="co_col1position2">');
									var co_inputDiv = phresco.createElement('<div class="co_input">');
										var co_inputBox = Y.Node.create('<input type="text" value="'+productDetails[j].quantity+'" name="productQuantity_'+productDetails[j].productId+'" id="productQuantity_'+productDetails[j].productId+'" size="3" maxlength="2" style="width:40px" />');
										
									co_inputDiv.appendChild(co_inputBox);
									productQuantityDiv.appendChild(co_inputDiv);
								
								checkoutvaluecol2.appendChild(productQuantityDiv);
							
							var checkoutvaluecol3 = phresco.createElement('<div class="checkoutvaluecol3">');
								var productAmount = phresco.createElement('<div class="co_col1position2"><div class="co_input2"><span id="totalAmount_'+productDetails[j].productId+'">'+productDetails[j].totalPrice+'</span></div></div>');
								checkoutvaluecol3.appendChild(productAmount);
							
							var checkoutvaluecol4 = phresco.createElement('<div class="checkoutvaluecol4">');
								var removeButtonDiv = phresco.createElement('<div class="co_col1position2">');
									var removeButton = Y.Node.create('<input type="submit" value="Remove" class="remove_buttonstyle"/>');
									

									removeButtonDiv.appendChild(removeButton);
							checkoutvaluecol4.appendChild(removeButton);
						
							chectoutrow2.appendChild(checkoutvaluecol1);
							chectoutrow2.appendChild(checkoutvaluecol2);
							chectoutrow2.appendChild(checkoutvaluecol3);
							chectoutrow2.appendChild(checkoutvaluecol4);
							
							productContainer.appendChild(chectoutrow2);
							
							subTotal = Number(subTotal) + Number(productDetails[j].totalPrice);
							
					  }
					
					var clearDiv =  phresco.createElement('<div class="clear"></div>');
					var subTotalHeightDiv =  phresco.createElement('<div class="subTotalHeight"></div>');
					var subTotalDiv = phresco.createElement('<div class="subtotal_pos">SubTotal: $<span id="subToal">'+subTotal.toFixed(2)+'</span></div>');
					var clearDiv2 = phresco.createElement('<div class="clear"></div>');
					var cartButtons = phresco.createElement('<div class="checkout_buttonposition2">');
							
					var updateCartButton = Y.Node.create('<input type="submit" value="Update Cart" class="checkout_buttonstyle" />');

					var checkOutButton = Y.Node.create('<input type="submit" value="Check Out" class="checkout_buttonstyle"/>');

					cartButtons.appendChild(updateCartButton);
					if(totalItem > 0){
						cartButtons.appendChild(checkOutButton);
					}
					productContainer.appendChild(clearDiv);
					productContainer.appendChild(subTotalHeightDiv);
					productContainer.appendChild(subTotalDiv);
					productContainer.appendChild(clearDiv2);
					productContainer.appendChild(cartButtons);
				}

				targetNode.appendChild(h3);
				targetNode.appendChild(productContainer);
				output2 = targetNode.get('innerHTML');
				Y.Assert.areEqual(output1, output2, "ShoppingCartWidget Success case");
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});