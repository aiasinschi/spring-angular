package com.wiltedclover.springapp.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.type.BooleanTypeHandler;
import org.apache.ibatis.type.TypeHandler;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.transaction.annotation.EnableTransactionManagement;


/**
 * Configuration class for datasource and MyBatis integration.
 *
 * @author Adrian Iasinschi (aiasinschi@gmail.com)
 */
@Configuration
@EnableTransactionManagement
@MapperScan("com.wiltedclover.springapp.dao")
public class DatabaseConfig {

	private final String jndiName = "jdbc/springapp";

	@Bean(name="dataSource")
	public DataSource dataSource() {
		return new JndiDataSourceLookup().getDataSource(jndiName);
	}

	@Bean
	public DataSourceTransactionManager transactionManager() {
		return new DataSourceTransactionManager(dataSource());
	}

	@Bean
	public SqlSessionFactory sqlSessionFactory() throws Exception {
		SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(dataSource());
		sessionFactory.setTypeAliasesPackage("com.wiltedclover.springapp.model");
		sessionFactory.setTypeHandlers(new TypeHandler[] { new BooleanTypeHandler() });
		return sessionFactory.getObject();
	}
}