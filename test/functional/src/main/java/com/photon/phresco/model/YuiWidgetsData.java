//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vhudson-jaxb-ri-2.2-146 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2013.05.21 at 02:37:56 PM IST 
//


package com.photon.phresco.model;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="YuiWidget" maxOccurs="unbounded" minOccurs="0">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="registration">
 *                     &lt;complexType>
 *                       &lt;complexContent>
 *                         &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                           &lt;sequence>
 *                             &lt;element name="firstname" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="lastname" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="password" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="phonenumber" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *                             &lt;element name="reg_text-msg" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                           &lt;/sequence>
 *                         &lt;/restriction>
 *                       &lt;/complexContent>
 *                     &lt;/complexType>
 *                   &lt;/element>
 *                   &lt;element name="billingInfoPage">
 *                     &lt;complexType>
 *                       &lt;complexContent>
 *                         &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                           &lt;sequence>
 *                             &lt;element name="billInfoCommentsValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoPhoneNumberValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoStateValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoPostCodeValue" type="{http://www.w3.org/2001/XMLSchema}short"/>
 *                             &lt;element name="billInfoAddress2Value" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoCityValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoCompanyValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoAddress1Value" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoLastNameValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoFirstNameValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="billInfoEmailValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                           &lt;/sequence>
 *                         &lt;/restriction>
 *                       &lt;/complexContent>
 *                     &lt;/complexType>
 *                   &lt;/element>
 *                   &lt;element name="cardInfoPage">
 *                     &lt;complexType>
 *                       &lt;complexContent>
 *                         &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                           &lt;sequence>
 *                             &lt;element name="cardInfoNameOnCardValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="cardInfoCardNumberValue" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *                             &lt;element name="cardInfoSecurityNumberValue" type="{http://www.w3.org/2001/XMLSchema}short"/>
 *                           &lt;/sequence>
 *                         &lt;/restriction>
 *                       &lt;/complexContent>
 *                     &lt;/complexType>
 *                   &lt;/element>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "yuiWidget"
})
@XmlRootElement(name = "YuiWidgetsData")
public class YuiWidgetsData {

    @XmlElement(name = "YuiWidget")
    protected List<YuiWidgetsData.YuiWidget> yuiWidget;

    /**
     * Gets the value of the yuiWidget property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the yuiWidget property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getYuiWidget().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link YuiWidgetsData.YuiWidget }
     * 
     * 
     */
    public List<YuiWidgetsData.YuiWidget> getYuiWidget() {
        if (yuiWidget == null) {
            yuiWidget = new ArrayList<YuiWidgetsData.YuiWidget>();
        }
        return this.yuiWidget;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="registration">
     *           &lt;complexType>
     *             &lt;complexContent>
     *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *                 &lt;sequence>
     *                   &lt;element name="firstname" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="lastname" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="password" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="phonenumber" type="{http://www.w3.org/2001/XMLSchema}long"/>
     *                   &lt;element name="reg_text-msg" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                 &lt;/sequence>
     *               &lt;/restriction>
     *             &lt;/complexContent>
     *           &lt;/complexType>
     *         &lt;/element>
     *         &lt;element name="billingInfoPage">
     *           &lt;complexType>
     *             &lt;complexContent>
     *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *                 &lt;sequence>
     *                   &lt;element name="billInfoCommentsValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoPhoneNumberValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoStateValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoPostCodeValue" type="{http://www.w3.org/2001/XMLSchema}short"/>
     *                   &lt;element name="billInfoAddress2Value" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoCityValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoCompanyValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoAddress1Value" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoLastNameValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoFirstNameValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="billInfoEmailValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                 &lt;/sequence>
     *               &lt;/restriction>
     *             &lt;/complexContent>
     *           &lt;/complexType>
     *         &lt;/element>
     *         &lt;element name="cardInfoPage">
     *           &lt;complexType>
     *             &lt;complexContent>
     *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *                 &lt;sequence>
     *                   &lt;element name="cardInfoNameOnCardValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="cardInfoCardNumberValue" type="{http://www.w3.org/2001/XMLSchema}int"/>
     *                   &lt;element name="cardInfoSecurityNumberValue" type="{http://www.w3.org/2001/XMLSchema}short"/>
     *                 &lt;/sequence>
     *               &lt;/restriction>
     *             &lt;/complexContent>
     *           &lt;/complexType>
     *         &lt;/element>
     *       &lt;/sequence>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "registration",
        "billingInfoPage",
        "cardInfoPage"
    })
    public static class YuiWidget {

        @XmlElement(required = true)
        protected YuiWidgetsData.YuiWidget.Registration registration;
        @XmlElement(required = true)
        protected YuiWidgetsData.YuiWidget.BillingInfoPage billingInfoPage;
        @XmlElement(required = true)
        protected YuiWidgetsData.YuiWidget.CardInfoPage cardInfoPage;

        /**
         * Gets the value of the registration property.
         * 
         * @return
         *     possible object is
         *     {@link YuiWidgetsData.YuiWidget.Registration }
         *     
         */
        public YuiWidgetsData.YuiWidget.Registration getRegistration() {
            return registration;
        }

        /**
         * Sets the value of the registration property.
         * 
         * @param value
         *     allowed object is
         *     {@link YuiWidgetsData.YuiWidget.Registration }
         *     
         */
        public void setRegistration(YuiWidgetsData.YuiWidget.Registration value) {
            this.registration = value;
        }

        /**
         * Gets the value of the billingInfoPage property.
         * 
         * @return
         *     possible object is
         *     {@link YuiWidgetsData.YuiWidget.BillingInfoPage }
         *     
         */
        public YuiWidgetsData.YuiWidget.BillingInfoPage getBillingInfoPage() {
            return billingInfoPage;
        }

        /**
         * Sets the value of the billingInfoPage property.
         * 
         * @param value
         *     allowed object is
         *     {@link YuiWidgetsData.YuiWidget.BillingInfoPage }
         *     
         */
        public void setBillingInfoPage(YuiWidgetsData.YuiWidget.BillingInfoPage value) {
            this.billingInfoPage = value;
        }

        /**
         * Gets the value of the cardInfoPage property.
         * 
         * @return
         *     possible object is
         *     {@link YuiWidgetsData.YuiWidget.CardInfoPage }
         *     
         */
        public YuiWidgetsData.YuiWidget.CardInfoPage getCardInfoPage() {
            return cardInfoPage;
        }

        /**
         * Sets the value of the cardInfoPage property.
         * 
         * @param value
         *     allowed object is
         *     {@link YuiWidgetsData.YuiWidget.CardInfoPage }
         *     
         */
        public void setCardInfoPage(YuiWidgetsData.YuiWidget.CardInfoPage value) {
            this.cardInfoPage = value;
        }


        /**
         * <p>Java class for anonymous complex type.
         * 
         * <p>The following schema fragment specifies the expected content contained within this class.
         * 
         * <pre>
         * &lt;complexType>
         *   &lt;complexContent>
         *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
         *       &lt;sequence>
         *         &lt;element name="billInfoCommentsValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoPhoneNumberValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoStateValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoPostCodeValue" type="{http://www.w3.org/2001/XMLSchema}short"/>
         *         &lt;element name="billInfoAddress2Value" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoCityValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoCompanyValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoAddress1Value" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoLastNameValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoFirstNameValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="billInfoEmailValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *       &lt;/sequence>
         *     &lt;/restriction>
         *   &lt;/complexContent>
         * &lt;/complexType>
         * </pre>
         * 
         * 
         */
        @XmlAccessorType(XmlAccessType.FIELD)
        @XmlType(name = "", propOrder = {
            "billInfoCommentsValue",
            "billInfoPhoneNumberValue",
            "billInfoStateValue",
            "billInfoPostCodeValue",
            "billInfoAddress2Value",
            "billInfoCityValue",
            "billInfoCompanyValue",
            "billInfoAddress1Value",
            "billInfoLastNameValue",
            "billInfoFirstNameValue",
            "billInfoEmailValue"
        })
        public static class BillingInfoPage {

            @XmlElement(required = true)
            protected String billInfoCommentsValue;
            @XmlElement(required = true)
            protected String billInfoPhoneNumberValue;
            @XmlElement(required = true)
            protected String billInfoStateValue;
            protected String billInfoPostCodeValue;
            @XmlElement(required = true)
            protected String billInfoAddress2Value;
            @XmlElement(required = true)
            protected String billInfoCityValue;
            @XmlElement(required = true)
            protected String billInfoCompanyValue;
            @XmlElement(required = true)
            protected String billInfoAddress1Value;
            @XmlElement(required = true)
            protected String billInfoLastNameValue;
            @XmlElement(required = true)
            protected String billInfoFirstNameValue;
            @XmlElement(required = true)
            protected String billInfoEmailValue;

            /**
             * Gets the value of the billInfoCommentsValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoCommentsValue() {
                return billInfoCommentsValue;
            }

            /**
             * Sets the value of the billInfoCommentsValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoCommentsValue(String value) {
                this.billInfoCommentsValue = value;
            }

            /**
             * Gets the value of the billInfoPhoneNumberValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoPhoneNumberValue() {
                return billInfoPhoneNumberValue;
            }

            /**
             * Sets the value of the billInfoPhoneNumberValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoPhoneNumberValue(String value) {
                this.billInfoPhoneNumberValue = value;
            }

            /**
             * Gets the value of the billInfoStateValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoStateValue() {
                return billInfoStateValue;
            }

            /**
             * Sets the value of the billInfoStateValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoStateValue(String value) {
                this.billInfoStateValue = value;
            }

            /**
             * Gets the value of the billInfoPostCodeValue property.
             * 
             */
            public String getBillInfoPostCodeValue() {
                return billInfoPostCodeValue;
            }

            /**
             * Sets the value of the billInfoPostCodeValue property.
             * 
             */
            public void setBillInfoPostCodeValue(String value) {
                this.billInfoPostCodeValue = value;
            }

            /**
             * Gets the value of the billInfoAddress2Value property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoAddress2Value() {
                return billInfoAddress2Value;
            }

            /**
             * Sets the value of the billInfoAddress2Value property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoAddress2Value(String value) {
                this.billInfoAddress2Value = value;
            }

            /**
             * Gets the value of the billInfoCityValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoCityValue() {
                return billInfoCityValue;
            }

            /**
             * Sets the value of the billInfoCityValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoCityValue(String value) {
                this.billInfoCityValue = value;
            }

            /**
             * Gets the value of the billInfoCompanyValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoCompanyValue() {
                return billInfoCompanyValue;
            }

            /**
             * Sets the value of the billInfoCompanyValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoCompanyValue(String value) {
                this.billInfoCompanyValue = value;
            }

            /**
             * Gets the value of the billInfoAddress1Value property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoAddress1Value() {
                return billInfoAddress1Value;
            }

            /**
             * Sets the value of the billInfoAddress1Value property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoAddress1Value(String value) {
                this.billInfoAddress1Value = value;
            }

            /**
             * Gets the value of the billInfoLastNameValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoLastNameValue() {
                return billInfoLastNameValue;
            }

            /**
             * Sets the value of the billInfoLastNameValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoLastNameValue(String value) {
                this.billInfoLastNameValue = value;
            }

            /**
             * Gets the value of the billInfoFirstNameValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoFirstNameValue() {
                return billInfoFirstNameValue;
            }

            /**
             * Sets the value of the billInfoFirstNameValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoFirstNameValue(String value) {
                this.billInfoFirstNameValue = value;
            }

            /**
             * Gets the value of the billInfoEmailValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillInfoEmailValue() {
                return billInfoEmailValue;
            }

            /**
             * Sets the value of the billInfoEmailValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillInfoEmailValue(String value) {
                this.billInfoEmailValue = value;
            }

        }


        /**
         * <p>Java class for anonymous complex type.
         * 
         * <p>The following schema fragment specifies the expected content contained within this class.
         * 
         * <pre>
         * &lt;complexType>
         *   &lt;complexContent>
         *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
         *       &lt;sequence>
         *         &lt;element name="cardInfoNameOnCardValue" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="cardInfoCardNumberValue" type="{http://www.w3.org/2001/XMLSchema}int"/>
         *         &lt;element name="cardInfoSecurityNumberValue" type="{http://www.w3.org/2001/XMLSchema}short"/>
         *       &lt;/sequence>
         *     &lt;/restriction>
         *   &lt;/complexContent>
         * &lt;/complexType>
         * </pre>
         * 
         * 
         */
        @XmlAccessorType(XmlAccessType.FIELD)
        @XmlType(name = "", propOrder = {
            "cardInfoNameOnCardValue",
            "cardInfoCardNumberValue",
            "cardInfoSecurityNumberValue"
        })
        public static class CardInfoPage {

            @XmlElement(required = true)
            protected String cardInfoNameOnCardValue;
            protected String cardInfoCardNumberValue;
            protected String cardInfoSecurityNumberValue;

            /**
             * Gets the value of the cardInfoNameOnCardValue property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getCardInfoNameOnCardValue() {
                return cardInfoNameOnCardValue;
            }

            /**
             * Sets the value of the cardInfoNameOnCardValue property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setCardInfoNameOnCardValue(String value) {
                this.cardInfoNameOnCardValue = value;
            }

            /**
             * Gets the value of the cardInfoCardNumberValue property.
             * 
             */
            public String getCardInfoCardNumberValue() {
                return cardInfoCardNumberValue;
            }

            /**
             * Sets the value of the cardInfoCardNumberValue property.
             * 
             */
            public void setCardInfoCardNumberValue(String value) {
                this.cardInfoCardNumberValue = value;
            }

            /**
             * Gets the value of the cardInfoSecurityNumberValue property.
             * 
             */
            public String getCardInfoSecurityNumberValue() {
                return cardInfoSecurityNumberValue;
            }

            /**
             * Sets the value of the cardInfoSecurityNumberValue property.
             * 
             */
            public void setCardInfoSecurityNumberValue(String value) {
                this.cardInfoSecurityNumberValue = value;
            }

        }


        /**
         * <p>Java class for anonymous complex type.
         * 
         * <p>The following schema fragment specifies the expected content contained within this class.
         * 
         * <pre>
         * &lt;complexType>
         *   &lt;complexContent>
         *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
         *       &lt;sequence>
         *         &lt;element name="firstname" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="lastname" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="password" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="phonenumber" type="{http://www.w3.org/2001/XMLSchema}long"/>
         *         &lt;element name="reg_text-msg" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *       &lt;/sequence>
         *     &lt;/restriction>
         *   &lt;/complexContent>
         * &lt;/complexType>
         * </pre>
         * 
         * 
         */
        @XmlAccessorType(XmlAccessType.FIELD)
        @XmlType(name = "", propOrder = {
            "firstname",
            "lastname",
            "email",
            "password",
            "phonenumber",
            "regTextMsg"
        })
        public static class Registration {

            @XmlElement(required = true)
            protected String firstname;
            @XmlElement(required = true)
            protected String lastname;
            @XmlElement(required = true)
            protected String email;
            @XmlElement(required = true)
            protected String password;
            protected String phonenumber;
            @XmlElement(name = "reg_text-msg", required = true)
            protected String regTextMsg;

            /**
             * Gets the value of the firstname property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getFirstname() {
                return firstname;
            }

            /**
             * Sets the value of the firstname property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setFirstname(String value) {
                this.firstname = value;
            }

            /**
             * Gets the value of the lastname property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getLastname() {
                return lastname;
            }

            /**
             * Sets the value of the lastname property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setLastname(String value) {
                this.lastname = value;
            }

            /**
             * Gets the value of the email property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getEmail() {
                return email;
            }

            /**
             * Sets the value of the email property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setEmail(String value) {
                this.email = value;
            }

            /**
             * Gets the value of the password property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getPassword() {
                return password;
            }

            /**
             * Sets the value of the password property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setPassword(String value) {
                this.password = value;
            }

            /**
             * Gets the value of the phonenumber property.
             * 
             */
            public String getPhonenumber() {
                return phonenumber;
            }

            /**
             * Sets the value of the phonenumber property.
             * 
             */
            public void setPhonenumber(String value) {
                this.phonenumber = value;
            }

            /**
             * Gets the value of the regTextMsg property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getRegTextMsg() {
                return regTextMsg;
            }

            /**
             * Sets the value of the regTextMsg property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setRegTextMsg(String value) {
                this.regTextMsg = value;
            }

        }

    }

}
