Event = YUI.event,
YUI.add("orderSuccess", function(Y) {
    function OrderSuccess(config) {
        OrderSuccess.superclass.constructor.apply(this, arguments);
    }

    OrderSuccess.NAME = "orderSuccess";

    OrderSuccess.ATTRS = {        
        targetNode : {
            value : []
        },
        onSelectedListeners : {
            value : []
        }
    };

    Y.extend(OrderSuccess, Y.Phresco.PhrescoWidget, {
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

        createContent : function(targetNode, jsonData) {
             if (true) {
                targetNode.empty();
				var apiRef = this.get("apiReference");
				var orderDetail = apiRef.get("orderDetail", orderDetail); 
                var h3 = this.createElement('<h3>Computers</h3> ');
                // Product Container holds all the elements
                var productContainer = this.createElement('<div class="productcontainer">');

                var divfirst = this.createElement('<div>');
                var msgh4 = this.createElement('<h4 class="descrip"> Success Messages</h4>');
               	var message = this.createElement('<p> You have bought the product successfully, you can continue shopping. Thank you and Welcome once again.... </p>');
                divfirst.appendChild(msgh4);
				divfirst.appendChild(message);
                productContainer.appendChild(divfirst);
                targetNode.appendChild(h3);
                targetNode.appendChild(productContainer);
              } else {
                var loading = this.createElement('<label>Loading...</label>');
                targetNode.appendChild(loading);
            }

            this.bindUI();
        },
        addSelectedListener : function(widget) {
            var listeners = this.get("onSelectedListeners");
            listeners = widget;
            this.set("widgets", widget);
            this.set("onSelectedListeners", listeners);
        },
      
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        }
    });

    Y.namespace("Phresco").OrderSuccess = OrderSuccess;
}, "3.3.0", {
    requires:["widget", "node", "substitute", "phrescoWidget"]
});
