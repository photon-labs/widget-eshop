package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.WidgetData;

public class WelcomeScreen extends PhotonAbstractScreen {
	public WelcomeScreen(String selectedBrowser, String applicationURL,
			String applicationContext,WidgetData WidgetConstants, UIConstants uiConstants)
			throws InterruptedException, IOException, Exception {
		super(selectedBrowser, applicationURL, applicationContext,
				WidgetConstants, uiConstants);

	}

}	



/*public class WelcomeScreen extends PhotonAbstractScreen {

    public WelcomeScreen(String host, int port, String browser, String url, String speed,String context ) throws InterruptedException,IOException, Exception {
    	super(host, port, browser, url, speed, context);
    	
    	   
    }
 public MenuScreen menuScreen(UIConstants phrsc) throws Exception {
        
    	return new MenuScreen(phrsc);
    }
    

}*/
