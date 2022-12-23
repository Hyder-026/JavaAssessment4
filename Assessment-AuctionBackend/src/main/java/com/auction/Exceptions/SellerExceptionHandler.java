package com.auction.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class SellerExceptionHandler extends RuntimeException{


public static final long serialVersionUID = 1L;
	
	public SellerExceptionHandler(String message) {
		super(message);
	}
}
