Event = YUI.event,
YUI.add("contactusWidget", function(Y) {
    function ContactusWidget(config) {
        ContactusWidget.superclass.constructor.apply(this, arguments);
    }

    ContactusWidget.NAME = "contactusWidget";

    ContactusWidget.ATTRS = {        
        targetNode : {
            value : []
        },
        onSelectedListeners : {
            value : []
        }
    };

    Y.extend(ContactusWidget, Y.Phresco.PhrescoWidget {
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
            var target = this.get("targetNode");
            $(target).unmask();
        },

        createContent : function(targetNode) {
            targetNode.empty();
            var contactus = this.createElement('<div id="maincontact">');
            var selection = this.createElement('<section id="contact">');
            var divleft = this.createElement('<div id="">');
            var h3title = this.createElement('<h3> Contact Us </h3>');         
            var contactdescrip = this.createElement('<div class="contactdescrip">');
            var h4title = this.createElement('<h4 class="descrip">Photon Infotech Pvt. Ltd.</h4>');
            var ptag =  this.createElement('<p>DLF IT Park, Block VI,<br><br>2nd,6th,7th & 8th floor,<br><br>Chennai- 600089<br><br>Tamil Nadu, India<br><br>Phone: 91-44-30618000 EXTN:1000<br></p>');
            contactdescrip.appendChild(h4title);
            contactdescrip.appendChild(ptag);
            var cleardiv = this.createElement('<div class="clear"></div>');         
            divleft.appendChild(h3title);
            divleft.appendChild(contactdescrip);
            divleft.appendChild(cleardiv);
            selection.appendChild(divleft);
            contactus.appendChild(selection);
            targetNode.appendChild(contactus);

            this.bindUI();
        },
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        
    });

    Y.namespace("Phresco").ContactusWidget = ContactusWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
