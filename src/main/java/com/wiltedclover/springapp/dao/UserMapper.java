package com.wiltedclover.springapp.dao;

import com.wiltedclover.springapp.model.User;
import org.springframework.stereotype.Repository;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@Repository
public interface UserMapper {

	User doLogin(User user);
}
