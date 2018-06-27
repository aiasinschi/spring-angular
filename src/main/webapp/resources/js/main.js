$(function () {
	"use strict";
	var shippersMap = {
		'FE': 'FedEx',
		'TN': 'TNT',
		'DH': 'DHL'
	};
	var DEFAULT_SHIPPER = 'DH';
	var customerGrid = $("#cust-table");
	customerGrid.jqGrid({
		colModel: [
			{ name: "name", label: "Client", width: 63 },
			{ name: "invoiceDate", label: "Date", width: 95, align: "center", sorttype: "date",
				formatter: "date" },
			{ name: "amount", label: "Amount", width: 75, template: "number" },
			{ name: "tax", label: "Tax", width: 51, template: "number" },
			{ name: "total", label: "Total", width: 61, template: "number" },
			{ name: "closed", label: "Closed", width: 69, template: "booleanCheckbox", firstsortorder: "desc" },
			{ name: "shippedVia", label: "Shipped via", width: 97, align: "center", formatter: "select",
				formatoptions: { value: "FE:FedEx;TN:TNT;DH:DHL", defaultValue: "DH" } }
		],
		data: [
			{ id: "10",  invoiceDate: "2015-10-01", name: "test",   amount: "" },
			{ id: "20",  invoiceDate: "2015-09-01", name: "test2",  amount: "300.00", tax: "20.00", closed: false, shippedVia: "FE", total: "320.00" },
			{ id: "30",  invoiceDate: "2015-09-01", name: "test3",  amount: "400.00", tax: "30.00", closed: false, shippedVia: "FE", total: "430.00" },
			{ id: "40",  invoiceDate: "2015-10-04", name: "test4",  amount: "200.00", tax: "10.00", closed: true,  shippedVia: "TN", total: "210.00" },
			{ id: "50",  invoiceDate: "2015-10-31", name: "test5",  amount: "300.00", tax: "20.00", closed: false, shippedVia: "FE", total: "320.00" },
			{ id: "60",  invoiceDate: "2015-09-06", name: "test6",  amount: "400.00", tax: "30.00", closed: false, shippedVia: "FE", total: "430.00" },
			{ id: "70",  invoiceDate: "2015-10-04", name: "test7",  amount: "200.00", tax: "10.00", closed: true,  shippedVia: "TN", total: "210.00" },
			{ id: "80",  invoiceDate: "2015-10-03", name: "test8",  amount: "300.00", tax: "20.00", closed: false, shippedVia: "FE", total: "320.00" },
			{ id: "90",  invoiceDate: "2015-09-01", name: "test9",  amount: "400.00", tax: "30.00", closed: false, shippedVia: "TN", total: "430.00" },
			{ id: "100", invoiceDate: "2015-09-08", name: "test10", amount: "500.00", tax: "30.00", closed: true,  shippedVia: "TN", total: "530.00" },
			{ id: "110", invoiceDate: "2015-09-08", name: "test11", amount: "500.00", tax: "30.00", closed: false, shippedVia: "FE", total: "530.00" },
			{ id: "120", invoiceDate: "2015-09-10", name: "test12", amount: "500.00", tax: "30.00", closed: false, shippedVia: "FE", total: "530.00" }
		],
		guiStyle: "bootstrap",
		iconSet: "fontAwesome",
		idPrefix: "gb1_",
		rownumbers: true,
		sortname: "invoiceDate",
		sortorder: "desc",
		caption: "The grid, which uses predefined formatters and templates",
		beforeSelectRow: function(rowId, evt) {
			var currentRowData = customerGrid.jqGrid('getRowData', rowId);
			$('#detail-name').html(currentRowData.name);
			$('#detail-amount').html(currentRowData.amount);
			$('#detail-tax').html(currentRowData.tax);
			$('#detail-total').html(currentRowData.total);
			$('#detail-shipped').html(shippersMap[currentRowData.shippedVia ? currentRowData.shippedVia : DEFAULT_SHIPPER]);
			$('#detail-date').html(currentRowData.invoiceDate);
			$('#detail-closed').html(currentRowData.closed ? "Yes" : "No");
			$('#detail-dialog').dialog({
				title: 'Customer details',
				position: {my: 'left top', at: 'right top', of: evt.target}
			});
			return true;
		}
	});
	$('#refresh-btn').button().click( function() {
		console.log('Clicked the refresh button!!!');
		$.ajax({
			url: 'customers',
			success: function (result, status, xhr){
				customerGrid.jqGrid('clearGridData');
				customerGrid.jqGrid('setGridParam', {data: result}).trigger('reloadGrid');
				console.log(result);
			},
			error: function(xhr,status,error) {
				console.log(error);
			}
		});
	});

});