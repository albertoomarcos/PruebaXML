sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
	     metadata : {
	            manifest: "json"
	      },
      onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
         
         // set i18n_es model en la vista
         var i18nModel = new ResourceModel({
        //     bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
        	 bundleName: "i18n.i18n"
          });
         this.getView().setModel(i18nModel, "i18n");
         
      },
      onShowHello : function () {
    	  // leemos el mensaje de i18n_es model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
      },
      onOpenDialog : function () {
			var oView = this.getView();
			
			// create dialog lazily
			if (!this.byId("helloDialog")) {
				
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "pruebaxml.HelloDialog"
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
					alert("Error code x0002",{title: "Alerta"});
				});
			} else {
				this.byId("helloDialog").open();
			}
		}
   });
});

