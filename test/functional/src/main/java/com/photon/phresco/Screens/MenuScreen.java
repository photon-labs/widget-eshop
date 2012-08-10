 package com.photon.phresco.Screens;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.WidgetData;

public class MenuScreen extends WebDriverAbstractBaseScreen {

UIConstants phrsc;
private Log log = LogFactory.getLog(getClass());
public WebDriverBaseScreen element;

public MenuScreen(UIConstants phrsc) throws Exception {
this.phrsc = phrsc;
}

public void billingInfo(WidgetData yuiwidg, String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.EMAIL, methodName);
element = getXpathWebElement(phrsc.EMAIL);
//System.out.println("----element ---------->1" + element);
element.type(yuiwidg.EMAIL_VALUE);
element = getIdWebElement(phrsc.FIRSTNAME);
//System.out.println("----element-------------> 2" + element);
element.type(yuiwidg.FIRSTNAME_VALUE);
element = getIdWebElement(phrsc.LASTNAME);
element.type(yuiwidg.LASTNAME_VALUE);
element = getIdWebElement(phrsc.COMPANY);
element.type(phrsc.COMPANY);
element = getIdWebElement(phrsc.ADDRESS1);
element.type(yuiwidg.ADDRESS1_VALUE);
element = getIdWebElement(phrsc.ADDRESS2);
element.type(yuiwidg.ADDRESS2_VALUE);
element = getIdWebElement(phrsc.CITY);
element.type(yuiwidg.CITY_VALUE);
element = getIdWebElement(phrsc.STATE);
element.type(yuiwidg.STATE_VALUE);
element = getIdWebElement(phrsc.POSTALCODE);
element.type(yuiwidg.POSTALCODE_VALUE);
element = getIdWebElement(phrsc.PHONENUMBER);
element.type(yuiwidg.PHONENUMBER_VALUE);
element = getIdWebElement(phrsc.CARDNUMBER);
element.type(yuiwidg.CARDNUMBER_VALUE);
element = getIdWebElement(phrsc.SECURITYNUMBER);
element.type(yuiwidg.SECURITYNUMBER_VALUE);
element = getIdWebElement(phrsc.NAMEONCARD);
element.type(yuiwidg.NAMEONCARD_VALUE);
waitForElementPresent(phrsc.REVIEWORDER, methodName);
element = getXpathWebElement(phrsc.REVIEWORDER);
element.click();
waitForElementPresent(phrsc.SUBMITORDER, methodName);
element = getXpathWebElement(phrsc.SUBMITORDER);
element.click();

}

public void Television(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
log.info("Entering :***************Television()***********Start:");
waitForElementPresent(phrsc.TELEVISION, methodName);
element = getXpathWebElement(phrsc.TELEVISION);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();
}

public void Computers(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.COMPUTERS, methodName);
element = getXpathWebElement(phrsc.COMPUTERS);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();

}

public void MobilePhones(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.MOBILE, methodName);
element = getXpathWebElement(phrsc.MOBILE);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();

}

public void AudioDevices(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.AUDIO_DEVICES, methodName);
element = getXpathWebElement(phrsc.AUDIO_DEVICES);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();

}

public void Cameras(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.CAMERAS, methodName);
element = getXpathWebElement(phrsc.CAMERAS);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();

}

public void Tablets(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.TABLETS, methodName);
element = getXpathWebElement(phrsc.TABLETS);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();

}

public void MoviesnMusic(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.MOVIESnMUSIC,methodName);
element = getXpathWebElement(phrsc.MOVIESnMUSIC);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART,methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART,methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT,methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();

}

public void VideoGames(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.VIDEOGAMES, methodName);
element = getXpathWebElement(phrsc.VIDEOGAMES);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();
}

public void MP3Players(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.MP3PLAYERS, methodName);
element = getXpathWebElement(phrsc.MP3PLAYERS);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();
}

public void Accessories(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
}
waitForElementPresent(phrsc.MORE, methodName);
element = getXpathWebElement(phrsc.MORE);
element.click();
waitForElementPresent(phrsc.ACCESSORIES, methodName);
element = getXpathWebElement(phrsc.ADDRESS1);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS, methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART, methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT, methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();

}
}
