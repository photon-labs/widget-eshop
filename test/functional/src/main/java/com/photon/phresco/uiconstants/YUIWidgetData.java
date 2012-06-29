package com.photon.phresco.uiconstants;

import java.lang.reflect.Field;

public class YUIWidgetData {

	private ReadXMLFile readXml;

	
	public String COMMENTS_VALUE="billInfoCommentsValue";
	public String EMAIL_VALUE="billInfoEmailValue";
	public String NAMEONCARD_VALUE="cardInfoNameOnCardValue";
	public String SECURITYNUMBER_VALUE="cardInfoSecurityNumberValue";
	public String CARDNUMBER_VALUE="cardInfoCardNumberValue";
	public String PHONENUMBER_VALUE="billInfoPhoneNumberValue";
	public String POSTALCODE_VALUE="billInfoPostCodeValue";
	public String STATE_VALUE="billInfoStateValue";
	public String CITY_VALUE="billInfoCityValue";
	public String ADDRESS2_VALUE="billInfoAddress2Value";
	public String ADDRESS1_VALUE="billInfoAddress1Value";
	public String COMPANY_VALUE="billInfoCompanyValue";
	public String LASTNAME_VALUE="billInfoLastNameValue";
	public String FIRSTNAME_VALUE="billInfoFirstNameValue";

	
	public YUIWidgetData() {
		try {
			readXml = new ReadXMLFile();
			readXml.loadYuiWidgetData();
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
