/*
 * ###
 * PHR_HTML5YUIWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License")
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
YUI.add("registerWidget", function(Y) {
    function RegisterWidget(config) {
        RegisterWidget.superclass.constructor.apply(this, arguments);
    }

    RegisterWidget.NAME = "registerWidget";

    RegisterWidget.ATTRS = {
        targetNode : {
            value : []
        }
    };

    Y.extend(RegisterWidget, Y.Phresco.PhrescoWidget, {
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

        },

        syncUI : function() {
            /*
             * syncUI is intended to be used by the Widget subclass to
             * update the UI to reflect the initial state of the widget,
             * after renderUI. From there, the event listeners we bound above
             * will take over.
             */

        },

        captureData : function(jsonData) {
           this.createContent(this.getTargetNode(), jsonData);
            var target = this.get("targetNode");
            $(target).unmask();
           },

        createContent : function(targetNode) {
           if (true) {
                targetNode.empty();
            
                var apiRef = this.get("apiReference");
                var url = apiRef.get("wsURLWithoutContext");
                var config = apiRef._getConfigData();

                var contactus = this.createElement('<div id="maincontact">');
                var selection = this.createElement('<section id="contact">');
                var divleft = this.createElement('<div id="">');
                var h3title = this.createElement('<h3> Register </h3>');            
                    
                var contactdescrip = this.createElement('<div class="contactdescrip">');
                var emailfieldset = this.createElement('<fieldset>');
                
                
                var firstnameDiv = this.createElement('<div id="regfirstname_err_div" class="clearfix">');
                    var fristnameField = this.createElement('<label for="firstname"><span>First Name *</span><input type="text" name="regfirstname" id="regfirstname" placeholder="First Name"/></label><span class="help-inline" id="regfirstname_err"></span>');
                    firstnameDiv.appendChild(fristnameField);
                    
                var lastnameDiv = this.createElement('<div id="reglastname_err_div" class="clearfix">');
                    var lastnameField = this.createElement('<label for="lastname"><span>Last Name *</span><input type="text" name="reglastname" id="reglastname" placeholder="Last Name" /></label><span class="help-inline" id="reglastname_err"></span>');
                    lastnameDiv.appendChild(lastnameField); 
                
                var emailDiv = this.createElement('<div id="regemail_err_div" class="clearfix">');
                    var emailField = this.createElement('<label for="email"><span>Email *</span><input type="text" name="regemail" id="regemail" placeholder="Email" /></label><span class="help-inline" id="regemail_err"></span>');
                    emailDiv.appendChild(emailField);
                
                var passwordDiv = this.createElement('<div id="regpassword_err_div" class="clearfix">');
                    var passwordField = this.createElement('<label for="password"><span>Password *</span><input type="password" name="regpassword" id="regpassword" placeholder="Password"  /></label><span class="help-inline" id="regpassword_err"></span>');
                    passwordDiv.appendChild(passwordField);
                    
                var phoneDiv = this.createElement('<div id="regphonenumber_err_div" class="clearfix">');
                    var phoneField = this.createElement('<label for="phone"><span>Phone # *</span><input type="text" name="regphonenumber" id="regphonenumber" placeholder="Phone Number" /></label><span class="help-inline" id="regphonenumber_err"></span>');
                    phoneDiv.appendChild(phoneField);
                    
                var footer = this.createElement('<div>');
                var buttonsDiv = this.createElement('<div class="buttonsdiv">');
                    var submitButton = Y.Node.create('<input type="submit" value="Submit" class="buttonstyle" id="ok"/>');
                     submitButton.obj = this;
                     Y.on('click' , this.userRegister , submitButton);
                    
                    var cancelButton = Y.Node.create('<input id="cancel" type="button" value="Cancel" class="buttonstyle"/>');
					cancelButton.obj = this;
					cancelButton.data = "homeLI";
					Y.on('click' , this.showProducts  , cancelButton);
                    
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
                var cleardiv = this.createElement('<div class="clear"></div>');     
                
                divleft.appendChild(h3title);   
                divleft.appendChild(contactdescrip);    
                divleft.appendChild(cleardiv);
                selection.appendChild(divleft);
                contactus.appendChild(selection);
                targetNode.appendChild(contactus);  

                
              } else {
                var loading = this.createElement('<label>Loading...</label>');
                targetNode.appendChild(loading);
            }

            this.bindUI();
        },
        closeFunction:function(){
            popup('none');
        }
    });

    Y.namespace("Phresco").RegisterWidget = RegisterWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute", "phrescoWidget"]
});
