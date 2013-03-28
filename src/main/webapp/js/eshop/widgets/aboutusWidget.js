Event = YUI.event,
YUI.add("aboutusWidget", function(Y) {
    function AboutusWidget(config) {
        AboutusWidget.superclass.constructor.apply(this, arguments);
    }

    AboutusWidget.NAME = "aboutusWidget";

    AboutusWidget.ATTRS = {        
        targetNode : {
            value : []
        },
        onSelectedListeners : {
            value : []
        }
    };

    Y.extend(AboutusWidget, Y.Phresco.PhrescoWidget, {
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
            //$(target).unmask();
           },

        createContent : function(targetNode) {
             if (true) {
                targetNode.empty();
                var aboutus = this.createElement('<div id="maincontact">');
                var selection = this.createElement('<section id="contact">');
                var divleft = this.createElement('<div id="">');
                var h3title = this.createElement('<h3> About Us </h3>');            
                var contactdescrip = this.createElement('<div class="contactdescrip">');
                var h4title = this.createElement('<h4 class="descrip"> WELCOME TO PHRESCO ESHOP</h4>');
                var ptag =  this.createElement('<p>It is a product that builds e-commerce storefronts. The product is to provide distinguished e-Commerce solution to merchants, shop owners to create professional online shops easy, powerful and reliable. E-cart and E-Shop packages provide you with the ability to build your own online storefront quickly and easily along with the content management tool (Content Uploading). E-Shop is designed to enable clients to expand their activities through selling their products / services using an online storefront. E-Shop comes in three different editions: Standard, Professional and Advanced. E-Cart is designed to enable websites to move into the E-Commerce environment and start selling online. </p> <br>');
                contactdescrip.appendChild(h4title);
                contactdescrip.appendChild(ptag);
                var cleardiv = this.createElement('<div class="clear"></div>');         
                divleft.appendChild(h3title);
                divleft.appendChild(contactdescrip);
                divleft.appendChild(cleardiv);
                selection.appendChild(divleft);
                aboutus.appendChild(selection);
                targetNode.appendChild(aboutus);
              } else {
                var loading = this.createElement('<label>Loading...</label>');
                targetNode.appendChild(loading);
            }

            this.bindUI();
        }
    });

    Y.namespace("Phresco").AboutusWidget = AboutusWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute","phrescoWidget"]
});
