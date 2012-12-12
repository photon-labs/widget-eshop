package com.photon.phresco.uiconstants;


import java.lang.reflect.Field;

public class UIConstants {
	

	private ReadXMLFile readXml;
	
	//registration
	public String REG_LINK="reg_link";
	public String REG_FIRSTNAME ="regfirstname";
	public String REG_LASTNAME="reglastname";
	public String REG_EMAIL="regemail";
	public String REG_PASSWORD="regpassword";
	public String REG_PHONENUMBER="regphonenumber";
	public String REG_SUBMIT_BUTTON="regsubmitbutton";
	
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
//	public String PROD1_ACCESSORIES="prod1Accessories";
	public String UPDATECART="updateCart";
	public String ADDTOCART="addToCart"; 
	public String DET_ADDTOCART="prod1DetailAddToCart";
	public String CHECKOUT="checkout";
	public String REVIEWORDER="reviewOrder";
	public String SUBMITORDER="submitOrder";
	public String EMAIL="billInfoEmail";
	public String FIRSTNAME="billInfoFirstName";
	public String LASTNAME="billInfoLastName";
	public String COMPANY="billInfoCompany";
	public String ADDRESS1="billInfoAddress1";
	public String ADDRESS2="billInfoAddress2";
	public String CITY="billInfoCity";
	public String STATE="billInfoState";
	public String POSTALCODE="billInfoPostCode";
	public String PHONENUMBER="billInfoPhoneNumber";
	public String CARDTYPE="cardInfoCardType";
	public String CARDNUMBER="cardInfoCardNumber";
	public String SECURITYNUMBER="cardInfoSecurityNumber";
	public String NAMEONCARD="cardInfoNameOnCard";
	public String COMMENTS="billInfoComments";
	
	public UIConstants() {
		try {
			readXml = new ReadXMLFile();
			readXml.loadUIConstants();
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
