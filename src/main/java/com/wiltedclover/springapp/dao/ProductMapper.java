package com.wiltedclover.springapp.dao;

import java.util.List;

import com.wiltedclover.springapp.model.Product;
import org.springframework.stereotype.Repository;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@Repository
public interface ProductMapper {

	List<Product> getAllProducts();

	void addProduct(Product product);

	void removeProduct(Long id);
}
