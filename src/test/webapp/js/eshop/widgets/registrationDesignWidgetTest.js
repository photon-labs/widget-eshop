YUI.add('registrationDesignWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("RegistrationDesignWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "RegistrationDesignWidgetTest",
			"RegistrationDesignWidgetTest with same data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget(response);
					var regNode = Y.Node.create('<div id="container"></div>');
					// instantiate RegistrationWidget with the HTML
					var registrationWidget = new Y.Phresco.RegisterWidget({
						// place holder can be decided by specifying the attribute
						targetNode : regNode,
						apiReference : eshopapi
				   });
					registrationWidget.render();
					var output1 = registrationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phresco.createElement('<div></div>');
					var contactus = phresco.createElement('<div id="maincontact">');
					var selection = phresco.createElement('<section id="contact">');
					var divleft = phresco.createElement('<div id="">');
					var h3title = phresco.createElement('<h3> Register </h3>');            
						
					var contactdescrip = phresco.createElement('<div class="contactdescrip">');
					var emailfieldset = phresco.createElement('<fieldset>');
					
					
					var firstnameDiv = phresco.createElement('<div id="regfirstname_err_div" class="clearfix">');
						var fristnameField = phresco.createElement('<label for="firstname"><span>First Name *</span><input type="text" name="regfirstname" id="regfirstname" placeholder="First Name"/></label><span class="help-inline" id="regfirstname_err"></span>');
						firstnameDiv.appendChild(fristnameField);
						
					var lastnameDiv = phresco.createElement('<div id="reglastname_err_div" class="clearfix">');
						var lastnameField = phresco.createElement('<label for="lastname"><span>Last Name *</span><input type="text" name="reglastname" id="reglastname" placeholder="Last Name" /></label><span class="help-inline" id="reglastname_err"></span>');
						lastnameDiv.appendChild(lastnameField); 
					
					var emailDiv = phresco.createElement('<div id="regemail_err_div" class="clearfix">');
						var emailField = phresco.createElement('<label for="email"><span>Email *</span><input type="text" name="regemail" id="regemail" placeholder="Email" /></label><span class="help-inline" id="regemail_err"></span>');
						emailDiv.appendChild(emailField);
					
					var passwordDiv = phresco.createElement('<div id="regpassword_err_div" class="clearfix">');
						var passwordField = phresco.createElement('<label for="password"><span>Password *</span><input type="password" name="regpassword" id="regpassword" placeholder="Password"  /></label><span class="help-inline" id="regpassword_err"></span>');
						passwordDiv.appendChild(passwordField);
						
					var phoneDiv = phresco.createElement('<div id="regphonenumber_err_div" class="clearfix">');
						var phoneField = phresco.createElement('<label for="phone"><span>Phone # *</span><input type="text" name="regphonenumber" id="regphonenumber" placeholder="Phone Number" /></label><span class="help-inline" id="regphonenumber_err"></span>');
						phoneDiv.appendChild(phoneField);
						
					var footer = phresco.createElement('<div>');
					var buttonsDiv = phresco.createElement('<div class="buttonsdiv">');
						var submitButton = Y.Node.create('<input type="submit" value="Submit" class="buttonstyle" id="ok"/>');
						
						var cancelButton = Y.Node.create('<input id="cancel" type="button" value="Cancel" class="buttonstyle"/>');
						
						buttonsDiv.appendChild(submitButton);
						buttonsDiv.appendChild(cancelButton);

					footer.appendChild(buttonsDiv); 
					
					emailfieldset.appendChild(firstnameDiv);
					emailfieldset.appendChild(lastnameDiv);
					emailfieldset.appendChild(emailDiv);
					emailfieldset.appendChild(passwordDiv);
					emailfieldset.appendChild(phoneDiv);
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
				
					Y.Assert.areEqual(output1, output2, "RegistrationWidget Success case");
				});
			},
			
			"RegistrationDesignWidgetTest with different data": function () {
				wsConfig.getWsConfig(function(response){
					var eshopapi = new Y.Phresco.EShopAPI(response);
					var phresco = new Y.Phresco.PhrescoWidget(response);
					var helloNode = Y.Node.create('<div id="container"></div>');
					// instantiate RegistrationWidget with the HTML
					var registrationWidget = new Y.Phresco.RegisterWidget({
						// place holder can be decided by specifying the attribute
						targetNode : helloNode,
						apiReference : eshopapi
				   });
					registrationWidget.render();
					var output1 = registrationWidget.getTargetNode().get('innerHTML');
					
					var targetNode = phresco.createElement('<div></div>');
					var contactus = phresco.createElement('<div id="maincontact">');
					var selection = phresco.createElement('<section id="contact">');
					var divleft = phresco.createElement('<div id="">');
					var h3title = phresco.createElement('<h3> Register </h3>');            
						
					var contactdescrip = phresco.createElement('<div class="contactdescrip">');
					var emailfieldset = phresco.createElement('<fieldset>');
					
					
					var firstnameDiv = phresco.createElement('<div id="regfirstname_err_div" class="clearfix">');
						var fristnameField = phresco.createElement('<label for="firstname"><span>First Name *</span><input type="text" name="regfirstname" id="regfirstname" placeholder="First Name"/></label><span class="help-inline" id="regfirstname_err"></span>');
						firstnameDiv.appendChild(fristnameField);
						
					var lastnameDiv = phresco.createElement('<div id="reglastname_err_div" class="clearfix">');
						var lastnameField = phresco.createElement('<label for="lastname"><span>Last Name *</span><input type="text" name="reglastname" id="reglastname" placeholder="Last Name" /></label><span class="help-inline" id="reglastname_err"></span>');
						lastnameDiv.appendChild(lastnameField); 
					
					var emailDiv = phresco.createElement('<div id="regemail_err_div" class="clearfix">');
						var emailField = phresco.createElement('<label for="email"><span>Email *</span><input type="text" name="regemail" id="regemail" placeholder="Email" /></label><span class="help-inline" id="regemail_err"></span>');
						emailDiv.appendChild(emailField);
					
					var passwordDiv = phresco.createElement('<div id="regpassword_err_div" class="clearfix">');
						var passwordField = phresco.createElement('<label for="password"><span>Password *</span><input type="password" name="regpassword" id="regpassword" placeholder="Password"  /></label><span class="help-inline" id="regpassword_err"></span>');
						passwordDiv.appendChild(passwordField);
						
					var phoneDiv = phresco.createElement('<div id="regphonenumber_err_div" class="clearfix">');
						var phoneField = phresco.createElement('<label for="phone"><span>Phone # *</span><input type="text" name="regphonenumber" id="regphonenumber" placeholder="Phone Number" /></label><span class="help-inline" id="regphonenumber_err"></span>');
						phoneDiv.appendChild(phoneField);
						
					var footer = phresco.createElement('<div>');
					var buttonsDiv = phresco.createElement('<div class="buttonsdiv">');
						var submitButton = Y.Node.create('<input type="submit" value="Submit" class="buttonstyle" id="ok"/>');
						
						var cancelButton = Y.Node.create('<input id="cancel" type="button" value="Cancel" class="buttonstyle"/>');
						
						buttonsDiv.appendChild(submitButton);
						buttonsDiv.appendChild(cancelButton);

					footer.appendChild(buttonsDiv); 
					
					emailfieldset.appendChild(firstnameDiv);
					emailfieldset.appendChild(lastnameDiv);
					emailfieldset.appendChild(emailDiv);
					emailfieldset.appendChild(passwordDiv);
					emailfieldset.appendChild(phoneDiv);
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
				
					Y.Assert.areNotEqual(output1, output2, "RegistrationWidget Failure case");
				});	
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});