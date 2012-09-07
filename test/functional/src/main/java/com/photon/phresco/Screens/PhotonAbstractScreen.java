package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.WidgetData;

public class PhotonAbstractScreen extends BaseScreen {


	public PhotonAbstractScreen(){
	
	}
	


	protected PhotonAbstractScreen(String selectedBrowser,String applicationURL,String applicationContext,WidgetData WidgetConstants,UIConstants uiConstants) throws IOException,
			Exception {
		super(selectedBrowser, applicationURL,applicationContext,WidgetConstants,uiConstants);

	

}
}