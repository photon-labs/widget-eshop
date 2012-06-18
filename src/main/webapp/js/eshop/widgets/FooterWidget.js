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
YUI.add("footerWidget", function(Y) {
    function FooterWidget(config) {
        FooterWidget.superclass.constructor.apply(this, arguments);
    }

    FooterWidget.NAME = "footerWidget";

    FooterWidget.ATTRS = {        
        color : {
            value : []
        },
        imgUrl : {
            value : []
        }
    };

    Y.extend(FooterWidget, Y.Phresco.PhrescoWidget, {
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
            this.set("header", jsonData);
          },

        createContent : function(targetNode) {
            var copyRight = this.createElement('<strong> E-Shop Phresco © 2011 </strong>');
            var privacyPolicy = this.createElement('<a class="link" href="#">Privacy Policy</a><br />');
            var poweredBy = this.createElement('<a class="link" href="#">powered by Photon</a>');

            targetNode.appendChild(copyRight);
            targetNode.appendChild(privacyPolicy);
            targetNode.appendChild(poweredBy);

            this.bindUI();
        },
        callback : function (id, data) {
            data = Y.JSON.parse(data.responseText);
            if(data["Errors : "] != undefined){ console.info('data 1 : ');
                $('#modify_reservation_alert_msg').html('We were unable to locate your reservation. Please confirm the information you entered is correct.');
            }
            else if(data["Errors"] != undefined){ console.info('data 2 : ');
                $('#modify_reservation_alert_msg').html('We were unable to connect server.');
            }
            else{ 
                window.location = "index.html";
            }
        }
    });

    Y.namespace("Phresco").FooterWidget = FooterWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
