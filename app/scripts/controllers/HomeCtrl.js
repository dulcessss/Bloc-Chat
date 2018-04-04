(function(){
  function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;


  this.open = function(){
    var modalInstance = $uibModal.open({
      animation:true,
      templateUrl: '/templates/modal.html',
      controller: 'ModalCtrl as modal',
      windowClass: 'modal-window'
    });

  
  };

}
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
