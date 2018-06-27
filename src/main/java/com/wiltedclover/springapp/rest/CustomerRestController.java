package com.wiltedclover.springapp.rest;

import java.util.List;

import com.wiltedclover.springapp.dao.CustomerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@RestController
public class CustomerRestController {

	private CustomerMapper customerMapper;

	@Autowired
	public CustomerRestController(CustomerMapper customerMapper) {
		this.customerMapper = customerMapper;
	}

	@GetMapping("/customers")
	public List getCustomers() {
		return customerMapper.getAllCustomers();
	}

	public void setCustomerMapper(CustomerMapper customerMapper) {
		this.customerMapper = customerMapper;
	}
}
