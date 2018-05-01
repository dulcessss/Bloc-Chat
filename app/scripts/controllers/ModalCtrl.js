(function(){
  function ModalCtrl(Room, $uibModalInstance){

    this.createRoom = function() {
      Room.add(this.newRoom);
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
