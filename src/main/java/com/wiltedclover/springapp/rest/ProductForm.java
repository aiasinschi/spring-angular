package com.wiltedclover.springapp.rest;

import com.wiltedclover.springapp.model.Product;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
public class ProductForm {

	private Product product;

	private Long id;

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
