YUI.add('productsDetailsWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("ProductsDetailsWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var configuration = undefined;
		var testCase = new Y.Test.Case({

			name: "ProductsDetailsWidgetTest",
			"ProductsDetailsWidgetTest with same data": function () {
				var output1, output2, jsonData;
				wsConfig.getWsConfig(function(response){
						configuration = response;
				});
				
				this.wait(function(){
					var productDetailsNode = Y.Node.create('<div></div>');
					var eshopAPI = new Y.Phresco.EShopAPI(configuration);
					var productDetailsWidget = new Y.Phresco.ProductDetailsWidget({
						targetNode : productDetailsNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var productId =1;
					var config = {web:{web:"images/web/"}};
					eshopAPI.set("config", config);
					eshopAPI.set("userId", 0);
				eshopAPI.getProductDetails(productDetailsWidget, productId, productDetailsWidget, function(data){
				eshopAPI.getProductReviews(data,productDetailsWidget, productId, productDetailsWidget, function(jsonData){
				
					//jsonData = eshopAPI.get("resultData");
					productDetailsWidget.createContent(productDetailsNode, jsonData)
					output1 = productDetailsWidget.getTargetNode().get('innerHTML');	
					if (jsonData !== null) {
						var url = eshopAPI.wsURLWithoutContext;
						var config = eshopAPI._getConfigData();
						
						var webImage = config.web.web;
						var productDetails = jsonData.productDetailsData.product[0];
						var productReviewData = jsonData.reviewData;
						var productReviews = productReviewData.review.comments;
						
						var imageURL = url + '/' + webImage + productDetails.image;
						var detailImageURL = url + '/' + webImage + productDetails.detailImage;
						var youSave = productDetails.listPrice - productDetails.sellPrice;
						var targetNode = phresco.createElement('<div></div>');
						var h3 = phresco.createElement('<h3>Product Details</h3> ');
						var pName = phresco.createElement('<h4>' + productDetails.name + '</h4>');

						var backHref = Y.Node.create('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
						h3.appendChild(backHref);
						// Product Container holds all the elements
						var productContainer = phresco.createElement('<div class="productcontainer">');

						var productImageHolder = phresco.createElement('<div class="productimageholder">');
						var productname = productDetails.name;
						productname = productname.replace('"', " ");
						var imageHolderHref = phresco.createElement('<a href="'+ detailImageURL +'" class="myvalue"  title="'+ productname +'"><img src="'+ imageURL +'" alt="" width="200" height="200" ></a>');
						productImageHolder.appendChild(imageHolderHref);

						var shadow = phresco.createElement('<div class="shadow">');
						var shadowImage = phresco.createElement('<img src="images/eshop/dropshadow2.png" width="194" height="24" alt="shadow">');
						var zoomHint = phresco.createElement('<div class="zoomhint"> * Roll over the image to zoom in</div>');
						shadow.appendChild(shadowImage);
						shadow.appendChild(zoomHint);


						var productDetailInfo = phresco.createElement('<div class="productdetail_info">');
						var review = phresco.createElement('<div class="review">');
						var ratingDone = false;
						for (var i = 0; i < 5; i++) {
							var starImage = 'red_star.png';
							if (productDetails.rating === i) {
								ratingDone = true;
							}
							if (ratingDone === true) {
								starImage = 'white_star.png';
							}
							var star = phresco.createElement('<span ><img src="images/eshop/' + starImage + ' " width="16" height="16" alt="Red star"></span>');
							review.appendChild(star);
						}
					   
						var reviewLink = phresco.createElement('<span class="writeriew"><a href="#readreview">( Reviews )</a></span>');
						
						review.appendChild(reviewLink);


						var productDetailPrice = phresco.createElement('<div class="productdetail_price">');
						var listPrice = phresco.createElement('<div><span class="st">List price :</span><span class="st1">$'+productDetails.listPrice+'</span></div>');
						var sellPrice = phresco.createElement('<div><span class="st2">Sell at :</span><span class="st2">$'+productDetails.sellPrice+'</span></div>');
						var youSave = phresco.createElement('<div><span class="st4">You save :</span><span class="st3">$'+youSave.toFixed(2)+'</span></div>');
						productDetailPrice.appendChild(listPrice);
						productDetailPrice.appendChild(sellPrice);
						productDetailPrice.appendChild(youSave);

						var stockAvailablity = phresco.createElement('<div class="stockavailablity">');
						var availability = phresco.createElement('<div class="row1"><span class="st">Availability:</span><span class="st">In Stock</span></div>');
						var quantity = phresco.createElement('<div class="row1"><span class="st">Quantity:</span><span class="st1"><input id="input_text" name="input_text" type="text" value="1" placeholder="1" size="1"></span></div>');
						var addToCart = Y.Node.create('<div class="buttonactions"><a href="#"><img src="images/eshop/addtocart_btn_greycolor.png" width="105" height="36" alt="add to cart"></a></div>');
						
						addToCart.obj = phresco;
						var data = {};
						data.productId = productDetails.id;
						data.name = productDetails.name;
						data.quantity = 1;
						data.price = productDetails.sellPrice;
						data.imageURL = imageURL;
						data.detailImageURL = detailImageURL;
						data.totalPrice = (data.quantity * productDetails.sellPrice);
						addToCart.data = data;
						Y.on('click' , phresco.showShoppingCart , addToCart);
						stockAvailablity.appendChild(availability);
						stockAvailablity.appendChild(quantity);
						stockAvailablity.appendChild(addToCart);
						
						productDetailInfo.appendChild(review);
						productDetailInfo.appendChild(productDetailPrice);
						productDetailInfo.appendChild(stockAvailablity);


						var divdesc = phresco.createElement('<div>');
						var description = phresco.createElement('<h4 class="descrip">Description</h4>');
						var paragraph1 = phresco.createElement('<p>'+productDetails.description+'</p><br>');
						divdesc.appendChild(description);
						divdesc.appendChild(paragraph1);
					  
						var tabs_wrapper = phresco.createElement('<div id="tabs_wrapper_div">');
						
						var readreviewLink = Y.Node.create('<a href="#readreviews" class="tab_link tab_link_selected" title="#readreview">Read reviews</a>');
						readreviewLink.obj = phresco;
						var data = {};
						data.openTabId = 'readreview_Div';
						data.closeTabId = 'writeareview_Div';
						readreviewLink.data = data;
						Y.on('click' , phresco.openTab , readreviewLink);

						var writereviewLink = Y.Node.create('<a href="#writeareviews" class="tab_link" title="#writeareview">write a review</a>');
						writereviewLink.obj = phresco;
						var data = {};
						data.openTabId = 'writeareview_Div';
						data.closeTabId = 'readreview_Div';
						writereviewLink.data = data;
						var clearDiv = phresco.createElement('<div class="clear"></div>');
						
						var tabactiveDiv = phresco.createElement('<div class="tab_text" id="readreview_Div" style="display:block;" >'); //id="readreview"

						for (var i = 0; i < productReviews.length; i++) {
							var review = productReviews[i];
							var  review1 = phresco.createElement('<p> '+review.user +' : '+ review.comment+' </p><br>');
							tabactiveDiv.appendChild(review1);
						}

						var writeareviewDiv = phresco.createElement('<div class="tab_text" id="writeareview_Div" style="display:none;" >'); //id="writeareview"
							var reviewForm = phresco.createElement('<form id="contact" method="post" action="form.html">');
							var reviewFieldset = phresco.createElement('<fieldset>');

							var reviewRating = phresco.createElement('<label for="name"><span>Rate phresco</span></label>');
							var ratingStarSpan = phresco.createElement('<span class="ratingStarSpan"></span>');
							
							for (var i = 1; i <= 5; i++) {
								var starImage = 'white_star.png';
								var star = Y.Node.create('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/white_star.png" width="16" height="16" title="' + i + '"></a>');
								ratingStarSpan.appendChild(star);
							}
							var starValueBox = phresco.createElement('<input type="hidden" name="starValue" id="starValue" size="2">');
							var productId = phresco.createElement('<input type="hidden" name="productId" id="productId" value="'+productDetails.id+'">');
							reviewRating.appendChild(productId);
							reviewRating.appendChild(ratingStarSpan);
							reviewRating.appendChild(starValueBox);
							
							var reviewComment = phresco.createElement('<label for="comments"><span>Comments</span><textarea name="comments" id="comments" placeholder="Your comments"cols="5" rows="6" scale="no"></textarea></label>');
							reviewFieldset.appendChild(reviewRating);
							reviewFieldset.appendChild(reviewComment);
							
							var reviewSubmit = phresco.createElement('<div class="postreviewbutton">');
							var reviewSubmitButton = Y.Node.create('<input type="button" value="Submit" class="buttonstyle"/>');
							reviewSubmitButton.obj = phresco;
							reviewSubmitButton.data = productDetails.id;
							
							reviewSubmit.appendChild(reviewSubmitButton);
							
							reviewForm.appendChild(reviewFieldset);
							reviewForm.appendChild(reviewSubmit);
						
						var loginAlertForm = phresco.createElement('<label for="name"><span>Please Login to post review</span></label>');
						var userId = 0;
						if(userId ){
							writeareviewDiv.appendChild(reviewForm);
						}else{
							writeareviewDiv.appendChild(loginAlertForm);
						}

						tabs_wrapper.appendChild(readreviewLink);
						tabs_wrapper.appendChild(writereviewLink);
						tabs_wrapper.appendChild(clearDiv);
						tabs_wrapper.appendChild(tabactiveDiv);
						tabs_wrapper.appendChild(writeareviewDiv);
						
						productContainer.appendChild(productImageHolder);
						productContainer.appendChild(shadow);
						productContainer.appendChild(productDetailInfo);
						productContainer.appendChild(divdesc);
						productContainer.appendChild(tabs_wrapper);

						targetNode.appendChild(h3);
						targetNode.appendChild(pName);
						targetNode.appendChild(productContainer);
					}
					
					output2 = targetNode.get('innerHTML');
					
					Y.Assert.areEqual(output1, output2, "ProductDetailsWidget success case");
					
					});
				});	
					
				}, 1000);
				
			} ,
			
			"ProductsDetailsWidgetTest different same data": function () {
				var output1, output2, jsonData;
			
				var productDetailsNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
						configuration = response;
				});
				
				this.wait(function(){
					var eshopAPI = new Y.Phresco.EShopAPI(configuration);
					var productDetailsWidget = new Y.Phresco.ProductDetailsWidget({
						targetNode : productDetailsNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var productId =1;
					var config = {web:{web:"images/web/"}};
					eshopAPI.set("config", config);
					eshopAPI.set("userId", 0);
				eshopAPI.getProductDetails(productDetailsWidget, productId, productDetailsWidget, function(data){
				eshopAPI.getProductReviews(data,productDetailsWidget, productId, productDetailsWidget, function(jsonData){
					productDetailsWidget.createContent(productDetailsNode, jsonData)
					output1 = productDetailsWidget.getTargetNode().get('innerHTML');	
					if (jsonData !== null) {
						var url = eshopAPI.wsURLWithoutContext;
						var config = eshopAPI._getConfigData();
						
						var webImage = config.web.web;
						var productDetails = jsonData.productDetailsData.product[0];
						var productReviewData = jsonData.reviewData;
						var productReviews = productReviewData.review.comments;
						
						var imageURL = url + '/' + webImage + productDetails.image;
						var detailImageURL = url + '/' + webImage + productDetails.detailImage;
						var youSave = productDetails.listPrice - productDetails.sellPrice;
						var targetNode = phresco.createElement('<div></div>');
						var h3 = phresco.createElement('<h3>Product Details</h3> ');
						var pName = phresco.createElement('<h4>' + productDetails.name + '</h4>');

						var backHref = Y.Node.create('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
						h3.appendChild(backHref);
						// Product Container holds all the elements
						var productContainer = phresco.createElement('<div class="productcontainer">');

						var productImageHolder = phresco.createElement('<div class="productimageholder">');
						var productname = productDetails.name;
						productname = productname.replace('"', " ");
						var imageHolderHref = phresco.createElement('<a href="'+ detailImageURL +'" class="myvalue"  title="'+ productname +'"><img src="'+ imageURL +'" alt="" width="200" height="200" ></a>');
						productImageHolder.appendChild(imageHolderHref);

						var shadow = phresco.createElement('<div class="shadow">');
						var shadowImage = phresco.createElement('<img src="images/eshop/dropshadow2.png" width="194" height="24" alt="shadow">');
						var zoomHint = phresco.createElement('<div class="zoomhint"> * Roll over the image to zoom in</div>');
						shadow.appendChild(shadowImage);
						shadow.appendChild(zoomHint);


						var productDetailInfo = phresco.createElement('<div class="productdetail_info">');
						var review = phresco.createElement('<div class="review">');
						var ratingDone = false;
						for (var i = 0; i < 5; i++) {
							var starImage = 'red_star.png';
							if (productDetails.rating === i) {
								ratingDone = true;
							}
							if (ratingDone === true) {
								starImage = 'white_star.png';
							}
							var star = phresco.createElement('<span ><img src="images/eshop/' + starImage + ' " width="16" height="16" alt="Red star"></span>');
							review.appendChild(star);
						}
					   
						var reviewLink = phresco.createElement('<span class="writeriew"><a href="#readreview">( Reviews )</a></span>');
						
						review.appendChild(reviewLink);


						var productDetailPrice = phresco.createElement('<div class="productdetail_price">');
						var listPrice = phresco.createElement('<div><span class="st">List price :</span><span class="st1">$'+productDetails.listPrice+'</span></div>');
						var sellPrice = phresco.createElement('<div><span class="st2">Sell at :</span><span class="st2">$'+productDetails.sellPrice+'</span></div>');
						var youSave = phresco.createElement('<div><span class="st4">You save :</span><span class="st3">$'+youSave.toFixed(2)+'</span></div>');
						productDetailPrice.appendChild(listPrice);
						productDetailPrice.appendChild(sellPrice);
						productDetailPrice.appendChild(youSave);

						var stockAvailablity = phresco.createElement('<div class="stockavailablity">');
						var availability = phresco.createElement('<div class="row1"><span class="st">Availability:</span><span class="st">In Stock</span></div>');
						var quantity = phresco.createElement('<div class="row1"><span class="st">Quantity:</span><span class="st1"><input id="input_text" name="input_text" type="text" value="1" placeholder="1" size="1"></span></div>');
						var addToCart = Y.Node.create('<div class="buttonactions"><a href="#"><img src="images/eshop/addtocart_btn_greycolor.png" width="105" height="36" alt="add to cart"></a></div>');
						
						addToCart.obj = phresco;
						var data = {};
						data.productId = productDetails.id;
						data.name = productDetails.name;
						data.quantity = 1;
						data.price = productDetails.sellPrice;
						data.imageURL = imageURL;
						data.detailImageURL = detailImageURL;
						data.totalPrice = (data.quantity * productDetails.sellPrice);
						addToCart.data = data;
						Y.on('click' , phresco.showShoppingCart , addToCart);
						stockAvailablity.appendChild(availability);
						stockAvailablity.appendChild(quantity);
						stockAvailablity.appendChild(addToCart);
						
						productDetailInfo.appendChild(review);
						productDetailInfo.appendChild(productDetailPrice);
						productDetailInfo.appendChild(stockAvailablity);


						var divdesc = phresco.createElement('<div>');
						var description = phresco.createElement('<h4 class="descrip">Description</h4>');
						var paragraph1 = phresco.createElement('<p>'+productDetails.description+'</p><br>');
						divdesc.appendChild(description);
						divdesc.appendChild(paragraph1);
					  
						var tabs_wrapper = phresco.createElement('<div id="tabs_wrapper_div">');
						
						var readreviewLink = Y.Node.create('<a href="#readreviews" class="tab_link tab_link_selected" title="#readreview">Read reviews</a>');
						readreviewLink.obj = phresco;
						var data = {};
						data.openTabId = 'readreview_Div';
						data.closeTabId = 'writeareview_Div';
						readreviewLink.data = data;
						Y.on('click' , phresco.openTab , readreviewLink);

						var writereviewLink = Y.Node.create('<a href="#writeareviews" class="tab_link" title="#writeareview">write a review</a>');
						writereviewLink.obj = phresco;
						var data = {};
						data.openTabId = 'writeareview_Div';
						data.closeTabId = 'readreview_Div';
						writereviewLink.data = data;
						var clearDiv = phresco.createElement('<div class="clear"></div>');
						
						var tabactiveDiv = phresco.createElement('<div class="tab_text" id="readreview_Div" style="display:block;" >'); //id="readreview"

						for (var i = 0; i < productReviews.length; i++) {
							var review = productReviews[i];
							var  review1 = phresco.createElement('<p> '+review.user +' : '+ review.comment+' </p><br>');
							tabactiveDiv.appendChild(review1);
						}

						var writeareviewDiv = phresco.createElement('<div class="tab_text" id="writeareview_Div" style="display:none;" >'); //id="writeareview"
							var reviewForm = phresco.createElement('<form id="contact" method="post" action="form.html">');
							var reviewFieldset = phresco.createElement('<fieldset>');

							var reviewRating = phresco.createElement('<label for="name"><span>Rate phresco</span></label>');
							var ratingStarSpan = phresco.createElement('<span class="ratingStarSpan"></span>');
							
							for (var i = 1; i <= 5; i++) {
								var starImage = 'white_star.png';
								var star = Y.Node.create('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/white_star.png" width="16" height="16" title="' + i + '"></a>');
								ratingStarSpan.appendChild(star);
							}
							var starValueBox = phresco.createElement('<input type="hidden" name="starValue" id="starValue" size="2">');
							var productId = phresco.createElement('<input type="hidden" name="productId" id="productId" value="'+productDetails.id+'">');
							reviewRating.appendChild(productId);
							reviewRating.appendChild(ratingStarSpan);
							reviewRating.appendChild(starValueBox);
							
							var reviewComment = phresco.createElement('<label for="comments"><span>Comments</span><textarea name="comments" id="comments" placeholder="Your comments"cols="5" rows="6" scale="no"></textarea></label>');
							reviewFieldset.appendChild(reviewRating);
							reviewFieldset.appendChild(reviewComment);
							
							var reviewSubmit = phresco.createElement('<div class="postreviewbutton">');
							var reviewSubmitButton = Y.Node.create('<input type="button" value="Submit" class="buttonstyle"/>');
							reviewSubmitButton.obj = phresco;
							reviewSubmitButton.data = productDetails.id;
							
							reviewSubmit.appendChild(reviewSubmitButton);
							
							reviewForm.appendChild(reviewFieldset);
							reviewForm.appendChild(reviewSubmit);
						
						var loginAlertForm = phresco.createElement('<label for="name"><span>Please Login to post review</span></label>');
						var userId = 0;
						if(userId ){
							writeareviewDiv.appendChild(reviewForm);
						}else{
							writeareviewDiv.appendChild(loginAlertForm);
						}

						tabs_wrapper.appendChild(readreviewLink);
						tabs_wrapper.appendChild(writereviewLink);
						tabs_wrapper.appendChild(clearDiv);
						tabs_wrapper.appendChild(tabactiveDiv);
						//tabs_wrapper.appendChild(writeareviewDiv);
						
						productContainer.appendChild(productImageHolder);
						productContainer.appendChild(shadow);
						productContainer.appendChild(productDetailInfo);
						productContainer.appendChild(divdesc);
						productContainer.appendChild(tabs_wrapper);

						targetNode.appendChild(h3);
						targetNode.appendChild(pName);
						targetNode.appendChild(productContainer);
					}
					
					output2 = targetNode.get('innerHTML');
					
					Y.Assert.areNotEqual(output1, output2, "ProductDetailsWidget success case");
					});
				});	
			}, 1000);
				
			},
			"ProductsDetailsWidgetTest different userid same data": function () {
				var output1, output2, jsonData;
			
				var productDetailsNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
						configuration = response;
				});
				
				this.wait(function(){
					var eshopAPI = new Y.Phresco.EShopAPI(configuration);
					var productDetailsWidget = new Y.Phresco.ProductDetailsWidget({
						targetNode : productDetailsNode,
						apiReference : eshopAPI
					});
					var phresco = new Y.Phresco.PhrescoWidget();
					var productId =1;
					var config = {web:{web:"images/web/"}};
					eshopAPI.set("config", config);
					eshopAPI.set("userId", 1);
				eshopAPI.getProductDetails(productDetailsWidget, productId, productDetailsWidget, function(data){
				eshopAPI.getProductReviews(data,productDetailsWidget, productId, productDetailsWidget, function(jsonData){
					jsonData = eshopAPI.get("resultData");
					productDetailsWidget.createContent(productDetailsNode, jsonData)
					output1 = productDetailsWidget.getTargetNode().get('innerHTML');	
					if (jsonData !== null) {
						var url = eshopAPI.wsURLWithoutContext;
						var config = eshopAPI._getConfigData();
						
						var webImage = config.web.web;
						var productDetails = jsonData.productDetailsData.product[0];
						var productReviewData = jsonData.reviewData;
						var productReviews = productReviewData.review.comments;
						
						var imageURL = url + '/' + webImage + productDetails.image;
						var detailImageURL = url + '/' + webImage + productDetails.detailImage;
						var youSave = productDetails.listPrice - productDetails.sellPrice;
						var targetNode = phresco.createElement('<div></div>');
						var h3 = phresco.createElement('<h3>Product Details</h3> ');
						var pName = phresco.createElement('<h4>' + productDetails.name + '</h4>');

						var backHref = Y.Node.create('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
						h3.appendChild(backHref);
						// Product Container holds all the elements
						var productContainer = phresco.createElement('<div class="productcontainer">');

						var productImageHolder = phresco.createElement('<div class="productimageholder">');
						var productname = productDetails.name;
						productname = productname.replace('"', " ");
						var imageHolderHref = phresco.createElement('<a href="'+ detailImageURL +'" class="myvalue"  title="'+ productname +'"><img src="'+ imageURL +'" alt="" width="200" height="200" ></a>');
						productImageHolder.appendChild(imageHolderHref);

						var shadow = phresco.createElement('<div class="shadow">');
						var shadowImage = phresco.createElement('<img src="images/eshop/dropshadow2.png" width="194" height="24" alt="shadow">');
						var zoomHint = phresco.createElement('<div class="zoomhint"> * Roll over the image to zoom in</div>');
						shadow.appendChild(shadowImage);
						shadow.appendChild(zoomHint);


						var productDetailInfo = phresco.createElement('<div class="productdetail_info">');
						var review = phresco.createElement('<div class="review">');
						var ratingDone = false;
						for (var i = 0; i < 5; i++) {
							var starImage = 'red_star.png';
							if (productDetails.rating === i) {
								ratingDone = true;
							}
							if (ratingDone === true) {
								starImage = 'white_star.png';
							}
							var star = phresco.createElement('<span ><img src="images/eshop/' + starImage + ' " width="16" height="16" alt="Red star"></span>');
							review.appendChild(star);
						}
					   
						var reviewLink = phresco.createElement('<span class="writeriew"><a href="#readreview">( Reviews )</a></span>');
						
						review.appendChild(reviewLink);


						var productDetailPrice = phresco.createElement('<div class="productdetail_price">');
						var listPrice = phresco.createElement('<div><span class="st">List price :</span><span class="st1">$'+productDetails.listPrice+'</span></div>');
						var sellPrice = phresco.createElement('<div><span class="st2">Sell at :</span><span class="st2">$'+productDetails.sellPrice+'</span></div>');
						var youSave = phresco.createElement('<div><span class="st4">You save :</span><span class="st3">$'+youSave.toFixed(2)+'</span></div>');
						productDetailPrice.appendChild(listPrice);
						productDetailPrice.appendChild(sellPrice);
						productDetailPrice.appendChild(youSave);

						var stockAvailablity = phresco.createElement('<div class="stockavailablity">');
						var availability = phresco.createElement('<div class="row1"><span class="st">Availability:</span><span class="st">In Stock</span></div>');
						var quantity = phresco.createElement('<div class="row1"><span class="st">Quantity:</span><span class="st1"><input id="input_text" name="input_text" type="text" value="1" placeholder="1" size="1"></span></div>');
						var addToCart = Y.Node.create('<div class="buttonactions"><a href="#"><img src="images/eshop/addtocart_btn_greycolor.png" width="105" height="36" alt="add to cart"></a></div>');
						
						addToCart.obj = phresco;
						var data = {};
						data.productId = productDetails.id;
						data.name = productDetails.name;
						data.quantity = 1;
						data.price = productDetails.sellPrice;
						data.imageURL = imageURL;
						data.detailImageURL = detailImageURL;
						data.totalPrice = (data.quantity * productDetails.sellPrice);
						addToCart.data = data;
						Y.on('click' , phresco.showShoppingCart , addToCart);
						stockAvailablity.appendChild(availability);
						stockAvailablity.appendChild(quantity);
						stockAvailablity.appendChild(addToCart);
						
						productDetailInfo.appendChild(review);
						productDetailInfo.appendChild(productDetailPrice);
						productDetailInfo.appendChild(stockAvailablity);


						var divdesc = phresco.createElement('<div>');
						var description = phresco.createElement('<h4 class="descrip">Description</h4>');
						var paragraph1 = phresco.createElement('<p>'+productDetails.description+'</p><br>');
						divdesc.appendChild(description);
						divdesc.appendChild(paragraph1);
					  
						var tabs_wrapper = phresco.createElement('<div id="tabs_wrapper_div">');
						
						var readreviewLink = Y.Node.create('<a href="#readreviews" class="tab_link tab_link_selected" title="#readreview">Read reviews</a>');
						readreviewLink.obj = phresco;
						var data = {};
						data.openTabId = 'readreview_Div';
						data.closeTabId = 'writeareview_Div';
						readreviewLink.data = data;
						Y.on('click' , phresco.openTab , readreviewLink);

						var writereviewLink = Y.Node.create('<a href="#writeareviews" class="tab_link" title="#writeareview">write a review</a>');
						writereviewLink.obj = phresco;
						var data = {};
						data.openTabId = 'writeareview_Div';
						data.closeTabId = 'readreview_Div';
						writereviewLink.data = data;
						var clearDiv = phresco.createElement('<div class="clear"></div>');
						
						var tabactiveDiv = phresco.createElement('<div class="tab_text" id="readreview_Div" style="display:block;" >'); //id="readreview"

						for (var i = 0; i < productReviews.length; i++) {
							var review = productReviews[i];
							var  review1 = phresco.createElement('<p> '+review.user +' : '+ review.comment+' </p><br>');
							tabactiveDiv.appendChild(review1);
						}

						var writeareviewDiv = phresco.createElement('<div class="tab_text" id="writeareview_Div" style="display:none;" >'); //id="writeareview"
							var reviewForm = phresco.createElement('<form id="contact" method="post" action="form.html">');
							var reviewFieldset = phresco.createElement('<fieldset>');

							var reviewRating = phresco.createElement('<label for="name"><span>Rate phresco</span></label>');
							var ratingStarSpan = phresco.createElement('<span class="ratingStarSpan"></span>');
							
							for (var i = 1; i <= 5; i++) {
								var starImage = 'white_star.png';
								var star = Y.Node.create('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/white_star.png" width="16" height="16" title="' + i + '"></a>');
								ratingStarSpan.appendChild(star);
							}
							var starValueBox = phresco.createElement('<input type="hidden" name="starValue" id="starValue" size="2">');
							var productId = phresco.createElement('<input type="hidden" name="productId" id="productId" value="'+productDetails.id+'">');
							reviewRating.appendChild(productId);
							reviewRating.appendChild(ratingStarSpan);
							reviewRating.appendChild(starValueBox);
							
							var reviewComment = phresco.createElement('<label for="comments"><span>Comments</span><textarea name="comments" id="comments" placeholder="Your comments"cols="5" rows="6" scale="no"></textarea></label>');
							reviewFieldset.appendChild(reviewRating);
							reviewFieldset.appendChild(reviewComment);
							
							var reviewSubmit = phresco.createElement('<div class="postreviewbutton">');
							var reviewSubmitButton = Y.Node.create('<input type="button" value="Submit" class="buttonstyle"/>');
							reviewSubmitButton.obj = phresco;
							reviewSubmitButton.data = productDetails.id;
							
							reviewSubmit.appendChild(reviewSubmitButton);
							
							reviewForm.appendChild(reviewFieldset);
							reviewForm.appendChild(reviewSubmit);
						
						var loginAlertForm = phresco.createElement('<label for="name"><span>Please Login to post review</span></label>');
						var userId = 1;
						if(userId ){
							writeareviewDiv.appendChild(reviewForm);
						}else{
							writeareviewDiv.appendChild(loginAlertForm);
						}

						tabs_wrapper.appendChild(readreviewLink);
						tabs_wrapper.appendChild(writereviewLink);
						tabs_wrapper.appendChild(clearDiv);
						tabs_wrapper.appendChild(tabactiveDiv);
						tabs_wrapper.appendChild(writeareviewDiv);
						
						productContainer.appendChild(productImageHolder);
						productContainer.appendChild(shadow);
						productContainer.appendChild(productDetailInfo);
						productContainer.appendChild(divdesc);
						productContainer.appendChild(tabs_wrapper);

						targetNode.appendChild(h3);
						targetNode.appendChild(pName);
						targetNode.appendChild(productContainer);
					}
					
					output2 = targetNode.get('innerHTML');
					
					Y.Assert.areNotEqual(output1, output2, "ProductDetailsWidget success case");
					});
					});
				}, 1000);
				
			} 
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});