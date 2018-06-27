package com.wiltedclover.springapp.dao;

import java.util.List;

import com.wiltedclover.springapp.model.Customer;
import org.springframework.stereotype.Repository;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@Repository
public interface CustomerMapper {

	List<Customer> getAllCustomers();

}
