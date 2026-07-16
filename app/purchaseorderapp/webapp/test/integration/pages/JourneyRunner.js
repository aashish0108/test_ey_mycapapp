sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"purchaseorderapp/test/integration/pages/POsList.gen",
	"purchaseorderapp/test/integration/pages/POsObjectPage.gen",
	"purchaseorderapp/test/integration/pages/PurchaseOrderItemsObjectPage.gen"
], function (JourneyRunner, POsListGenerated, POsObjectPageGenerated, PurchaseOrderItemsObjectPageGenerated) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('purchaseorderapp') + '/test/flp.html#app-preview',
        pages: {
			onThePOsListGenerated: POsListGenerated,
			onThePOsObjectPageGenerated: POsObjectPageGenerated,
			onThePurchaseOrderItemsObjectPageGenerated: PurchaseOrderItemsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

