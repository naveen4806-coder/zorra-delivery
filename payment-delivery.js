(function(){
 const functions=firebase.app().functions('asia-south1');let settling=false;
 finalizeConfirmedDelivery=async function(){if(settling||_deliveryFinalized||!_activeOrder||!_partner)return;settling=true;try{await functions.httpsCallable('finalizeZorraDelivery')({orderId:_activeOrder.id});_deliveryFinalized=true;updatePartnerPanels();}catch(e){toast('Delivery confirmed; wallet settlement is pending. '+e.message,'err');throw e;}finally{settling=false;}};
 const original=listenForShopHandover;listenForShopHandover=function(id){original(id);};
})();
