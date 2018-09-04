package com.wiltedclover.springapp.rest;

import java.util.List;

import com.wiltedclover.springapp.dao.SearchService;
import com.wiltedclover.springapp.model.ProductDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@RestController
public class ProductSearchController {

	private SearchService searchService;

	@Autowired
	public ProductSearchController(SearchService searchService) {
		this.searchService = searchService;
	}

	@GetMapping("search/products")
	public List<ProductDetail> getProductsForSearch(@RequestParam("term") String term) {
		return searchService.getProductsForTerm(term);
	}

	public SearchService getSearchService() {
		return searchService;
	}

	public void setSearchService(SearchService searchService) {
		this.searchService = searchService;
	}
}
