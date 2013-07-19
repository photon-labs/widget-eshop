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

import com.photon.phresco.model.YuiWidgetsData.YuiWidget;
import com.photon.phresco.model.YuiWidgetsData.YuiWidget.BillingInfoPage;
import com.photon.phresco.model.YuiWidgetsData.YuiWidget.CardInfoPage;
import com.photon.phresco.model.YuiWidgetsData.YuiWidget.Registration;

import com.google.common.base.Function;
import com.photon.phresco.selenium.util.Constants;
import com.photon.phresco.selenium.util.GetCurrentDir;
import com.photon.phresco.selenium.util.ScreenActionFailedException;
import com.photon.phresco.selenium.util.ScreenException;
import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.WidgetData;
import com.photon.phresco.uiconstants.PhrescoUiConstants;



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
			String applicationContext, WidgetData yuiWidgetConstants,
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
			log.info("-------------***LAUNCHING GOOGLECHROME***--------------");
			try {

				/*
				 * chromeService = new ChromeDriverService.Builder()
				 * .usingChromeDriverExecutable( new File(getChromeLocation()))
				 * .usingAnyFreePort().build(); log.info(
				 * "-------------***LAUNCHING GOOGLECHROME***--------------");
				 * chromeService.start();
				 */
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("chrome");
				
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_IE)) {
			log.info("---------------***LAUNCHING INTERNET EXPLORE***-----------");
			capabilities = new DesiredCapabilities();
			capabilities.setJavascriptEnabled(true);
			capabilities.setBrowserName("iexplorer");
			
		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_FIREFOX)) {
			log.info("-------------***LAUNCHING FIREFOX***--------------");
			capabilities = new DesiredCapabilities();
			capabilities.setBrowserName("firefox");
			System.out.println("-----------checking the firefox-------");
		}
			
			else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_OPERA)) {
				log.info("-------------***LAUNCHING OPERA***--------------");
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("opera");
				capabilities.setCapability("opera.autostart ",true);

			
				System.out.println("-----------checking the OPERA-------");
			

			} 
		
		
		
			else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_SAFARI)) {
				log.info("-------------***LAUNCHING SAFARI***--------------");
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("safari");
				capabilities.setCapability("safari.autostart ", true);

				System.out.println("-----------checking the SAFARI-------");


			// break;
			// driver = new RemoteWebDriver(server, capabilities);

		}else if (selectedBrowser.equalsIgnoreCase(Constants.IPHONE_WEBDRIVER)) {
			try{
			log.info("-------------***LAUNCHING iPhoneWebDriver***--------------");
			capabilities = new DesiredCapabilities();
			capabilities.setBrowserName("iPhone");
			capabilities.setJavascriptEnabled(true);
			System.out.println("-----------Checking in iPhoneWebDriver-------");
			}
			catch (Exception e)
			{
				e.printStackTrace();
		}
    }

			else {
			throw new ScreenException(
					"------Only FireFox,InternetExplore ,Chrome and IphoneWebdriver works----------");
		}

		/**
		 * These 3 steps common for all the browsers
		 */

		
		if (selectedPlatform.equalsIgnoreCase("WINDOWS")) {
			capabilities.setCapability(CapabilityType.PLATFORM,
					Platform.WINDOWS);
			// break;
		} else if (selectedPlatform.equalsIgnoreCase("LINUX")) {
			capabilities.setCapability(CapabilityType.PLATFORM, Platform.LINUX);
			// break;
		} else if (selectedPlatform.equalsIgnoreCase("MAC")) {
			capabilities.setCapability(CapabilityType.PLATFORM, Platform.MAC);
			// break;
		}
		driver = new RemoteWebDriver(server, capabilities);
		    //windowResize();
		driver.get(applicationURL + applicationContext);
		

	}
	
	public  void windowResize()
	{
		phrsc = new PhrescoUiConstants();
		String resolution = phrsc.getResolution();		
		if(resolution!=null)
		{
		String[] tokens = resolution.split("x");
		String resolutionX=tokens[0];
		String resolutionY=tokens[1];		
		int x= Integer.parseInt(resolutionX);
		int y= Integer.parseInt(resolutionY);
		Dimension screenResolution = new Dimension(x,y);
		driver.manage().window().setSize(screenResolution);
		}
		else{
			driver.manage().window().maximize();
		}
	}
	/*
	 * public static void windowMaximizeFirefox() {
	 * driver.manage().window().setPosition(new Point(0, 0)); java.awt.Dimension
	 * screenSize = java.awt.Toolkit.getDefaultToolkit() .getScreenSize();
	 * Dimension dim = new Dimension((int) screenSize.getWidth(), (int)
	 * screenSize.getHeight()); driver.manage().window().setSize(dim); }
	 */

	public void closeBrowser() {
		log.info("-------------***BROWSER CLOSING***--------------");
		if (driver != null) {

			driver.quit();
		}
		if (chromeService != null) {
			chromeService.stop();
		}
	}

	public  String getChromeLocation() {

		log.info("getChromeLocation:*****CHROME TARGET LOCATION FOUND***");
		String directory = System.getProperty("user.dir");
		String targetDirectory = getChromeFile();
		String location = directory + targetDirectory;
		return location;
	}

	public  String getChromeFile() {
		if (System.getProperty("os.name").startsWith(Constants.WINDOWS_OS)) {
			log.info("*******WINDOWS MACHINE FOUND*************");

			return Constants.WINDOWS_DIRECTORY + "/chromedriver.exe";
		} else if (System.getProperty("os.name").startsWith(Constants.LINUX_OS)) {
			log.info("*******LINUX MACHINE FOUND*************");
			return Constants.LINUX_DIRECTORY_64 + "/chromedriver";
		} else if (System.getProperty("os.name").startsWith(Constants.MAC_OS)) {
			log.info("*******MAC MACHINE FOUND*************");
			return Constants.MAC_DIRECTORY + "/chromedriver";
		} else {
			throw new NullPointerException("******PLATFORM NOT FOUND********");
		}

	}

	public WebElement getXpathWebElement(String xpath) throws Exception {
		log.info("Entering:-----getXpathWebElement-------");
		try {

			element = driver.findElement(By.xpath(xpath));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getXpathWebElement()-----------");
			t.printStackTrace();

		}
		return element;
	}

	public void getIdWebElement(String id) throws ScreenException {
		log.info("Entering:---getIdWebElement-----");
		try {
			element = driver.findElement(By.id(id));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getIdWebElement()----------");
			t.printStackTrace();

		}

	}

	public void getcssWebElement(String selector) throws ScreenException {
		log.info("Entering:----------getIdWebElement----------");
		try {
			element = driver.findElement(By.cssSelector(selector));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getIdWebElement()--------");

			t.printStackTrace();

		}

	}

	public void waitForElementPresent(String locator, String methodName)
			throws IOException, Exception {
		try {
			log.info("Entering:--------waitForElementPresent()--------");
			By by = By.xpath(locator);
			WebDriverWait wait = new WebDriverWait(driver, 10);
			log.info("Waiting:--------One second----------");
			wait.until(presenceOfElementLocated(by));
		}

		catch (Exception e) {
			log.info("presenceOfElementLocated" + e.getMessage());

			WebDriver augmentedDriver = new Augmenter().augment(driver);
			File screenshot = ((TakesScreenshot) augmentedDriver)
					.getScreenshotAs(OutputType.FILE);

			try {

				FileUtils.copyFile(screenshot,
						new File(GetCurrentDir.getCurrentDirectory() + File.separator
								+ methodName + ".png"));
			} catch (Exception e1) {
				log.info("presenceOfElementLocated" + e1.getMessage());
			}
			Assert.assertNull(e);

		}
	}

	Function<WebDriver, WebElement> presenceOfElementLocated(final By locator) {
		log.info("Entering:------presenceOfElementLocated()-----Start");
		return new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver driver) {
				log.info("Entering:*********presenceOfElementLocated()******End");
				return driver.findElement(locator);

			}

		};

	}

	public void Registration(String methodName,YuiWidget yuiWidget)throws Exception {
		
		Registration reg = yuiWidget.getRegistration();
		
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	
    	waitForElementPresent(uiConstants.getSignupLink(),methodName);
    	getXpathWebElement(uiConstants.getSignupLink());
    	element.click();
  
    	waitForElementPresent(uiConstants.getRegFirstName(),methodName);
    	getXpathWebElement(uiConstants.getRegFirstName());
    	element.sendKeys(reg.getFirstname());
    	
    	waitForElementPresent(uiConstants.getRegLastName(),methodName);
    	getXpathWebElement(uiConstants.getRegLastName());
    	element.sendKeys(reg.getLastname());
    
    	waitForElementPresent(uiConstants.getRegEmail(),methodName);
    	getXpathWebElement(uiConstants.getRegEmail());
    	element.sendKeys(reg.getEmail());
    	
    	waitForElementPresent(uiConstants.getRegPassword(),methodName);
    	getXpathWebElement(uiConstants.getRegPassword());
    	element.sendKeys(reg.getPassword());
    	
    	
    	waitForElementPresent(uiConstants.getRegPhoneNumber(),methodName);
    	getXpathWebElement(uiConstants.getRegPhoneNumber());
    	element.sendKeys(reg.getPhonenumber());
    
    	
    	waitForElementPresent(uiConstants.getRegSubmitButton(),methodName);
    	getXpathWebElement(uiConstants.getRegSubmitButton());
    	element.click();
    	Thread.sleep(2000);
    	isTextPresent(reg.getRegTextMsg());
    	
}
    
	public void billingInfo(String methodName,YuiWidget yuiWidget) throws Exception {
		
		BillingInfoPage billInfo = yuiWidget.getBillingInfoPage();
		CardInfoPage cardInfo = yuiWidget.getCardInfoPage();

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(this.uiConstants.getEmail(), methodName);
		getXpathWebElement(this.uiConstants.getEmail());		
		element.sendKeys(billInfo.getBillInfoEmailValue());
		
		getIdWebElement(this.uiConstants.getFirstName());
		
		element.sendKeys(billInfo.getBillInfoFirstNameValue());
		getIdWebElement(this.uiConstants.getLastName());
		element.sendKeys(billInfo.getBillInfoLastNameValue());
		getIdWebElement(this.uiConstants.getCompany());
		element.sendKeys(billInfo.getBillInfoCompanyValue());
		getIdWebElement(this.uiConstants.getAddress1());
		element.sendKeys(billInfo.getBillInfoAddress1Value());
		getIdWebElement(this.uiConstants.getAddress2());
		element.sendKeys(billInfo.getBillInfoAddress2Value());
		getIdWebElement(this.uiConstants.getCity());
		element.sendKeys(billInfo.getBillInfoCityValue());
		getIdWebElement(this.uiConstants.getState());
		element.sendKeys(billInfo.getBillInfoStateValue());
		getIdWebElement(this.uiConstants.getPostalCode());
		element.sendKeys(billInfo.getBillInfoPostCodeValue());
		getIdWebElement(this.uiConstants.getPhoneNumber());
		element.sendKeys(billInfo.getBillInfoPhoneNumberValue());
		getIdWebElement(this.uiConstants.getCardNumber());
		element.sendKeys(cardInfo.getCardInfoCardNumberValue());
		getIdWebElement(this.uiConstants.getSecurityNumber());
		element.sendKeys(cardInfo.getCardInfoSecurityNumberValue());
		getIdWebElement(this.uiConstants.getNameCard());
		element.sendKeys(cardInfo.getCardInfoNameOnCardValue());
		waitForElementPresent(this.uiConstants.getReviewOrder(), methodName);
		getXpathWebElement(this.uiConstants.getReviewOrder());
		element.click();
		waitForElementPresent(this.uiConstants.getSubmitOrder(), methodName);
		getXpathWebElement(this.uiConstants.getSubmitOrder());
		element.click();

	}

	public void Television(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Television()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getTelevision(), methodName);
		getXpathWebElement(this.uiConstants.getTelevision());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();
	}

	public void Computers(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Computers()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getComputer(), methodName);
		getXpathWebElement(this.uiConstants.getComputer());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();

	}

	public void MobilePhones(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************MobilePhones()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getMobile(), methodName);
		getXpathWebElement(this.uiConstants.getMobile());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();

	}

	public void AudioDevices(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************AudioDevices()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getAudioDevices(), methodName);
		getXpathWebElement(this.uiConstants.getAudioDevices());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();

	}

	public void Cameras(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Cameras()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getCamera(), methodName);
		getXpathWebElement(this.uiConstants.getCamera());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();

	}

	public void Tablets(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Tablets()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getTablets(), methodName);
		getXpathWebElement(this.uiConstants.getTablets());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();

	}

	public void MoviesnMusic(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************MoviesAndMusic()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getMovieNmusic(), methodName);
		getXpathWebElement(this.uiConstants.getMovieNmusic());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();

	}

	public void VideoGames(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************VideoGames()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getVideoGame(), methodName);
		getXpathWebElement(this.uiConstants.getVideoGame());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();
	}

	public void MP3Players(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************MP3Players()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getMp3Players(), methodName);
		getXpathWebElement(this.uiConstants.getMp3Players());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();
	}

	public void Accessories(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Accessories()***********Start:");
		Thread.sleep(2000);
		waitForElementPresent(this.uiConstants.getMore(), methodName);
		getXpathWebElement(this.uiConstants.getMore());
		element.click();
		waitForElementPresent(this.uiConstants.getAccessories(), methodName);
		getXpathWebElement(this.uiConstants.getAccessories());
		element.click();
		waitForElementPresent(this.uiConstants.getProd1Details(), methodName);
		getXpathWebElement(this.uiConstants.getProd1Details());
		element.click();
		waitForElementPresent(this.uiConstants.getDetAddToCart(), methodName);
		getXpathWebElement(this.uiConstants.getDetAddToCart());
		element.click();
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();

	}
	
	public void Failure(String methodName) throws Exception {

		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		log.info("Entering :***************Failure()***********Start:");
		Thread.sleep(2000);	
	
		waitForElementPresent(this.uiConstants.getCheckOut(), methodName);
		getXpathWebElement(this.uiConstants.getCheckOut());
		element.click();

	}

	public void click() throws ScreenException {
		log.info("Entering:********click operation start********");
		try {
			element.click();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********click operation end********");

	}

	public void clear() throws ScreenException {
		log.info("Entering:********clear operation start********");
		try {
			element.clear();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********clear operation end********");

	}

	public void sendKeys(String text) throws ScreenException {
		log.info("Entering:********enterText operation start********");
		try {
			clear();
			element.sendKeys(text);

		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********enterText operation end********");
	}

	public void submit() throws ScreenException {
		log.info("Entering:********submit operation start********");
		try {
			element.submit();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********submit operation end********");

	}

	public void isTextPresent(String text) {
		if (text!= null){
		boolean value=driver.findElement(By.tagName("body")).getText().contains(text);	
		Assert.assertTrue(value);   
	    
	    }
		else
		{
			throw new RuntimeException("---- Text not existed----");
		}
	    
	    
	    
	}	

	public void isElementPresent(String element) throws Exception {

		WebElement testElement = getXpathWebElement(element);
		if (testElement.isDisplayed() && testElement.isEnabled()) {

			log.info("---Element found---");
		} else {
			throw new RuntimeException("--Element not found---");
			// Assert.fail("--Element is not present--"+testElement);

		}

	}

}
