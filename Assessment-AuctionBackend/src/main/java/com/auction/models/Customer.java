package com.auction.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="Customer")
public class Customer {
	
	@Id
	@Column(name = "Customer_ID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer customerId;
	
	@Column(name="Customer_Name",nullable=false)
	@Size(min = 3, max = 100)
	private String customerName;
	
	@Column(name="Customer_Email",nullable=false)
	@Size(min = 3, max = 100)
	private String customerEmail;
	
	@Column(name="Customer_Password",nullable=false)
	@Size(min = 3, max = 100)
	private String customerPassword;
	
	@Column(name="Customer_Address",nullable=false)
	@Size(min = 3, max = 100)
	private String customerAddress;
	
	@Column(name="Customer_PhoneNo",nullable=false)
	private Long customerNumber;

	public Customer() {
		
	}

	public Customer(Integer customerId,@Size(min = 3, max = 100) String customerName, @Size(min = 3, max = 100) String customerEmail,
			@Size(min = 3, max = 100) String customerPassword, @Size(min = 3, max = 100) String customerAddress,
			Long customerNumber) {
		
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerPassword = customerPassword;
		this.customerAddress = customerAddress;
		this.customerNumber = customerNumber;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerPassword() {
		return customerPassword;
	}

	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public Long getCustomerNumber() {
		return customerNumber;
	}

	public void setCustomerNumber(Long customerNumber) {
		this.customerNumber = customerNumber;
	}
	
	
	
}
