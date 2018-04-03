(function(){
  function ModalCtrl(Room, $uibModalInstance){

    this.createRoom = function(addName) {
      Room.createRoom(addName);
      $uibModalInstance.close();
    };

    this.cancel = function(){
      $uibModalInstance.dismiss();
    };

  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);

})();
