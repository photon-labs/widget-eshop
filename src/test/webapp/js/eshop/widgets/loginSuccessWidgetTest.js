/*
 * PHR_HTML5YUIWidget
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
YUI.add('loginSuccessWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("LoginSuccessWidgetTest");

		//add test cases
		var wsConfig = new Y.Phresco.WSConfig();
		var testCase = new Y.Test.Case({

			name: "LoginSuccessWidgetTest",
			"LoginSuccessWidgetTest with success message with same data": function () {
				var output1, output2;
			
				var loginSuccessNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
				var eshopAPI = new Y.Phresco.EShopAPI(response);
				var phresco = new Y.Phresco.PhrescoWidget();
				
				var jsonData = {};
				jsonData.response = {successMessage:"Login Success", username:"john"};
				jsonData.login = {loginEmail:"john@phresco.com"};
				var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginSuccessNode,
					apiReference : eshopAPI
			   });
			   loginSuccessWidget.createContent(loginSuccessNode, jsonData);
			   output1 = loginSuccessWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var contactus = phresco.createElement('<div id="maincontact">');
				var selection = phresco.createElement('<section id="contact">');
				var divleft = phresco.createElement('<div id="">');
				var contactdescrip = phresco.createElement('<div class="contactdescrip">');

				var myCart = phresco.createElement('<div class="mycart_div"></div>');
					var log_div = phresco.createElement('<div class="log_div"></div>');
						var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
							var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
								var log_heading = phresco.createElement('<div class="log_heading">Login</div>');
								var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
									
									var registrationStatus = phresco.createElement('<div class="log_txt"></div>');
										var statusMsg = phresco.createElement('<div class="log_txt_lft">Status : '+jsonData.response.successMessage+'</div>');
										registrationStatus.appendChild(statusMsg);
								  
									var log_txtEmail = phresco.createElement('<div class="log_txt">');
										var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : '+jsonData.login.loginEmail+'</div>');
									log_txtEmail.appendChild(log_txt_lftEmail);
	  
									var log_txtuserName_txt = phresco.createElement('<div class="log_txt"></div>');
										var log_txtuserName = phresco.createElement('<div class="log_txt_lft">Name : '+jsonData.response.username+'</div>');
										log_txtuserName_txt.appendChild(log_txtuserName);
							  
								log_txt_div.appendChild(registrationStatus);
								log_txt_div.appendChild(log_txtEmail);
								log_txt_div.appendChild(log_txtuserName_txt);
	 
							log_innerdiv1.appendChild(log_heading);
							log_innerdiv1.appendChild(log_txt_div);

						log_innerdiv.appendChild(log_innerdiv1);
					log_div.appendChild(log_innerdiv);
				myCart.appendChild(log_div);
				contactdescrip.appendChild(myCart);
				var cleardiv = phresco.createElement('<div class="clear"></div>');     
				
				divleft.appendChild(contactdescrip);    
				divleft.appendChild(cleardiv);
				selection.appendChild(divleft);
				contactus.appendChild(selection);
				targetNode.appendChild(contactus);  
				output2 = targetNode.get('innerHTML');
				Y.Assert.areEqual(output1, output2, "LoginSuccessWidget Success case");
			});
			},
			
			"LoginSuccessWidgetTest with success message with different data": function () {
				var output1, output2;
			
				var loginSuccessNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
				var eshopAPI = new Y.Phresco.EShopAPI(response);
				var phresco = new Y.Phresco.PhrescoWidget();
				
				var jsonData = {};
				jsonData.response = {successMessage:"Login Success", username:"john"};
				jsonData.login = {loginEmail:"john@phresco.com"};
				var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginSuccessNode,
					apiReference : eshopAPI
			   });
			   loginSuccessWidget.createContent(loginSuccessNode, jsonData);
			   output1 = loginSuccessWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var contactus = phresco.createElement('<div id="maincontact">');
				var selection = phresco.createElement('<section id="contact">');
				var divleft = phresco.createElement('<div id="">');
				var contactdescrip = phresco.createElement('<div class="contactdescrip">');

				var myCart = phresco.createElement('<div class="mycart_div"></div>');
					var log_div = phresco.createElement('<div class="log_div"></div>');
						var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
							var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
								var log_heading = phresco.createElement('<div class="log_heading">Login</div>');
								var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
									
									var registrationStatus = phresco.createElement('<div class="log_txt"></div>');
										var statusMsg = phresco.createElement('<div class="log_txt_lft">Status : '+jsonData.response.successMessage+'</div>');
										registrationStatus.appendChild(statusMsg);
								  
									var log_txtEmail = phresco.createElement('<div class="log_txt">');
										var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : '+jsonData.login.loginEmail+'</div>');
									log_txtEmail.appendChild(log_txt_lftEmail);
	  
									var log_txtuserName_txt = phresco.createElement('<div class="log_txt"></div>');
										var log_txtuserName = phresco.createElement('<div class="log_txt_lft">Name : '+jsonData.response.username+'</div>');
										//log_txtuserName_txt.appendChild(log_txtuserName);
							  
								log_txt_div.appendChild(registrationStatus);
								log_txt_div.appendChild(log_txtEmail);
								log_txt_div.appendChild(log_txtuserName_txt);
	 
							log_innerdiv1.appendChild(log_heading);
							log_innerdiv1.appendChild(log_txt_div);

						log_innerdiv.appendChild(log_innerdiv1);
					log_div.appendChild(log_innerdiv);
				myCart.appendChild(log_div);
				contactdescrip.appendChild(myCart);
				var cleardiv = phresco.createElement('<div class="clear"></div>');     
				
				divleft.appendChild(contactdescrip);    
				divleft.appendChild(cleardiv);
				selection.appendChild(divleft);
				contactus.appendChild(selection);
				targetNode.appendChild(contactus);  
				output2 = targetNode.get('innerHTML');
			
				Y.Assert.areNotEqual(output1, output2, "LoginSuccessWidget Failure case");
				});
			},
			
			"LoginSuccessWidgetTest with failure message with same data": function () {
				var output1, output2;
			
				var loginSuccessNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
				var eshopAPI = new Y.Phresco.EShopAPI(response);
				var phresco = new Y.Phresco.PhrescoWidget();
				
				var jsonData = {};
				jsonData.response = {successMessage:"Login Failed", username:"Undefined"};
				jsonData.login = {loginEmail:"john12@phresco.com"};
				var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginSuccessNode,
					apiReference : eshopAPI
			   });
			   loginSuccessWidget.createContent(loginSuccessNode, jsonData);
			   output1 = loginSuccessWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var contactus = phresco.createElement('<div id="maincontact">');
				var selection = phresco.createElement('<section id="contact">');
				var divleft = phresco.createElement('<div id="">');
				var contactdescrip = phresco.createElement('<div class="contactdescrip">');

				var myCart = phresco.createElement('<div class="mycart_div"></div>');
					var log_div = phresco.createElement('<div class="log_div"></div>');
						var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
							var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
								var log_heading = phresco.createElement('<div class="log_heading">Login</div>');
								var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
									
									var registrationStatus = phresco.createElement('<div class="log_txt"></div>');
										var statusMsg = phresco.createElement('<div class="log_txt_lft">Status : '+jsonData.response.successMessage+'</div>');
										registrationStatus.appendChild(statusMsg);
								  
									var log_txtEmail = phresco.createElement('<div class="log_txt">');
										var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : '+jsonData.login.loginEmail+'</div>');
									log_txtEmail.appendChild(log_txt_lftEmail);
	  
									var log_txtuserName_txt = phresco.createElement('<div class="log_txt"></div>');
										var log_txtuserName = phresco.createElement('<div class="log_txt_lft">Name : '+jsonData.response.username+'</div>');
										log_txtuserName_txt.appendChild(log_txtuserName);
							  
								log_txt_div.appendChild(registrationStatus);
								log_txt_div.appendChild(log_txtEmail);
								log_txt_div.appendChild(log_txtuserName_txt);
	 
							log_innerdiv1.appendChild(log_heading);
							log_innerdiv1.appendChild(log_txt_div);

						log_innerdiv.appendChild(log_innerdiv1);
					log_div.appendChild(log_innerdiv);
				myCart.appendChild(log_div);
				contactdescrip.appendChild(myCart);
				var cleardiv = phresco.createElement('<div class="clear"></div>');     
				
				divleft.appendChild(contactdescrip);    
				divleft.appendChild(cleardiv);
				selection.appendChild(divleft);
				contactus.appendChild(selection);
				targetNode.appendChild(contactus);  
				output2 = targetNode.get('innerHTML');
				
				Y.Assert.areEqual(output1, output2, "LoginSuccessWidget success case");
				});
			},
			
			"LoginSuccessWidgetTest with failure message with different data": function () {
				var output1, output2;
			
				var loginSuccessNode = Y.Node.create('<div></div>');
				wsConfig.getWsConfig(function(response){
				var eshopAPI = new Y.Phresco.EShopAPI(response);
				var phresco = new Y.Phresco.PhrescoWidget();
				
				var jsonData = {};
				jsonData.response = {successMessage:"Login Failed", username:"Undefined"};
				jsonData.login = {loginEmail:"john12@phresco.com"};
				var loginSuccessWidget = new Y.Phresco.LoginSuccessWidget({
					// place holder can be decided by specifying the attribute
					targetNode : loginSuccessNode,
					apiReference : eshopAPI
			   });
			   loginSuccessWidget.createContent(loginSuccessNode, jsonData);
			   output1 = loginSuccessWidget.getTargetNode().get('innerHTML');
				var targetNode = phresco.createElement('<div></div>');
				var contactus = phresco.createElement('<div id="maincontact">');
				var selection = phresco.createElement('<section id="contact">');
				var divleft = phresco.createElement('<div id="">');
				var contactdescrip = phresco.createElement('<div class="contactdescrip">');

				var myCart = phresco.createElement('<div class="mycart_div"></div>');
					var log_div = phresco.createElement('<div class="log_div"></div>');
						var log_innerdiv = phresco.createElement('<div class="log_innerdiv"></div>');
							var log_innerdiv1 = phresco.createElement('<div class="log_innerdiv1"></div>');
								var log_heading = phresco.createElement('<div class="log_heading">Login</div>');
								var log_txt_div = phresco.createElement('<div class="log_txt_div"></div>');
									
									var registrationStatus = phresco.createElement('<div class="log_txt"></div>');
										var statusMsg = phresco.createElement('<div class="log_txt_lft">Status : '+jsonData.response.successMessage+'</div>');
										registrationStatus.appendChild(statusMsg);
								  
									var log_txtEmail = phresco.createElement('<div class="log_txt">');
										var log_txt_lftEmail = phresco.createElement('<div class="log_txt_lft">Email : '+jsonData.login.loginEmail+'</div>');
									log_txtEmail.appendChild(log_txt_lftEmail);
	  
									var log_txtuserName_txt = phresco.createElement('<div class="log_txt"></div>');
										var log_txtuserName = phresco.createElement('<div class="log_txt_lft">Name : '+jsonData.response.username+'</div>');
										//log_txtuserName_txt.appendChild(log_txtuserName);
							  
								log_txt_div.appendChild(registrationStatus);
								log_txt_div.appendChild(log_txtEmail);
								log_txt_div.appendChild(log_txtuserName_txt);
	 
							log_innerdiv1.appendChild(log_heading);
							log_innerdiv1.appendChild(log_txt_div);

						log_innerdiv.appendChild(log_innerdiv1);
					log_div.appendChild(log_innerdiv);
				myCart.appendChild(log_div);
				contactdescrip.appendChild(myCart);
				var cleardiv = phresco.createElement('<div class="clear"></div>');     
				
				divleft.appendChild(contactdescrip);    
				divleft.appendChild(cleardiv);
				selection.appendChild(divleft);
				contactus.appendChild(selection);
				targetNode.appendChild(contactus);  
				output2 = targetNode.get('innerHTML');
				
				Y.Assert.areNotEqual(output1, output2, "LoginSuccessWidget failure case");
				});	
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});