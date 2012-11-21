YUI.add('contactusWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("ContactusWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({

			name: "ContactusWidgetTest",
			"ContactusWidgetTest with same data": function () {
				var output1, output2;
			
				var contactusWidgetNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget();
				var aboutusWidget = new Y.Phresco.ContactusWidget({
					// place holder can be decided by specifying the attribute
					targetNode : contactusWidgetNode,
					apiReference : eshopAPI
				});
				aboutusWidget.createContent(contactusWidgetNode);
				output1 = aboutusWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var contactus = phresco.createElement('<div id="maincontact">');
				var selection = phresco.createElement('<section id="contact">');
				var divleft = phresco.createElement('<div id="">');
				var h3title = phresco.createElement('<h3> Contact Us </h3>');         
				var contactdescrip = phresco.createElement('<div class="contactdescrip">');
				var h4title = phresco.createElement('<h4 class="descrip">Photon Infotech Pvt. Ltd.</h4>');
				var ptag =  phresco.createElement('<p>DLF IT Park, Block VI,<br><br>2nd,6th,7th & 8th floor,<br><br>Chennai- 600089<br><br>Tamil Nadu, India<br><br>Phone: 91-44-30618000 EXTN:1000<br></p>');
				contactdescrip.appendChild(h4title);
				contactdescrip.appendChild(ptag);
				var cleardiv = phresco.createElement('<div class="clear"></div>');         
				divleft.appendChild(h3title);
				divleft.appendChild(contactdescrip);
				divleft.appendChild(cleardiv);
				selection.appendChild(divleft);
				contactus.appendChild(selection);
				targetNode.appendChild(contactus);
				output2 = targetNode.get('innerHTML');
				Y.Assert.areEqual(output1, output2, "ContactusWidgetTest Success case");
			},
			
			"ContactusWidgetTest with different data": function () {
				var output1, output2;
			
				var contactusWidgetNode = Y.Node.create('<div></div>');
				var eshopAPI = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phresco = new Y.Phresco.PhrescoWidget();
				var aboutusWidget = new Y.Phresco.ContactusWidget({
					// place holder can be decided by specifying the attribute
					targetNode : contactusWidgetNode,
					apiReference : eshopAPI
				});
				aboutusWidget.createContent(contactusWidgetNode);
				output1 = aboutusWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var contactus = phresco.createElement('<div id="maincontact">');
				var selection = phresco.createElement('<section id="contact">');
				var divleft = phresco.createElement('<div id="">');
				var h3title = phresco.createElement('<h3> Contact Us </h3>');         
				var contactdescrip = phresco.createElement('<div class="contactdescrip">');
				var h4title = phresco.createElement('<h4 class="descrip">Photon Infotech Pvt. Ltd.</h4>');
				var ptag =  phresco.createElement('<p>DLF IT Park, Block VI,<br><br>2nd,6th,7th & 8th floor,<br><br>Chennai- 600089<br><br>Tamil Nadu, India<br><br>Phone: 91-44-30618000 EXTN:1000<br></p>');
				contactdescrip.appendChild(h4title);
				contactdescrip.appendChild(ptag);
				var cleardiv = phresco.createElement('<div class="clear"></div>');         
				divleft.appendChild(h3title);
				//divleft.appendChild(contactdescrip);
				divleft.appendChild(cleardiv);
				selection.appendChild(divleft);
				contactus.appendChild(selection);
				targetNode.appendChild(contactus);
				output2 = targetNode.get('innerHTML');
			
				Y.Assert.areNotEqual(output1, output2, "ContactusWidgetTest Failure case");
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});