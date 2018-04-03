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

    modalInstance.result.then(function(name){
      Room.add(name);
    });
  };

}
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
