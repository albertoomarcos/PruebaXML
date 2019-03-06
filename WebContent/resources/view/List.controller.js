sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("List.controller.table"),
	{
		onInit: function()
		{
			//var oTable = this.getView().byId("abc");
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("Invoices.json");
			//oTable.setModel(oModel);
			//var m = new sap.ui.model.json.JSONModel("resources/json/Invoices.json");
			sap.ui.getCore().setModel(oModel);
		}
	}
});