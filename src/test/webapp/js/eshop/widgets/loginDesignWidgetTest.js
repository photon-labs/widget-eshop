YUI.add('loginDesignWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("LoginDesignWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "LoginDesignWidgetTest",
			"LoginDesignWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget(response);
					var loginNode = Y.Node.create('<div id="container"></div>');
					// instantiate Login Widget with the HTML
					var loginWdget = new Y.Phresco.LoginWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginNode,
						apiReference : eshopapi
				   });
					loginWdget.render();
					var output1 = loginWdget.getTargetNode().get('innerHTML');  
					var targetNode = phresco.createElement('<div></div>');
					var contactus = phresco.createElement('<div id="maincontact">');
					var selection = phresco.createElement('<section id="contact">');
					var divleft = phresco.createElement('<div id="">');
					var h3title = phresco.createElement('<h3> Login </h3>');           
					var contactdescrip = phresco.createElement('<div class="contactdescrip">');
					var emailfieldset = phresco.createElement('<fieldset>');
					
					var emailDiv = phresco.createElement('<div id="logEmail_err_div" class="clearfix">');
						var emailField = phresco.createElement('<label for="loginEmail"><span>Email *</span><input type="text" name="logEmail" id="logEmail" placeholder="Email"  /></label><span class="help-inline" id="logEmail_err"></span>');
						emailDiv.appendChild(emailField);
					
					var passwordDiv = phresco.createElement('<div id="logpassword_err_div" class="clearfix">');
						var passwordField = phresco.createElement('<label for="password"><span>Password *</span><input type="password" name="logpassword" id="logpassword" placeholder="Password"  /></label><span class="help-inline" id="logpassword_err"></span>');
						passwordDiv.appendChild(passwordField);
						
					
					var footer = phresco.createElement('<div>');
					var buttonsDiv = phresco.createElement('<div class="buttonsdiv">');
						var submitButton = Y.Node.create('<input type="submit" value="Submit" class="buttonstyle" id="ok"/>');

						var cancelButton = Y.Node.create('<input id="cancel" type="button" value="Cancel" class="buttonstyle"/>');
						
						buttonsDiv.appendChild(submitButton);
						buttonsDiv.appendChild(cancelButton);
					footer.appendChild(buttonsDiv); 

					emailfieldset.appendChild(emailDiv);
					emailfieldset.appendChild(passwordDiv);
					emailfieldset.appendChild(footer);  
					
					contactdescrip.appendChild(emailfieldset);
					var cleardiv = phresco.createElement('<div class="clear"></div>');     
					
					divleft.appendChild(h3title);   
					divleft.appendChild(contactdescrip);    
					divleft.appendChild(cleardiv);
					selection.appendChild(divleft);
					contactus.appendChild(selection);
					targetNode.appendChild(contactus);  
					var output2 = targetNode.get('innerHTML');  
					Y.Assert.areEqual(output1, output2, "LoginWidget Success case");
				});	
			},
			
			"LoginDesignWidgetTest with different data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget(response);
					var loginNode = Y.Node.create('<div id="container"></div>');
					// instantiate Login Widget with the HTML
					var loginWdget = new Y.Phresco.LoginWidget({
						// place holder can be decided by specifying the attribute
						targetNode : loginNode,
						apiReference : eshopapi
				   });
					loginWdget.render();
					var output1 = loginWdget.getTargetNode().get('innerHTML');  
					var targetNode = phresco.createElement('<div></div>');
					var contactus = phresco.createElement('<div id="maincontact">');
					var selection = phresco.createElement('<section id="contact">');
					var divleft = phresco.createElement('<div id="">');
					var h3title = phresco.createElement('<h3> Login </h3>');           
					var contactdescrip = phresco.createElement('<div class="contactdescrip">');
					var emailfieldset = phresco.createElement('<fieldset>');
					
					var emailDiv = phresco.createElement('<div id="logEmail_err_div" class="clearfix">');
						var emailField = phresco.createElement('<label for="loginEmail"><span>Email *</span><input type="text" name="logEmail" id="logEmail" placeholder="Email"  /></label><span class="help-inline" id="logEmail_err"></span>');
						emailDiv.appendChild(emailField);
					
					var passwordDiv = phresco.createElement('<div id="logpassword_err_div" class="clearfix">');
						var passwordField = phresco.createElement('<label for="password"><span>Password *</span><input type="password" name="logpassword" id="logpassword" placeholder="Password"  /></label><span class="help-inline" id="logpassword_err"></span>');
						passwordDiv.appendChild(passwordField);
						
					
					var footer = phresco.createElement('<div>');
					var buttonsDiv = phresco.createElement('<div class="buttonsdiv">');
						var submitButton = Y.Node.create('<input type="submit" value="Submit" class="buttonstyle" id="ok"/>');

						var cancelButton = Y.Node.create('<input id="cancel" type="button" value="Cancel" class="buttonstyle"/>');
						
						buttonsDiv.appendChild(submitButton);
						buttonsDiv.appendChild(cancelButton);
					footer.appendChild(buttonsDiv); 

					emailfieldset.appendChild(emailDiv);
					emailfieldset.appendChild(passwordDiv);
					emailfieldset.appendChild(footer);  
					
					contactdescrip.appendChild(emailfieldset);
					var cleardiv = phresco.createElement('<div class="clear"></div>');     
					
					//divleft.appendChild(h3title);   
					divleft.appendChild(contactdescrip);    
					divleft.appendChild(cleardiv);
					selection.appendChild(divleft);
					contactus.appendChild(selection);
					targetNode.appendChild(contactus);  
					var output2 = targetNode.get('innerHTML');  
					Y.Assert.areNotEqual(output1, output2, "LoginWidget Failure case");
				});
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});