/**
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
package com.photon.phresco.testcases;

import java.io.IOException;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.model.YuiWidgetsData.YuiWidget;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.WidgetData;

public class WelcomePageTestCase {

	private  UIConstants uiConstants;
	private  PhrescoUiConstants phrescoUIConstants;
	private  WelcomeScreen welcomeScreen;
	private  String methodName;
	private  String selectedBrowser;
	private  WidgetData WidgetConstants;
	
	

	// private Log log = LogFactory.getLog(getClass());
	@Parameters(value = { "browser", "platform" })
	@BeforeTest
	public  void setUp(String browser, String platform) throws Exception {
		try {
			phrescoUIConstants = new PhrescoUiConstants();
			uiConstants = new UIConstants();
		
			WidgetConstants = new WidgetData();
			String selectedBrowser = browser;
			String selectedPlatform = platform;
			
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			
			
			Reporter.log("Selected Browser to execute testcases--->>"
					+ selectedBrowser);
			String applicationURL = phrescoUIConstants.getProtocol() + "://"
					+ phrescoUIConstants.getHost() + ":" + phrescoUIConstants.getPort()
					+ "/";
			welcomeScreen = new WelcomeScreen(selectedBrowser, selectedPlatform, applicationURL,
					phrescoUIConstants.getContext(), WidgetConstants, uiConstants);
			Thread.sleep(5000);
		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}

	/*public static void launchingBrowser() throws Exception {
		try {
			String applicationURL = phrescoUIConstants.PROTOCOL + "://"
					+ phrescoUIConstants.HOST + ":" + phrescoUIConstants.PORT
					+ "/";
			selectedBrowser = phrescoUIConstants.BROWSER;
			welcomeScreen = new WelcomeScreen(selectedBrowser, selectedPlatform, applicationURL,
					phrescoUIConstants.CONTEXT, WidgetConstants, uiConstants);
		} catch (Exception exception) {
			exception.printStackTrace();

		}

	}*/

	@Test
	public void testWelcomePageScreen() throws InterruptedException,
			IOException, Exception {
		try {
		System.out
					.println("---------testWelcomePageScreen-------------");
			Assert.assertNotNull(welcomeScreen);
			 Thread.sleep(1000);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheAudioDevicesAddToCart(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheAudioDevicesAddToCart()-------------");
			welcomeScreen.AudioDevices(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheCamerasAddToCart(YuiWidget yuiWidget) throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheCamerasAddToCart()-------------");
			welcomeScreen.Cameras(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheVideoGamesAddToCart(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheVideoGamesAddToCart()-------------");
			welcomeScreen.VideoGames(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheTelevisionAddToCart(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTelevisionAddToCart()-------------");
			welcomeScreen.Television(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheTabletsAddToCart(YuiWidget yuiWidget) throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTabletsAddToCart()-------------");
			welcomeScreen.Tablets(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMP3PlayersAddToCart(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMP3PlayersAddToCart()-------------");
			welcomeScreen.MP3Players(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMoviesAndMusicAddToCart(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMoviesAndMusicAddToCart()-------------");
			welcomeScreen.MoviesnMusic(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMobilePhonesAddToCart(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMobilePhonesAddToCart()-------------");
			welcomeScreen.MobilePhones(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheAccessoriesAddToCart(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheAccessoriesAddToCart()-------------");
			welcomeScreen.Accessories(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheComputersAddToCart(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheComputersAddToCart()-------------");
			welcomeScreen.Computers(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	} 
	
	@Test(dataProvider = "widgetData", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheZFailure(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheComputersAddToCart()-------------");
			welcomeScreen.Computers(methodName);
			welcomeScreen.billingInfo(methodName,yuiWidget);
			welcomeScreen.Registration(methodName,yuiWidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	} 
	
	
	@Test
	public void testFailureScripts(YuiWidget yuiWidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testFailureScripts()-------------");
			welcomeScreen.Failure(methodName);
			
		} catch (Exception t) {
			t.printStackTrace();

		}
	} 

	@AfterTest
	public  void tearDown() {
		welcomeScreen.closeBrowser();
	}

	
	
}