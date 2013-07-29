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
package com.photon.phresco.Screens;

import java.awt.AWTException;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Function;
import com.photon.phresco.model.YuiWidgetsData.YuiWidget;
import com.photon.phresco.model.YuiWidgetsData.YuiWidget.BillingInfoPage;
import com.photon.phresco.model.YuiWidgetsData.YuiWidget.CardInfoPage;
import com.photon.phresco.model.YuiWidgetsData.YuiWidget.Registration;
import com.photon.phresco.selenium.util.Constants;
import com.photon.phresco.selenium.util.GetCurrentDir;
import com.photon.phresco.selenium.util.ScreenActionFailedException;
import com.photon.phresco.selenium.util.ScreenException;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;



public class BaseScreen {

	private  WebDriver driver;
	private ChromeDriverService chromeService;
	private  Log log = LogFactory.getLog("BaseScreen");
	private WebElement element;
	private UIConstants uiConstants;
	private  PhrescoUiConstants phrsc;
	DesiredCapabilities capabilities;

	// private Log log = LogFactory.getLog(getClass());

	public BaseScreen() {

	}

	public BaseScreen(String selectedBrowser,String selectedPlatform, String applicationURL,
			String applicationContext, 
			UIConstants uiConstants) throws AWTException, IOException, ScreenActionFailedException {

		
		this.uiConstants = uiConstants;
		
		try {
			instantiateBrowser(selectedBrowser, selectedPlatform, applicationURL, applicationContext);
		} catch (ScreenException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void instantiateBrowser(String selectedBrowser,String selectedPlatform,
			String applicationURL, String applicationContext)
					 throws ScreenException,
						MalformedURLException  {

		URL server = new URL("http://localhost:4444/wd/hub/");
		if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_CHROME)) {
			log.info(" LAUNCHING GOOGLECHROME ");
			try {
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("chrome");
				
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_IE)) {
			log.info(" LAUNCHING INTERNET EXPLORE ");
			try {
				capabilities = new DesiredCapabilities();
				capabilities.setJavascriptEnabled(true);
				capabilities.setBrowserName("iexplorer");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_OPERA)) {
			log.info(" LAUNCHING OPERA ");
			try {

				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("opera");
				capabilities.setCapability("opera.autostart ", true);
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_SAFARI)) {
			log.info(" LAUNCHING SAFARI ");
			try {

				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("safari");
				capabilities.setCapability("safari.autostart ", true);
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_FIREFOX)) {
			log.info(" LAUNCHING FIREFOX ");
			capabilities = new DesiredCapabilities();
			capabilities.setBrowserName("firefox");

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_HEADLESS)) {
			log.info(" LAUNCHING HTMLUNIT ");
			capabilities = new DesiredCapabilities();
			capabilities.setBrowserName("htmlunit");

		} else if (selectedBrowser.equalsIgnoreCase(Constants.IPHONE_WEBDRIVER)) {
			try {
				log.info(" LAUNCHING IPHONE DRIVER");
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("iPhone");
				capabilities.setJavascriptEnabled(true);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		else {
			throw new ScreenException(
					" Only FireFox,InternetExplore Chrome ,Htmlunit and iPhoneWebdriver works");
		}

		/**
		 * These 3 steps common for all the browsers
		 */

		

		if (selectedPlatform.equalsIgnoreCase("WINDOWS")) {
			capabilities.setCapability(CapabilityType.PLATFORM,
					Platform.WINDOWS);
		} else if (selectedPlatform.equalsIgnoreCase("LINUX")) {
			capabilities.setCapability(CapabilityType.PLATFORM, Platform.LINUX);
		} else if (selectedPlatform.equalsIgnoreCase("MAC")) {
			capabilities.setCapability(CapabilityType.PLATFORM, Platform.MAC);
		}
		driver = new RemoteWebDriver(server, capabilities);
		windowResize();
		driver.navigate().to(applicationURL + applicationContext);

	}

	

	public void windowResize() {
		phrsc = new PhrescoUiConstants();
		String resolution = phrsc.getResolution();
		if (resolution != null) {
			String[] tokens = resolution.split("x");
			String resolutionX = tokens[0];
			String resolutionY = tokens[1];
			int x = Integer.parseInt(resolutionX);
			int y = Integer.parseInt(resolutionY);
			Dimension screenResolution = new Dimension(x, y);
			driver.manage().window().setSize(screenResolution);
		} else {
			driver.manage().window().maximize();
		}
	}

	public void closeBrowser() {
		log.info(" BROWSER CLOSING ");
		if (driver != null) {
			driver.quit();
			if (chromeService != null) {
				chromeService.stop();
			}
		}

	}

	public String getChromeLocation() {
		log.info("getChromeLocation:*****CHROME TARGET LOCATION FOUND***");
		String directory = System.getProperty("user.dir");
		String targetDirectory = getChromeFile();
		String location = directory + targetDirectory;
		return location;
	}

	public String getChromeFile() {
		if (System.getProperty("os.name").startsWith(Constants.WINDOWS_OS)) {
			log.info(" WINDOWS MACHINE FOUND ");
			return Constants.WINDOWS_DIRECTORY + "/chromedriver.exe";
		} else if (System.getProperty("os.name").startsWith(Constants.LINUX_OS)) {
			log.info("LINUX MACHINE FOUND");
			return Constants.LINUX_DIRECTORY_64 + "/chromedriver";
		} else if (System.getProperty("os.name").startsWith(Constants.MAC_OS)) {
			log.info("MAC MACHINE FOUND ");
			return Constants.MAC_DIRECTORY + "/chromedriver";
		} else {
			throw new NullPointerException(" PLATFORM NOT FOUND ");
		}

	}

	public void getXpathWebElement(String xpath) throws Exception {
		log.info(" ENTERING XPATH WEBELEMENT ");
		try {

			element = driver.findElement(By.xpath(xpath));

		} catch (Throwable t) {
			log.info("THROWABLE EXCEPTION IN GETXPATHWEBELEMENT "+ t.getMessage());


		}

	}

	public void getIdWebElement(String id) throws ScreenException {
		log.info(" ENTERING ID WEBELEMENT ");
		try {
			element = driver.findElement(By.id(id));

		} catch (Throwable t) {
			log.info("THROWABLE EXCEPTION IN GETIDWEBELEMENT "+ t.getMessage());


		}

	}

	public void getcssWebElement(String selector) throws ScreenException {
		log.info(" ENTERING CSS WEBELEMENT ");
		try {
			element = driver.findElement(By.cssSelector(selector));

		} catch (Throwable t) {
			log.info("THROWABLE EXCEPTION IN GETCSSWEBELEMENT "+ t.getMessage());

		}

	}

	/**
	 * This method waits for presence of specific xpath or Id of the Web element
	 * and takes screen shot if it is not available
	 * 
	 * @param locator
	 *            It is the Identifier of the UI object
	 * 
	 * @param methodName
	 *            It stores screenshot in the method Name from which the call is
	 *            triggered
	 * 
	 * @param waitingTime
	 *            It is the specifies time to wait
	 */
	public void waitForElementPresent(String locator, String methodName) throws IOException, Exception {
		try {

			log.info("ENTERING WAIT FOR ELEMENT PRESENT");
			By by = By.xpath(locator);
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(presenceOfElementLocated(by));
		}

		catch (Exception e) {
			log.info("PRESENCE OF ELEMENT LOCATED" + e.getMessage());
			captureScreenShot(methodName);
			Assert.assertNull(e);

		}
	}

	Function<WebDriver, WebElement> presenceOfElementLocated(final By locator) {
		log.info("ENTERING PRESENCE OF ELEMENT LOCATED");
		return new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver driver) {
				log.info(" WAITING FOR ELEMENT TO PRESENT ");
				return driver.findElement(locator);

			}

		};

	}
	/**
	 * It will capture the ScreenShot with the given name
	 * 
	 * @param methodName
	 *            It stores screenshot in the method Name from which the call is
	 *            triggered
	 */
	public void captureScreenShot(String methodName) {
		log.info("ENTERING IN CAPTURE SCREENSHOT ");
		WebDriver augmentedDriver = new Augmenter().augment(driver);
		File screenshot = ((TakesScreenshot) augmentedDriver)
				.getScreenshotAs(OutputType.FILE);
		try {

			FileUtils.copyFile(screenshot,
					new File(GetCurrentDir.getCurrentDirectory()
							+ File.separator + methodName + ".png"));
		} catch (Exception e1) {
			log.info("EXCEPTION IN CAPTURE SCREENSHOT " + e1.getMessage());
		}
	}
	
	/**
	 * This method is to click on a particular Web element
	 */
	public void click() throws Exception {
		log.info("ENTERING CLICK OPERATION");
		try {
			element.click();
		} catch (Throwable t) {
			log.info("THROWABLE EXCEPTION IN CLICK" + t.getMessage());
		}

	}

	/**
	 * This method is to clear a particular Text from the Application UI
	 */
	public void clear() throws Exception {
		log.info("ENTERING CLEAR OPERATION");
		try {
			element.clear();
		} catch (Throwable t) {
			log.info("THROWABLE EXCEPTION IN CLEAR" + t.getMessage());
		}

	}

	/**
	 * This method is to verify the presence of particular Text.It will capture
	 * screenshot if the given text is not present
	 * 
	 * @param text
	 *            The text to be found in the UI
	 * 
	 * @param methodName
	 *            It stores screenshot in the method Name from which the call is
	 *            triggered
	 * 
	 * @throws InterruptedException
	 */
	public void isTextPresent(String text, String methodName) {
		log.info("ENTERING TEXT PRESENT");
		if (text != null) {
			boolean value = driver.findElement(By.tagName("body")).getText()
					.contains(text);
			if (value) {
				Assert.assertTrue(value);
			} else if (!value) {
				captureScreenShot(methodName);
				Assert.assertTrue(value);
			}
		} else {
			throw new RuntimeException(" Text is null ");
		}

	}

	/**
	 * This method is to type a particular Text its an alternate of the type
	 * method
	 * 
	 * @param text
	 *            The text to be passed as value for the Text field in the UI
	 */
	public void sendKeys(String text) throws Exception {
		log.info("ENTERING VALUES IN TEXTBOX ");
		try {
			clear();
			element.sendKeys(text);

		} catch (Throwable t) {
			log.info("THROWABLE EXCEPTION IN SENDKEYS" + t.getMessage());
		}
	}

	/**
	 * This method is to click on the submit button
	 */
	public void submit() throws Exception {
		log.info("ENTERING SUBMIT OPERATION");
		try {
			element.submit();
		} catch (Throwable t) {
			log.info("THROWABLE EXCEPTION IN SUBMIT" + t.getMessage());
		}

	}
	

	public void Registration(String methodName,YuiWidget yuiWidget)throws Exception {
		
		Registration reg = yuiWidget.getRegistration();
		
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	
    	waitForElementPresent(uiConstants.getSignupLink(),methodName);
    	getXpathWebElement(uiConstants.getSignupLink());
    	click();
  
    	waitForElementPresent(uiConstants.getRegFirstName(),methodName);
    	getXpathWebElement(uiConstants.getRegFirstName());
    	sendKeys(reg.getFirstname());
    	
    	waitForElementPresent(uiConstants.getRegLastName(),methodName);
    	getXpathWebElement(uiConstants.getRegLastName());
    	sendKeys(reg.getLastname());
    
    	waitForElementPresent(uiConstants.getRegEmail(),methodName);
    	getXpathWebElement(uiConstants.getRegEmail());
    	sendKeys(reg.getEmail());
    	
    	waitForElementPresent(uiConstants.getRegPassword(),methodName);
    	getXpathWebElement(uiConstants.getRegPassword());
    	sendKeys(reg.getPassword());
    	
    	
    	waitForElementPresent(uiConstants.getRegPhoneNumber(),methodName);
    	getXpathWebElement(uiConstants.getRegPhoneNumber());
    	sendKeys(reg.getPhonenumber());
    
    	
    	waitForElementPresent(uiConstants.getRegSubmitButton(),methodName);
    	getXpathWebElement(uiConstants.getRegSubmitButton());
    	click();
    	Thread.sleep(2000);
    	isTextPresent(reg.getRegTextMsg(),methodName);
    	
}
    
	public void billingInfo(String methodName,YuiWidget yuiWidget) throws Exception {
		
		BillingInfoPage billInfo = yuiWidget.getBillingInfoPage();
		CardInfoPage cardInfo = yuiWidget.getCardInfoPage();

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getEmail(), methodName);
		getXpathWebElement(uiConstants.getEmail());		
		sendKeys(billInfo.getBillInfoEmailValue());
		waitForElementPresent(uiConstants.getFirstName(), methodName);
		getXpathWebElement(uiConstants.getFirstName());
		sendKeys(billInfo.getBillInfoFirstNameValue());
		waitForElementPresent(uiConstants.getLastName(), methodName);
		getXpathWebElement(uiConstants.getLastName());
		sendKeys(billInfo.getBillInfoLastNameValue());
		waitForElementPresent(uiConstants.getCompany(), methodName);
		getXpathWebElement(uiConstants.getCompany());
		sendKeys(billInfo.getBillInfoCompanyValue());
		waitForElementPresent(uiConstants.getAddress1(), methodName);
		getXpathWebElement(uiConstants.getAddress1());
		sendKeys(billInfo.getBillInfoAddress1Value());
		waitForElementPresent(uiConstants.getAddress2(), methodName);
		getXpathWebElement(uiConstants.getAddress2());
		sendKeys(billInfo.getBillInfoAddress2Value());
		waitForElementPresent(uiConstants.getCity(), methodName);
		getXpathWebElement(uiConstants.getCity());
		sendKeys(billInfo.getBillInfoCityValue());
		waitForElementPresent(uiConstants.getState(), methodName);
		getXpathWebElement(uiConstants.getState());
		sendKeys(billInfo.getBillInfoStateValue());
		
		waitForElementPresent(uiConstants.getPostalCode(), methodName);
		getXpathWebElement(uiConstants.getPostalCode());
		sendKeys(billInfo.getBillInfoPostCodeValue());
		
		waitForElementPresent(uiConstants.getPhoneNumber(), methodName);
		getXpathWebElement(uiConstants.getPhoneNumber());
		sendKeys(billInfo.getBillInfoPhoneNumberValue());
		waitForElementPresent(uiConstants.getCardNumber(), methodName);
		getXpathWebElement(uiConstants.getCardNumber());
		sendKeys(cardInfo.getCardInfoCardNumberValue());
		waitForElementPresent(uiConstants.getSecurityNumber(), methodName);
		getXpathWebElement(uiConstants.getSecurityNumber());
		sendKeys(cardInfo.getCardInfoSecurityNumberValue());
		waitForElementPresent(uiConstants.getNameCard(), methodName);
		getXpathWebElement(uiConstants.getNameCard());
		sendKeys(cardInfo.getCardInfoNameOnCardValue());
		waitForElementPresent(uiConstants.getReviewOrder(), methodName);
		getXpathWebElement(uiConstants.getReviewOrder());
		click();
		waitForElementPresent(uiConstants.getSubmitOrder(), methodName);
		getXpathWebElement(uiConstants.getSubmitOrder());
		click();

	}

	public void Television(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Television()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(
				uiConstants.getTelevision(), methodName);
		getXpathWebElement(uiConstants.getTelevision());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();
	}

	public void Computers(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Computers()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(uiConstants.getComputer(), methodName);
		getXpathWebElement(uiConstants.getComputer());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();

	}

	public void MobilePhones(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************MobilePhones()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(uiConstants.getMobile(), methodName);
		getXpathWebElement(uiConstants.getMobile());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();

	}

	public void AudioDevices(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************AudioDevices()***********Start:   ");
		waitForElementPresent(uiConstants.getAudioDevices(), methodName);
		getXpathWebElement(uiConstants.getAudioDevices());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();

	}

	public void Cameras(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Cameras()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(uiConstants.getCamera(), methodName);
		getXpathWebElement(uiConstants.getCamera());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();

	}

	public void Tablets(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Tablets()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(uiConstants.getTablets(), methodName);
		getXpathWebElement(uiConstants.getTablets());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();

	}

	public void MoviesnMusic(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************MoviesAndMusic()***********Start:");
		waitForElementPresent(uiConstants.getMovieNmusic(), methodName);
		getXpathWebElement(uiConstants.getMovieNmusic());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();

	}

	public void VideoGames(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************VideoGames()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(uiConstants.getVideoGame(), methodName);
		getXpathWebElement(uiConstants.getVideoGame());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();
	}

	public void MP3Players(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************MP3Players()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(uiConstants.getMp3Players(), methodName);
		getXpathWebElement(uiConstants.getMp3Players());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();
	}

	public void Accessories(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Accessories()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(uiConstants.getMore(), methodName);
		getXpathWebElement(uiConstants.getMore());
		click();
		waitForElementPresent(uiConstants.getAccessories(), methodName);
		getXpathWebElement(uiConstants.getAccessories());
		click();
		waitForElementPresent(uiConstants.getProd1Details(), methodName);
		getXpathWebElement(uiConstants.getProd1Details());
		click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();

	}
	
	public void Failure(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Failure()***********Start:");
		Thread.sleep(2000);	
	
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		click();

	}

	
//	public void isTextPresent(String text) {
//		if (text!= null){
//		boolean value=driver.findElement(By.tagName("body")).getText().contains(text);	
//		Assert.assertTrue(value);   
//	    
//	    }
//		else
//		{
//			throw new RuntimeException("---- Text not existed----");
//		}
//	    
//	    
//	    
//	}	

//	public void isElementPresent(String element) throws Exception {
//
//		WebElement testElement = getXpathWebElement(element);
//		if (testElement.isDisplayed() && testElement.isEnabled()) {
//
//			log.info("---Element found---");
//		} else {
//			throw new RuntimeException("--Element not found---");
//			// Assert.fail("--Element is not present--"+testElement);
//
//		}
//
//	}

}
