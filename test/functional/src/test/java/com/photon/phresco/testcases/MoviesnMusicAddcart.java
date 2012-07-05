package com.photon.phresco.testcases;

import java.io.IOException;

import junit.framework.TestCase;
import org.junit.Test;
import com.photon.phresco.Screens.MenuScreen;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.YUIWidgetData;
import com.thoughtworks.selenium.Selenium;

public class MoviesnMusicAddcart extends TestCase {

	
	private UIConstants phrsc;
	private PhrescoUiConstants phr;
	private YUIWidgetData yuiwidg;
	private Selenium selenium;
	private WelcomeScreen wel;
	private int SELENIUM_PORT;
	private String browserAppends;
	String methodName;
	
	

	@Test
	public void testMoviesnMusic() throws InterruptedException, IOException, Exception {

		try {

			phrsc = new UIConstants();
			yuiwidg = new YUIWidgetData();
			String serverURL = phr.PROTOCOL + "://"
					+ phr.HOST + ":"
					+ phr.PORT + "/";
			browserAppends = "*" + phr.BROWSER;
			assertNotNull("Browser name should not be null",browserAppends);
			SELENIUM_PORT = Integer.parseInt(phr.SERVER_PORT);
			assertNotNull("selenium-port number should not be null",
					SELENIUM_PORT);
			wel=new WelcomeScreen(phr.SERVER_HOST, SELENIUM_PORT,
					browserAppends, serverURL, phr.SPEED,
					phr.CONTEXT );
			assertNotNull(wel);
			MenuScreen menu = wel.menuScreen(phrsc);
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
			System.out.println("methodName = " + methodName);
			menu.MoviesnMusic(methodName);
			menu.billingInfo(yuiwidg, methodName);
		} catch (Exception t) {
			t.printStackTrace();
			System.out.println("ScreenCaptured");
			selenium.captureEntirePageScreenshot("\\WelPageFails.png",
					"background=#CCFFDD");
		}
	}

	public void setUp() throws Exception {
		phr = new PhrescoUiConstants();
	}

	public void tearDown() {
		clean();
	}

	private void clean() {
		wel.closeBrowser();
	}

}