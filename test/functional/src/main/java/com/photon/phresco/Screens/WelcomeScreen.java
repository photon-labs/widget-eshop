package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.YUIWidgetData;

public class WelcomeScreen extends PhotonAbstractScreen {
	public WelcomeScreen(String selectedBrowser, String applicationURL,
			String applicationContext,YUIWidgetData yuiWidgetConstants, UIConstants uiConstants)
			throws InterruptedException, IOException, Exception {
		super(selectedBrowser, applicationURL, applicationContext,
				 yuiWidgetConstants, uiConstants);

	}

	

}
