package com.jostens.jpix.core.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	 @RequestMapping("/test")
	    public ResponseEntity<String> test() {
	        return new ResponseEntity("{success:true}", HttpStatus.OK);
	    }
}
