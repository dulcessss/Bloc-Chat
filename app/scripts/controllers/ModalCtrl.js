(function(){
  function ModalCtrl(Room, $uibModalInstance, $cookies){

    this.createRoom = function() {
      Room.add(this.newRoom);
      $uibModalInstance.close();
    };

    this.cancel = function(){
      $uibModalInstance.dismiss();
    };

    this.createUser = function() {
      $cookies.put('blocChatCurrentUser', this.username);
      $uibModalInstance.close();
    }

  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);

})();
