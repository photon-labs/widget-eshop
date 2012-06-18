/*
 * ###
 * PHR_HTML5YUIWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
Event = YUI.event,
YUI.add("productDetailsWidget", function(Y) {
    function ProductDetailsWidget(config) {
        ProductDetailsWidget.superclass.constructor.apply(this, arguments);
    }

    ProductDetailsWidget.NAME = "productDetailsWidget";

    ProductDetailsWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };
	

    Y.extend(ProductDetailsWidget, Y.Phresco.PhrescoWidget, {
        initializer: function() {
            /*
             * initializer is part of the lifecycle introduced by 
             * the Base class. It is invoked during construction,
             * and can be used to setup instance specific state or publish events which
             * require special configuration (if they don't need custom configuration, 
             * events are published lazily only if there are subscribers).
             *
             * It does not need to invoke the superclass initializer. 
             * init() will call initializer() for all classes in the hierarchy.
             */
             /* this.publish("myEvent", {
                defaultFn: this._defMyEventFn,
                bubbles:false
             }); */

        },

        destructor : function() {
            /*
             * destructor is part of the lifecycle introduced by 
             * the Widget class. It is invoked during destruction,
             * and can be used to cleanup instance specific state.
             *
             * Anything under the boundingBox will be cleaned up by the Widget base class
             * We only need to clean up nodes/events attached outside of the bounding Box
             *
             * It does not need to invoke the superclass destructor. 
             * destroy() will call initializer() for all classes in the hierarchy.
             */
        },

        renderUI : function() {
            /*
             * renderUI is part of the lifecycle introduced by the
             * Widget class. Widget's renderer method invokes:
             *
             *     renderUI()
             *     bindUI()
             *     syncUI()
             *
             * renderUI is intended to be used by the Widget subclass
             * to create or insert new elements into the DOM. 
             */       
            var jsonData = this.get("newproducts");
            this.createContent(this.getTargetNode());
        },
        

        bindUI : function() {
            /*
             * bindUI is intended to be used by the Widget subclass 
             * to bind any event listeners which will drive the Widget UI.
             * 
             * It will generally bind event listeners for attribute change
             * events, to update the state of the rendered UI in response 
             * to attribute value changes, and also attach any DOM events,
             * to activate the UI.
             */

            $(document).ready(function(){
                 /*Since all the tabs are hidden with css we are displaying the tab with class .active_tab using fadeIn()
                 function. If you just want it to show with no effect, just put show() instead of fadeIn() */
                $('.active_tab').fadeIn();

                //when a tab link is clicked...
                $('.tab_link').live('click', function(event){

                    /*...prevent the default behaviour...*/
                    event.preventDefault();

                    /* ...remove the tab_link_selected class from current active link... */
                    $('.tab_link_selected').removeClass('tab_link_selected');

                    /* ...and add it to the new active link */
                    $(this).addClass('tab_link_selected');

                    /*...get the title attribute (which corensponds to the id of the needed text container),
                    but you can use any attribute you want*/
                    var container_id = $(this).attr('title');

                    //...animate the current active_tab by changing it's height and opacity ...'
                    $('.active_tab').animate({

                        height : 'toggle' , opacity : 'toggle'

                    //...and when that animation ends...
                    },function(){

                        //...remove the active_tab class from the current active tab...
                        $(this).removeClass('active_tab');

                        //...and add that class to the tab that corensponds the clicked link...
                        $(container_id).addClass('active_tab');

                        //...and animate the new active_tab by using toggle on height and opacity again...
                        $('.active_tab').animate({

                            height : 'toggle' , opacity : 'toggle'

                        });
                    });

                });
                
                  var options ={
                      
                      zoomType: 'standard',
                      zoomWidth: 410,
                      zoomHeight: 208,
                      xOffset: 15,
                      yOffset: -5,
                      position: "right" ,
                      lens:true,
                      lensReset : false,
                      imageOpacity: 0.2,
                      title : true,
                      alwaysOn: false,
                      showEffect: 'show',
                      hideEffect: 'hide',
                      fadeinSpeed: 'medium',
                      fadeoutSpeed: 'medium',
                      preloadImages :true,
                      showPreload: true,
                      preloadText : 'Loading zoom',
                      preloadPosition : 'center'
                      }
                      $(".myvalue").jqzoom(options);
            });
            // this.after("attrAChange", this._afterAttrAChange);
        },

        syncUI : function() {
            /*
             * syncUI is intended to be used by the Widget subclass to
             * update the UI to reflect the initial state of the widget,
             * after renderUI. From there, the event listeners we bound above
             * will take over.
             */

            // this._uiSetAttrA(this.get("attrA"));
        },

        captureData : function(jsonData) {
            this.createContent(this.getTargetNode(), jsonData);
            this.set("productDetails", jsonData);
            var target = this.get("targetNode");
            $(target).unmask();
        },

        createContent : function(targetNode, jsonData) {
            if (jsonData != null) {
                targetNode.empty();

                var apiRef = this.get("apiReference");
                var url = apiRef.get("wsURLWithoutContext");
                var config = apiRef._getConfigData();
				
                var webImage = config.web.web;
                var productDetails = jsonData.productDetailsData.product[0];
				var productReviewData = jsonData.reviewData;
				var productReviews = productReviewData.review.comments;
				
				if(apiRef.get("userId"))
					var userId = apiRef.get("userId");
					
				
				apiRef.set("currentProductId", productDetails.id);
				
                var imageURL = url + '/' + webImage + productDetails.image;
                var detailImageURL = url + '/' + webImage + productDetails.detailImage;
                var youSave = productDetails.listPrice - productDetails.sellPrice;
                var h3 = this.createElement('<h3>Product Details</h3> ');
                var pName = this.createElement('<h4>' + productDetails.name + '</h4>');

                var backHref = Y.Node.create('<span style="float:right;text-decoration:none;"><a href="#" class="back_buttonstyle">Back</a></span>');
                backHref.obj = this;
                backHref.data = productDetails.category;
				//console.info("Category id:", backHref.data)
                Y.on('click' , this.showProductsFromCache , backHref);
                h3.appendChild(backHref);
                // Product Container holds all the elements
                var productContainer = this.createElement('<div class="productcontainer">');

                var productImageHolder = this.createElement('<div class="productimageholder">');
				var productname = productDetails.name;
				productname = productname.replace('"', " ");
                var imageHolderHref = this.createElement('<a href="'+ detailImageURL +'" class="myvalue"  title="'+ productname +'"><img src="'+ imageURL +'" alt="" width="200" height="200" ></a>');
                productImageHolder.appendChild(imageHolderHref);

                var shadow = this.createElement('<div class="shadow">');
                var shadowImage = this.createElement('<img src="images/eshop/dropshadow2.png" width="194" height="24" alt="shadow">');
                var zoomHint = this.createElement('<div class="zoomhint"> * Roll over the image to zoom in</div>');
                shadow.appendChild(shadowImage);
                shadow.appendChild(zoomHint);


                var productDetailInfo = this.createElement('<div class="productdetail_info">');
                //var productName = this.createElement('<h4>'+productDetails.name+'</h4>');
                var review = this.createElement('<div class="review">')
                var ratingDone = false;
                for (var i = 0; i < 5; i++) {
                    var starImage = 'red_star.png';
                    if (productDetails.rating == i) {
                        ratingDone = true;
                    }
                    if (ratingDone == true) {
                        starImage = 'white_star.png';
                    }
                    var star = this.createElement('<span ><img src="images/eshop/' + starImage + ' " width="16" height="16" alt="Red star"></span>');
                    review.appendChild(star);
                }
               
                var reviewLink = this.createElement('<span class="writeriew"><a href="#readreview">( Reviews )</a></span>');
                
                review.appendChild(reviewLink);


                var productDetailPrice = this.createElement('<div class="productdetail_price">');
                var listPrice = this.createElement('<div><span class="st">List price :</span><span class="st1">$'+productDetails.listPrice+'</span></div>');
                var sellPrice = this.createElement('<div><span class="st2">Sell at :</span><span class="st2">$'+productDetails.sellPrice+'</span></div>');
                var youSave = this.createElement('<div><span class="st4">You save :</span><span class="st3">$'+youSave.toFixed(2)+'</span></div>');
                productDetailPrice.appendChild(listPrice);
                productDetailPrice.appendChild(sellPrice);
                productDetailPrice.appendChild(youSave);

                var stockAvailablity = this.createElement('<div class="stockavailablity">');
                var availability = this.createElement('<div class="row1"><span class="st">Availability:</span><span class="st">In Stock</span></div>');
                var quantity = this.createElement('<div class="row1"><span class="st">Quantity:</span><span class="st1"><input id="input_text" name="input_text" type="text" value="1" placeholder="1" size="1"></span></div>');
                var addToCart = Y.Node.create('<div class="buttonactions"><a href="#"><img src="images/eshop/addtocart_btn_greycolor.png" width="105" height="36" alt="add to cart"></a></div>');
                
                addToCart.obj = this;
				var data = {};
				data.productId = productDetails.id;
				data.name = productDetails.name;
				data.quantity = 1;
				data.price = productDetails.sellPrice;
				data.imageURL = imageURL;
				data.detailImageURL = detailImageURL;
				data.totalPrice = (data.quantity * productDetails.sellPrice);
                addToCart.data = data;
                Y.on('click' , this.showShoppingCart , addToCart);
                stockAvailablity.appendChild(availability);
                stockAvailablity.appendChild(quantity);
                stockAvailablity.appendChild(addToCart);
                
                //productDetailInfo.appendChild(productName);
                productDetailInfo.appendChild(review);
                productDetailInfo.appendChild(productDetailPrice);
                productDetailInfo.appendChild(stockAvailablity);


                var divdesc = this.createElement('<div>');
                var description = this.createElement('<h4 class="descrip">Description</h4>');
                var paragraph1 = this.createElement('<p>'+productDetails.description+'</p><br>');
                divdesc.appendChild(description);
                divdesc.appendChild(paragraph1);
              
                var tabs_wrapper = this.createElement('<div id="tabs_wrapper_div">');
                
                var readreviewLink = Y.Node.create('<a href="#readreviews" class="tab_link tab_link_selected" title="#readreview">Read reviews</a>');
                readreviewLink.obj = this;
                var data = {};
                data.openTabId = 'readreview_Div';
                data.closeTabId = 'writeareview_Div';
                readreviewLink.data = data;
                Y.on('click' , this.openTab , readreviewLink);

                var writereviewLink = Y.Node.create('<a href="#writeareviews" class="tab_link" title="#writeareview">write a review</a>');
                writereviewLink.obj = this;
                var data = {};
                data.openTabId = 'writeareview_Div';
                data.closeTabId = 'readreview_Div';
                writereviewLink.data = data;
                Y.on('click' , this.openTab , writereviewLink);

                var clearDiv = this.createElement('<div class="clear"></div>');
                
                var tabactiveDiv = this.createElement('<div class="tab_text" id="readreview_Div" style="display:block;" >'); //id="readreview"

				for (var i = 0; i < productReviews.length; i++) {
					var review = productReviews[i];
					var  review1 = this.createElement('<p> '+review.user +' : '+ review.comment+' </p><br>');
					tabactiveDiv.appendChild(review1);
				}

                var writeareviewDiv = this.createElement('<div class="tab_text" id="writeareview_Div" style="display:none;" >'); //id="writeareview"
                    var reviewForm = this.createElement('<form id="contact" method="post" action="form.html">');
                    var reviewFieldset = this.createElement('<fieldset>');

                    var reviewRating = this.createElement('<label for="name"><span>Rate this</span></label>');
					var ratingStarSpan = this.createElement('<span class="ratingStarSpan"></span>');
					
					for (var i = 1; i <= 5; i++) {
						var starImage = 'white_star.png';
						var star = Y.Node.create('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/white_star.png" width="16" height="16" title="' + i + '"></a>');
						star.obj = this;
						star.data = i;
						Y.on('click' , this.addRating , star);
						ratingStarSpan.appendChild(star);
					}
					var starValueBox = this.createElement('<input type="hidden" name="starValue" id="starValue" size="2">');
					var productId = this.createElement('<input type="hidden" name="productId" id="productId" value="'+productDetails.id+'">');
					reviewRating.appendChild(productId);
					reviewRating.appendChild(ratingStarSpan);
					reviewRating.appendChild(starValueBox);
					//reviewRating.appendChild(reviewRatingStar);
					
                    var reviewComment = this.createElement('<label for="comments"><span>Comments</span><textarea name="comments" id="comments" placeholder="Your comments"cols="5" rows="6" scale="no"></textarea></label>');
                    reviewFieldset.appendChild(reviewRating);
                    reviewFieldset.appendChild(reviewComment);
					
                    var reviewSubmit = this.createElement('<div class="postreviewbutton">');
					var reviewSubmitButton = Y.Node.create('<input type="button" value="Submit" class="buttonstyle"/>');
                    reviewSubmitButton.obj = this;
					reviewSubmitButton.data = productDetails.id;
					if(userId)
						Y.on('click' , this.reviewSubmitFn , reviewSubmitButton);
					else
						Y.on('click' , this.loginPop , reviewSubmitButton);
			
					reviewSubmit.appendChild(reviewSubmitButton);
					
                    reviewForm.appendChild(reviewFieldset);
                    reviewForm.appendChild(reviewSubmit);
				
				var loginAlertForm = this.createElement('<label for="name"><span>Please Login to post review</span></label>');
				if(userId){
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
            } else {
                //var loading = this.createElement('<label>Loading...</label>');
                //targetNode.appendChild(loading);
            }

            this.bindUI();
        },
        addSelectedListener : function(widget) {
            var listeners = this.get("onSelectedListeners");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onSelectedListeners", listeners);
        },

        addReviewListener : function(widget) {
            var listeners = this.get("onReviewListener");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onReviewListener", listeners);
        },
        openTab : function(){
            //console.info('openTabId' ,this.data.openTabId);
            //console.info('closeTabId' ,this.data.closeTabId);
            //console.info('=============');
            $('#' + this.data.openTabId).show();
            $('#' + this.data.closeTabId).hide();

        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        },
		 addRating:function(){
           var starId = this.data;
		   //alert(starId);
		  $("#starValue").val(starId);
		   for(var i=1; i<= starId; i++){
			$("#starImage_"+i).html('<img src="images/eshop/red_star.png" width="16" height="16" title="' + i + '">');
		   }
   		   for(var j=starId+1; j <= 5; j++){
			$("#starImage_"+j).html('<img src="images/eshop/white_star.png" width="16" height="16" title="' + j + '">');
		   }
		
        },
		loginPop:function(){
			$('#popup').css("display", "block");
			$('.wel_come').css("display", "block");
			//$('body').css('overflow','hidden');
		}
    });

    Y.namespace("Phresco").ProductDetailsWidget = ProductDetailsWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
