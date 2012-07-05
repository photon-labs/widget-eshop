package com.photon.phresco.Screens;

import java.io.IOException;


import com.photon.phresco.uiconstants.UIConstants;




public class WelcomeScreen extends PhotonAbstractScreen {
	private UIConstants phrsc;
    public WelcomeScreen(String host, int port, String browser, String url, String speed,String context ) throws InterruptedException,IOException, Exception {
    	super(host, port, browser, url, speed, context);
    	
    	/*waitForElementPresent(phrsc.HOME);
    	click(phrsc.HOME);*/
    
    }
 public MenuScreen menuScreen(UIConstants phrsc) throws Exception {
        
    	return new MenuScreen(phrsc);
    }
    
}

