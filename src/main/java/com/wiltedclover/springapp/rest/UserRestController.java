package com.wiltedclover.springapp.rest;

import com.wiltedclover.springapp.dao.UserMapper;
import com.wiltedclover.springapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@RestController
public class UserRestController {
	private UserMapper userMapper;

	@Autowired
	public UserRestController(UserMapper userMapper) {
		this.userMapper = userMapper;
	}

	@PostMapping("/login")
	public User doLogin(@RequestBody UserForm form) {
		User authenticatedUser = userMapper.doLogin(form.getUser());
		if (authenticatedUser == null) {
			System.out.println("Login failed...");
		}
		return authenticatedUser;
	}

	public void setUserMapper(UserMapper userMapper) {
		this.userMapper = userMapper;
	}
}
