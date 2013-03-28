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
Event = YUI.event,
YUI.add("categoryWidget", function(Y) {
    function CategoryWidget(config) {
        CategoryWidget.superclass.constructor.apply(this, arguments);
    }

    CategoryWidget.NAME = "categoryWidget";

    CategoryWidget.ATTRS = {        
        targetNode : {
            value : []
        }
    };

    Y.extend(CategoryWidget, Y.Phresco.PhrescoWidget, {
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
            this.createContent(this.getTargetNode(), null);
        },

        bindUI : function() {
            var targetNode = this.getTargetNode();
            var categoryHref = targetNode.one('a');
			 $(document).ready(function () {
            $('div.menu_class').click(function () {
                $('ul.the_menu').css('z-index:9999;');
                $('ul.the_menu').slideToggle('medium');
            });
        });
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
            this.createContent(this.getTargetNode(), jsonData);
        },

        createContent : function(targetNode, jsonData) {
            
            if (jsonData !== null) {
                var navUL = this.createElement('<ul>');
				var totalCategories = jsonData.category.length;

				if (totalCategories >= 9) {
					totalCategories = 9;
				}
                for (var i = 0; i < totalCategories; i++) {
                    var category = jsonData.category[i];
                    var navLI = this.createElement('<li>');
                    var navLIA = Y.Node.create('<span id=' + category['id'] + '"><a id="displayProducts" href="javascript:void(0);">' + category['name'] + '</a></span>');
                    navLIA.obj = this;
                    navLIA.data = category['id'];
                    Y.on('click' , this.showProducts , navLIA);
					if (totalCategories >= 9) {
						var divmenu_class = this.createElement('<div class="menu_class"><a href="#" >More</a>');
						var navULTwo = this.createElement('<ul class="the_menu">');
						 for (var j = 9 ; j < jsonData.category.length; j++) {
							var category1 = jsonData.category[j];
							var navlIchild = Y.Node.create('<li><a id="displayProducts" href="javascript:void(0);">' + category1['name'] + '</a></li>');
							navlIchild.obj = this;
							navlIchild.data = category1['id'];
							Y.on('click' , this.showProducts , navlIchild);
							navULTwo.appendChild(navlIchild);
							divmenu_class.appendChild(navULTwo);
						 }
					}
                    navLI.appendChild(navLIA);
                    navUL.appendChild(navLI);
                }
				
                targetNode.appendChild(navUL);
				targetNode.appendChild(divmenu_class);
            }
            this.bindUI();
        }
    });

    Y.namespace("Phresco").CategoryWidget = CategoryWidget;
}, "3.3.0", {
    requires:["widget", "node", "substitute", "phrescoWidget"]
});
