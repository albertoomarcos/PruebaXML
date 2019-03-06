sap.ui.controller("pruebaxml.InflateJson", {


	onInit: function() {
		var model1 = new sap.ui.model.json.JSONModel();
		model1.loadData("resources/json/Invoices.json");
		sap.ui.getCore().setModel(model1);
		
		var toList = this.getView().byId("list");
		
		toList.bindItems({
			path: "/Invoices",
			template: new sap.m.ObjectListItem({
				title: "{ProductName}",
				firstStatus: new sap.m.ObjectStatus({
					text: "{invoice>Quantity} x {invoice>ProductName}"
				})
			})
		});
	},
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pruebaxml.InflateJson
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pruebaxml.InflateJson
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pruebaxml.InflateJson
*/
//	onExit: function() {
//
//	}

});