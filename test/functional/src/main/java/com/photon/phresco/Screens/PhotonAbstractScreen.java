package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.YUIWidgetData;

public class PhotonAbstractScreen extends BaseScreen {


	public PhotonAbstractScreen(){
	
	}
	


	protected PhotonAbstractScreen(String selectedBrowser,String applicationURL,String applicationContext,YUIWidgetData yuiWidgetConstants,UIConstants uiConstants) throws IOException,
			Exception {
		super(selectedBrowser, applicationURL,applicationContext,yuiWidgetConstants,uiConstants);

	protected PhotonAbstractScreen(String host, int port, String browser,
			String url, String speed, String context) throws IOException,Exception {
		super(host, port, browser, url, speed, context);

	}

}
