package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.WidgetData;

public class PhotonAbstractScreen extends BaseScreen {


	public PhotonAbstractScreen(){
	
	}
	


	protected PhotonAbstractScreen(String selectedBrowser,String selectedPlatform,String applicationURL,String applicationContext,WidgetData WidgetConstants,UIConstants uiConstants) throws IOException,
			Exception {
		super(selectedBrowser, selectedPlatform, applicationURL,applicationContext,WidgetConstants,uiConstants);

	

}
}