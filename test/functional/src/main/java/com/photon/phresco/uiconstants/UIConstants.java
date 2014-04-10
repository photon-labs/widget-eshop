/**
 * PHR_HTML5YUIWidget
 *
 * Copyright (C) 1999-2014 Photon Infotech Inc.
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
package com.photon.phresco.uiconstants;


import java.lang.reflect.Field;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class UIConstants {
	


	private Log log = LogFactory.getLog("JQueryUIConstantsWidgetData");

   //registration
	public String signupLink="signup_link";
	public String regFirstName ="regfirstname";
	public String regLastName="reglastname";
	public String regEmail="regemail";
	public String regPassword="regpassword";
	public String regPhoneNumber="regphonenumber";
	public String regSubmitButton="regsubmitbutton";
	
	public String television = "televisiontab";
	public String computer = "computerstab";
	public String mobile = "mobiletab";
	public String audioDevices = "audioDevicestab";
	public String camera = "camerastab";
	public String tablets = "tabletstab";
	public String movieNmusic = "moviesNmusictab";
	public String videoGame = "videoGamestab";
	public String mp3Players = "mp3Playerstab";
	public String accessories = "accessoriestab";
	public String more = "moretab";
	//public String SEARCH = "search";
	public String home = "hometab";
	public String prod1Details="prod1Details";
	//public String PROD1_AUDIO="prod1AudioDevices";
	public String updateCart="updateCart";
	public String addToCart="addToCart"; 
	public String detAddToCart="prod1DetailAddToCart";
	public String checkOut="checkout";
	public String reviewOrder="reviewOrder";
	public String submitOrder="submitOrder";
	public String email="billInfoEmail";
	public String firstName="billInfoFirstName";
	public String lastName="billInfoLastName";
	public String company="billInfoCompany";
	public String address1="billInfoAddress1";
	public String address2="billInfoAddress2";
	public String city="billInfoCity";
	public String state="billInfoState";
	public String postalCode="billInfoPostCode";
	public String phoneNumber="billInfoPhoneNumber";
	public String cardType="cardInfoCardType";
	public String cardNumber="cardInfoCardNumber";
	public String securityNumber="cardInfoSecurityNumber";
	public String nameCard="cardInfoNameOnCard";
	public String comments="billInfoComments";
	
	
	public UIConstants() {
		try {
			ReadXMLFile readXml = new ReadXMLFile();
			readXml.loadUIConstants();
			Field[] arrayOfField = this.getClass().getDeclaredFields();
			for (Field field : arrayOfField) {
				field.setAccessible(true);
				Object localObject = field.get(this);
				if (localObject instanceof String) {
					field.set(this, readXml.getValue((String) localObject));
				}
			}
		} catch (Exception localException) {
			log.info("Exception in MerchandisingUIData"
					+ localException.getMessage());
		}
	}
	
	public String getSignupLink() {
		return signupLink;
	}


	public void setSignuoLink(String signuoLink) {
		this.signupLink = signuoLink;
	}


	public String getRegFirstName() {
		return regFirstName;
	}


	public void setRegFirstName(String regFirstName) {
		this.regFirstName = regFirstName;
	}


	public String getRegLastName() {
		return regLastName;
	}


	public void setRegLastName(String regLastName) {
		this.regLastName = regLastName;
	}


	public String getRegEmail() {
		return regEmail;
	}


	public void setRegEmail(String regEmail) {
		this.regEmail = regEmail;
	}


	public String getRegPassword() {
		return regPassword;
	}


	public void setRegPassword(String regPassword) {
		this.regPassword = regPassword;
	}


	public String getRegPhoneNumber() {
		return regPhoneNumber;
	}


	public void setRegPhoneNumber(String regPhoneNumber) {
		this.regPhoneNumber = regPhoneNumber;
	}


	public String getRegSubmitButton() {
		return regSubmitButton;
	}


	public void setRegSubmitButton(String regSubmitButton) {
		this.regSubmitButton = regSubmitButton;
	}


	public String getTelevision() {
		return television;
	}


	public void setTelevision(String television) {
		this.television = television;
	}


	public String getComputer() {
		return computer;
	}


	public void setComputer(String computer) {
		this.computer = computer;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getAudioDevices() {
		return audioDevices;
	}


	public void setAudioDevices(String audioDevices) {
		this.audioDevices = audioDevices;
	}


	public String getCamera() {
		return camera;
	}


	public void setCamera(String camera) {
		this.camera = camera;
	}


	public String getTablets() {
		return tablets;
	}


	public void setTablets(String tablets) {
		this.tablets = tablets;
	}


	public String getMovieNmusic() {
		return movieNmusic;
	}


	public void setMovieNmusic(String movieNmusic) {
		this.movieNmusic = movieNmusic;
	}


	public String getVideoGame() {
		return videoGame;
	}


	public void setVideoGame(String videoGame) {
		this.videoGame = videoGame;
	}


	public String getMp3Players() {
		return mp3Players;
	}


	public void setMp3Players(String mp3Players) {
		this.mp3Players = mp3Players;
	}


	public String getAccessories() {
		return accessories;
	}


	public void setAccessories(String accessories) {
		this.accessories = accessories;
	}


	public String getMore() {
		return more;
	}


	public void setMore(String more) {
		this.more = more;
	}


	public String getHome() {
		return home;
	}


	public void setHome(String home) {
		this.home = home;
	}


	public String getProd1Details() {
		return prod1Details;
	}


	public void setProd1Details(String prod1Details) {
		this.prod1Details = prod1Details;
	}


	public String getUpdateCart() {
		return updateCart;
	}


	public void setUpdateCart(String updateCart) {
		this.updateCart = updateCart;
	}


	public String getAddToCart() {
		return addToCart;
	}


	public void setAddToCart(String addToCart) {
		this.addToCart = addToCart;
	}


	public String getDetAddToCart() {
		return detAddToCart;
	}


	public void setDetAddToCart(String detAddToCart) {
		this.detAddToCart = detAddToCart;
	}


	public String getCheckOut() {
		return checkOut;
	}


	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}


	public String getReviewOrder() {
		return reviewOrder;
	}


	public void setReviewOrder(String reviewOrder) {
		this.reviewOrder = reviewOrder;
	}


	public String getSubmitOrder() {
		return submitOrder;
	}


	public void setSubmitOrder(String submitOrder) {
		this.submitOrder = submitOrder;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getCompany() {
		return company;
	}


	public void setCompany(String company) {
		this.company = company;
	}


	public String getAddress1() {
		return address1;
	}


	public void setAddress1(String address1) {
		this.address1 = address1;
	}


	public String getAddress2() {
		return address2;
	}


	public void setAddress2(String address2) {
		this.address2 = address2;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getPostalCode() {
		return postalCode;
	}


	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public String getCardType() {
		return cardType;
	}


	public void setCardType(String cardType) {
		this.cardType = cardType;
	}


	public String getCardNumber() {
		return cardNumber;
	}


	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}


	public String getSecurityNumber() {
		return securityNumber;
	}


	public void setSecurityNumber(String securityNumber) {
		this.securityNumber = securityNumber;
	}


	public String getNameCard() {
		return nameCard;
	}


	public void setNameCard(String nameCard) {
		this.nameCard = nameCard;
	}


	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}

}
