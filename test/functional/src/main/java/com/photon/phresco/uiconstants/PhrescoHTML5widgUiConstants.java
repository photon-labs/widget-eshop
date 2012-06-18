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
package com.photon.phresco.uiconstants;


import java.lang.reflect.Field;

public class PhrescoHTML5widgUiConstants {
	

	private ReadXMLFile readXml;
	
	public String CONTEXT = "context";
	public String SERVER_HOST ="server.host";
	public String HOST = "host";
	public String SERVER_PORT = "server.port";
	public String BROWSER = "Browser";
	public String PROTOCOL = "protocol";
	public String PORT= "port";
	public String SPEED = "speed";
	public String TELEVISION = "televisiontab";
	public String COMPUTERS = "computerstab";
	public String MOBILE = "mobiletab";
	public String AUDIO_DEVICES = "audioDevicestab";
	public String CAMERAS = "camerastab";
	public String TABLETS = "tabletstab";
	public String MOVIESnMUSIC = "moviesNmusictab";
	public String VIDEOGAMES = "videoGamestab";
	public String MP3PLAYERS = "mp3Playerstab";
	public String ACCESSORIES = "accessoriestab";
	public String MORE = "moretab";
	//public String SEARCH = "search";
	public String HOME = "hometab";
	public String PROD1_DETAILS="prod1Details";
	//public String PROD1_AUDIO="prod1AudioDevices";
	public String UPDATECART="updateCart";
	public String ADDTOCART="addToCart"; 
	public String DET_ADDTOCART="prod1DetailAddToCart";
	public String CHECKOUT="checkout";
	public String REVIEWORDER="reviewOrder";
	public String SUBMITORDER="submitOrder";
	public String EMAIL="billInfoEmail";
	public String EMAIL_VALUE="billInfoEmailValue";
	public String FIRSTNAME="billInfoFirstName";
	public String FIRSTNAME_VALUE="billInfoFirstNameValue";
	public String LASTNAME="billInfoLastName";
	public String LASTNAME_VALUE="billInfoLastNameValue";
	public String COMPANY="billInfoCompany";
	public String COMPANY_VALUE="billInfoCompanyValue";
	public String ADDRESS1="billInfoAddress1";
	public String ADDRESS1_VALUE="billInfoAddress1Value";
	public String ADDRESS2="billInfoAddress2";
	public String ADDRESS2_VALUE="billInfoAddress2Value";
	public String CITY="billInfoCity";
	public String CITY_VALUE="billInfoCityValue";
	public String STATE="billInfoState";
	public String STATE_VALUE="billInfoStateValue";
	public String POSTALCODE="billInfoPostCode";
	public String POSTALCODE_VALUE="billInfoPostCodeValue";
	public String PHONENUMBER="billInfoPhoneNumber";
	public String PHONENUMBER_VALUE="billInfoPhoneNumberValue";
	public String CARDTYPE="cardInfoCardType";
	public String CARDNUMBER="cardInfoCardNumber";
	public String CARDNUMBER_VALUE="cardInfoCardNumberValue";
	public String SECURITYNUMBER="cardInfoSecurityNumber";
	public String SECURITYNUMBER_VALUE="cardInfoSecurityNumberValue";
	public String NAMEONCARD="cardInfoNameOnCard";
	public String NAMEONCARD_VALUE="cardInfoNameOnCardValue";
	public String COMMENTS="billInfoComments";
	public String COMMENTS_VALUE="billInfoCommentsValue";
	
	public PhrescoHTML5widgUiConstants() {
		try {
			readXml = new ReadXMLFile();
			Field[] arrayOfField1 = super.getClass().getFields();
			Field[] arrayOfField2 = arrayOfField1;
			int i = arrayOfField2.length;
			for (int j = 0; j < i; ++j) {
				Field localField = arrayOfField2[j];
				Object localObject = localField.get(this);
				if (localObject instanceof String)
					localField
							.set(this, readXml.getValue((String) localObject));

			}
		} catch (Exception localException) {
			throw new RuntimeException("Loading "
					+ super.getClass().getSimpleName() + " failed",
					localException);
		}
	}
}
