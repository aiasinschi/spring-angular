package com.wiltedclover.springapp.dao;

import java.util.List;

import com.wiltedclover.springapp.model.ProductDetail;
import org.springframework.stereotype.Repository;

/**
 * TODO: Document me
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@Repository
public interface SearchService {

	List<ProductDetail> getProductsForTerm(String term);
}
