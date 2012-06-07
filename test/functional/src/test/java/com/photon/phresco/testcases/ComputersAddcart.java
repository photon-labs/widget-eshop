package com.photon.phresco.testcases;

import java.io.IOException;
import junit.framework.TestCase;
import org.junit.Test;
import com.photon.phresco.Screens.MenuScreen;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.PhrescoHTML5widgUiConstants;
import com.thoughtworks.selenium.Selenium;

public class ComputersAddcart extends TestCase {

	private PhrescoHTML5widgUiConstants phrsc;
	private Selenium selenium;
	private int SELENIUM_PORT;
	private WelcomeScreen wel;
	private String browserAppends;
	String methodName;

	@Test
	public void testComp() throws InterruptedException, IOException, Exception {

		try {

			phrsc = new PhrescoHTML5widgUiConstants();
			String serverURL = phrsc.PROTOCOL + "://" + phrsc.HOST + ":"
					+ phrsc.PORT + "/";
			browserAppends = "*" + phrsc.BROWSER;
			assertNotNull("Browser name should not be null", browserAppends);
			SELENIUM_PORT = Integer.parseInt(phrsc.SERVER_PORT);
			assertNotNull("selenium-port number should not be null",
					SELENIUM_PORT);
			wel = new WelcomeScreen(phrsc.SERVER_HOST, SELENIUM_PORT,
					browserAppends, serverURL, phrsc.SPEED, phrsc.CONTEXT);
			assertNotNull(wel);
			MenuScreen menu = wel.menuScreen(phrsc);
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
			System.out.println("methodName = " + methodName);
			menu.Computers(methodName);
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