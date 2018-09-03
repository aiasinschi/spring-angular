package com.wiltedclover.springapp.rest;

import java.util.List;

import com.wiltedclover.springapp.dao.ProductMapper;
import com.wiltedclover.springapp.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@RestController
public class ProductRestController {

	private ProductMapper productMapper;

	@Autowired
	public ProductRestController(ProductMapper productMapper) {
		this.productMapper = productMapper;
	}

	@GetMapping("/products")
	public List getProducts() {
		return productMapper.getAllProducts();
	}

	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody ProductForm productForm) {
		Product product = productForm.getProduct();
		try {
			productMapper.addProduct(product);
		} catch (Exception ex) {
			System.out.println(ex.getStackTrace());
		}
		return product;
	}

	public ProductMapper getProductMapper() {
		return productMapper;
	}

	public void setProductMapper(ProductMapper productMapper) {
		this.productMapper = productMapper;
	}
}
