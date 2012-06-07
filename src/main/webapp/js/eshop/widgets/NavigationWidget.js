Event = YUI.event,
YUI.add("navigationWidget", function(Y) {
    function NavigationWidget(config) {
        NavigationWidget.superclass.constructor.apply(this, arguments);
    }

    NavigationWidget.NAME = "navigationWidget";

    NavigationWidget.ATTRS = { 
		onSelectedMenuListener : {
            value : []
        }
    };

    Y.extend(NavigationWidget, Y.Phresco.PhrescoWidget, {
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
            var jsonData = this.get("banner");
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
            this.set("navigation", jsonData);
			this.createContent(this.getTargetNode());
        },

        createContent : function(targetNode) {
			targetNode.empty();
			var apiRef = this.get("apiReference");
			
			var userId = 0;
			
			if(apiRef.get("userId")) {
				userId = apiRef.get("userId");
			}
            var navUL = this.createElement('<ul>');
			
            var navLIAHome = Y.Node.create('<li class="selected" id="homeLI"><a href="#" id="aboutUs">Home</a></li>');
			navLIAHome.obj = this;
			navLIAHome.data = "homeLI";
			Y.on('click' , this.showProducts , navLIAHome);
			
            var navLIProducts =  Y.Node.create('<li id="productsLI"><a href="#">Products</a></li>');
			navLIProducts.obj = this;
			navLIProducts.data = "productsLI";
			Y.on('click' , this.showProducts , navLIProducts);
			
            var navLISpecials = Y.Node.create('<li id="specialsLI"><a href="#">Specials</a></li>');
			navLISpecials.obj = this;
			navLISpecials.data = "specialsLI";
			
			Y.on('click' , this.showProducts , navLISpecials);
			
            var contactUs = Y.Node.create('<li id="contactUsLI"><a href="#">Contact us</a></li>');
			contactUs.obj = this;
			contactUs.data = "contactUsLI";
			Y.on('click' , this.showUs , contactUs);
			
			
            var navLIAbout = Y.Node.create('<li id="aboutUsLI"><a href="#">About us</a></li>');
			navLIAbout.obj = this;
			navLIAbout.data = "aboutUsLI";
			Y.on('click' , this.showUs , navLIAbout);
			
            var navLISignup = Y.Node.create('<li id="signupLI"><a href="#">Sign up</a></li>');
			navLISignup.obj = this;
			navLISignup.data = "signupLI";
			Y.on('click' , this.showUs , navLISignup);

            var navLILogin = Y.Node.create('<li id="LoginLi"><a href="#">Login</a></li>');
			navLILogin.obj = this;
			navLILogin.data = "LoginLi";
			Y.on('click' , this.showUs , navLILogin);
			
			
			var navLIMyorder = Y.Node.create('<li id="myorderLI"><a href="#">My Order</a></li>');
			navLIMyorder.obj = this;
			navLIMyorder.data = "myorderLI";
			navLIMyorder.userid = userId;
			Y.on('click' , this.showUs , navLIMyorder);

            var navLIlogout = Y.Node.create('<li id="logoutLi"><a href="#">Log Out</a></li>');
			navLIlogout.obj = this;
			navLIlogout.data = "logoutLi";
			Y.on('click' , this.doLogout , navLIlogout);
			
			navUL.appendChild(navLIAHome);
            navUL.appendChild(navLIProducts);
            navUL.appendChild(navLISpecials);
           // navUL.appendChild(navLIShipping);
            navUL.appendChild(contactUs);
			navUL.appendChild(navLIAbout);
			if (userId == 0 ){
				navUL.appendChild(navLISignup);
				navUL.appendChild(navLILogin);
			}
			else if(userId != 0) {
			navUL.appendChild(navLIMyorder);
			navUL.appendChild(navLIlogout);
			}
            targetNode.appendChild(navUL);
            this.bindUI();
        },
      
        onUpdateListener: function(jsonData) {
            this.captureData(jsonData);
        },
        hideWidgets : function (hideWidgets) {
            this.set("hideWidgets", hideWidgets);
        }
    });

    Y.namespace("Phresco").NavigationWidget = NavigationWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute"]
});
