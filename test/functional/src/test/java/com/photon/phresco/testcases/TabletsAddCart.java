/*
 * ###
 * PHR_HTML5YUIWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
package com.photon.phresco.testcases;

import java.io.IOException;

import junit.framework.TestCase;
import org.junit.Test;
import com.photon.phresco.Screens.MenuScreen;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.PhrescoHTML5widgUiConstants;
import com.thoughtworks.selenium.Selenium;

public class TabletsAddCart extends TestCase {

	
	private PhrescoHTML5widgUiConstants phrsc;
	private Selenium selenium;
	private int SELENIUM_PORT;
	private String browserAppends;
	private WelcomeScreen wel;
	String methodName;

	@Test
	public void testTablets() throws InterruptedException, IOException, Exception {

		try {

			phrsc = new PhrescoHTML5widgUiConstants();
			String serverURL = phrsc.PROTOCOL + "://"
					+ phrsc.HOST + ":"
					+ phrsc.PORT + "/";
			browserAppends = "*" + phrsc.BROWSER;
			assertNotNull("Browser name should not be null",browserAppends);
			SELENIUM_PORT = Integer.parseInt(phrsc.SERVER_PORT);
			assertNotNull("selenium-port number should not be null",
					SELENIUM_PORT);
			wel=new WelcomeScreen(phrsc.SERVER_HOST, SELENIUM_PORT,
					browserAppends, serverURL, phrsc.SPEED,
					phrsc.CONTEXT );
			assertNotNull(wel);
			MenuScreen menu = wel.menuScreen(phrsc);
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
			System.out.println("methodName = " + methodName);
			menu.Tablets(methodName);
		} catch (Exception t) {
			t.printStackTrace();
			System.out.println("ScreenCaptured");
			selenium.captureEntirePageScreenshot("\\WelPageFails.png",
					"background=#CCFFDD");
		}
	}

	public void setUp() throws Exception {
		phrsc = new PhrescoHTML5widgUiConstants();
	}

	public void tearDown() {
		clean();
	}

	private void clean() {
		wel.closeBrowser();
	}

}