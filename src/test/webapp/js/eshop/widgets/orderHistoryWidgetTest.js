YUI.add('orderHistoryWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("OrderHistoryWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "OrderHistoryWidgetTest",
			"OrderHistoryWidgetTest with same data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
				var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var orderHistoryWidget = new Y.Phresco.OrderHistoryWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					var jsonData = {product:[{orderDate:"2012-6-26", orderId:2660, totalPrice:800, totalqty:1}, {orderDate:"2012-6-26", orderId:2661, totalPrice:900, totalqty:1}]};
					orderHistoryWidget.createContent(widgetNode, jsonData);
					output1 = orderHistoryWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var contactus = phresco.createElement('<div id="maincontact">');
					var selection = phresco.createElement('<section id="contact">');
					var divleft = phresco.createElement('<div id="">');
					var h3 = phresco.createElement('<h3> Order History </h3>');
					var table = phresco.createElement('<table summary="Order History" id="newspaper-a">');
					
					for (i = 0; i < jsonData.product.length; i++) {
						var product = jsonData.product[i];
						var tr1 = phresco.createElement('<tr>');
						var td1 = phresco.createElement('<td><b>Order Id</b></td>');
						var td12 = phresco.createElement('<td ><b>'+ product.orderId +'</b></td>');
						tr1.appendChild(td1);
						tr1.appendChild(td12);
						var tbody = phresco.createElement('<tbody>');
						var tr2 = phresco.createElement('<tr>');	
						var td2 = phresco.createElement('<td>Prd Qty</td>');
						var td21 = phresco.createElement('<td>'+ product.totalqty +'</td>');
						tr2.appendChild(td2);
						tr2.appendChild(td21);
						
						var tr3 = phresco.createElement('<tr>');	
						var td3 = phresco.createElement('<td>Price</td>');
						var td31 = phresco.createElement('<td>'+ product.totalPrice +'</td>');
						tr3.appendChild(td3);
						tr3.appendChild(td31);
						
						var tr4 = phresco.createElement('<tr>');	
						var td4 = phresco.createElement('<td>DOP</td>');
						var td41 = phresco.createElement('<td>'+ product.orderDate +'</td>');
						tr4.appendChild(td4);
						tr4.appendChild(td41);
						
						tbody.appendChild(tr1);
						tbody.appendChild(tr2);
						tbody.appendChild(tr3);
						tbody.appendChild(tr4);
						table.appendChild(tbody);
					}
					divleft.appendChild(h3);
					divleft.appendChild(table);
					selection.appendChild(divleft);
					contactus.appendChild(selection);
					targetNode.appendChild(contactus);	
					output2 = targetNode.get('innerHTML');
					Y.Assert.areEqual(output1, output2, "OrderHistoryWidgetTest Success case");
				});	
			},
			
			"OrderHistoryWidgetTest with different data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
				var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var orderHistoryWidget = new Y.Phresco.OrderHistoryWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					var jsonData = {product:[{orderDate:"2012-6-26", orderId:2660, totalPrice:800, totalqty:1}, {orderDate:"2012-6-26", orderId:2661, totalPrice:900, totalqty:1}]};
					orderHistoryWidget.createContent(widgetNode, jsonData);
					output1 = orderHistoryWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var contactus = phresco.createElement('<div id="maincontact">');
					var selection = phresco.createElement('<section id="contact">');
					var divleft = phresco.createElement('<div id="">');
					var h3 = phresco.createElement('<h3> Order History </h3>');
					var table = phresco.createElement('<table summary="Order History" id="newspaper-a">');
					
					for (i = 0; i < jsonData.product.length; i++) {
						var product = jsonData.product[i];
						var tr1 = phresco.createElement('<tr>');
						var td1 = phresco.createElement('<td><b>Order Id</b></td>');
						var td12 = phresco.createElement('<td ><b>'+ product.orderId +'</b></td>');
						tr1.appendChild(td1);
						tr1.appendChild(td12);
						var tbody = phresco.createElement('<tbody>');
						var tr2 = phresco.createElement('<tr>');	
						var td2 = phresco.createElement('<td>Prd Qty</td>');
						var td21 = phresco.createElement('<td>'+ product.totalqty +'</td>');
						tr2.appendChild(td2);
						tr2.appendChild(td21);
						
						var tr3 = phresco.createElement('<tr>');	
						var td3 = phresco.createElement('<td>Price</td>');
						var td31 = phresco.createElement('<td>'+ product.totalPrice +'</td>');
						tr3.appendChild(td3);
						tr3.appendChild(td31);
						
						var tr4 = phresco.createElement('<tr>');	
						var td4 = phresco.createElement('<td>DOP</td>');
						var td41 = phresco.createElement('<td>'+ product.orderDate +'</td>');
						tr4.appendChild(td4);
						tr4.appendChild(td41);
						
						//tbody.appendChild(tr1);
						tbody.appendChild(tr2);
						tbody.appendChild(tr3);
						tbody.appendChild(tr4);
						table.appendChild(tbody);
					}
					divleft.appendChild(h3);
					divleft.appendChild(table);
					selection.appendChild(divleft);
					contactus.appendChild(selection);
					targetNode.appendChild(contactus);	
					output2 = targetNode.get('innerHTML');
					Y.Assert.areNotEqual(output1, output2, "OrderHistoryWidgetTest Failure case");
				});	
			},

			"OrderHistoryWidgetTest with different length data": function () {
				var output1, output2;
			
				var widgetNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
					var eshopAPI = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget();
					var orderHistoryWidget = new Y.Phresco.OrderHistoryWidget({
						// place holder can be decided by specifying the attribute
						targetNode : widgetNode,
						apiReference : eshopAPI
					});
					var jsonData = {product:[{orderDate:"2012-6-26", orderId:2660, totalPrice:800, totalqty:1}, {orderDate:"2012-6-26", orderId:2661, totalPrice:900, totalqty:1}]};
					var jsonData1 = {product:[{orderDate:"2012-6-26", orderId:2660, totalPrice:800, totalqty:1}]};
					orderHistoryWidget.createContent(widgetNode, jsonData);
					output1 = orderHistoryWidget.getTargetNode().get('innerHTML');
					var targetNode = phresco.createElement('<div></div>');
					var contactus = phresco.createElement('<div id="maincontact">');
					var selection = phresco.createElement('<section id="contact">');
					var divleft = phresco.createElement('<div id="">');
					var h3 = phresco.createElement('<h3> Order History </h3>');
					var table = phresco.createElement('<table summary="Order History" id="newspaper-a">');
					
					for (i = 0; i < jsonData1.product.length; i++) {
						var product = jsonData1.product[i];
						var tr1 = phresco.createElement('<tr>');
						var td1 = phresco.createElement('<td><b>Order Id</b></td>');
						var td12 = phresco.createElement('<td ><b>'+ product.orderId +'</b></td>');
						tr1.appendChild(td1);
						tr1.appendChild(td12);
						var tbody = phresco.createElement('<tbody>');
						var tr2 = phresco.createElement('<tr>');	
						var td2 = phresco.createElement('<td>Prd Qty</td>');
						var td21 = phresco.createElement('<td>'+ product.totalqty +'</td>');
						tr2.appendChild(td2);
						tr2.appendChild(td21);
						
						var tr3 = phresco.createElement('<tr>');	
						var td3 = phresco.createElement('<td>Price</td>');
						var td31 = phresco.createElement('<td>'+ product.totalPrice +'</td>');
						tr3.appendChild(td3);
						tr3.appendChild(td31);
						
						var tr4 = phresco.createElement('<tr>');	
						var td4 = phresco.createElement('<td>DOP</td>');
						var td41 = phresco.createElement('<td>'+ product.orderDate +'</td>');
						tr4.appendChild(td4);
						tr4.appendChild(td41);
						
						tbody.appendChild(tr1);
						tbody.appendChild(tr2);
						tbody.appendChild(tr3);
						tbody.appendChild(tr4);
						table.appendChild(tbody);
					}
					divleft.appendChild(h3);
					divleft.appendChild(table);
					selection.appendChild(divleft);
					contactus.appendChild(selection);
					targetNode.appendChild(contactus);	
					output2 = targetNode.get('innerHTML');
					Y.Assert.areNotEqual(output1, output2, "OrderHistoryWidgetTest Failure case");
				});	
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});