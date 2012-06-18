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
 package com.photon.phresco.Screens;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.photon.phresco.uiconstants.PhrescoHTML5widgUiConstants;

public class MenuScreen extends WebDriverAbstractBaseScreen {

PhrescoHTML5widgUiConstants phrsc;
private Log log = LogFactory.getLog(getClass());
public WebDriverBaseScreen element;

public MenuScreen(PhrescoHTML5widgUiConstants phrsc) throws Exception {
this.phrsc = phrsc;
}

public void billingInfo(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
}
waitForElementPresent(phrsc.EMAIL, methodName);
element = getXpathWebElement(phrsc.EMAIL);
System.out.println("----element ---------->1" + element);
element.type(phrsc.EMAIL_VALUE);
element = getIdWebElement(phrsc.FIRSTNAME);
System.out.println("----element-------------> 2" + element);
element.type(phrsc.FIRSTNAME_VALUE);
element = getIdWebElement(phrsc.LASTNAME);
element.type(phrsc.LASTNAME_VALUE);
element = getIdWebElement(phrsc.COMPANY);
element.type(phrsc.COMPANY);
element = getIdWebElement(phrsc.ADDRESS1);
element.type(phrsc.ADDRESS1_VALUE);
element = getIdWebElement(phrsc.ADDRESS2);
element.type(phrsc.ADDRESS2_VALUE);
element = getIdWebElement(phrsc.CITY);
element.type(phrsc.CITY_VALUE);
element = getIdWebElement(phrsc.STATE);
element.type(phrsc.STATE_VALUE);
element = getIdWebElement(phrsc.POSTALCODE);
element.type(phrsc.POSTALCODE_VALUE);
element = getIdWebElement(phrsc.PHONENUMBER);
element.type(phrsc.PHONENUMBER_VALUE);
element = getIdWebElement(phrsc.CARDNUMBER);
element.type(phrsc.CARDNUMBER_VALUE);
element = getIdWebElement(phrsc.SECURITYNUMBER);
element.type(phrsc.SECURITYNUMBER_VALUE);
element = getIdWebElement(phrsc.NAMEONCARD);
element.type(phrsc.NAMEONCARD_VALUE);
waitForElementPresent(phrsc.REVIEWORDER, methodName);
element = getXpathWebElement(phrsc.REVIEWORDER);
element.click();
waitForElementPresent(phrsc.SUBMITORDER, methodName);
element = getXpathWebElement(phrsc.SUBMITORDER);
element.click();

}

public void Television(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
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
billingInfo(methodName);
}

public void Computers(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
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
billingInfo(methodName);

}

public void MobilePhones(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
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
billingInfo(methodName);

}

public void AudioDevices(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
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
billingInfo(methodName);

}

public void Cameras(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
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
billingInfo(methodName);

}

public void Tablets(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
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
billingInfo(methodName);

}

public void MoviesnMusic(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
}
waitForElementPresent(phrsc.MOVIESnMUSIC,methodName);
element = getXpathWebElement(phrsc.MOVIESnMUSIC);
element.click();
waitForElementPresent(phrsc.PROD1_DETAILS,methodName);
element = getXpathWebElement(phrsc.PROD1_DETAILS);
element.click();
waitForElementPresent(phrsc.DET_ADDTOCART,methodName);
element = getXpathWebElement(phrsc.DET_ADDTOCART);
element.click();
waitForElementPresent(phrsc.CHECKOUT,methodName);
element = getXpathWebElement(phrsc.CHECKOUT);
element.click();
billingInfo(methodName);

}

public void VideoGames(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
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
billingInfo(methodName);
}

public void MP3Players(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
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
billingInfo(methodName);
}

public void Accessories(String methodName) throws Exception {

if (StringUtils.isEmpty(methodName)) {
methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
}
waitForElementPresent(phrsc.MORE, methodName);
element = getXpathWebElement(phrsc.MORE);
element.click();
waitForElementPresent(phrsc.ACCESSORIES, methodName);
element = getXpathWebElement(phrsc.ACCESSORIES);
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
billingInfo(methodName);

}
}
