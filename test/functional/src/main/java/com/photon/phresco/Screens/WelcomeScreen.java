package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.PhrescoHTML5widgUiConstants;




public class WelcomeScreen extends PhotonAbstractScreen {
	private PhrescoHTML5widgUiConstants phrsc;
    public WelcomeScreen(String host, int port, String browser, String url, String speed,String context ) throws InterruptedException,IOException, Exception {
    	super(host, port, browser, url, speed, context);
    	
    	/*waitForElementPresent(phrsc.HOME);
    	click(phrsc.HOME);*/
    
    }
 public MenuScreen menuScreen(PhrescoHTML5widgUiConstants phrsc) throws Exception {
        
    	return new MenuScreen(phrsc);
    }
    
}

